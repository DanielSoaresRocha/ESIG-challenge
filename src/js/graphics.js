// chartPizza
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart () {

    var data = google.visualization.arrayToDataTable([
        ['Categories', 'percentage'],
        ['Toys', 4],
        ['Furniture', 10],
        ['Electronics', 6],
    ]);

    var options = {
        //title: 'My Daily Activities'
        legend: { position: 'top', maxLines: 3, textStyle: { color: 'blue', fontSize: 16 } }, // legendas no topo
        pieHole: 0.4, // espaço no meio
        pieStartAngle: 287, // rotação do gráfico
        pieSliceText: 'value', // tipo do valor que será mostrado
        fontSize: 16,
        backgroundColor: 'transparent',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

// chartArea
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartArea);

function drawChartArea () {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Laptops', 'Headsets', 'Monitors', 'Phones'],
        ['2016', 500, 2500, 4200, 5700],
        ['2017', 1500, 4600, 6500, 8700],
        ['2018', 2500, 3500, 4200, 5200],
        ['2019', 1300, 5400, 7650, 9990],
        ['2020', 200, 2500, 2500, 2500]
    ]);

    var options = {
        //title: 'Company Performance',
        legend: { position: 'top', maxLines: 3, textStyle: { color: 'blue', fontSize: 16 } }, // legendas no topo
        backgroundColor: 'transparent',
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
