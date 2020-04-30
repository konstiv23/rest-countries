(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{18:function(e,a,t){e.exports=t(34)},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l);t(23),t(24),t(25);var o=function(){return r.a.createElement("div",{className:"search-and-filter"},r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"search-icon-wrapper"},r.a.createElement("i",{className:"search-icon fas fa-search"})),r.a.createElement("input",{type:"text",placeholder:"Search for a country..."})),r.a.createElement("select",{className:"world-region",defaultValue:"filter by region"},r.a.createElement("option",{value:"filter by region",hidden:!0},"Filter by Region"),r.a.createElement("option",{value:"africa"},"Africa"),r.a.createElement("option",{value:"america"},"America"),r.a.createElement("option",{value:"asia"},"Asia"),r.a.createElement("option",{value:"europe"},"Europe"),r.a.createElement("option",{value:"oceania"},"Oceania")))},i=t(8);t(26);var s=function(e){var a=e.flag,t=e.name,n=e.population,l=e.region,c=e.capital;return r.a.createElement("div",{className:"CountryCard"},r.a.createElement("img",{src:a,alt:"flag"}),r.a.createElement("div",{className:"card-text"},r.a.createElement("h2",null,t),r.a.createElement("div",null,r.a.createElement("strong",null,"Population: "),n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement("div",null,r.a.createElement("strong",null,"Region: "),l),r.a.createElement("div",null,r.a.createElement("strong",null,"Capital: "),c)))};var u={};function m(e,a){return u[e.name]&&u[a.name]?u[e.name]<u[a.name]?-1:u[e.name]>u[a.name]?1:0:u[e.name]&&!u[a.name]?-1:!u[e.name]&&u[a.name]?1:e.name.localeCompare(a.name)}u["Russian Federation"]=1,u["United States of America"]=2,u.Brazil=3,u.Iceland=4;var E=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){var e=new XMLHttpRequest;e.open("GET","https://restcountries.eu/rest/v2/all"),e.send(),e.onreadystatechange=function(a){if(4===e.readyState&&200===e.status){var t=JSON.parse(e.responseText),n=performance.now();t.sort(m);var c=performance.now();console.log("Call to doSomething took "+(c-n)+" milliseconds.");for(var o=[],i=0;i<t.length;i++)o.push(r.a.createElement(s,{key:i,flag:t[i].flag,name:t[i].name,population:t[i].population,region:t[i].region,capital:t[i].capital}));l(o)}}}),[]),r.a.createElement("div",{className:"countries-grid"},t)};t(27);var p=function(){var e=Object(n.useState)(function(){var e=window.location.href;if(-1===e.indexOf("details"))return null;var a=(e=e.replace(/\/$/,"")).lastIndexOf("/");return e.substring(a+1)}()),a=Object(i.a)(e,2),t=a[0];return a[1],r.a.createElement("div",{className:"CountryDetails"},r.a.createElement("a",{href:"/"},r.a.createElement("span",null,"\u2190"),"Back"),r.a.createElement("h1",null,"Hello ",t))},d=t(15),f=t(5);t(28);function v(){return r.a.createElement("h1",{class:"error404"},"Error 404: resource not found")}var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Where in the world?")),r.a.createElement("main",null,r.a.createElement(d.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/rest-countries/details"},r.a.createElement(p,null)),r.a.createElement(f.a,{exact:!0,path:"/rest-countries/"},r.a.createElement(o,null),r.a.createElement(E,null)),r.a.createElement(f.a,{path:"*"},r.a.createElement(v,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d0fefc52.chunk.js.map