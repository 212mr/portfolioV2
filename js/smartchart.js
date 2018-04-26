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
        colors: ["#8d40d4", "#68C4DD", "#8A9EDE", "#3ad6d4", "#499BFC"
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
//ONE
    Highcharts.chart('containerONE', {

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Shopping Preference 2016',
            x: -140
        },

        pane: {
            size: '80%',
            padding:'10px 10px'
        },

        xAxis: {
            categories: ["Large Retailer Sites","Custom Order", "General Online Stores", "Membership Online Store", "Market Places", "Small Shops"],
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
            layout: 'vertical'
        },

        series: [{
            name: 'The General',
            data: [46, 13, 90, 80, 39, 18],
            pointPlacement: 'on'
        }, {
            name: 'The Seniors',
            data: [68, 3, 44, 19, 77, 68],
            pointPlacement: 'on'
        }]

    });

//Two
    Highcharts.chart('containerTWO', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Online Shopping and Delivery Pain Points'
        },
        xAxis: {
            categories: ['Too many shopping emails', 'Lost track of packages', 'Forget purchases', 'Forget to pick up packages', 'Find shopping emails in trash box']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'User Survey'
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
            name: 'Female',
            data: [56, 20, 17, 6, 23]
        }, {
            name: 'Male',
            data: [35, 43, 17, 9, 30]
        }
        // , {
        //     name: 'Joe',
        //     data: [3, 4, 4, 2, 5]
        // }
        ]
    });


    //.....
    //end ready
});




