(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[0],{137:function(e,t,a){},245:function(e,t,a){e.exports=a(391)},250:function(e,t,a){},252:function(e,t,a){},391:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(192),i=a.n(o),c=(a(250),a(121)),s=a.n(c),l=a(193),u=a(194),d=a(195),m=a(209),f=a(210),h=(a(252),a(84)),p=a.n(h),v=(a(137),a(196)),x=a(205),y=a.n(x),g=a(207),C=a.n(g),b=a(208),k=a.n(b),w="#ff7f7f",E=window.innerWidth<750,D=function(e,t){var a="";return e>0?a=t?"#009090":w:e<0&&(a=t?w:"#009090"),a},S=E?{fontSize:12,display:"flex",alignItems:"center",justifyContent:"center"}:{margin:5};var O=function(e){var t=e.currentCount-e.previousCount||0,a=Math.trunc(100*t/e.previousCount*10)/10||0,n=t>0?"+":"";return r.a.createElement("span",{className:"status",style:S},e.text,": ",e.currentCount," (",r.a.createElement("span",{style:{color:D(t,e.reverse)}},n,t," / ",n,a,"%"),")",function(e,t){return e>0?r.a.createElement(y.a,{htmlColor:t?"#009090":w}):e<0?r.a.createElement(C.a,{htmlColor:t?w:"#009090"}):r.a.createElement(k.a,{htmlColor:"#efdea4"})}(t,e.reverse))},j=window.innerWidth<750,T=j?"horizontal":"vertical",W=j?window.innerWidth:void 0,R=j?{top:20,right:10,bottom:30,left:40}:{top:0,right:30,bottom:80,left:60},Z={axis:{ticks:{line:{stroke:"#c5c5c5"},text:{fill:"#c5c5c5",fontFamily:"Oswald"}}},labels:{text:{fontFamily:"Oswald",fontWeight:400}},legends:{text:{textShadow:"1px 1px 1px #111",fontFamily:"Oswald"}},grid:{line:{stroke:"#c5c5c5",strokeWidth:1,strokeDasharray:"5 5"}},tooltip:{container:{background:"#333",border:"1px solid ".concat("#c5c5c5"),fontSize:12,textShadow:"1px 1px 1px #111"}}},F=function(e){return p()(e).format("DD MMM")},B=function(e,t,a){return{axis:j?"y":"x",value:e,lineStyle:{stroke:t,strokeWidth:1},legend:a,textStyle:{fill:"#c5c5c5",fontSize:12,textShadow:"1px 1px 1px #111"}}},M=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,F(e.data.Date)),r.a.createElement("p",{style:{color:"#efdea4"}},"Confirmed: ",e.data.Confirmed),r.a.createElement("p",{style:{color:"#ff7f7f"}},"Deaths: ",e.data.Deaths),r.a.createElement("p",{style:{color:"#009090"}},"Recovered: ",e.data.Recovered))},z=function(e){return"Confirmed"===e.data.id?"black":"white"},L=j?void 0:{tickRotation:45,format:F},N=j?{}:void 0,I=j?{tickRotation:45,format:F}:void 0;var A=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"2020 Romanian COVID-19 cases"),r.a.createElement("div",{style:{margin:5}},r.a.createElement(O,{text:"Latest confirmed",currentCount:e.current.Confirmed,previousCount:e.previous.Confirmed}),r.a.createElement(O,{text:"Latest deaths",currentCount:e.current.Deaths,previousCount:e.previous.Deaths}),r.a.createElement(O,{reverse:!0,text:"Latest recovered",currentCount:e.current.Recovered,previousCount:e.previous.Recovered})),r.a.createElement("div",{className:"chart-bar",style:{height:600,width:W}},r.a.createElement(v.a,{data:e.data,keys:["Recovered","Deaths","Confirmed"],colors:["#009090","#ff7f7f","#efdea4"],indexBy:"Date",layout:T,labelSkipHeight:10,labelSkipWidth:10,enableGridX:j,enableGridY:!j,margin:R,theme:Z,axisBottom:L,axisLeft:I,axisTop:N,labelTextColor:z,markers:[B(j?"2020-03-03T00:00:00Z":"2020-03-04T00:00:00Z","#009090","First recoveries"),B(j?"2020-03-15T00:00:00Z":"2020-03-16T00:00:00Z","#efdea4","Emergency state"),B(j?"2020-03-21T00:00:00Z":"2020-03-22T00:00:00Z","#ff7f7f","First deaths"),B(j?"2020-03-24T00:00:00Z":"2020-03-25T00:00:00Z","#efdea4","Full lockdown")],tooltip:M,legends:[{itemTextColor:"#c5c5c5",dataFrom:"keys",anchor:"bottom",direction:"row",translateX:0,translateY:70,itemsSpacing:0,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:10,effects:[{on:"hover",style:{itemOpacity:1}}]}]})))},G=function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={data:[],current:{},previous:{}},n}return Object(d.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"componentWillMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n,r,o,i,c,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/country/romania/status/confirmed/live");case 2:return t=e.sent,e.next=5,fetch("https://api.covid19api.com/country/romania/status/recovered/live");case 5:return a=e.sent,e.next=8,fetch("https://api.covid19api.com/country/romania/status/deaths/live");case 8:return n=e.sent,e.next=11,t.json();case 11:return r=e.sent,e.next=14,a.json();case 14:return o=e.sent,e.next=17,n.json();case 17:i=e.sent,c=r.map((function(e,t){var a=Object.assign({},e);return a.Confirmed=e.Cases,a.Recovered=o[t].Cases,a.Deaths=i[t].Cases,a})),l=Object.assign({},c[c.length-1]),u=Object.assign({},c[c.length-2]),c.push({Date:p()().add(1,"d").toString()}),this.setState({data:c,current:l,previous:u});case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,{data:this.state.data,current:this.state.current,previous:this.state.previous}),r.a.createElement("div",{className:"footer"},"By Andrei Bucin"))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[245,1,2]]]);
//# sourceMappingURL=main.9126fdf6.chunk.js.map