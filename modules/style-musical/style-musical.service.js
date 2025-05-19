'use strict';

(() => {
    angular
    .module('app.style-musical')
    .service('StyleMusicalService', StyleMusicalService);

    StyleMusicalService.$inject = ['$injector', ];

    function StyleMusicalService($injector) {
        const service = this;
        service.StyleMusicalFactory = $injector.get('StyleMusicalFactory');
        service._get = _get;

        return service;

        function _get(){
            return service.StyleMusicalFactory._get();
        }
    }
})();