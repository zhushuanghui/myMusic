import React, { Component } from 'react';
import HeadBar from '../components/HeadBar';
import './App.css';
import FooterBar from '../components/footerBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeadBar/>
       <div className="container">
       {this.props.children}
       </div>
       <FooterBar/>
      </div>
    );
  }
}

export default App;
