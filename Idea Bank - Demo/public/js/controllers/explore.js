/**
 * Created by ziyad on 2/27/2016.
 */
var app = angular.module('exploresModule',[]);
app.controller('exploreController',function() {

     this.tab=1;
     this.tab2=1;
    var proteams = [
        {
            name:'Team Idea Bank',
            image:'images/logo.png',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'certified',
            tags:['HTML5','Angular','Node','Mongo','CSS3'],
            type:'team',
            category:['technology'],
            buttons:['Collaborate']
        },
        {
            name:'Team MusicWave',
            image:'images/logo3.png',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'certified',
            tag1:['Music Production','Advertisements','Cafes','team'],
            category:['music'],
            new:"new",
            buttons:['Collaborate']
        },
        {
            name:'ForkfulFood',
            image:'images/logo2.png',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'certified',
            tags:['Food','Organic', 'Vegetables', 'Fruits', 'Meats'],
            type:'team',
            category:['food'],
            new:"new",
            buttons:['Collaborate']
        },
        {
            name:'Ziyad Alvi',
            image:'images/1.jpg',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'certified',
            tags:['HTML5', 'Angular'],
            type:'prof',
            category:['music','technology','art'],
            new:"new",
            buttons:['Collaborate']
        },
        {
            name:'Shariq Ali',
            image:'images/2.jpg',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'certified',
            tags:['HTML5','NodeJS'],
            type:'prof',
            category:['technology','art'],
            new:"new",
            buttons:['Collaborate']
        },
        {
            name:'Mohsin Ilyas',
            image:'images/3.jpg',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'certified',
            tags:['HTML5', 'NodeJS'],
            type:'prof',
            category:['technology','journalism'],
            new:"new",
            buttons:['Collaborate']
        },
        {
            name:'Usman',
            image:'images/4.jpg',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'',
            tags:['HTML5','NodeJS','MongoDB'],
            type:'prof',
            category:['music','technology'],
            new:"new",
            buttons:['Collaborate']
        },
        {
            name:'Ata',
            image:'images/5.jpg',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'',
            tags:['Food', 'Organic', 'Fruit'],
            type:'prof',
            category:['food'],
            new:"new",
            buttons:['Collaborate']
        },
        {
            name:'Savera',
            image:'images/6.jpg',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'',
            tags:['Kanjar', 'DJ_Yameen', 'Marasi'],
            type:'prof',
            category:['music'],
            new:"new",
            buttons:['Collaborate']
        },
        {
            name:'Idea Bank',
            image:'images/proj1.png',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'certified',
            tags:['HTML5','Angular', 'Node', 'Mongo','CSS3'],
            type:'project',
            category:['technology'],
            new:"new",
            buttons:['Collaborate','Bid','Fund']
        },
        {
            name:'Organic Foods',
            image:'images/proj2.png',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'certified',
            tags:['Food', 'Organic', 'Vegetables', 'Fruits', 'Meats'],
            type:'project',
            category:['food'],
            new:"new",
            buttons:['Collaborate','Bid','Fund']
        },
        {
            name:'Telekenisis',
            image:'images/proj3.jpg',
            description:'Next we configure our web page to be an Angular application. Go to the <html> tag at the top of the page and then add the ng-app angular directive to it to configure the page to be an Angular application. This will bootstrap the Angular application on the page',
            certified:'certified',
            tags:['Beats5', 'FruityLoops', 'Audacity'],
            type:'project',
            category:'music',
            buttons:['Collaborate','Bid','Fund'],
            new:"new"
        }];

    this.proteams = proteams;
    this.filtText = '';
    this.filtText = '';

    this.select = function(setTab) {
        this.tab = setTab;

        if (setTab === 1) { this.filtText1 = "new"; return}
        if (setTab === 2) { this.filtText1 = 'art'; return }
        if (setTab === 3) { this.filtText1 = 'comic'; return }
        if (setTab === 4) { this.filtText1 = 'craft'; return }
        if (setTab === 5) { this.filtText1 = 'dance'; return }
        if (setTab === 6) { this.filtText1 = 'design'; return }
        if (setTab === 7) { this.filtText1 = 'fashion'; return }
        if (setTab === 8) { this.filtText1 = 'film'; return }
        if (setTab === 9) { this.filtText1 = 'food'; return }
        if (setTab === 10) { this.filtText1 = 'games'; return }
        if (setTab === 11) { this.filtText1 = 'journalism'; return }
        if (setTab === 12) { this.filtText1 = 'music'; return }
        if (setTab === 13) { this.filtText1 = 'photography'; return }
        if (setTab === 14) { this.filtText1 = 'publishing'; return }
        if (setTab === 15) { this.filtText1 = 'technology'; return }
        if (setTab === 16) { this.filtText1 = 'theater'; }
        else { this.filtText = ''; this.filtText1 = '' }
    };

    this.select2 = function(setTab) {
        this.tab2 = setTab;

        if (setTab === 1) { this.filtText = "project"; return}
        if (setTab === 2) { this.filtText = 'team';  return }
        if (setTab === 3) { this.filtText = 'prof';  }
    };

    this.isSelected = function(checkTab) {
       return this.tab === checkTab;
    };
    this.isSelected2 = function(checkTab) {
        return this.tab2 === checkTab;
    }
});
