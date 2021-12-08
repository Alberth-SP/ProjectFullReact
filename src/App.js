import React, {Component} from "react";
import "./App.css";
import data from './dataset/data.json';
import Data from './components/Data';


class App extends Component {

  state = {
    data
  }
 
  render() {
    return <div>
      <h1> Lista de Barrios</h1>
      <Data listData={this.state.data}/>

    </div>
  }
}

export default App;
