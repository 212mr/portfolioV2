//Created by mengruzhang on 2018/4/8.
// learn from http://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/#6-doughnut-chart

$(document).ready(function () {


// theme plug from highchart.js
    Highcharts.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i|Poppins:200,300,400,700,900|Cormorant:400,400i,500,500i,700,700i',
        rel: 'stylesheet',
        type: 'text/css'
    }, null, document.getElementsByTagName('head')[0]);

    Highcharts.theme = {
        colors: ["#f8b62d", "#9296fe", "#8A9EDE", "#3ad6d4", "#499BFC"
            // , '#ff0066',
            // '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
        ],
        chart: {
            backgroundColor: null,
            style: {
                fontFamily: 'Poppins, sans-serif',
                fontWeight:'200',
                padding:'10px 10px'
            }
        },
        title: {
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }
        },
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'rgba(219,219,216,0.8)',
            shadow: false
        },
        legend: {
            itemStyle: {
                fontWeight: 'bold',
                fontSize: '12px'
            }
        },
        xAxis: {
            gridLineWidth: 2,
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        yAxis: {
            minorTickInterval: 'auto',
            title: {
                style: {
                    textTransform: 'uppercase'
                }
            },
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        plotOptions: {
            candlestick: {
                lineColor: '#404048'
            }
        },


        // General
        background2: '#F0F0EA'

    };

// Add the background image to the container
    Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
        proceed.call(this);
        this.container.style.background =
            'url(http://www.highcharts.com/samples/graphics/sand.png)';
    });

// Apply the theme
    Highcharts.setOptions(Highcharts.theme);

//Data now
//THREE
    Highcharts.chart('containerTHREE', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'What do customers want to change?'
        },
        xAxis: {
            categories: ['Logo', 'Color Theme', 'Website Navigation', 'Dinner Menu', 'Advertisement']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Customers Survey'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Customers',
            data: [41, 66, 59, 44, 39]
        }
        // , {
        //     name: 'Male',
        //     data: [35, 43, 17, 9, 30]
        // }
            // , {
            //     name: 'Joe',
            //     data: [3, 4, 4, 2, 5]
            // }
        ]
    });

//FOUR
    Highcharts.chart('containerFOUR', {

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Interviews with Customers and Staff',
            x: -80
        },

        pane: {
            size: '80%',
            padding:'10px 10px'
        },

        xAxis: {
            categories: ["Website","Color Theme", "Advertisement", "Menu", "Logo"],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 40,
            layout: 'vertical',
        },

        series: [{
            name: 'Restaurant Customers',
            data: [91, 37, 39, 51,71],
            pointPlacement: 'on'
        }, {
            name: 'Restaurant Staff',
            data: [78, 19, 37, 91, 44],
            pointPlacement: 'on'
        }]

    });

    //.....
    //end ready
});




