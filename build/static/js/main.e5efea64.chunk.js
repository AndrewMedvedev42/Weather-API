(this["webpackJsonpyour-new-project"]=this["webpackJsonpyour-new-project"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),o=c(4),r=c.n(o),a=c(2),i=c(5),j=c.n(i),l=c(0);var u=function(e){var t,c=e.name,s=Object(n.useState)([]),o=Object(a.a)(s,2),r=o[0],i=o[1],u=Object(n.useState)(),h=Object(a.a)(u,2),b=h[0],d=h[1],O=Object(n.useState)([]),f=Object(a.a)(O,2),m=f[0],p=f[1],x="https://restcountries.eu/rest/v2/name/".concat(c);function g(e){return 1==e?"Tommorow":2==e?"After tommorow":"After the day after tomorrow"}return Object(n.useEffect)((function(){fetch(x).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e[0].capital;return p(e[0]),d(t),fetch("https://goweather.herokuapp.com/weather/".concat(t))})).then((function(e){return e.json()})).then((function(e){console.log(e),i(e)})).catch((function(e){return alert(e)}))}),[x]),r.forecast?t=r.forecast.map((function(e){var t=e.day,c=e.temperature,n=e.wind;return Object(l.jsxs)("div",{className:"forecastSlot",children:[Object(l.jsx)("h1",{children:g(t)}),Object(l.jsxs)("h2",{children:["Temp: ",c]}),Object(l.jsxs)("h2",{children:["Wind: ",n]})]},t)})):console.log("No forecast"),Object(l.jsx)(j.a,{children:Object(l.jsxs)("section",{className:"weatherDetails",children:[Object(l.jsxs)("article",{className:" slotstyle currentWeather",children:[Object(l.jsx)("h1",{children:"".concat(m.name,": ").concat(b)}),Object(l.jsx)("h2",{children:r.description}),Object(l.jsxs)("h2",{children:["Temp: ",r.temperature]}),Object(l.jsxs)("h2",{children:["Wind: ",r.wind]})]}),Object(l.jsxs)("section",{className:"slotstyle",children:[Object(l.jsx)("h1",{children:"Daily Forecast"}),Object(l.jsx)("div",{className:"forecastSection",children:t})]})]})})};c(12);var h=function(){var e=Object(n.useState)(),t=Object(a.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)("Usa"),r=Object(a.a)(o,2),i=r[0],j=r[1];return console.log(c),Object(l.jsxs)("section",{className:"mainSection",children:[Object(l.jsxs)("section",{className:"slotstyle inputSection",children:[Object(l.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},autoComplete:"on"}),Object(l.jsx)("button",{onClick:function(){j(c)},children:"Press"})]}),Object(l.jsx)(u,{name:i})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.e5efea64.chunk.js.map