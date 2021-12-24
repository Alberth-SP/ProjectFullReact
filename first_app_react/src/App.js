import React, {Component} from "react";
import "./App.css";
import  Data  from './components/Data';
import DataForm from './components/DataForm';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

class App extends Component {
 
  render() {
    return (
      <div>
        
        <h1> Lista de Barrios</h1>
          <div className="father">
            <div  > 
              <DataForm  />
              </div> 
            <div className="child2" >               
              <Data /> 
            </div>
            
          </div>
      </div>
    )}  
    

}

export default App;
