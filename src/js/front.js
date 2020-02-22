
// labels: ['a','b','c','d','e','f','g','h','i'],
// data: [{0,-1,1,-1,-1,+2,+1,5,-1}],

var ctr = document.getElementById('canvas');
var homechart = new Chart(ctr, {
type: 'line',
				data: {
					labels: ['a','b','c','d','e'],
					datasets: [{
							label: "Dataset with string point data",

							data: [
							{
								x: 0, 
								y: 9
							}, 
								{
									x: 1, 
									y: 2
								}, 
								{
									x: 2,
									y: -9
								}, 
								{
									x: 3,
									y: 7
								},
								{
									x: 4,
									y: 3
								}, 
								],  
								fill: true,
								backgroundColor: ['rgba(0,175,224,.05)'],
								borderColor: ['rgba(0,175,224,.4'],
								borderWidth: 1
							}, 
							
							{

							label: "Dataset with date object point data",
							data: [{
									x: 0, 
									y: 5
								}, 
									{
										x: 1, 
										y: 4
									}, 
									{
										x: 2,
										y: 20
									}, 
									{
										x: 3,
										y: 5
							},
							{
								x: 4,
								y: 20
							}, 
							],
							fill: true,
							backgroundColor: ['rgba(230,66,122,.1)'],
							borderColor: ['rgba(230,66,122,.4)'],
							borderWidth: 1
					}]
			},

	options: {

	responsive: true,
	title: {
			display: false,
			text: "",
			fontSize: 9
	},

		layout: {
			padding: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}
		},

		scales: {

			yAxes: [{
				display: true,
				scaleLabel: {
						display: true,
						labelString: ''
				}
			}],
			xAxes: [{
					display: false,
					scaleLabel: {
							display: false,
							labelString: ''
					}
			}]
		}

	}

});



	var pchrt = document.getElementById('canvas-project');
	var projectChart = new Chart(pchrt, {
	type: 'line',
					data: {
						labels: ['1','2','3','4','5'],
						datasets: [{
								label: "Dataset with string point data",

								data: [
								{
									x: 0, 
									y: 9
								}, 
									{
										x: 1, 
										y: 2
									}, 
									{
										x: 2,
										y: -9
									}, 
									{
										x: 3,
										y: 7
									},
									{
										x: 4,
										y: 3
									}, 
									],  
									fill: true,
									backgroundColor: ['rgba(0,175,224,.05)'],
									borderColor: ['rgba(0,175,224,.4'],
									borderWidth: 1
								}, 
								
								{

								label: "Dataset with date object point data",
								data: [{
										x: 0, 
										y: 5
									}, 
										{
											x: 1, 
											y: 4
										}, 
										{
											x: 2,
											y: 20
										}, 
										{
											x: 3,
											y: 5
								},
								{
									x: 4,
									y: 20
								}, 
								],
								fill: true,
								backgroundColor: ['rgba(230,66,122,.1)'],
								borderColor: ['rgba(230,66,122,.4)'],
								borderWidth: 1
						}]
				},
		options: {

		responsive: true,
		title: {
				display: true,
				text: "",
				fontSize: 9
		},

			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}
			},

			scales: {

				yAxes: [{
					display: true,
					scaleLabel: {
							display: true,
							labelString: 'Parametro'
					}
				}],
				xAxes: [{
						display: true,
						scaleLabel: {
								display: true,
								labelString: 'Tiempo'
						}
				}]
			}

		}

	});
