/* First chart */
Highcharts.chart('container1', {

    title: {
        text: 'Seats Held by Women in National Parliaments in Latin American Countries (%), 2000-2015'
    },

    subtitle: {
        text: 'Source: <a href="http://data.un.org/_Docs/SYB/PDFs/SYB62_T05_201905_Seats%20held%20by%20Women%20in%20Parliament.pdf">UN Data</a>'
    },

    xAxis: {
    categories: ['2000', '2005', '2010', '2015']
   },

    yAxis: {
        title: {
            text: 'Percentage'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
        }
    },

    series: [{
        name: 'Chile',
        data: [10.8, 12.5, 14.2, 15.8]
    }, {
        name: 'Uruguay',
        data: [12.1, 12.1, 14.1, 13.1]
    }, {
        name: 'Argentina',
        data: [28.0, 33.7, 38.5, 36.2]
    }, {
        name: 'Brazil',
        data: [5.7, 8.6, 8.8, 9.0]
    }, {
        name: 'Colombia',
        data: [11.8, 12.0, 8.4, 19.9]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

/* Second chart */
Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Tertiary Gross Enrollment Ratio (f/m per 100 pop.) in 2010'
    },
    subtitle: {
        text: 'Source: <a href="http://data.un.org/en/index.html">UN Data per country</a>'
    },
    xAxis: {
        categories: ['Chile', 'Uruguay', 'Argentina', 'Brazil', 'Colombia'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Ratio',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -35,
        y: 260,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Male',
        data: [66.2, 34.5, 59.1, 31.9, 37.6]
    }, {
        name: 'Female',
        data: [71.5, 58.0, 89.2, 42.2, 41.3]
    }]
});
