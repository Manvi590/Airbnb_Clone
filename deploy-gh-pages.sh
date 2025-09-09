#!/bin/bash
# Deploy the Vite build to the gh-pages branch
git init
git checkout --orphan gh-pages
git --work-tree dist add --all
git --work-tree dist commit -m 'deploy: github pages'
git push origin gh-pages --force
git checkout -
git branch -D gh-pages
echo 'Deployed to gh-pages branch.'
