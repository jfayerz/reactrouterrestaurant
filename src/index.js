import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './components/Routes';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// Home component
// moved to components folder

// About component
// moved to components folder

// Menu
// moved to components folder

// NavBar
// moved to components folder

// Routes
// moved to components folder

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
//registerServiceWorker.unregister();
