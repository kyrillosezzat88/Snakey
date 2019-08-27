import React, { Component } from 'react';
import {Route , BrowserRouter , Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Menu from './Components/Menu'
import Chef from './Components/chef'
import Contact from './Components/Contact'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About} />
            <Route path="/Menu" component={Menu} />
            <Route path ='/Chef' component={Chef} />
            <Route path='/Contact' component={Contact} />
          </Switch>
          <Footer />
          <div className="preload">
           <div className="loader">
               <span> Loading...</span>
           </div>
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
