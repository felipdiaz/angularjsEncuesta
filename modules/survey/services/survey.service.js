'use strict';

(() => {
    angular
    .module('app.survey')
    .service('SurveyService', SurveyService);

    SurveyService.$inject = ['$injector', ];

    function SurveyService($injector) {
        const service = this;
        service.SurveyFactory = $injector.get('SurveyFactory');
        service._post = _post;
        service._get = _get;

        return service;

        function _post(payload){
             
            if (!payload || !payload.email || !payload.musicalStyle) {
                return Promise.reject('Formulario incompleto o inválido');
            }

            payload.styleMusical = {
                id: payload.musicalStyle
            };

            delete payload.musicalStyle;


            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!emailRegex.test(payload.email)) {
                return Promise.reject('Email con formato inválido');
            }
            return service.SurveyFactory._post(payload);
        }

        function _get(){
            return service.SurveyFactory._get();
        }
    }
})();