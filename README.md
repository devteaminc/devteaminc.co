# DevTeamInc.co

This is the source for our website on http://devteaminc.co.

## Installation Dependencies
*(make sure Node is installed first)*

* [Node.js](http://nodejs.org/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## Setting Up

1. Clone this repo `git clone https://github.com/devteaminc/devteaminc.co.git DevTeamInc.co`
2. Install Node.js modules `npm install`
3. Install Bower dependencies `bower install`

##  Working

1. Run Gulp.js file watcher task `gulp`
2. Work on files in the development directory. Sass changes will be automatically compiled to CSS

If you want to add in any additional JavaScript files to the project, add them into the `<!-- build:js scripts/scripts.js -->` block in `index.html`

## Pushing Changes to GitHub

Commit changes to files often and try give as succinct a commit message as possible.

Unless you're working on a fresh copy cloned from GitHub, make sure you do a `git pull` before pushing any changes to GitHub

1. Add modified files to the commit (if using the command line: `git add NAMEOF.FILE`)
2. Make your commit (if using the command line: `git commit -m "Your commit message here"`)
3. Push your commits to GitHub (if using the command line: `git push origin master`)

## Deployment

1. Create a build with Gulp.js: `gulp build`
2. Push changes to GitHub (see above instructions)
3. Subtree Push to deploy: `git subtree push --prefix build origin build`
