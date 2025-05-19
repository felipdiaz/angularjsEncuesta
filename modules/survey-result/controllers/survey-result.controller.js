'use strict';
(() => {
    angular
    .module('app.survey-result')
    .controller('SurveyResultCtrl', SurveyResultCtrl);

    SurveyResultCtrl.inject = ['$injector', 'getSurveyData'];

    function SurveyResultCtrl($injector, getSurveyData) {
        const vm = this;
        vm.appConstants = $injector.get('appConstants');

        const countByStyle = {};

    (getSurveyData && getSurveyData.data || []).forEach(item => {
        const name = item.styleMusical.name;
        countByStyle[name] = (countByStyle[name] || 0) + 1;
    });

    // Labels y datos para los gráficos
    vm.chartLabels = Object.keys(countByStyle);
    vm.chartData = [Object.values(countByStyle)];
    vm.chartSeries = ['Votos'];

    // Mismo para lineChart
    vm.lineChartLabels = vm.chartLabels;
    vm.lineChartData = vm.chartData;
    vm.lineChartSeries = vm.chartSeries;

    // Para pie y doughnut solo necesitan labels y datos
    vm.pieChartLabels = vm.chartLabels;
    vm.pieChartData = Object.values(countByStyle);
    vm.doughnutChartLabels = vm.chartLabels;
    vm.doughnutChartData = Object.values(countByStyle);

    // Opciones comunes con diferencias menores
    vm.chartOptions = {
        responsive: true,
        legend: { display: true },
        scales: {
            yAxes: [{
                ticks: { beginAtZero: true, precision: 0 }
            }]
        }
    };

    // Para pie y doughnut, las escalas no aplican
    vm.pieChartOptions = {
        responsive: true,
        legend: { display: true }
    };
    vm.doughnutChartOptions = vm.pieChartOptions;
    }
})();