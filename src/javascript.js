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
        ['2013', 50, 250, 420, 570],
        ['2014', 150, 460, 650, 870],
        ['2015', 250, 350, 420, 520],
        ['2016', 130, 540, 765, 999],
        ['2017', 20, 250, 250, 250]
    ]);

    var options = {
        //title: 'Company Performance',
        legend: { position: 'top', maxLines: 3, textStyle: { color: 'blue', fontSize: 16 } }, // legendas no topo
        backgroundColor: 'transparent',
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}