import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Comments  from './components/Comments';
import { Provider } from 'react-redux';
import store from './redux/store';


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={ <App/>}>

          </Route>
          <Route exact path="/comments" element={ <Comments/> }>

          </Route>
        </Routes>
      </Router>
    </Provider>
    
  </div>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
