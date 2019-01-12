import React from 'react';
import './style.css';

//  const Styling = ()=>{
//      return (<div className = "slider"></div>)
//  }

class Background extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { color: '#facd49' }
        console.log(this.state.color+"start");
        // this.state = { x: '', y: '' };
        this.slide = this.slide.bind(this);
        
    }
    // componentDidMount(){
    //     document.addEventListener('click',this.Drag);
    // }
    // componentWillUnmount(){
    //     document.addEventListener('click',this.Drag);
    // }
    // Drag(){
    //     // this.setState({ color: "blue", translate: "translateX(50px)" });
    //     alert("Clicked");
    // }
    slide() {
        
        var c;
        c =  this.state.color==='#facd49'?'blue':'#facd49';

        console.log(this.state.color+"click");
        this.setState({color:c})
        console.log(this.state.color+"clickstateafter");
    }

    render() {
        console.log(this.state.color+"render");
        return (
            
            <div className="container">
                <div className="container__layout">
                    <div className="container__bar"></div>
                    <div className="container__emoji">
                        <div className="container__emoji-slider" onClick={this.slide} style={{background:this.state.color}} ></div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Background;