#!/bin/bash

#compile app with grunt
grunt dist
#commit changes and push to master
git add -A
git commit -m "compile app"
git push origin master
#change branch
git checkout prod
#copy files from master branch
git show master:app/dist/app.min.js > app/js/app.min.js
git show master:app/dist/angular-modules.min.js > app/js/angular-modules.min.js
git show master:app/dist/vendor.min.js > app/js/vendor.min.js
git show master:app/dist/app-min.css > app/css/app-min.css
git show master:server.js > server.js
#copy entire partial and font folders folder
git checkout master -- app/partials app/font app/img
git add app/partials/ app/font app/img
#commit changes on production branch
git add -A
git commit -m "compile, ready to deploy"
git push origin prod
#return on master
git checkout master