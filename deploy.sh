rm -rf dist &&
yarn build &&
cd dist && 
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:songenen/v3ui-website.git &&
git push -f -u origin master &&
cd -
echo https://songen.cc/V3UI-website/#/