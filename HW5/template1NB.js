Highcharts.chart('container', {
    xAxis: {
        min: #minvalue#,
        max: #maxvalue#
    },
    yAxis: {
        min: #minyvalue#
    },
    title: {
        text: #text#
    },
    series: [{
        type: 'line',
        name: #linename#,
        data: #line#,
        marker: {
            enabled: false
        },
        states: {
            hover: {
                lineWidth: 0
            }
        },
        enableMouseTracking: false
    }, {
        type: 'scatter',
        name: 'Observations',
        data: #data0#,
        marker: {
            radius: 4
        }
    },
    {
        type: 'scatter',
        name: 'Observations',
        data: #data1#,
        marker: {
            radius: 4
        }
    }]
});
