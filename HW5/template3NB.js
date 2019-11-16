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
        name: 'LineX',
        data: #line0#,
        marker: {
            enabled: false
        },
        states: {
            hover: {
                lineWidth: 0
            }
        },
        enableMouseTracking: false
    },
    {
        type: 'line',
        name: 'LineY',
        data: #line1#,
        marker: {
            enabled: false
        },
        states: {
            hover: {
                lineWidth: 0
            }
        },
        enableMouseTracking: false
    },
     {
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
