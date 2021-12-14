import React from 'react';
import './App.css';
import ConnectAndFetchImages from './components/connectWallet';
// const kaijuAddress = "0xcc14dd8e6673fee203366115d3f9240b079a4930" //Currently CryptoDinos https://testnets.opensea.io/assets/0xcc14dd8e6673fee203366115d3f9240b079a4930/663


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
