import angular from 'angular';
import uiRouter from 'angular-route/angular-ui-router';
import registerControllers from './controller';
import registerServices from './services';
import registerDirectives from './directives';



let app = angular.module('app', [ uiRouter ]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController'
        })

        .state('listing', {
            url: '/listing',
            templateUrl: 'app/listing/listing.html',
            controller: 'ListingController'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'app/settings/settings.html',
            controller: 'SettingsController'
        })
        .state('help', {
            url: '/help',
            templateUrl: 'app/help/help.html',
            controller: 'HelpController'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'app/profile/profile.html',
            controller: 'ProfileController'
        });

});

registerControllers(app);
registerServices(app);
registerDirectives(app);

