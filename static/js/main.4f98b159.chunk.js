(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),c=a.n(s),r=a(2),i=a(3),l=a(5),u=a(4),m=a(6),d=a(1),p=(a(15),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={color:"#facd49",mousedown:!1,start:"",translateX:""},a.down=a.down.bind(Object(d.a)(Object(d.a)(a))),a.up=a.up.bind(Object(d.a)(Object(d.a)(a))),a.move=a.move.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"down",value:function(e){this.setState({mousedown:!0,start:e.pageX}),console.log(e.pageX+"chalu")}},{key:"up",value:function(e){this.setState({mousedown:!1}),console.log(e.pageX+" "+this.state.start+"leave")}},{key:"move",value:function(e){if(this.state.mousedown){e.preventDefault(),console.log("pagex"+e.pageX),console.log("mstart"+this.state.start);var t=this.state.start,a=e.pageX-t;console.log(a),this.setState({translateX:a})}}},{key:"render",value:function(){var e=this;return console.log(this.state.start+"render"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container__layout"},o.a.createElement("div",{className:"container__bar"}),o.a.createElement("div",{className:"container__emoji"},o.a.createElement("div",{className:"container__emoji-slider",onMouseDown:this.down,onMouseUp:this.up,onMouseMove:function(t){e.move(t)},style:{transform:"translateX(".concat(this.state.translateX,"px)")}},this.state.translateX))))}}]),t}(o.a.Component)),b=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,null))}}]),t}(o.a.Component);c.a.render(o.a.createElement(b,{name:"Hey"}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.4f98b159.chunk.js.map