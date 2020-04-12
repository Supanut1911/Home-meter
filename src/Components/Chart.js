import React, {Component} from 'react';
import {firebase} from '../firebase'
import LineChart from './LineChart'
// import LineChartPf from './LinChartPf';
// import LineChartPower from './LineChartPower';
// import LineChartVoltage from './LineChartVoltage';
import moment from 'moment'


class Chart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data:[],
      // currentArr: [],

      lastedCurrent: 0,
      lastedPf: 0,
      lastedPower: 0,
      lastedVoltage: 0,
      day: 1,

      wattHourValue: 0.0,

      //day current hour[n]

      resultPowerPerHoursDay1: [],
      resultPowerPerHoursDay2: [],
      resultPowerPerHoursDay3: [],
    }
  }

  componentDidMount = () => {
    this.handleFetch()
    this.handleFetchLastData()
  }

  handleFetch = () => {
    // let database = firebase.database().ref('Power_meterV4').orderByChild('time').equalTo("02:10:35")
    let database = firebase.database().ref('Power_meter')
    database.once('value', async (snapshot) => {
      
      if (snapshot.exists()) {
        
        let dataArray = []
        let x = 1
        let timeStamp = []

        snapshot.forEach((data) => {   
          dataArray.push({
                Date: data.val().Date,
                // Current: data.val().Current,
                // Pf: data.val().Pf,
                Power: data.val().Power,
                // Voltage: data.val().Voltage,
                Xvalue: x,
                // time: data.val().time
            })
          x++
        });
        await this.setState({ 
          data : dataArray,
        })
        this.handlePowerDataPerHours()
        this.claWattPerHour()
    }
    })
  }

  handleFetchLastData = () => {
    let database = firebase.database().ref("Power_meter").limitToLast(1)
    database.once('value', async (snapshot) => { 
      var lastCurrent
      var lastPf
      var lastPower
      var lastVoltage

      snapshot.forEach( (data)=> {
        lastCurrent =  data.val().Current
        lastPf = data.val().Pf
        lastPower = data.val().Power
        lastVoltage = data.val().Voltage
      })

      await this.setState({ 
       lastedCurrent: lastCurrent.toFixed(3),
       lastedPf: lastPf.toFixed(3),
       lastedPower: lastPower.toFixed(3),
       lastedVoltage: lastVoltage.toFixed(3)
      })

    })
  }


  handlePowerDataPerHours = () => {
    var powerArrDay1 = []
    var powerArrDay2 = []
    var powerArrDay3 = []
    var sum = 0

    for(var i = 0; i < this.state.data.length; i++) {
      if(this.state.data[i].Date === "2020-04-11"){
        if (i % 600 == 0){
          // var tmpresult = sum / this.state.currentArr.length
           var tmpresult = sum / 600
           powerArrDay1.push(tmpresult)
          sum = 0
        } else {
          sum += this.state.data[i].Power
        }
      }
      else if (this.state.data[i].Date === "2020-04-12") {
        if (i % 600 == 0){
          // var tmpresult = sum / this.state.currentArr.length
           var tmpresult = sum / 600
           powerArrDay2.push(tmpresult)
          sum = 0
        } else {
          sum += this.state.data[i].Power
        }
      }
      else if (this.state.data[i].Date === "2020-04-13") {
        if (i % 600 == 0){
          // var tmpresult = sum / this.state.currentArr.length
           var tmpresult = sum / 600
           powerArrDay3.push(tmpresult)
          sum = 0
        } else {
          sum += this.state.data[i].Power
        }
      }
      
    }
    this.setState({
      resultPowerPerHoursDay1: powerArrDay1,
      resultPowerPerHoursDay2: powerArrDay2,
      resultPowerPerHoursDay3: powerArrDay3
    })
  }


  claWattPerHour = () => {
    var wattSum = 0.0
    for(var i = 0; i < this.state.data.length; i++) {
      var x = (this.state.data[i].Power === undefined) ? 0 : this.state.data[i].Power;
      
      wattSum += x
    }
    console.log(">>>",wattSum);
    
    var wattHour = wattSum / (1000 * 600)
   
    this.setState({
      wattHourValue: wattHour.toFixed(3)
    })
  }
  
  render(){
    // console.log('>>>',this.state.dch1);
    // console.log(this.state.lastedCurrent);
    // console.log('>>', moment().diff());
    // console.log(moment("2020-03-02").isSame(moment(), 'day'));
    // console.log(moment().format("YYYY-MM-DD"));
    // console.log(moment().subtract(1, 'days').format("YYYY-MM-DD"));
    // console.log("day1:",this.state.resultPowerPerHoursDay1);
    // console.log("day2:",this.state.resultPowerPerHoursDay2);
    // console.log("day3:",this.state.resultPowerPerHoursDay3);
    // console.log("wattHours: ", this.state.wattHourValue)

    return (
      
      <div>
          <div> 
          <br/>
            <center><span class="badge badge-pill badge-primary">Current: {this.state.lastedCurrent} A</span></center>
            <center> <span class="badge badge-pill badge-success">Pf: {this.state.lastedPf} </span></center>
            <center> <span class="badge badge-pill badge-warning">Power: {this.state.lastedPower} W</span> </center>
            <center><span class="badge badge-pill badge-info">Voltage: {this.state.lastedVoltage} V</span></center>
            <center><span class="badge badge-pill badge-danger">Watt-hour: {this.state.wattHourValue} unit</span></center>
            <br/>
          </div>

          <div class="alert alert-primary" role="alert" >
             Power Consumption
          </div>
          <div class="container">
            <center>
            <button type="button" class="btn btn-dark md-4" onClick={() => this.setState({day: 1})} >Day1</button>&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-dark md-4" onClick={() => this.setState({day: 2})}>Day2</button>&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-dark md-4" onClick={() => this.setState({day: 3})}>Day3</button>&nbsp;&nbsp;&nbsp;
            </center>
            <br/>
          </div>
           <div>
            {this.state.day === 1 ? (
              <div><h1>
                  <div className="row">
                     <div className="col-2 align-self-start">
                       <div class="alert alert-danger" role="alert" >
                         Day1
                      </div>
                  </div>
                  </div>
                  </h1>  
                    <LineChart dataCureentResult={this.state.resultPowerPerHoursDay1}/> 
              </div>) 
                : this.state.day === 2 ? (<div><h1><div className="row">
                <div className="col-2 align-self-start">
                  <div class="alert alert-danger" role="alert" >
                    Day2
                 </div>
             </div>
             </div>
                </h1>
                    <LineChart dataCureentResult={this.state.resultPowerPerHoursDay2}/> 
              </div>) 
                :  this.state.day ===3 ? (<div><h1><div className="row">
                <div className="col-2 align-self-start">
                  <div class="alert alert-danger" role="alert" >
                    Day3  
                 </div>
             </div>
             </div>
                </h1>
                  <LineChart dataCureentResult={this.state.resultPowerPerHoursDay3}/> 
              </div>)
                : 'not data '
            }
           </div> 
           <div>
             <h1>Raw Data</h1>
            {this.state.data.map( (item, key) => {
              return <ul key = {key}>
                        <li>
                            Date: {item.Date}&nbsp;&nbsp;
                            Time: {item.time}&nbsp;&nbsp;
                            {/* Current: {item.Current} &nbsp;&nbsp; */}
                            {/* Pf: {item.Pf} &nbsp;&nbsp;  */}
                            Power: {item.Power}&nbsp;&nbsp;
                            {/* Voltage: {item.Voltage}&nbsp;&nbsp; */}
                        </li>
                      </ul>
              }).reverse()}
           </div> 
      </div>
    )
  }
}
export default Chart