'use strict';

(() => {
    angular
    .module('app.home')
    .config(routes);

    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            parent: 'root',
            url: '/home',
            views: {
                'home@': {
                    controller: 'HomeCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'modules/home/templates/home.html',
                },
                'footer@': {
                    controller: 'HomeCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'js/layout/footer.html',
                },
            },
            resolve: {

            },
        });
        $urlRouterProvider.otherwise('home');
    }
})();