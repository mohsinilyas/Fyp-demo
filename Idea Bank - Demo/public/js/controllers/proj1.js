/**
 * Created by ziyad on 2/27/2016.
 */
var app = angular.module('projectModule',[]);
app.controller('projectController',function() {
var project = [
    {
        name:'Idea Bank',
        image:'images/proj1.png',
        description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
        certified:'certified',
        tag1:'HTML5',
        tag2:'Angular',
        tag3:'Node',
        tag4:'Mongo',
        tag5:'CSS3',
        tag6:'',
        tag7:'',
        tag8:'',
        tag9:'',
        parent:'true',
        vid:'https://www.youtube.com/watch?v=tlI022aUWQQ'
    }];
    this.project = project;
});