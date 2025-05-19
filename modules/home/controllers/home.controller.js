'use strict';
(() => {
    angular
    .module('app.home')
    .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.inject = ['$injector', ];

    function HomeCtrl($injector) {
        const vm = this;
        vm.appConstants = $injector.get('appConstants');
    }
})();