!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd build

git init
git checkout -b main
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:kaiomarxdev/mysite.git main:gh-pages

cd -