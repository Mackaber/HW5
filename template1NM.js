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
    }, 
    #multivars#
]
});
