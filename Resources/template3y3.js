Highcharts.chart('container', {
    chart: {
        type: 'spline',
        parallelCoordinates: true,
        parallelAxes: {
            lineWidth: 2
        }
    },
    title: {
        text: '#titulo#'
    },
    plotOptions: {
        series: {
            animation: false,
            marker: {
                enabled: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            states: {
                hover: {
                    halo: {
                        size: 0
                    }
                }
            },
            events: {
                mouseOver: function () {
                    this.group.toFront();
                }
            }
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
            '{series.name}: <b>{point.formattedValue}</b><br/>'
    },
    xAxis: {
        categories: #categ#,
        offset: 10
    },
    yAxis: [{
        min: -10,
        tooltipValueFormat: '{value}'
    },{
        min: -10,
        tooltipValueFormat: '{value}'
    },{
        min: -10,
        tooltipValueFormat: '{value}'
    },{
        categories: ['YES', 'NO']
    },{
        categories: ['YES', 'NO']
    }, {
        categories: ['YES', 'NO']
    },{
        categories: ['YES', 'NO']
    },],
    colors: ['red','blue','green',"black","pink"],
    series: [#series#]
});
