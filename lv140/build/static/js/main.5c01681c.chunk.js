(this.webpackJsonplv140=this.webpackJsonplv140||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"order":1,"type":"brand","name":"correos","year":1890,"description":"Lorem ipsum si amet dolore amat si et fula","snake":"snake-bottom-clear"},{"order":2,"type":"brand","name":"santander","year":1899,"snake":"snake-bottom-clear"},{"order":3,"type":"full-image","snake":"snake-bottom-clear","image":"1881"},{"order":4,"type":"info","title":"La Vanguardia cambia su sede","description":"Lorem ipsum si amet dolore amat si et fula","year":1899,"snake":"snake-bottom-clear-no-margin"},{"order":5,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-clear"},{"order":6,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-right"},{"order":7,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-left"},{"order":8,"type":"full-image","snake":"snake-bottom-dark","image":"1888"},{"order":9,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-dark"},{"order":10,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-dark"},{"order":11,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-dark"},{"order":12,"type":"void","snake":"snake-right"},{"order":13,"type":"void","snake":"snake-left"},{"order":14,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-clear"}]')},21:function(e){e.exports=JSON.parse('[{"order":1,"type":"brand","name":"correos","year":1890,"snake":"snake-bottom-clear"},{"order":2,"type":"brand","name":"santander","year":1899,"snake":"snake-bottom-clear"},{"order":3,"type":"brand","name":"santander","year":1899,"snake":"snake-bottom-clear"},{"order":4,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-right"},{"order":5,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-left"},{"order":6,"type":"full-image","snake":"snake-bottom-dark","image":"1888"},{"order":7,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-dark"},{"order":8,"type":"void","snake":"snake-right"},{"order":9,"type":"void","snake":"snake-left"},{"order":10,"type":"full-image","snake":"snake-bottom-clear","image":"1881"},{"order":11,"type":"info","title":"La Vanguardia cambia su sede","description":"Lorem ipsum si amet dolore amat si et fula","year":1899,"snake":"snake-bottom-clear"},{"order":12,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-right"},{"order":13,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-left"},{"order":14,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-dark"},{"order":15,"type":"brand","name":"correos","year":1899,"snake":"snake-bottom-dark"},{"order":16,"type":"void","snake":"snake-right"}]')},22:function(e){e.exports=JSON.parse('[{"order":1,"type":"brand","name":"correos","year":1890},{"order":2,"type":"snake"},{"order":3,"type":"void"},{"order":4,"type":"more","name":"correos"},{"order":5,"type":"snake"},{"order":6,"type":"brand","name":"correos","year":1890},{"order":7,"type":"brand","name":"correos","year":1890},{"order":8,"type":"snake"},{"order":9,"type":"more","name":"correos"},{"order":10,"type":"more","name":"correos"},{"order":11,"type":"snake"},{"order":12,"type":"full-image","image":"1888"},{"order":13,"type":"brand","name":"correos","year":1890},{"order":14,"type":"snake"},{"order":15,"type":"void"},{"order":16,"type":"more","name":"correos"},{"order":17,"type":"snake"},{"order":18,"type":"full-image","image":"1881"},{"order":19,"type":"info","title":"Nace nuestra primera edici\xf3n","year":1890},{"order":20,"type":"snake"},{"order":21,"type":"info-void"},{"order":22,"type":"brand","name":"correos","year":1890},{"order":23,"type":"snake"},{"order":24,"type":"info-desc","description":"Lorem ipsum si amet dolore amat si et fula"}]')},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a.n(n),o=a(18),i=a.n(o),c=(a(31),a(25)),d=a(7),l=a(8),m=a(10),b=a(9),j=a(23),p=a(2),h=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={id:r.props.match.params.id},r}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"content",children:["Detail  ",this.state.id]})})}}]),a}(s.a.Component),y=a(19),k=a.n(y),u=a(20),O=a(21),g=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={data:[],itemToFlip:0},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=null;e=window.innerWidth>=990?u:O,this.setState({data:e,windowWidth:window.innerWidth})}},{key:"flip",value:function(e){this.setState({itemToFlip:e})}},{key:"flipClick",value:function(e){this.state.itemToFlip===e&&(e=0),this.setState({itemToFlip:e})}},{key:"unflip",value:function(){this.setState({itemToFlip:0})}},{key:"render",value:function(){var e=this;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:(this.state.windowWidth,"tablet-container"),children:Object(r.jsx)("div",{className:"row",children:this.state.data.map((function(t){return Object(r.jsx)("div",{className:"col-desktop-tablet",children:Object(r.jsxs)("div",{className:"item-container-desktop-tablet",style:{backgroundImage:"url('./img/snake/"+t.snake+".png')"},children:["brand"===t.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(k.a,{isFlipped:e.state.itemToFlip===t.order,flipDirection:"horizontal",children:[Object(r.jsxs)("div",{onMouseEnter:function(a){e.flip(t.order)},onClick:function(a){e.flipClick(t.order)},className:"brand-front",children:[Object(r.jsx)("div",{className:"brand-year-desktop-tablet",children:Object(r.jsx)("h2",{children:t.year})}),Object(r.jsx)("div",{className:"brand-logo-desktop-tablet",children:Object(r.jsx)("img",{alt:t.name,title:t.name,src:"./img/logos/"+t.name+".png"})})]}),Object(r.jsx)("div",{onClick:function(t){e.unflip()},className:"brand-back",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"brand-logo-desktop-tablet",children:Object(r.jsx)("img",{alt:t.name,title:t.name,src:"./img/logos/"+t.name+".png"})}),Object(r.jsxs)("div",{children:[t.description," ",Object(r.jsx)("a",{href:"/"+t.name,children:"Saber m\xe1s"})]})]})})]})}),"full-image"===t.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"full-image-desktop-tablet",onMouseEnter:function(t){e.unflip()},children:Object(r.jsx)("img",{alt:t.image,title:t.image,src:"./img/full-images/"+t.image+".png"})})}),"info"===t.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{onMouseEnter:function(t){e.unflip()},children:[Object(r.jsx)("div",{className:"info-title-desktop-tablet",children:Object(r.jsx)("h3",{children:t.title})}),Object(r.jsx)("div",{className:"info-description-desktop-tablet",children:t.description}),Object(r.jsx)("div",{className:"info-year-desktop-tablet",children:Object(r.jsx)("h1",{children:t.year})})]})}),"void"===t.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"full",onMouseEnter:function(t){e.unflip()}})})]})},t.order)}))})})})}}]),a}(s.a.Component),x=a(22),f=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={data:x,itemToFlip:0},r}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"mobile-container",children:Object(r.jsx)("div",{className:"row-mobile",children:this.state.data.map((function(e){return Object(r.jsxs)(r.Fragment,{children:["brand"===e.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"col-mobile",children:[Object(r.jsx)("div",{className:"brand-year-mobile",children:Object(r.jsx)("h2",{children:e.year})}),Object(r.jsx)("div",{className:"brand-logo-mobile",children:Object(r.jsx)("img",{className:"logo-mobile",alt:e.name,title:e.name,src:"./img/logos/"+e.name+".png"})})]})}),"snake"===e.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"col-snake-mobile dashed-bottom",style:{backgroundImage:"url('./img/snake/snake-mobile.png')"}})}),"void"===e.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"col-mobile  transparent dashed-bottom"})}),"more"===e.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"col-mobile transparent dashed-bottom",children:Object(r.jsx)("div",{className:"more-mobile transparent",children:Object(r.jsx)("a",{href:"/"+e.name,className:"more-link-mobile",children:"Saber m\xe1s"})})})}),"full-image"===e.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"col-mobile ",children:Object(r.jsx)("div",{className:"full-image-image-mobile",children:Object(r.jsx)("img",{alt:e.image,title:e.image,src:"./img/full-images/"+e.image+".png"})})})}),"info"===e.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"col-mobile dashed-bottom",children:[Object(r.jsx)("div",{className:"info-year-mobile",children:Object(r.jsx)("h1",{className:"mobileh1",children:e.year})}),Object(r.jsx)("div",{className:"info-title-mobile",children:Object(r.jsx)("h3",{children:e.title})})]})}),"info-desc"===e.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"col-mobile",children:Object(r.jsx)("div",{className:"info-description-mobile dashed-bottom",children:e.description})})}),"info-void"===e.type&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"col-mobile  transparent"})})]})}))})})})}}]),a}(s.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={windowWidth:window.innerWidth},r}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"content",children:[this.state.windowWidth>=3670&&Object(r.jsx)(g,{}),this.state.windowWidth<3670&&Object(r.jsx)(f,{})]})})}}]),a}(s.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("div",{className:"logo-lv",children:Object(r.jsx)("img",{alt:"LV140",title:"LV140",src:"./img/logo.png"})})}),Object(r.jsx)(p.a,{exact:!0,path:"/",component:v}),Object(r.jsx)(p.a,{exact:!0,path:"/:id",render:function(e){return Object(r.jsx)(h,Object(c.a)({},e))}})]})})}}]),a}(s.a.Component);var F=function(){return Object(r.jsx)(N,{})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5c01681c.chunk.js.map