The purpose of this project is to demonstrate an easy way to create applications that access FamilySearch
using the [FamilySearch javascript SDK](https://github.com/rootsdev/familysearch-javascript-sdk).

It demonstrates signing in to the FamilySearch sandbox 
(requires a sandbox account),
getting a list of your ancestors, 
viewing photos that have been uploaded, 
and uploading new photos.

This application makes use of the following technologies:

* npm (but not node)
* AngularJS
* Karma
* Grunt
* yeoman & generator-angular

To use it, you need to

* install npm
* install karma, bower, and grunt: `npm -g install karma bower grunt-cli`
* to use yeoman and generator-angular to generate scaffolding (optional): `npm -g install yo generator-angular`
* clone this repository and cd into the directory
* install development dependencies: `npm install`
* install front-end dependencies: `bower install`
* run unit tests to verify everything went smoothly: `grunt test`
* launch the application: `grunt serve`
