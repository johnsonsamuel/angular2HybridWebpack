export default [
    function($stateProvider, $urlRouterProvider) {

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

    }
]