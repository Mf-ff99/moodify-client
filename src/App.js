import React from 'react';
import './components/css/App.css';
import Nav from './components/nav'
import Main from './routes/main'
import BGAnimation from './components/bg-animation/bg-animation'

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

      <div className="bg-animation">
        <BGAnimation />
      </div>
    </div>
  );
  }
}

export default App;
