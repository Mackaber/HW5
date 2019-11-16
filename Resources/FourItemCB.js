var data = [{'id': '0.0', 'parent': '', 'name': 'All'}, {'id': '1.0', 'parent': '0.0', 'name': 'animated'}, {'id': '1.1', 'parent': '0.0', 'name': 'not animated'}, {'id': '1.0.0', 'parent': '1.0', 'name': 'religion == 2', 'value': 0.18556701030927836}, {'id': '1.0.1', 'parent': '1.0', 'name': 'religion != 2', 'value': 0.8144329896907216}, {'id': '1.0.0.0', 'parent': '1.0.0', 'name': 'language == 10', 'value': 0.03608247422680412}, {'id': '1.0.0.1', 'parent': '1.0.0', 'name': 'language != 10', 'value': 0.14948453608247422}, {'id': '1.0.0.0.0', 'parent': '1.0.0.0', 'name': 'stripes == 3', 'value': 0.005154639175257732}, {'id': '1.0.0.0.1', 'parent': '1.0.0.0', 'name': 'stripes != 3', 'value': 0.030927835051546393}, {'id': '1.0.0.0.0.0', 'parent': '1.0.0.0.0', 'name': 'sunstars == 1', 'value': 0.005154639175257732}, {'id': '1.0.0.0.0.1', 'parent': '1.0.0.0.0', 'name': 'sunstars != 1', 'value': 0.0}, {'id': '1.0.0.0.1.0', 'parent': '1.0.0.0.1', 'name': 'sunstars == 1', 'value': 0.010309278350515464}, {'id': '1.0.0.0.1.1', 'parent': '1.0.0.0.1', 'name': 'sunstars != 1', 'value': 0.020618556701030927}, {'id': '1.0.0.1.0', 'parent': '1.0.0.1', 'name': 'stripes == 3', 'value': 0.05670103092783505}, {'id': '1.0.0.1.1', 'parent': '1.0.0.1', 'name': 'stripes != 3', 'value': 0.09278350515463918}, {'id': '1.0.0.1.0.0', 'parent': '1.0.0.1.0', 'name': 'sunstars == 1', 'value': 0.015463917525773196}, {'id': '1.0.0.1.0.1', 'parent': '1.0.0.1.0', 'name': 'sunstars != 1', 'value': 0.041237113402061855}, {'id': '1.0.0.1.1.0', 'parent': '1.0.0.1.1', 'name': 'sunstars == 1', 'value': 0.041237113402061855}, {'id': '1.0.0.1.1.1', 'parent': '1.0.0.1.1', 'name': 'sunstars != 1', 'value': 0.05154639175257732}, {'id': '1.0.1.0', 'parent': '1.0.1', 'name': 'language == 10', 'value': 0.20103092783505155}, {'id': '1.0.1.1', 'parent': '1.0.1', 'name': 'language != 10', 'value': 0.6134020618556701}, {'id': '1.0.1.0.0', 'parent': '1.0.1.0', 'name': 'stripes == 3', 'value': 0.030927835051546393}, {'id': '1.0.1.0.1', 'parent': '1.0.1.0', 'name': 'stripes != 3', 'value': 0.17010309278350516}, {'id': '1.0.1.0.0.0', 'parent': '1.0.1.0.0', 'name': 'sunstars == 1', 'value': 0.010309278350515464}, {'id': '1.0.1.0.0.1', 'parent': '1.0.1.0.0', 'name': 'sunstars != 1', 'value': 0.020618556701030927}, {'id': '1.0.1.0.1.0', 'parent': '1.0.1.0.1', 'name': 'sunstars == 1', 'value': 0.05670103092783505}, {'id': '1.0.1.0.1.1', 'parent': '1.0.1.0.1', 'name': 'sunstars != 1', 'value': 0.1134020618556701}, {'id': '1.0.1.1.0', 'parent': '1.0.1.1', 'name': 'stripes == 3', 'value': 0.13402061855670103}, {'id': '1.0.1.1.1', 'parent': '1.0.1.1', 'name': 'stripes != 3', 'value': 0.4793814432989691}, {'id': '1.0.1.1.0.0', 'parent': '1.0.1.1.0', 'name': 'sunstars == 1', 'value': 0.030927835051546393}, {'id': '1.0.1.1.0.1', 'parent': '1.0.1.1.0', 'name': 'sunstars != 1', 'value': 0.10309278350515463}, {'id': '1.0.1.1.1.0', 'parent': '1.0.1.1.1', 'name': 'sunstars == 1', 'value': 0.08762886597938144}, {'id': '1.0.1.1.1.1', 'parent': '1.0.1.1.1', 'name': 'sunstars != 1', 'value': 0.3917525773195876}, {'id': '1.1.0', 'parent': '1.1', 'name': 'religion == 2', 'value': 0.18556701030927836}, {'id': '1.1.1', 'parent': '1.1', 'name': 'religion != 2', 'value': 0.8144329896907216}, {'id': '1.1.0.0', 'parent': '1.1.0', 'name': 'language == 10', 'value': 0.03608247422680412}, {'id': '1.1.0.1', 'parent': '1.1.0', 'name': 'language != 10', 'value': 0.14948453608247422}, {'id': '1.1.0.0.0', 'parent': '1.1.0.0', 'name': 'stripes == 3', 'value': 0.005154639175257732}, {'id': '1.1.0.0.1', 'parent': '1.1.0.0', 'name': 'stripes != 3', 'value': 0.030927835051546393}, {'id': '1.1.0.0.0.0', 'parent': '1.1.0.0.0', 'name': 'sunstars == 1', 'value': 0.005154639175257732}, {'id': '1.1.0.0.0.1', 'parent': '1.1.0.0.0', 'name': 'sunstars != 1', 'value': 0.0}, {'id': '1.1.0.0.1.0', 'parent': '1.1.0.0.1', 'name': 'sunstars == 1', 'value': 0.010309278350515464}, {'id': '1.1.0.0.1.1', 'parent': '1.1.0.0.1', 'name': 'sunstars != 1', 'value': 0.020618556701030927}, {'id': '1.1.0.1.0', 'parent': '1.1.0.1', 'name': 'stripes == 3', 'value': 0.05670103092783505}, {'id': '1.1.0.1.1', 'parent': '1.1.0.1', 'name': 'stripes != 3', 'value': 0.09278350515463918}, {'id': '1.1.0.1.0.0', 'parent': '1.1.0.1.0', 'name': 'sunstars == 1', 'value': 0.015463917525773196}, {'id': '1.1.0.1.0.1', 'parent': '1.1.0.1.0', 'name': 'sunstars != 1', 'value': 0.041237113402061855}, {'id': '1.1.0.1.1.0', 'parent': '1.1.0.1.1', 'name': 'sunstars == 1', 'value': 0.041237113402061855}, {'id': '1.1.0.1.1.1', 'parent': '1.1.0.1.1', 'name': 'sunstars != 1', 'value': 0.05154639175257732}, {'id': '1.1.1.0', 'parent': '1.1.1', 'name': 'language == 10', 'value': 0.20103092783505155}, {'id': '1.1.1.1', 'parent': '1.1.1', 'name': 'language != 10', 'value': 0.6134020618556701}, {'id': '1.1.1.0.0', 'parent': '1.1.1.0', 'name': 'stripes == 3', 'value': 0.030927835051546393}, {'id': '1.1.1.0.1', 'parent': '1.1.1.0', 'name': 'stripes != 3', 'value': 0.17010309278350516}, {'id': '1.1.1.0.0.0', 'parent': '1.1.1.0.0', 'name': 'sunstars == 1', 'value': 0.010309278350515464}, {'id': '1.1.1.0.0.1', 'parent': '1.1.1.0.0', 'name': 'sunstars != 1', 'value': 0.020618556701030927}, {'id': '1.1.1.0.1.0', 'parent': '1.1.1.0.1', 'name': 'sunstars == 1', 'value': 0.05670103092783505}, {'id': '1.1.1.0.1.1', 'parent': '1.1.1.0.1', 'name': 'sunstars != 1', 'value': 0.1134020618556701}, {'id': '1.1.1.1.0', 'parent': '1.1.1.1', 'name': 'stripes == 3', 'value': 0.13402061855670103}, {'id': '1.1.1.1.1', 'parent': '1.1.1.1', 'name': 'stripes != 3', 'value': 0.4793814432989691}, {'id': '1.1.1.1.0.0', 'parent': '1.1.1.1.0', 'name': 'sunstars == 1', 'value': 0.030927835051546393}, {'id': '1.1.1.1.0.1', 'parent': '1.1.1.1.0', 'name': 'sunstars != 1', 'value': 0.10309278350515463}, {'id': '1.1.1.1.1.0', 'parent': '1.1.1.1.1', 'name': 'sunstars == 1', 'value': 0.08762886597938144}, {'id': '1.1.1.1.1.1', 'parent': '1.1.1.1.1', 'name': 'sunstars != 1', 'value': 0.3917525773195876}];

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');


Highcharts.chart('container', {

    chart: {
        height: '100%'
    },

    title: {
        text: 'FourItemCB'
    },
    series: [{
        type: "sunburst",
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            format: '{point.name}',
            filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 16
            }
        },
        levels: [{
            level: 1,
            levelIsConstant: false,
            dataLabels: {
                filter: {
                    property: 'outerArcLength',
                    operator: '>',
                    value: 64
                }
            }
        }, {
            level: 2,
            colorByPoint: true
        }]

    }],
    tooltip: {
        headerFormat: "",
        pointFormat: 'The percentage of <b>{point.name}</b> is <b>{point.value}</b>'
    }
});