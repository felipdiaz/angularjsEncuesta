'use strict';

(() => {
    angular
    .module('app')
    .config(routes);

    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('root', {
            abstract: true,
            views: {
                'header@': {
                    controller: 'AppCrtl',
                    controllerAs: 'vm',
                    templateUrl: 'js/layout/header.html',
                },
                'footer@': {
                    controller: 'AppCrtl',
                    controllerAs: 'vm',
                    templateUrl: 'js/layout/footer.html',
                },
                'sidebar@': {
                    controller: 'AppCrtl',
                    controllerAs: 'vm',
                    templateUrl: 'js/layout/sidebar.html',
                },
            },
            resolve: {

            },
        });
        $urlRouterProvider.otherwise('/');
    }
})();