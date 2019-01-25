import React from "react";
import logo1 from "./emojis/e1.png";
import logo2 from "./emojis/e2.png";
import logo3 from "./emojis/e3.png";
import logo4 from "./emojis/e4.png";
import logo5 from "./emojis/e5.png";
import logo6 from "./emojis/e6.png";
import logo7 from "./emojis/e7.png";
import logo8 from "./emojis/e8.png";
import logo9 from "./emojis/e9.png";
import logo10 from "./emojis/e10.png";
import logo11 from "./emojis/e11.png";
import logo12 from "./emojis/e12.png";
import logo13 from "./emojis/e13.png";
import logo14 from "./emojis/e14.png";
import logo15 from "./emojis/e15.png";
import logo16 from "./emojis/e16.png";
import logo17 from "./emojis/e17.png";
import logo18 from "./emojis/e18.png";
import logo19 from "./emojis/e19.png";
import logo20 from "./emojis/e20.png";
import logo21 from "./emojis/e21.png";
import logo22 from "./emojis/e22.png";
import logo23 from "./emojis/e23.png";
import logo24 from "./emojis/e24.png";
import logo25 from "./emojis/e25.png";
import logo26 from "./emojis/e26.png";
import logo27 from "./emojis/e27.png";
import logo28 from "./emojis/e28.png";
import logo29 from "./emojis/e29.png";
import logo30 from "./emojis/e30.png";
import logo31 from "./emojis/e31.png";
import logo32 from "./emojis/e32.png";
import logo33 from "./emojis/e33.png";

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
      image: logo1,
      animation: false,
      first: false
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
    if (this.state.animation) {
      this.setState({ mousedown: true, animation: false });
    } else {
      //console.log("pocha");
      if (this.state.first === false) {
        this.setState({ mousedown: true, start: a.pageX, first: true });
      } else {
        this.setState({ mousedown: true});
      }
    }

    //console.log(a.pageX + "chalu");
  }

  leave() {
    this.setState({ mousedown: false });
  }
  up(b) {
    this.setState({ mousedown: false, animation: true });
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
      //changed from mo =385 to this.page.start as it supports in production build
      const mo = this.state.start;
     // console.log(mo + "mo");
      const page = event.pageX;
      //console.log(page + "page");
      const dist = page - mo;
     // console.log(dist + "here");
      if (dist < 0 || dist > 380) {
        return;
      } else {
        if (dist <= 12 && dist >= 0) {
          //console.log(event.pageX);
          this.setState({ translateX: dist, image: logo1 });
        } else if (dist <= 25 && dist >= 13) {
          this.setState({ translateX: dist, image: logo2 });
        } else if (dist <= 37 && dist >= 26) {
          this.setState({ translateX: dist, image: logo3 });
        } else if (dist <= 49 && dist >= 38) {
          this.setState({ translateX: dist, image: logo4 });
        } else if (dist <= 61 && dist >= 50) {
          this.setState({ translateX: dist, image: logo5 });
        } else if (dist <= 74 && dist >= 62) {
          this.setState({ translateX: dist, image: logo6 });
        } else if (dist <= 87 && dist >= 75) {
          this.setState({ translateX: dist, image: logo7 });
        } else if (dist <= 99 && dist >= 88) {
          this.setState({ translateX: dist, image: logo8 });
        } else if (dist <= 109 && dist >= 100) {
          this.setState({ translateX: dist, image: logo9 });
        } else if (dist <= 119 && dist >= 110) {
          this.setState({ translateX: dist, image: logo10 });
        } else if (dist <= 131 && dist >= 120) {
          this.setState({ translateX: dist, image: logo11 });
        } else if (dist <= 144 && dist >= 132) {
          this.setState({ translateX: dist, image: logo12 });
        } else if (dist <= 159 && dist >= 145) {
          this.setState({ translateX: dist, image: logo13 });
        } else if (dist <= 172 && dist >= 160) {
          this.setState({ translateX: dist, image: logo14 });
        } else if (dist <= 185 && dist >= 173) {
          this.setState({ translateX: dist, image: logo15 });
        } else if (dist <= 200 && dist >= 186) {
          this.setState({ translateX: dist, image: logo16 });
        } else if (dist <= 213 && dist >= 201) {
          this.setState({ translateX: dist, image: logo17 });
        } else if (dist <= 225 && dist >= 214) {
          this.setState({ translateX: dist, image: logo18 });
        } else if (dist <= 235 && dist >= 226) {
          this.setState({ translateX: dist, image: logo19 });
        } else if (dist <= 246 && dist >= 236) {
          this.setState({ translateX: dist, image: logo20 });
        } else if (dist <= 258 && dist >= 247) {
          this.setState({ translateX: dist, image: logo21 });
        } else if (dist <= 269 && dist >= 259) {
          this.setState({ translateX: dist, image: logo22 });
        } else if (dist <= 281 && dist >= 270) {
          this.setState({ translateX: dist, image: logo23 });
        } else if (dist <= 297 && dist >= 282) {
          this.setState({ translateX: dist, image: logo24 });
        } else if (dist <= 311 && dist >= 298) {
          this.setState({ translateX: dist, image: logo25 });
        } else if (dist <= 319 && dist >= 312) {
          this.setState({ translateX: dist, image: logo26 });
        } else if (dist <= 329 && dist >= 320) {
          this.setState({ translateX: dist, image: logo27 });
        } else if (dist <= 339 && dist >= 330) {
          this.setState({ translateX: dist, image: logo28 });
        } else if (dist <= 349 && dist >= 340) {
          this.setState({ translateX: dist, image: logo29 });
        } else if (dist <= 359 && dist >= 350) {
          this.setState({ translateX: dist, image: logo30 });
        } else if (dist <= 369 && dist >= 360) {
          this.setState({ translateX: dist, image: logo31 });
        } else if (dist <= 375 && dist >= 370) {
          this.setState({ translateX: dist, image: logo32 });
        } else {
          this.setState({ translateX: dist, image: logo33 });
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
    // console.log(this.state.image);

    // if (this.state.animation) {
    return (
      <div className="container">
        <div className="container__layout">
          <div className="container__bar" />
          <div className="container__emoji">
            <div
              // className={
              //   this.state.animation
              //     ? "container__emoji-slider-animation"
              //     : "container__emoji-slider"
              // }
              onMouseDown={this.down}
              onMouseUp={this.up}
              onMouseLeave={this.leave}
              onMouseMove={event => {
                this.move(event);
              }}
              style={{ transform: `-moz-translateX(${this.state.translateX}px)` ,transform: `translateX(${this.state.translateX}px)`}}
            >
              {this.state.animation ? (
                <div>
                  <img
                    src={this.state.image}
                    className="container__emoji-slider"
                    width="25"
                    height="25"
                    alt="img failed loading :("
                  />
                  <img
                    src={this.state.image}
                    className="container__emoji-slider-animation"
                    width="25"
                    height="25"
                    alt="img failed loading :("
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={this.state.image}
                    className="container__emoji-slider"
                    width="25"
                    height="25"
                    alt="img failed loading :("
                  />
                </div>
              )}
              {/* <img
                src={this.state.image}
                width="25"
                height="25"
                alt="img failed loading :("
                /> */}
            </div>
          </div>
        </div>
      </div>
    );
    //Another way of rendering animation effect 
    // } else {
    //   return (
    //     <div className="container">
    //       <div className="container__layout">
    //         <div className="container__bar" />
    //         <div className="container__emoji">
    //           <div
    //             // className={
    //             //   this.state.animation
    //             //     ? "container__emoji-slider-animation"
    //             //     : "container__emoji-slider"
    //             // }
    //             onMouseDown={this.down}
    //             onMouseUp={this.up}
    //             onMouseLeave={this.leave}
    //             onMouseMove={event => {
    //               this.move(event);
    //             }}
    //             style={{ transform: `translateX(${this.state.translateX}px)` }}
    //           >
    //             <img
    //               src={this.state.image}
    //               className="container__emoji-slider"
    //               width="25"
    //               height="25"
    //               alt="img failed loading :("
    //             />
    //             <img
    //               src={this.state.image}
    //               className="container__emoji-slider"
    //               width="25"
    //               height="25"
    //               alt="img failed loading :("
    //             />
    //             {/* <img
    //             src={this.state.image}
    //             width="25"
    //             height="25"
    //             alt="img failed loading :("
    //           /> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
  }
}

export default Background;
