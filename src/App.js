import React from "react";
import "./App.css";



/* function Saludo(props){
  return (
    <div id="componente"> Hola {props.mytext}</div>
  );
} */

class Saludo extends React.Component {
  state= {
    show: true
  }

  changeState = () => {
    this.setState({ show: !(this.state.show) });
  }
  render(){
    if (this.state.show){
      return <div id="componente"> Hola {this.props.mytext} 
      {/* la funcion changeState no reconoce al definido de arriba, para q reconozca se tiene q enlazar */}
      <button onClick={ this.changeState }> Hidden</button></div>

    }
    else{
      
    return <div id="componente"> <button onClick={this.changeState} > Show</button></div>
    }
  }
}
// componente usando funcion flecha
//const App = () => <div> Hola mundo desde arrow function <Saludo/> </div>;
// componente usando una funcion normal

function App (){
  return (
    <div> Hola mundo desde una funcion normal. 
      <Saludo mytext="Albert" />
      <Saludo mytext="Anita" />
      <Saludo mytext="Paola" />
      <Saludo mytext="Carlos" />
    </div>
  );
}
//componente usando una clase
/*
class App extends React.Component {
  render () {
    return <div> hola mundo desde una clase. <Saludo/></div>
  }
}*/


export default App;
