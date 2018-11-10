import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  getData() {
    $.post(
      'http://miedweb.org/helloworld4/index.php',
      { },
      (data, status) => {
        alert("Get data: " + data + "\nStatus: " + status);
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world 4</h1>
        <button onClick={this.getData}>Get data from Manufrog</button>
      </div>
    );
  }
}

export default App;
