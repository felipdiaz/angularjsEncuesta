'use strict';
(() => {
    angular
    .module('app')
    .controller('AppCrtl', AppCrtl);

    AppCrtl.inject = ['$injector', ];

    function AppCrtl($injector) {
        const vm = this;
        vm.appConstants = $injector.get('appConstants');        
    }
})();