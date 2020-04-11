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
// 				text: "Voltage of day"
// 			},
// 			axisY: {
// 				title: "Voltage Value",
// 				includeZero: false,
// 				suffix: "V"
// 			},
// 			axisX: {
// 				title: "Hours",
// 				prefix: "",
// 				interval: 1
// 			},
// 			data: [{
// 				type: "line",
// 				toolTipContent: "Week {x}: {y}V",
// 				dataPoints: [
// 					{ x: 1, y: this.props.dataVoltageResult[0] },
// 					{ x: 2, y: this.props.dataVoltageResult[1] },
// 					{ x: 3, y: this.props.dataVoltageResult[2] },
// 					{ x: 4, y: this.props.dataVoltageResult[3] },
// 					{ x: 5, y: this.props.dataVoltageResult[4] },
// 					{ x: 6, y: this.props.dataVoltageResult[5] },
// 					{ x: 7, y: this.props.dataVoltageResult[6] },
// 					{ x: 8, y: this.props.dataVoltageResult[7] },
// 					{ x: 9, y: this.props.dataVoltageResult[8] },
// 					{ x: 10, y: this.props.dataVoltageResult[9] },
// 					{ x: 11, y: this.props.dataVoltageResult[10] },
// 					{ x: 12, y: this.props.dataVoltageResult[11] },
// 					{ x: 13, y: this.props.dataVoltageResult[12] },
// 					{ x: 14, y: this.props.dataVoltageResult[13] },
// 					{ x: 15, y: this.props.dataVoltageResult[14] },
// 					{ x: 16, y: this.props.dataVoltageResult[15] },
// 					{ x: 17, y: this.props.dataVoltageResult[16] },
// 					{ x: 18, y: this.props.dataVoltageResult[17] },
// 					{ x: 19, y: this.props.dataVoltageResult[18] },
// 					{ x: 20, y: this.props.dataVoltageResult[19] },
// 					{ x: 21, y: this.props.dataVoltageResult[20] },
// 					{ x: 22, y: this.props.dataVoltageResult[21] },
// 					{ x: 23, y: this.props.dataVoltageResult[22] },
// 					{ x: 24, y: this.props.dataVoltageResult[23] },
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