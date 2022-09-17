import React from 'react';

import {createRoot} from 'react-dom/client';

import App from './App';

// ReactDom no longer supported by React
// ReactDOM.render(<App/>, document.getElementById('root'));


const container = document.getElementById('root');

const root = createRoot(container);

//The root can be used to render a React element into the DOM with render:
root.render(<App/>);
