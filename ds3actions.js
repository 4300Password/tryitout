var chart1, chart2, chart3, chart4;
    d3.csv('data/date-shannon.csv', function(error, data) {
        data.forEach(function (d) {d.value = +d.value;});
        chart1 = makeDistroChart({
            data:data,
            xName:'date',
            yName:'value',
            axisLabels: {xAxis: "Date", yAxis: 'Shannon Entropy'},
            selector:"#chart-distro1",
            chartSize:{height:460, width:960},
            constrainExtremes:true});
        chart1.renderBoxPlot();
        chart1.renderDataPlots();
        chart1.renderNotchBoxes({showNotchBox:false});
        chart1.renderViolinPlot({showViolinPlot:false});
    });
    d3.csv('data/date-logbase2.csv', function(error, data) {
        data.forEach(function (d) {d.value = +d.value;});
        chart2 = makeDistroChart({
            data:data,
            xName:'date',
            yName:'value',
            axisLabels: {xAxis: "Date", yAxis: 'Log Base 2 Entropy'},
            selector:"#chart-distro2",
            chartSize:{height:460, width:960},
            constrainExtremes:true});
        chart2.renderBoxPlot();
        chart2.renderDataPlots();
        chart2.renderNotchBoxes({showNotchBox:false});
        chart2.renderViolinPlot({showViolinPlot:false});
    });
    d3.csv('data/domain-shannon.csv', function(error, data) {
        data.forEach(function (d) {d.value = +d.value;});
        chart3 = makeDistroChart({
            data:data,
            xName:'domain',
            yName:'value',
            axisLabels: {xAxis: "Domain", yAxis: 'Shannon Entropy'},
            selector:"#chart-distro3",
            chartSize:{height:460, width:960},
            constrainExtremes:true});
        chart3.renderBoxPlot();
        chart3.renderDataPlots();
        chart3.renderNotchBoxes({showNotchBox:false});
        chart3.renderViolinPlot({showViolinPlot:false});
    });
    d3.csv('data/domain-logbase2.csv', function(error, data) {
        data.forEach(function (d) {d.value = +d.value;});
        chart4 = makeDistroChart({
            data:data,
            xName:'domain',
            yName:'value',
            axisLabels: {xAxis: "Domain", yAxis: 'Log Base 2 Entropy'},
            selector:"#chart-distro4",
            chartSize:{height:460, width:960},
            constrainExtremes:true});
        chart4.renderBoxPlot();
        chart4.renderDataPlots();
        chart4.renderNotchBoxes({showNotchBox:false});
        chart4.renderViolinPlot({showViolinPlot:false});
    });