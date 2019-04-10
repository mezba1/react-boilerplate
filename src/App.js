import React, { Component } from 'react';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div id='main-container' className='container'>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;