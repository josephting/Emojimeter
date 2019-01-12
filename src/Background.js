import React from 'react';
import './style.css';

//  const Styling = ()=>{
//      return (<div className = "slider"></div>)
//  }

class Background extends React.Component {

    constructor(props) {
        super(props);
        this.state = { color: '#facd49', mousedown: false, start: '', translateX: '' }
        // console.log(this.state.start + "start");
        //console.log(this.state.translateX+"X");
        // this.state = { x: '', y: '' };
        this.down = this.down.bind(this);
        // this.leave = this.leave.bind(this);
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
    down(a) {

        this.setState({ mousedown: true, start: a.pageX });

        console.log(a.pageX + "chalu");

    }

    // leave() {
    //     this.setState({ mousedown: false })

    // }
    up(b) {
        this.setState({ mousedown: false})
        console.log(b.pageX + " "+this.state.start+"leave");
    }
    move(event) {
        //console.log(this.state.mousedown+"boolean");
        if (!this.state.mousedown) return;
        else {
            event.preventDefault();
            // console.log(event.pageX+" "+this.state.start);
            console.log("pagex" + event.pageX);
            console.log("mstart" + this.state.start);
            const mo = this.state.start;
            const page = event.pageX;
            const dist = page - mo;
            console.log(dist);
            this.setState({ translateX: dist });
            // console.log(page - mo + "move");
        }

        // console.log(this.state.mousedown+"move");
    }
    render() {
        // const { x, y } = this.state;
        // console.log(this.state.mousedown+"down");
        //console.log(this.state.translateX+"X");
        console.log(this.state.start+"render");
        return (

            <div className="container">
                <div className="container__layout">
                    <div className="container__bar"></div>
                    <div className="container__emoji">
                        <div className="container__emoji-slider" onMouseDown={this.down}  onMouseUp={this.up} onMouseMove={(event)=>{this.move(event)}} style={{ transform: `translateX(${this.state.translateX}px)` }} >{this.state.translateX}</div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Background;