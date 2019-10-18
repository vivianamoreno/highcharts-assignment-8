Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Starfruits', 'Apples','Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Susan and Scott\'s house'
      }
    },
    series: [{
      name: 'Sam',
      data: [6, 1, 0, 4]
    }, {
      name: 'Kira',
      data: [6, 5, 7, 3]
    }]
  });
