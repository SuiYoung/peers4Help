// a couple of functions from the React library
import React, { Component } from 'react';

// import components
import Helmet from './Components/_Helmet';
import Header from './Components/_Header';
import Main from './Components/_Main';

// CSS for the `App` component
import './App.scss';

class App extends Component{
  render(){
      return (
        <div className="App">
          <Helmet />
          <Header />
          <Main />
        </div>
      );
  }
}

export default App;
