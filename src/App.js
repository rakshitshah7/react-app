import React, { Component } from 'react';
import AddRemoveLayout from './AddRemoveLayout';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.onLayoutChange = this.onLayoutChange.bind(this);
    }

    onLayoutChange(layout)  {
    console.log(layout);
    }

    render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src="https://kleermail.com/wp-content/uploads/2017/09/Logo.svg" className="App-logo" alt="logo" />
        </header>
        <AddRemoveLayout onLayoutChange={this.onLayoutChange}/>
      </div>
    );
  }

}

export default App;
