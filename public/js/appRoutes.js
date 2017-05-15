// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/dashboard', {
            templateUrl: 'views/dash.html',
            controller: 'DashboardController'
        })

        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })

        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignUpController'
        });

    $locationProvider.html5Mode(true);

}]);
