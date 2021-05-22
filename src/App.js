import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './assets/style.css'


import Navbar from './components/navbar'
import Home from './components/home'
import OurCar from './components/our_car'
import OurStore from './components/our_store'
import OurContact from './components/our_contact'
import Footer from './components/footer'


class App extends React.Component {
  render(){
    return (

      <div class=" overflow-hidden m-0">

          <Router>

          <Navbar/>
          <Route path="/home" component={Home} />
          <Route path="/our_car" component={OurCar} />
          <Route path="/our_store" component={OurStore} />
          <Route path="/our_contact" component={OurContact} />
          <Route path="/footer" component={Footer} />


          <Footer/>

          </Router>
          
         
         
      </div>

    );
  }
}



export default App;
