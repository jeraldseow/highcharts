function builtDrillDown() {

	$('#container-drilldown').highcharts({
		
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Menu items consumed on the 8th of October, 2016'
		},
		subtitle: {
			text: 'Click the slices to view individual menu item consumption breakdowns.'
		},
		plotOptions: {
			series: {
				dataLabels: {
					enabled: true,
					format: '{point.name}: {point.y:.1f}%'
				}
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			name: "Food Categories",
			colorByPoint: true,
			data: [{
				name: "Mains",
				y: 56.33,
				drilldown: "Mains"
			}, {
				name: "Sides",
				y: 24.03,
				drilldown: "Sides"
			}, {
				name: "Drinks",
				y: 10.38,
				drilldown: "Drinks"
			}, {
				name: "Desserts",
				y: 9.26,
				drilldown: "Desserts"
			},]
		}],
		drilldown: {
			series: [{
				name: "Mains",
				id: "Mains",
				data: [
					["Chicken Chop", 24.13],
					["Fish n Chips", 17.2],
					["Hong Kong style fried noodles", 8.11],
					["Instant noodles w Egg", 5.33],
					["Mui Fun", 1.56]
				]
			}, {
				name: "Sides",
				id: "Sides",
				data: [
					["Cha Siew Pao", 6.45],
					["Siew Mai", 5.56],
					["Fried Guo Tie", 4.53],
					["Fried You Tiao", 3.93],
					["French Toast", 3.56]
				]
			}, {
				name: "Drinks",
				id: "Drinks",
				data: [
					["Iced Milk Tea", 3.09],
					["Coffee", 2.54],
					["Tea", 2.46],
					["Iced Lemon Tea", 1.27],
					["Iced Milo", 1.02]
				]
			}, {
				name: "Desserts",
				id: "Desserts",
				data: [
					["Iced Kachang", 2.56],
					["Iced Mango Sago w Pomelo", 0.77],
					["Mango Pudding", 0.42],
					["Tao Suan", 0.3],
					["Iced Bubur Cha Cha", 0.29],
					["Pulut Hitam", 0.26],
					["Chendol", 0.17]
				]
			}]
		}
	});
}

/*
 * Call the function to built the chart when the template is rendered
 */
Template.drillDownDemo.rendered = function() {    
	builtDrillDown();
}