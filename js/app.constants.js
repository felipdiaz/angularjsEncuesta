'use strict';

(() => {
    const appConstants = {
        api: {
            port: 8081,
            root: '/api',
            url: 'http://localhost',
        },
        month: {
            1: 'Enero',
            2: 'Febrero',
            3: 'Marzo',
            4: 'Abril',
            5: 'Mayo',
        },
    };

    angular
    .module('app')
    .constant('appConstants', appConstants);
})();