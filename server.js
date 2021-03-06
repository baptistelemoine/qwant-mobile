
var express = require('express');
var path = require('path');
var app = module.exports = express();
var http = require('http');
var url = require('url');
var async = require('async');
var _ = require('underscore');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
};

app.configure(function () {
	app.use(allowCrossDomain);
    app.use(express.logger('dev'));
    app.use(express.compress());
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'app')));
});

app.listen(process.env.PORT || 3000);

var searchRequest = function (request, source, callback){
	
	return (function(){

		var perSource = Math.floor(request.query.size / request.query.source.split(',').length);
		var n = perSource * request.query.page;
		var startIndex = n % 10;
		var offset = Math.ceil(n / 10)*10;

		if(startIndex !== 0) offset-=10;

		var uri = url.format({
			protocol:'http',
			host:'www.qwant.com',
			// pathname:['search', 'fr_FR'].join('/'),
			pathname:['search', source].join('/'),
			// query:{'q':request.query.q, 'source':source, 'offset':offset}
			query:{'q':request.query.q, 'offset':offset}
		});
		console.log(uri)
		http.get(uri, function (res){
			var output = '';
			res.on('data', function (data){
				output += data;
			});
			res.on('end', function(){
				
				if(source === 'all') return callback(null, JSON.parse(output));
				
				var result = JSON.parse(output);
				result[source] = result.result.items.slice(startIndex, perSource+startIndex);
				_.map(result[source], function (value){
					value.s = source;
					return value;
				});

				callback(null, _.compact(_.pick(result, source)));
			});
		});

	})();
};

app.get('/search', function (request, response){
	
	response.type('application/json; charset=utf-8');

	var sources = request.query.source.split(',');
	var requests = [];
	var req = function (source){
		return function (cb){
			searchRequest(request, source, cb);
		};
	};

	for (var i = 0; i < sources.length; i++) {
		requests.push(req(sources[i]));
	}

	if(request.query.source && request.query.source !== 'all'){
		async.parallel(requests, function (error, data){
			var d = _.flatten(data);
			var items = _.shuffle(d);
			response.send({'items':items});
		});
	}
	else {
		searchRequest(request, "all", function (error, data){
			// response.send({'items':data.items.slice(0, request.query.size)});
			response.send(data);
		});
	}
});
