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
        name: #linename0#,
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
        name: #linename1#,
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
    #multivars#
]
});