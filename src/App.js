import React, { Component } from 'react';
import NeighborTable from './components/neighbors';
import Properties from './util/Properties';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/trontastic/theme.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';


class App extends Component {

  componentWillMount() {
    console.log('App component will mount');
    this.properties = new Properties();
  }

  render() {
    console.log('App render');
    const haveServers = this.properties.servers && this.properties.servers.length > 0;
    return (
        <div className="App" >
        {
          haveServers &&
          <NeighborTable />
        }
        {
          !haveServers && <h1> No Servers, show prompt </h1>
        }
      </div>
    );
  }
}

export default App;
