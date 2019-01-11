import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        )
    }
}


//Always write ReactDOM.render code at the last and as it might not find func initially and throw error 
//Serial execution is performed 
ReactDOM.render(
    <App name="Hey" />,
    document.getElementById('root')
)
