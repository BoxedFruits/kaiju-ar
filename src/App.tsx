import React from 'react';
import './App.css';
import ConnectAndFetchImages from './components/connectWallet';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ConnectAndFetchImages/>
        </header>
      </div>
    )
  }
}

export default App;
