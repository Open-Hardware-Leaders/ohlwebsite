#!/usr/bin/env sh

# abort on errors
set -e

# load .env
eval "$(cat .env <(echo) <(declare -x))"

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Open-Hardware-Leaders/ohlwebsite.git master:gh-pages

cd -

git push origin