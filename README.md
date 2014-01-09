The purpose of this project is to demonstrate an easy way to create applications that access FamilySearch
using the [FamilySearch javascript SDK](https://github.com/rootsdev/familysearch-javascript-sdk).

Once it is complete, you will be able to sign in to the FamilySearch sandbox (requires a sandbox account),
get a list of your ancestors, view photos that have been uploaded to your ancestors, and upload new photos.

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
