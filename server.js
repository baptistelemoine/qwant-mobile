
var express = require('express');
var path = require('path');
var app = module.exports = express();
var http = require('http');
var url = require('url');
var async = require('async');

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

var port = process.env.PORT || 3000;
app.listen(port);

var searchRequest = function (request, source, callback){
	
	return (function(){
		
		var uri = url.format({
			protocol:'http',
			host:'www.qwant.com',
			pathname:['search', 'fr_FR'].join('/'),
			query:{'q':request.query.q, 'source':source, 'offset':request.query.offset || 0}
		});

		http.get(uri, function (res){
			var output = '';
			res.on('data', function (data){
				output += data;
			});
			res.on('end', function(){
				callback(null, JSON.parse(output));
			});
		});

	})();
};

app.get('/search', function (request, response){
	
	response.type('application/json; charset=utf-8');

	if(request.query.source){
		searchRequest(request, request.query.source, function (error, data){
			response.send(data);
		});
	}
	else {
		searchRequest(request, "all", function (error, data){
			response.send(data);
		});

		/*async.parallel([
			function (cb){
				searchRequest(request, 'web', cb);
			},
			function (cb){
				searchRequest(request, 'news', cb);
			},
			function (cb){
				searchRequest(request, 'social', cb);
			}
			], function (err, result){
				response.send(result);
		});*/
	}	
});
