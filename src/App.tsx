import React from 'react';
import './App.css';
import ConnectAndFetchImages from './components/connectWallet';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div>
          <img id='logo' src='KK_logo.png'></img>
        </div>
        <ConnectAndFetchImages/>
      </div>
    )
  }
}

export default App;
