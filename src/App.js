import React from 'react';
import './App.css';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import {Home, Registrasi, Harapan, Calculator} from './views';
//state management menggunakan redux-thunk 
//state dibuat global yang disimpan dalam varibel store 
//kemudian dikembalikan ke component Harapan
const store = createStore(reducer, applyMiddleware(thunk))

//component App berfunsi sebagai parent untuk menjalakan compponent child 
//(Home, Registrasi, Harapan,Calculator) dengan menerapkan fungsi router
// Link to="/" dan exact path berfungsi membuat arah tampilan awal ketika web dipanggil
//
 function App() {
      
   return(
     //fungsi router diterapkan disini
     <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/registrasi"> Registrasi </Link></li>
            <li><Link to="/harapan"> Harapan </Link></li>
            <li><Link to="/calculator"> Harga </Link></li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/">   
            <Home/>
          </Route>
          <Route path="/registrasi">
            <Registrasi/>
          </Route> 
          <Route path="/harapan">
            <Provider store={store}>
              <Harapan/>
            </Provider>
          </Route>
          <Route path="/calculator">
            <Calculator/>
          </Route>
        </Switch>

      </div>  

      <div className="footer">
          <p>ig.masterscrapy</p>
          <p>speaksma@gmail.com</p>
       </div>
     </Router>
    

   );
 }

 export default App;
