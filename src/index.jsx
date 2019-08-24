import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <h1>React starter</h1>;

ReactDOM.render(<App />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') module.hot.accept();
