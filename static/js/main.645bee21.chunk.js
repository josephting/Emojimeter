(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/nomouth.4b80bb5c.png"},function(e,t,a){e.exports=a.p+"static/media/nerd.b474bae7.png"},function(e,t,a){e.exports=a.p+"static/media/smirk.2ef1a47b.png"},function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),i=a.n(s),c=a(2),r=a(3),l=a(5),u=a(4),m=a(6),d=a(1),b=a(9),p=a.n(b),h=a(10),v=a.n(h),f=a(11),g=a.n(f),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={color:"#facd49",mousedown:!1,start:"",translateX:"",image:""},a.down=a.down.bind(Object(d.a)(Object(d.a)(a))),a.leave=a.leave.bind(Object(d.a)(Object(d.a)(a))),a.up=a.up.bind(Object(d.a)(Object(d.a)(a))),a.move=a.move.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"down",value:function(e){this.setState({mousedown:!0,start:e.pageX})}},{key:"leave",value:function(){this.setState({mousedown:!1})}},{key:"up",value:function(e){this.setState({mousedown:!1,start:e.pageX})}},{key:"move",value:function(e){if(this.state.mousedown){e.preventDefault();var t=e.pageX-385;console.log(t+"here"),t<=0||t>=380||(100===t?this.setState({translateX:t,image:p.a}):200===t?(console.log("reached"),this.setState({translateX:t,image:v.a})):this.setState({translateX:t,image:g.a}))}}},{key:"render",value:function(){var e=this;return console.log(this.state.image),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container__layout"},o.a.createElement("div",{className:"container__bar"}),o.a.createElement("div",{className:"container__emoji"},o.a.createElement("div",{className:"container__emoji-slider",onMouseDown:this.down,onMouseUp:this.up,onMouseLeave:this.leave,onMouseMove:function(t){e.move(t)},style:{transform:"translateX(".concat(this.state.translateX,"px)")}},o.a.createElement("img",{src:this.state.image,width:"25",height:"25",alt:"img failed loading :("})))))}}]),t}(o.a.Component),O=(a(18),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(j,null))}}]),t}(o.a.Component));i.a.render(o.a.createElement(O,{name:"Hey"}),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.645bee21.chunk.js.map