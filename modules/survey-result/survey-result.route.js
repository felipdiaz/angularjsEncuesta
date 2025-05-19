'use strict';

(() => {
    angular
    .module('app.survey-result')
    .config(routes);

    function routes($stateProvider) {
        $stateProvider
        .state('surveyResult', {
            parent: 'root',
            url: '/survey-result',
            views: {
                'main@': {
                    controller: 'SurveyResultCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'modules/survey-result/templates/survey-result.html',
                },
            },
            resolve: {
                getSurveyData: getSurvey,
            },
        });
    }

    function getSurvey(SurveyService) {
        return SurveyService._get();
    }
})();