'use strict';

(() => {
    angular
    .module('app.common')
    .config(routes);

    function routes($stateProvider) {
        $stateProvider
        .state('forbidden', {
            parent: 'root',
            url: '/forbidden',
            views: {
                'main@': {
                    templateUrl: 'templates/forbidden-main.html',
                },
            },
        })
        .state('developing', {
            parent: 'root',
            url: '/developing',
            views: {
                'main@': {
                    templateUrl: 'templates/developing-main.html',
                },
            },
        });
    }
});