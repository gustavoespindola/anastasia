$(document).ready(function() {
    controller.getData(function(dataChart) {
        if (dataChart.values.length > 0) {
            moment.locale('es');
            dataChart.values.forEach((data, index) => {
                var label = moment(data.date, 'YYYY-MM-DDTHH:mm:ssZ').format('MMMM');
                dataChart.values[index].label = label.charAt(0).toUpperCase() + label.slice(1);
            });
            var $chart = $('#chart-anastasia');

            function initChart($chart) {
                var labels = dataChart.values.map((e) => { return e.label; });
                var values = dataChart.values.map((e) => { return e.value; });
                // Create chart
                var ordersChart = new Chart($chart, {
                    type: 'bar',
                    data: {
                        labels,
                        datasets: [{
                            label: 'Consultas',
                            data: values,
                            backgroundColor: [
                                'rgba(245, 54, 92, 0.9)',
                                'rgba(245, 54, 92, 0.9)',
                                'rgba(245, 54, 92, 0.9)',
                                'rgba(245, 54, 92, 0.9)',
                                'rgba(245, 54, 92, 0.9)',
                                'rgba(245, 54, 92, 0.9)'
                            ]
                        }]
                    }
                });

                // Save to jQuery object
                $chart.data('chart', ordersChart);
            }
            // Init chart
            if ($chart.length) {
                initChart($chart);
            }
        }
    });
    controller.getDataApe(function(dataChart) {
        if (dataChart.values.length > 0) {
            moment.locale('es');
            dataChart.values.forEach((data, index) => {
                var label = moment(data.date, 'YYYY-MM-DDTHH:mm:ssZ').format('MMMM');
                dataChart.values[index].label = label.charAt(0).toUpperCase() + label.slice(1);
            });
            var $chart = $('#chart-anastasiaApe');

            function initChart($chart) {
                var labels = dataChart.values.map((e) => { return e.label; });
                var values = dataChart.values.map((e) => { return e.value; });
                // Create chart
                var ordersChart = new Chart($chart, {
                    type: 'bar',
                    data: {
                        labels,
                        datasets: [{
                            label: 'Consultas',
                            data: values
                        }]
                    }
                });

                // Save to jQuery object
                $chart.data('chart', ordersChart);
            }
            // Init chart
            if ($chart.length) {
                initChart($chart);
            }
        }
    });
    const appAlias = localStorage.getItem('app-alias');
    $('#appAlias').text(appAlias);
    $('#titleChart').text(appAlias);
});
