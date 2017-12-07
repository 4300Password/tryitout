function showBoxPlot(chart){
	chart.violinPlots.hide();
	chart.boxPlots.show({reset: true});
	chart.notchBoxes.hide();
	chart.dataPlots.change({
		showPlot: false,
		showBeanLines: false
	});
}
function showNotchedBoxPlot(chart){
	chart.violinPlots.hide();
	chart.notchBoxes.show({reset: true});
	chart.boxPlots.show({
		reset: true,
		showBox: false, 
		showOutliers: true,
		boxWidth: 20,
		scatterOutliers: true
	});
	chart.dataPlots.change({
		showPlot:false,
		showBeanLines:false
	});
}
function showVPU(chart){
	chart.violinPlots.show({
		reset: true,
		clamp: 0
	});
	chart.boxPlots.show({
		reset: true,
		showWhiskers: false,
		showOutliers: false,
		boxWidth: 10,
		lineWidth: 15,
		colors:['#555']
	});
	chart.notchBoxes.hide();
	chart.dataPlots.change({
		showPlot: false,
		showBeanLines: false
	})
}
function showVPC(chart){
	chart.violinPlots.show({
		reset: true,
		clamp: 1
	});
	chart.boxPlots.show({
		reset: true,
		showWhiskers: false,
		showOutliers: false,
		boxWidth: 10,
		lineWidth: 15,
		colors:['#555']
	});
	chart.notchBoxes.hide();
	chart.dataPlots.change({
		showPlot: false,
		showBeanLines: false
	});
}
function showBeanPlot(chart){
	chart.violinPlots.show({
		reset: true,
		width: 75,
		clamp: 0,
		resolution: 30,
		bandwidth:50
	});
	chart.dataPlots.show({
		showBeanLines: true,
		beanWidth:15,
		showPlot:false,
		colors:['#555']
	});
	chart.boxPlots.hide();
	chart.notchBoxes.hide();
}
function showBeeswarmPlot(chart){
	chart.violinPlots.hide();
	chart.dataPlots.show({
		showPlot: true,
		plotType: 'beeswarm',
		showBeanLines: false,
		colors:null
	});
	chart.notchBoxes.hide();
	chart.boxPlots.hide();
}
function showScatterPlot(chart){
	chart.violinPlots.hide();
	chart.dataPlots.show({
		showPlot: true,
		plotType: 40,
		showBeanLines: false,
		colors: null
	});
	chart.notchBoxes.hide();
	chart.boxPlots.hide();
}
function showTrendLines(chart){
	if(chart.dataPlots.options.showLines){
		chart.dataPlots.change({showLines: false});
	} else {
		chart.dataPlots.change({showLines:['median','quartile1','quartile3']});
	}
}
function hideChart(chart){
	chart.boxPlots.hide();
	chart.dataPlots.hide();
	chart.notchBoxes.hide();
	chart.violinPlots.hide();
}