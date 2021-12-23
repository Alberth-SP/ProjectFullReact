import React, {Component} from "react";
import "./App.css";
import data from './dataset/data.json';
import  Data  from './components/Data';
import DataForm from './components/DataForm';
import Test from './components/Test';
import Comments from './components/Comments';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//const mongoose = require('mongoose');
//import * as mongoose from "mongoose";
//const mongodbURI= "mongodb+srv://alberthsp:Mpg_qwerty123@clustertest.bvxhd.mongodb.net/db_barrios?retryWrites=true&w=majority";
//console.log("jajaj",mongoose)
//const connection = async () => {
//mongoose.connect(mongodbURI,{}).then( () => console.log("Connecting ...")).catch( (e) => console.log(e))
//}
/*
mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:true,
  useCreateIndex:true
  })
  .then( (db) => console.log("Mongo DB is connect .."))
  .catch((e) => console.log(e))
  */
//connection()
class App extends Component {


  /*
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
  */


 
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
