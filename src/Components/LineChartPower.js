// import React, { Component } from 'react';
// import CanvasJSReact from '../assets/canvasjs.react';
// // ../../assets/canvasjs.react
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
// class LineChart extends Component {
// 	render() {
// 		const options = {
// 			animationEnabled: true,
// 			exportEnabled: true,
// 			theme: "light2", // "light1", "dark1", "dark2"
// 			title:{
// 				text: "Power of day"
// 			},
// 			axisY: {
// 				title: "Power Value",
// 				includeZero: false,
// 				suffix: "W"
// 			},
// 			axisX: {
// 				title: "Hours",
// 				prefix: "",
// 				interval: 1
// 			},
// 			data: [{
// 				type: "line",
// 				toolTipContent: "Week {x}: {y}W",
// 				dataPoints: [
// 					{ x: 1, y: this.props.dataPowerResult[1] },
// 					{ x: 2, y: this.props.dataPowerResult[2] },
// 					{ x: 3, y: this.props.dataPowerResult[3] },
// 					{ x: 4, y: this.props.dataPowerResult[4] },
// 					{ x: 5, y: this.props.dataPowerResult[5] },
// 					{ x: 6, y: this.props.dataPowerResult[6] },
// 					{ x: 7, y: this.props.dataPowerResult[7] },
// 					{ x: 8, y: this.props.dataPowerResult[8] },
// 					{ x: 9, y: this.props.dataPowerResult[9] },
// 					{ x: 10, y: this.props.dataPowerResult[10] },
// 					{ x: 11, y: this.props.dataPowerResult[11] },
// 					{ x: 12, y: this.props.dataPowerResult[12] },                
// 				]
// 			}]
// 		}
		
// 		return (
// 		<div>
// 			{/* <h1>Home Meter</h1> */}
// 			    <CanvasJSChart options = {options} 
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }

// export default LineChart;                           