Highcharts.chart('container', {
    xAxis: {
        min: 4.3,
        max: 7.9
    },
    yAxis: {
        min: 2.0
    },
    title: {
        text: 'Numerical 3Item Multiclass'
    },
    series: [{
        type: 'line',
        name: 'sepal_length >= 5.6',
        data: [[5.6, 0.0], [5.6, 5.9]],
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
        name: 'sepal_width >= 2.3',
        data: [[0.0, 2.3], [7.9, 2.3]],
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
    {type: 'scatter',name: 0.06,data: [{x: 5.1,y: 3.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.9,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.7,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.6,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.0,y: 3.6, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.4,y: 3.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.6,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.0,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.4,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.9,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.4,y: 3.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.8,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.8,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.3,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.8,y: 4.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.9).get('rgb')]]}},},{x: 5.7,y: 4.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.9).get('rgb')]]}},},{x: 5.4,y: 3.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.1,y: 3.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.7,y: 3.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.9).get('rgb')]]}},},{x: 5.1,y: 3.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.4,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.1,y: 3.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.6,y: 3.6, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.1,y: 3.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.8,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.0,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.0,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.2,y: 3.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.2,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.7,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.8,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.4,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.2,y: 4.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.5,y: 4.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.9,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.0,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.5,y: 3.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.9,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.4,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.1,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.0,y: 3.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.5,y: 2.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.4,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.0,y: 3.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.1,y: 3.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.8,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.1,y: 3.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 4.6,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.3,y: 3.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},{x: 5.0,y: 3.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[0]],[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.3).get('rgb')]]}},},],marker: {radius: 4}},{type: 'scatter',name: 0.74,data: [{x: 7.0,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.4,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.9,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.5,y: 2.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 6.5,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.7,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.3,y: 3.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 4.9,y: 2.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 6.6,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.2,y: 2.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 5.0,y: 2.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 5.9,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.0,y: 2.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 6.1,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.6,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.7,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.6,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.8,y: 2.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.2,y: 2.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 5.6,y: 2.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.9,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.1,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.3,y: 2.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.1,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.4,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.6,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.8,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.7,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.0,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.7,y: 2.6, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.5,y: 2.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 5.5,y: 2.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 5.8,y: 2.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.0,y: 2.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.4,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 6.0,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.7,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.3,y: 2.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.6,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.5,y: 2.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 5.5,y: 2.6, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 6.1,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.8,y: 2.6, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.0,y: 2.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 5.6,y: 2.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.7,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.7,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 6.2,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},{x: 5.1,y: 2.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.3).get('rgb')]]}},},{x: 5.7,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[3]],[1, Highcharts.Color(Highcharts.getOptions().colors[3]).brighten(-0.9).get('rgb')]]}},},],marker: {radius: 4}},{type: 'scatter',name: 0.96,data: [{x: 6.3,y: 3.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 5.8,y: 2.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.1,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.3,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.5,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.6,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 4.9,y: 2.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.3).get('rgb')]]}},},{x: 7.3,y: 2.9, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.7,y: 2.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.2,y: 3.6, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.5,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.4,y: 2.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.8,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 5.7,y: 2.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 5.8,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.4,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.5,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.7,y: 3.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.7,y: 2.6, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.0,y: 2.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.3).get('rgb')]]}},},{x: 6.9,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 5.6,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.7,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.3,y: 2.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.7,y: 3.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.2,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.2,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.1,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.4,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.2,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.4,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.9,y: 3.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.4,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.3,y: 2.8, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.1,y: 2.6, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 7.7,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.3,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.4,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.0,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.9,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.7,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.9,y: 3.1, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 5.8,y: 2.7, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.8,y: 3.2, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.7,y: 3.3, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.7,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.3,y: 2.5, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.5,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 6.2,y: 3.4, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},{x: 5.9,y: 3.0, marker: {radius: 4,fillColor: {radialGradient: {cx: 0.5,cy: 0.3,r: 0.9},stops: [[0, Highcharts.getOptions().colors[6]],[1, Highcharts.Color(Highcharts.getOptions().colors[6]).brighten(-0.9).get('rgb')]]}},},],marker: {radius: 4}},
]
});