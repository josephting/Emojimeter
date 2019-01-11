import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Always write ReactDOM.render code at the last and as it might not find func initially and throw error 
//Serial execution is performed 
ReactDOM.render(
    <App name="Hey" />,
    document.getElementById('root')
)
