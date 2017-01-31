/**
 * Created by ziyad on 2/27/2016.
 */
var app = angular.module('userModule',[]);
app.controller('userController',function() {

    var user = [
        {
            name: 'Ziyad',
            image: 'images/1.jpg',
            description: 'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified: 'certified',
            tag1: 'HTML5',
            tag2: 'Angular',
            tag3: 'Node',
            tag4: 'Mongo',
            tag5: 'CSS3',
            tag6: '',
            tag7: '',
            tag8: '',
            tag9: '',
            parent: 'true'
        }];

    this.user = user;
});
