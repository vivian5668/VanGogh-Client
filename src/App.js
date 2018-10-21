import React, { Component } from 'react';
import MenuAppBar from './Components/MenuAppBar';
import MainRouter from './Components/MainRouter';


class App extends Component {
  render() {
    return (
      <div>
        <MenuAppBar />
        <p></p>
        <MainRouter />
      </div>
    );
  }
}

export default App;
