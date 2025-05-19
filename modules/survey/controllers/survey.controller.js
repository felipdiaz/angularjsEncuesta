'use strict';
(() => {
    angular
    .module('app.survey')
    .controller('SurveyCtrl', SurveyCtrl);

    SurveyCtrl.inject = ['$injector', 'getStyleMusicalData', '$state'];

    function SurveyCtrl($injector, getStyleMusicalData, $state) {
        const vm = this;
        vm.appConstants = $injector.get('appConstants');
        vm.surveyService = $injector.get('SurveyService'); 
        vm.formData = {
            email: null,
            musicalStyle: '',
        };
        
        vm.styleMusical = getStyleMusicalData ? getStyleMusicalData.data : [];
        vm.functions = {
            save,
        };

        function save() {
            if(vm.surveyForm.$valid) {
                 vm.surveyService._post(vm.formData)
                 .then((response) => {
                    if (response.status === 201) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registro guardado exitosamente',
                            text: '¡Gracias por tu participación!',
                            confirmButtonText: 'Aceptar'
                        }).then((result) => {
                            if (result.isConfirmed) {                                
                                $state.go('surveyResult');
                            }
                        });
                    }
                 })
                 .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: error.data.error,
                    });
                 })
                 .finally(() => {
                    vm.formData = {};
                    vm.surveyForm.$setPristine();
                    vm.surveyForm.$setUntouched();
                });
            }
        }
    }
})();