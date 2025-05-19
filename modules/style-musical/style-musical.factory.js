'use strict';

(() => {
    angular
    .module('app.style-musical')
    .factory('StyleMusicalFactory', StyleMusicalFactory);

    StyleMusicalFactory.$inject = ['$http', '$injector', ];

    function StyleMusicalFactory($http, $injector) {
        const factory = this;
        factory.appConstants = $injector.get('appConstants');

        factory._get = _get;

        const resource = {
            name: 'style-musical',
        }
        const url = `${ factory.appConstants.api.url}:`
        + `${ factory.appConstants.api.port}`
        + `${ factory.appConstants.api.root}/`
        + `${ resource.name}`;

        return factory;

        function _get() {
            return $http.get(url);
        }
    }
})();