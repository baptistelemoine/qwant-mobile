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
git show master:app/dist/app-min.css > app/css/app-min.css
#commit changes on production branch
git add -A
git commit -m "compile, ready to deploy"
git push origin prod
#return on master
git checkout master