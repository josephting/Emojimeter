import React from "react";
import logo1 from "./nomouth.png";
import logo2 from "./nerd.png";
import logo3 from "./smirk.png";
//  const Styling = ()=>{
//      return (<div className = "slider"></div>)
//  }

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#facd49",
      mousedown: false,
      start: "",
      translateX: "",
      image: logo1
    };
    // console.log(this.state.start + "start");
    //console.log(this.state.translateX+"X");
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
  down(a) {
    // console.log(a.pageX  + "chalu");

    this.setState({ mousedown: true, start: a.pageX });

    //console.log(a.pageX + "chalu");
  }

  leave() {
    this.setState({ mousedown: false });
  }
  up(b) {
    this.setState({ mousedown: false, start: b.pageX });
    //console.log(b.pageX + "leave");
  }
  move(event) {
    //console.log(this.state.mousedown+"boolean");
    if (!this.state.mousedown) return;
    else {
      event.preventDefault();
      // console.log(event.pageX+" "+this.state.start);
      //console.log("pagex" + event.pageX);
      //console.log("mstart" + this.state.start);
      const mo = 385;
      const page = event.pageX;
      const dist = page - mo;
      console.log(dist + "here");
      if (dist <= 0 || dist >= 380) {
        return;
      } else {
        if (dist === 100) {

          this.setState({ translateX: dist ,image:logo1});
        } else if (dist === 200) {
            console.log("reached");
          this.setState({ translateX: dist ,image:logo2});
        } else {
          this.setState({ translateX: dist ,image:logo3});
        }
        // console.log(page - mo + "move");
      }
    }

    // console.log(this.state.mousedown+"move");
  }
  render() {
    // const { x, y } = this.state;
    // console.log(this.state.mousedown+"down");
    //console.log(this.state.translateX+"X");
    console.log(this.state.image);
    return (
      <div className="container">
        <div className="container__layout">
          <div className="container__bar" />
          <div className="container__emoji">
            <div
              className="container__emoji-slider"
              onMouseDown={this.down}
              onMouseUp={this.up}
              onMouseLeave={this.leave}
              onMouseMove={event => {
                this.move(event);
              }}
              style={{ transform: `translateX(${this.state.translateX}px)` }}
            >
              <img
                src={this.state.image}
                width="25"
                height="25"
                alt="img failed loading :("
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
