import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showImage:false
    }
  }

  toggle = () => {
    this.setState({
      showImage: !this.setState.showImage,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.toggle} > Mostrar</button>
          {
            this.state.img && (
              <img src={logo} className="App-logo" alt="logo" />
            )
          }

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }


}

export default App;
