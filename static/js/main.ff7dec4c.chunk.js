(this["webpackJsonpgoogle-search-suggestions"]=this["webpackJsonpgoogle-search-suggestions"]||[]).push([[0],{13:function(e,s,t){},15:function(e,s,t){},16:function(e,s,t){},17:function(e,s,t){"use strict";t.r(s);var n=t(2),c=t.n(n),a=t(4),i=t.n(a),r=t(5),o=t(7),g=t(8),u=t(6),l=(t(13),t(0)),h=function(e){var s=e.listItem,t=e.sentenseChange,n=s.suggestion;return Object(l.jsxs)("li",{className:"listitem",children:[Object(l.jsx)("p",{className:"suggestion",children:n}),Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png",alt:"arrow",className:"arrow-icon",onClick:function(){t(n)}})]})},j=(t(15),function(e){Object(g.a)(t,e);var s=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=s.call.apply(s,[this].concat(c))).state={searchInput:""},e.onSearchInput=function(s){e.setState({searchInput:s.target.value})},e.sentenseChange=function(s){e.setState({searchInput:s})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,s=this.props.suggestionsList,t=this.state.searchInput,n=s.filter((function(e){return e.suggestion.toLowerCase().includes(t.toLowerCase())}));return Object(l.jsx)("div",{className:"bgContainer",children:Object(l.jsxs)("div",{className:"Container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/google-logo.png",alt:"google logo",className:"google-icon"}),Object(l.jsxs)("div",{className:"searchContainer",children:[Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/google-search-icon.png",alt:"search icon",className:"searchIcon"}),Object(l.jsx)("input",{type:"search",className:"input",onChange:this.onSearchInput,value:t,placeholder:"Search Google"})]}),Object(l.jsx)("ul",{className:"listContainer",children:n.map((function(s){return Object(l.jsx)(h,{listItem:s,sentenseChange:e.sentenseChange},s.id)}))})]})]})})}}]),t}(n.Component)),p=j,d=(t(16),[{id:1,suggestion:"Price of Ethereum"},{id:2,suggestion:"Oculus Quest 2 specs"},{id:3,suggestion:"Tesla Share Price"},{id:4,suggestion:"Price of Ethereum today"},{id:5,suggestion:"Latest trends in AI"},{id:6,suggestion:"Latest trends in ML"}]),b=function(){return Object(l.jsx)(p,{suggestionsList:d})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ff7dec4c.chunk.js.map