import React from 'react';
import './style.css';

//  const Styling = ()=>{
//      return (<div className = "slider"></div>)
//  }

class Background extends React.Component {

    constructor(props) {
        super(props);
        this.state = { color: '#facd49', mousedown: false,start:'',translateX:''}
        console.log(this.state.start + "start");
        // this.state = { x: '', y: '' };
        this.down = this.down.bind(this);
        this.leave = this.leave.bind(this);
        this.up = this.up.bind(this);
        this.move = this.move.bind(this);
        
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
    // change(e) {

    //     // var c;
    //     // c =  this.state.color==='#facd49'?'blue':'#facd49';
    //     //can be used directly color:this.state.color==='#facd49'?'blue':'#facd49';
    //     console.log(this.state.color + "click");
    //     // console.log(e.ClientX,e.ClientY);
    //     this.setState(state => ({ color: state.color === '#facd49' ? 'blue' : '#facd49' }))
    //     console.log(this.state.color + "clickstateafter");

    // }

    // click(e){

    //    this.setState({ x: e.screenX, y: e.screenY });
    //     console.log(this.state.y);
    // }
    down(event){
        
        this.setState({ mousedown: true ,start :event.pageX});
        
        console.log(this.state.start+"chalu");

    }

    leave() {
        this.setState({ mousedown: false })
        
    }
    up(event){
        this.setState({ mousedown: false ,start :event.pageX})
        console.log(event.pageX+"leave");
    }
    move(event){
        if(!this.state.mousedown) return;
        event.preventDefault();
        // console.log(event.pageX+" "+this.state.start);
        console.log("pagex"+event.pageX);
        console.log("mstart"+this.state.start);
        var mo = this.state.start;
        var page = event.pageX;
        var dist = page-mo;
        this.setState({translateX:dist});
        console.log(page-mo+"move");
        
        
        // console.log(this.state.mousedown+"move");
    }
    render() {
        // const { x, y } = this.state;
        // console.log(this.state.mousedown+"down");
        // console.log(this.state.mousedown+"up");
        return (
            
            <div className="container">
                <div className="container__layout">
                    <div className="container__bar"></div>
                    <div className="container__emoji">
                        <div className="container__emoji-slider" onMouseDown={this.down} onMouseLeave={this.leave} onMouseUp={this.up} onMouseMove={(event)=>{this.move(event)}} style={{ transform: `translateX(${this.state.translateX}px)`}} ></div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Background;