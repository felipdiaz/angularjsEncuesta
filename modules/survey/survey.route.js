'use strict';

(() => {
    angular
    .module('app.survey')
    .config(routes);

    function routes($stateProvider) {
        $stateProvider
        .state('surveyMain', {
            parent: 'root',
            url: '/survey',
            views: {
                'main@': {
                    controller: 'SurveyCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'modules/survey/templates/survey-main.html',
                },
            },
            resolve: {
                getStyleMusicalData: getStyleMusical,
            },
        });
    }

    function getStyleMusical(StyleMusicalService) {
        return StyleMusicalService._get();
    }
})();