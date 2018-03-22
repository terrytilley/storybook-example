import React from 'react';

const App = ({ title }) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to {title}</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

App.defaultProps = {
  title: 'React',
};

export default App;
