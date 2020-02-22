// eslint-disable-next-line no-unused-vars
let controller = {
    getData(cb) {
        /* var { company: { uuid: clientUUID } } = globalCredentials;
        clientUUID = '707451e0-29ab-4b20-86a0-a6d47064aad6';
        $.ajax({
            type: 'GET',
            url: '/api/anastasia-metrics/clientMetrics',
            data: { clientUUID },
            dataType: 'json',
            success: function(response) {
                if ('detail' in response) {
                    cb({ values: [] });
                } else {
                    cb(response);
                }
                //console.log({ response });
            }
        }); */
        $.getJSON('/public/app/index/chart/data.json', function(data, textStatus, jqXHR) {
            cb(data);
        });
    },
    getDataApe(cb) {
        /* var { company: { uuid: clientUUID } } = globalCredentials;
        clientUUID = '707451e0-29ab-4b20-86a0-a6d47064aad6';
        $.ajax({
            type: 'GET',
            url: '/api/anastasia-metrics/clientMetrics',
            data: { clientUUID },
            dataType: 'json',
            success: function(response) {
                if ('detail' in response) {
                    cb({ values: [] });
                } else {
                    cb(response);
                }
                //console.log({ response });
            }
        }); */
        $.getJSON('/public/app/index/chart/dataApe.json', function(data, textStatus, jqXHR) {
            cb(data);
        });
    }
};
