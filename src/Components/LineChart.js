import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
// ../../assets/canvasjs.react
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
			dataRaw : []
        }
    }

	

	render() {
		// console.log('===',this.props.dataRaw);
		
		
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Power of day"
			},
			axisY: {
				title: "Current Value",
				includeZero: false,
				suffix: "A"
			},
			axisX: {
				title: "Hours",
				prefix: "",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Hour {x}: {y}mA",
				// dataPoints: this.props.dataRaw
				dataPoints: [
					{ x: 0.00, y: this.props.dataCureentResult[0] },
					{ x: 1.00, y: this.props.dataCureentResult[1]},
					{ x: 2.00, y: this.props.dataCureentResult[2] },
					{ x: 3.00, y: this.props.dataCureentResult[3] },
					{ x: 4.00, y: this.props.dataCureentResult[4] },
					{ x: 5.00, y: this.props.dataCureentResult[5] },
					{ x: 6.00, y: this.props.dataCureentResult[6] },
					{ x: 7.00, y: this.props.dataCureentResult[7] },
					{ x: 8.00, y: this.props.dataCureentResult[8] },
					{ x: 9.00, y: this.props.dataCureentResult[9]},
					{ x: 10.00, y: this.props.dataCureentResult[10] },
					{ x: 11.00, y: this.props.dataCureentResult[11] },
					{ x: 12.00, y: this.props.dataCureentResult[12] },
					{ x: 13.00, y: this.props.dataCureentResult[13] },
					{ x: 14.00, y: this.props.dataCureentResult[14] },
					{ x: 15.00, y: this.props.dataCureentResult[15] },
					{ x: 16.00, y: this.props.dataCureentResult[16] },
					{ x: 17.00, y: this.props.dataCureentResult[17] },
					{ x: 18.00, y: this.props.dataCureentResult[18]},
					{ x: 19.00, y: this.props.dataCureentResult[19]},
					{ x: 20.00, y: this.props.dataCureentResult[20]},
					{ x: 21.00, y: this.props.dataCureentResult[21]},
                    { x: 22.00, y: this.props.dataCureentResult[22]},
                    { x: 23.00, y: this.props.dataCureentResult[23]},
				]
			}]
		}
		
		return (
		<div>
			{/* <h1>Home Meter</h1> */}
			    <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;                           