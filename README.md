# DevTeamInc.co

This is the source for our website on http://devteaminc.co.

## Installation dependencies
*(make sure Node is installed first)*

* [Node.js](http://nodejs.org/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## Setting up

1. Clone this repo `git clone https://github.com/devteaminc/devteaminc.co.git DevTeamInc.co`
2. Install Node.js modules `npm install`
3. Install Bower dependencies `bower install`

##  Working

1. Run Gulp.js file watcher task `gulp`
2. Work on files in the development directory. Sass changes will be automatically compiled to CSS

If you want to add in any additional JavaScript files to the project, add them into the `<!-- build:js scripts/scripts.js -->` block in `index.html`

## Deployment


1. Commit and push local changes to Github
2. Create a build with Gulp.js: `gulp build`
2. Subtree Push to deploy: `git subtree push —prefix build origin build`
