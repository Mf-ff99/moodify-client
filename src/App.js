import React from 'react';
import './App.css';
import Nav from './components/nav'
import Main from './routes/main'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>

      <div className="page-content">
        <Main />
      </div>
    </div>
  );
  }
}

export default App;
