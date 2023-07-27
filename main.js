(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),s=t.n(a)()(o());s.push([n.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n:root {\n    --theme-color: #f0b41c;\n    font-size:  1rem;\n}\n\nh1 {\n    color: var(--theme-color);\n}\n\nul {\n    list-style-type: none;\n    line-height: 2.2rem;\n}\n\nul {\n    font-weight: 500;\n}\n\n.side-menu p {\n    font-weight: 500;\n    color: gray;\n}\n\nul.workspaces-list {\n    color: var(--theme-color);\n    list-style-type: disc;\n    list-style-position: inside;\n}\n\n.workspace-create {\n    gap: 2.5rem;\n    display: flex;\n    align-items: center;\n}\n\n.create-workspace-btn {\n    display: flex;\n    align-items: center;\n    background-color: var(--theme-color);\n    border: none;\n    border-radius: 1rem;\n    padding: 0.1rem;\n    font-size: 1rem;\n    transition: transform 0.1s ease-out;\n}\n\nbutton.create-workspace-btn:hover {\n    cursor: pointer;\n    transform: scale(1.2);\n}\n\nul span {\n    color: black;\n}\n\nbody {\n    background-color: rgb(239, 239, 239);\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.main-container {\n    padding: 2rem 3rem;\n    width: 85vw;\n    max-width: 1200px;\n    min-height: 85vh;\n    background-color: rgb(255, 255, 255);\n    border-radius: 3rem;\n    box-shadow: 5px 5px 30px 5px #0000007c;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.side-menu {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    border-right: 1px solid var(--theme-color);\n    padding-right: 1.5rem;\n}\n\n.content-container {\n    \n}\n\n.content-header {\n    padding: 0 3rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    border-bottom: 1px solid var(--theme-color);\n}\n\n.content {\n    padding: 1rem 0 0 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.task {\n    padding: 0.6rem;\n    display: flex;\n    align-items: center;\n    background-color: rgb(255, 249, 234);\n    border-radius: 0.6rem;\n    box-shadow: 3px 3px 5px 0px #0000002c;\n}\n\n.task p {\n    text-align: center;\n    flex: 1;\n}\n\n.down-icon {\n    height: 25px;\n    transition: transform 0.1s ease-in;\n}\n\n.down-icon:hover {\n    transform: scale(1.6);\n    cursor: pointer;\n}\n\n.task input[type=\"checkbox\"] {\n    border: none;\n}",""]);const i=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=i,e.splice(i,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=t(a[s]);e[i].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n{static allInstances=[];constructor(e,t=null,r=null,o=null){this.title=e,this.description=t,this.dueDate=r,this.completed=!1,null!=o?o.tasks.push(this):this.workspace=o,n.allInstances.push(this)}}const e=n;class r{static allInstances=[];constructor(n){this.title=n,this.tasks=[],r.allInstances.push(this)}}const o=r;var a=t(379),s=t.n(a),i=t(795),c=t.n(i),l=t(569),d=t.n(l),p=t(565),u=t.n(p),m=t(216),f=t.n(m),h=t(589),v=t.n(h),g=t(426),y={};y.styleTagTransform=v(),y.setAttributes=u(),y.insert=d().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=f(),s()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;const b=new o("workspace1"),x=new o("workspace2");new e("task1","task1 description","date",b),new e("task2","task2 description","date",b),new e("task3","task3 description","date",b),new e("task4","task4 description","date",x),function(n){const e=document.querySelector(".workspaces-list");n.forEach((n=>{let t=document.createElement("li"),r=document.createElement("span");r.textContent=n.title,t.appendChild(r),e.appendChild(t)}))}(o.allInstances),function(n){const e=document.querySelector(".content");n.forEach((n=>{let t=document.createElement("div");t.setAttribute("class","task");let r=document.createElement("input");r.setAttribute("type","checkbox"),t.appendChild(r);let o=document.createElement("p");o.textContent=n.title,t.appendChild(o);let a=document.createElement("p");a.textContent=n.dueDate,t.appendChild(a);let s=document.createElement("img");s.setAttribute("src","./images/menu-down.svg"),s.setAttribute("class","down-icon"),t.appendChild(s),e.appendChild(t)}))}(e.allInstances)})()})();