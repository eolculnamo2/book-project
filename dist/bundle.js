!function(e){function n(n){for(var o,a,l=n[0],c=n[1],u=n[2],p=0,s=[];p<l.length;p++)a=l[p],r[a]&&s.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(f&&f(n);s.length;)s.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,l=1;l<t.length;l++){var c=t[l];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={0:0},i=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var f=c;i.push([31,1]),t()}({18:function(e,n,t){var o=t(19);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(7)(o,r);o.locals&&(e.exports=o.locals)},19:function(e,n,t){(e.exports=t(6)(!1)).push([e.i,".title {\n  text-align: left;\n  color: #757373;\n  margin: 0;\n  padding-top: 20px;\n  padding-left: 30px; }\n\n#title {\n  border-bottom: solid #8017F7 4px; }\n\nbody {\n  background-color: white;\n  margin: 0;\n  font: arial; }\n\n.loginBtn {\n  background-color: #8017F7;\n  border: none;\n  min-width: 200px;\n  min-height: 30px;\n  font-size: 15px;\n  color: white; }\n\n.loginContainer {\n  margin: 0;\n  background-color: white;\n  color: #C3C3C3;\n  width: 1000px;\n  height: 300px;\n  padding-top: 2px;\n  padding-left: 40px; }\n\n#loginTitle {\n  color: grey;\n  font-size: 22px;\n  padding-top: 8px; }\n\n#loginCreate {\n  font-size: 13px; }\n\n.introContainer {\n  margin: 0;\n  background-color: #8F67CA;\n  color: white;\n  width: 1000px;\n  height: 300px;\n  line-height: 30px;\n  padding: 10px;\n  padding-top: 15px; }\n\n.inputs {\n  border: none;\n  outline: none;\n  border-bottom: solid 2px #8F67CA; }\n\n.introTitle {\n  text-align: center;\n  font-size: 22px;\n  padding-top: 5px; }\n\n.introPage {\n  color: #D1CECE;\n  margin: auto;\n  margin-top: 5em;\n  max-width: 500px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border: solid 2px; }\n\n.fPw {\n  color: #821FF3;\n  font-size: 12px; }\n",""])},21:function(e,n,t){var o=t(22);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(7)(o,r);o.locals&&(e.exports=o.locals)},22:function(e,n,t){(e.exports=t(6)(!1)).push([e.i,"",""])},31:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(10),a=t.n(i),l=t(35),c=t(36),u=(t(18),function(){return r.a.createElement("div",{id:"title"},r.a.createElement("h1",{className:"title"},"BookShelf"))});fetch("/authentication/login",{method:"POST",body:JSON.stringify({username:"this is the username",password:"this is the password"}),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){return e.json()}).then(function(e){return console.log(e)});var f=function(){return r.a.createElement("div",{className:"introPage"},r.a.createElement("div",{className:"introContainer"},r.a.createElement("h1",{className:"introTitle"},"Organize Your Library"),r.a.createElement("ul",null,r.a.createElement("li",null,"Find books with book search"),r.a.createElement("li",null,"Rate your books"),r.a.createElement("li",null,"Books link to google books purchase option"),r.a.createElement("li",null,"Find books with book search"))),r.a.createElement("div",{className:"loginContainer"},r.a.createElement("h1",{id:"loginTitle"},"Login"),r.a.createElement("form",null,r.a.createElement("p",null,"Username ",r.a.createElement("br",null),r.a.createElement("input",{className:"inputs"})),r.a.createElement("p",null,"Password ",r.a.createElement("br",null),r.a.createElement("input",{className:"inputs",type:"password"})),r.a.createElement("div",{className:"signInArea"},r.a.createElement("a",{href:"",className:"fPw"},"Forgot Password?"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"loginBtn"},"Login"))),r.a.createElement("p",{id:"loginCreate"},"Don't have an account? ",r.a.createElement("a",{href:""},"Create Account?"))))};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,b(n).apply(this,arguments))}var t,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(f,null))}}])&&s(t.prototype,o),i&&s(t,i),n}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,n){return!n||"object"!==h(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,n){return(E=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var x=function(e){function n(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=v(this,w(n).call(this))).state={},e}var t,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&E(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){return r.a.createElement("div",null,"Authentication")}}])&&g(t.prototype,o),i&&g(t,i),n}();t(21);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,n){return!n||"object"!==O(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,n){return(S=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var k=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),_(this,P(n).apply(this,arguments))}var t,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&S(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){return r.a.createElement("div",{className:"error-msg"},r.a.createElement(l.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:d}),r.a.createElement(c.a,{exact:!0,path:"/dashboard",component:x})))}}])&&j(t.prototype,o),i&&j(t,i),n}(),C=t(34),T=t(12),N=t.n(T)()();a.a.render(r.a.createElement(C.a,{history:N},r.a.createElement(k,null)),document.getElementById("app"))}});
//# sourceMappingURL=bundle.js.map