Highcharts.chart('container', {
    chart: {
        type: 'spline',
        parallelCoordinates: true,
        parallelAxes: {
            lineWidth: 2
        }
    },
    title: {
        text: '3 Cat y 3 Num'
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
        categories: ['BounceRates > 0.0', 'Administrative_Duration < 50', 'ProductRelated_Duration < 100', 'Month == Feb', 'VisitorType == Returning_Visitor', 'OperatingSystems == 1'],
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
    series: [{name: '0',data: [0.2, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '1',data: [0.0, 0.0, 64.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '2',data: [0.2, -1.0, -1.0, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '3',data: [0.05, 0.0, 2.666666667, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '4',data: [0.02, 0.0, 627.5, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '5',data: [0.015789473999999998, 0.0, 154.2166667, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '6',data: [0.2, -1.0, -1.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '7',data: [0.2, -1.0, -1.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '8',data: [0.0, 0.0, 37.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '9',data: [0.0, 0.0, 738.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '10',data: [0.0, 0.0, 395.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '11',data: [0.01875, 0.0, 407.75, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '12',data: [0.0, 0.0, 280.5, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '13',data: [0.0, 0.0, 98.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '14',data: [0.0, 0.0, 68.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '15',data: [0.008333333, 53.0, 1668.285119, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '16',data: [0.2, -1.0, -1.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '17',data: [0.0, 0.0, 334.96666669999996, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '18',data: [0.0, 0.0, 32.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '19',data: [0.0, 0.0, 2981.166667, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '20',data: [0.0, 0.0, 136.16666669999998, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '21',data: [0.2, -1.0, -1.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '22',data: [0.0, 0.0, 105.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '23',data: [0.0, 0.0, 15.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '24',data: [0.2, -1.0, -1.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '25',data: [0.0, 0.0, 156.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '26',data: [0.002857143, 64.6, 1135.444444, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '27',data: [0.05, 0.0, 76.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '28',data: [0.0, 0.0, 63.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '29',data: [0.043478261, 6.0, 1582.75, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '30',data: [0.0, 0.0, 35.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '31',data: [0.0, 0.0, 78.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '32',data: [0.0, 0.0, 209.5, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '33',data: [0.04, 0.0, 183.66666669999998, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '34',data: [0.014285714, 0.0, 380.5, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '35',data: [0.015384615, 0.0, 2086.242857, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '36',data: [0.025, 0.0, 388.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '37',data: [0.0, 18.0, 298.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '38',data: [0.028571429, 0.0, 63.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '39',data: [0.0, 0.0, 482.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '40',data: [0.0, 9.0, 4084.393939, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '41',data: [0.0, 0.0, 22.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '42',data: [0.0, 0.0, 310.1666667, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '43',data: [0.0, 0.0, 34.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '44',data: [0.0, 0.0, 88.0, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '45',data: [0.003030303, 0.0, 622.25, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '46',data: [0.017142857, 0.0, 222.4, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '47',data: [0.066666667, 0.0, 80.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '48',data: [0.0, 0.0, 800.8333332999999, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '49',data: [0.2, -1.0, -1.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '50',data: [0.2, -1.0, -1.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '51',data: [0.011111111000000002, 0.0, 265.1666667, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '52',data: [0.0, 0.0, 29.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '53',data: [0.0, 0.0, 160.0, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '54',data: [0.05, 0.0, 135.66666669999998, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '55',data: [0.2, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '56',data: [0.2, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '57',data: [0.0, 56.0, 998.7416667000001, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '58',data: [0.0, 0.0, 104.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '59',data: [0.011764706000000002, 16.0, 381.6865079, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '60',data: [0.0, 0.0, 169.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '61',data: [0.05, 0.0, 400.8, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '62',data: [0.009000000000000001, 279.4166667, 1553.583333, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '63',data: [0.0, 0.0, 706.5, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '64',data: [0.2, -1.0, -1.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '65',data: [0.0, 87.83333333, 798.3333332999999, 0.0, 1.0, 1.0, 1.0],shadow: false,},{name: '66',data: [0.002150538, 44.0, 6951.972222, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '67',data: [0.2, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '68',data: [0.0, 0.0, 902.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '69',data: [0.2, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '70',data: [0.2, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '71',data: [0.025, 0.0, 197.37777780000002, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '72',data: [0.0, 0.0, 43.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '73',data: [0.0, 0.0, 426.66666669999995, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '74',data: [0.0, 0.0, 135.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '75',data: [0.0, 0.0, 588.3333332999999, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '76',data: [0.004347826, 1005.666667, 2111.341667, 0.0, 1.0, 1.0, 1.0],shadow: false,},{name: '77',data: [0.0, 0.0, 76.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '78',data: [0.2, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '79',data: [0.2, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '80',data: [0.0, 0.0, 208.0, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '81',data: [0.0, 0.0, 270.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '82',data: [0.0, 0.0, 39.5, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '83',data: [0.016666667, 0.0, 375.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '84',data: [0.2, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '85',data: [0.2, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '86',data: [0.057142857000000005, 0.0, 150.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '87',data: [0.0, 0.0, 138.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '88',data: [0.028571429, 0.0, 337.5, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '89',data: [0.0, 0.0, 620.0333333, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '90',data: [0.0, 36.0, 168.84615380000002, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '91',data: [0.2, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '92',data: [0.0, 0.0, 52.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '93',data: [0.0, 0.0, 649.25, 0.0, 0.0, 1.0, 0.0],shadow: false,},{name: '94',data: [0.0037037040000000004, 0.0, 925.3333332999998, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '95',data: [0.0, 0.0, 33.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '96',data: [0.05, 0.0, 1566.5, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '97',data: [0.0, 0.0, 105.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '98',data: [0.038095238, 0.0, 50.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '99',data: [0.004166667, 0.0, 644.2, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '100',data: [0.0, 18.33333333, 2635.177778, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '101',data: [0.0, 61.0, 607.0, 0.0, 1.0, 0.0, 1.0],shadow: false,},{name: '102',data: [0.0, 0.0, 415.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '103',data: [0.0, 31.0, 2083.530952, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '104',data: [0.007058824, 58.5, 281.6666667, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '105',data: [0.15, 0.0, 27.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '106',data: [0.04444444400000001, 0.0, 215.0, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '107',data: [0.05, 0.0, 162.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '108',data: [0.05, 0.0, 114.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '109',data: [0.000854701, 326.25, 5062.213753, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '110',data: [0.0, 0.0, 253.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '111',data: [0.2, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '112',data: [0.2, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '113',data: [0.008, 22.0, 436.5, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '114',data: [0.012903226, 0.0, 1045.833333, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '115',data: [0.0, 0.0, 317.8333333, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '116',data: [0.0, 0.0, 1146.333333, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '117',data: [0.018181818, 0.0, 577.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '118',data: [0.0, 0.0, 95.0, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '119',data: [0.0, 0.0, 301.5, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '120',data: [0.0, 0.0, 243.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '121',data: [0.0, 0.0, 135.5, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '122',data: [0.0, 0.0, 442.33333330000005, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '123',data: [0.0, 0.0, 41.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '124',data: [0.027999999999999997, 0.0, 292.9, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '125',data: [0.2, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '126',data: [0.0, 0.0, 1238.333333, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '127',data: [0.0, 0.0, 225.4666667, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '128',data: [0.0, 462.0, 1873.2166670000001, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '129',data: [0.133333333, 0.0, 13.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '130',data: [0.0, 0.0, 222.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '131',data: [0.0, 20.0, 214.83333330000002, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '132',data: [0.2, -1.0, -1.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '133',data: [0.0, 0.0, 2017.1666670000002, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '134',data: [0.0, 111.5, 449.02777779999997, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '135',data: [0.0, 0.0, 158.16666669999998, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '136',data: [0.005555556, 0.0, 303.6666667, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '137',data: [0.0, 0.0, 25.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '138',data: [0.05, 0.0, 42.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '139',data: [0.0, 103.625, 1003.416667, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '140',data: [0.2, -1.0, -1.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '141',data: [0.0, 0.0, 272.5, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '142',data: [0.0, 19.0, 344.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '143',data: [0.2, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '144',data: [0.0, 0.0, 852.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '145',data: [0.066666667, 0.0, 780.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '146',data: [0.0, 0.0, 1038.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '147',data: [0.0, 0.0, 573.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '148',data: [0.007142857, 0.0, 1231.233333, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '149',data: [0.0, 0.0, 316.6666667, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '150',data: [0.0075, 0.0, 873.7365079, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '151',data: [0.2, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '152',data: [0.1, 0.0, 16.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '153',data: [0.0, 0.0, 615.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '154',data: [0.0, 0.0, 261.75, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '155',data: [0.033333333, 0.0, 615.8831169, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '156',data: [0.2, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '157',data: [0.0, 0.0, 117.5, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '158',data: [0.2, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '159',data: [0.2, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '160',data: [0.008695652, 0.0, 501.66666669999995, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '161',data: [0.03030303, 58.0, 829.1666667000001, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '162',data: [0.015217391, 9.5, 1223.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '163',data: [0.0, 0.0, 467.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '164',data: [0.008695652, 0.0, 737.1666667000001, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '165',data: [0.0, 0.0, 129.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '166',data: [0.0, 0.0, 63.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '167',data: [0.08666666699999999, 0.0, 125.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '168',data: [0.018181818, 0.0, 684.3333332999999, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '169',data: [0.0, 0.0, 665.4722222, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '170',data: [0.0, 0.0, 487.5, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '171',data: [0.011111111000000002, 0.0, 437.16666669999995, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '172',data: [0.066666667, 0.0, 55.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '173',data: [0.2, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '174',data: [0.0, 41.3, 446.9277778, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '175',data: [0.0, 87.0, 320.5, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '176',data: [0.0, 0.0, 666.0, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '177',data: [0.010743802, 0.0, 405.7095238, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '178',data: [0.2, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '179',data: [0.033333333, 0.0, 163.25, 0.0, 1.0, 0.0, 0.0],shadow: false,},{name: '180',data: [0.0, 0.0, 284.25, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '181',data: [0.2, -1.0, -1.0, 0.0, 1.0, 3.0, 0.0],shadow: false,},{name: '182',data: [0.2, -1.0, -1.0, 0.0, 1.0, 1.0, 0.0],shadow: false,},{name: '183',data: [0.008333333, 0.0, 260.0, 0.0, 1.0, 2.0, 0.0],shadow: false,},{name: '184',data: [0.003174603, 0.0, 279.85714289999993, 1.0, 1.0, 1.0, 0.0],shadow: false,},{name: '185',data: [0.011111111000000002, 0.0, 927.45, 1.0, 1.0, 0.0, 0.0],shadow: false,},{name: '186',data: [0.0, 9.0, 836.8, 1.0, 1.0, 1.0, 0.0],shadow: false,},{name: '187',data: [0.001960784, 293.77820510000004, 3283.1667390000002, 1.0, 1.0, 2.0, 0.0],shadow: false,},{name: '188',data: [0.0, 111.5, 1868.819697, 1.0, 1.0, 1.0, 1.0],shadow: false,},{name: '189',data: [0.007142857, 47.0, 3008.124108, 1.0, 1.0, 1.0, 0.0],shadow: false,},{name: '190',data: [0.2, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0],shadow: false,},{name: '191',data: [0.036190476, 1226.0, 3230.25, 1.0, 1.0, 1.0, 0.0],shadow: false,},{name: '192',data: [0.0, 52.0, 319.0, 1.0, 1.0, 0.0, 0.0],shadow: false,},{name: '193',data: [0.0, 0.0, 42.0, 1.0, 1.0, 1.0, 0.0],shadow: false,},{name: '194',data: [0.009090909, 0.0, 354.3333333, 1.0, 1.0, 0.0, 0.0],shadow: false,},{name: '195',data: [0.002061856, 0.0, 3556.61241, 1.0, 1.0, 0.0, 0.0],shadow: false,},{name: '196',data: [0.0, 56.0, 2563.783333, 1.0, 0.0, 1.0, 1.0],shadow: false,},{name: '197',data: [0.013068182, 112.96078429999999, 3014.018519, 1.0, 1.0, 1.0, 0.0],shadow: false,},{name: '198',data: [0.0, 0.0, 840.2333332999999, 1.0, 0.0, 1.0, 1.0],shadow: false,},{name: '199',data: [0.0, 94.0, 1970.8448050000002, 1.0, 0.0, 1.0, 1.0],shadow: false,},]
});