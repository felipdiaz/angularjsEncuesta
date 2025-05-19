'use strict';

(() => {
    angular
    .module('app.survey')
    .factory('SurveyFactory', SurveyFactory);

    SurveyFactory.$inject = ['$http', '$injector', ];

    function SurveyFactory($http, $injector) {
        const factory = this;
        factory.appConstants = $injector.get('appConstants');

        factory._post = _post;
        factory._get = _get;

        const resource = {
            name: 'survey',
        }
        const url = `${ factory.appConstants.api.url}:`
        + `${ factory.appConstants.api.port}`
        + `${ factory.appConstants.api.root}/`
        + `${ resource.name}`;

        return factory;

        function _post(payload) {
            return $http.post(url, payload);
        }

        function _get(payload) {
            return $http.get(url, payload);
        }
    }
})();