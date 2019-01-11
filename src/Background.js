import React from 'react';
import './style.css';

//  const Styling = ()=>{
//      return (<div className = "slider"></div>)
//  }

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: '', translate: '' }
        this.slide = this.slide.bind(this);

    }

    slide() {
        this.setState({ color: "blue", translate: "translateX(50px)" })
    }

    render() {
        return (
            <div className="container">
                <div className="container__layout">
                    <div className="container__bar"></div>
                    <div className="container__emoji">
                        <div className="container__emoji-slider" onClick={this.slide} style={{ background: this.state.color, transform: this.state.translate }}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Background;