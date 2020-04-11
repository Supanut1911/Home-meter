import React , {Component} from 'react';
// import Chart from '../Components/Chart';
import Chart from '../src/Components/Chart'

class App extends Component {

  


  render() {

   

    return(
      <div>
          <nav class="navbar navbar-blue bg-light">
            <h1><a class="navbar-brand" href="/">HOME METER</a></h1>
          </nav>
          {/* <hr /> */}
          <Chart />
          
      </div>
    )
  }
}

export default App;
