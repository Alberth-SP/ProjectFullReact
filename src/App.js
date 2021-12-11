import React, {Component} from "react";
import "./App.css";
import data from './dataset/data.json';
import Data from './components/Data';
import DataForm from './components/DataForm';

class App extends Component {

  state = {
    data
  }

  addData = (code, name, danger) => {

    const newData = {
      id: code,
      name: name,
      dangerous: danger
    }
    this.setState({
      data : [...this.state.data, newData]
    });

  }

  deleteData = (code) => {
    const dts = this.state.data.filter( d => d.id !== code);
    
    this.setState({
     data: dts
    })
  }

  updateData = (code) => {
    const dts = this.state.data.map( it => {
      if(it.id === code){
        it.dangerous = (it.dangerous +1) %2;
      }
      return it;
    })
    console.log(this.state.data.length)

    this.setState({ data: dts})
  }
 
  render() {
    return <div>
      <h1> Lista de Barrios</h1>
      <div className="father">
        <div  > <DataForm addData={this.addData} /> </div> 
        <div className="child2" > 
          
          <Data  
            listData={this.state.data}
            deleteData={this.deleteData}
            updateData={this.updateData}
          /> 
        </div>
      </div>
    </div>
  }
}

export default App;
