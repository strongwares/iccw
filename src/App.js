import React, { Component } from 'react';
import NeighborTable from './components/neighbors';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/trontastic/theme.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <NeighborTable />
      </div>
    );
  }
}

export default App;
