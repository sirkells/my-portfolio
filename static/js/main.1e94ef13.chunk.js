(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/project1.bf56edc6.png"},function(e,t,n){e.exports=n.p+"static/media/project2.f7e79c7d.png"},function(e,t,n){e.exports=n.p+"static/media/project3.7bded960.png"},function(e,t,n){e.exports=n.p+"static/media/email_icon.fd99f8e3.png"},function(e,t,n){e.exports=n.p+"static/media/github_icon.e2a62886.png"},function(e,t,n){e.exports=n.p+"static/media/linkedin_icon.56ab00e8.png"},function(e,t,n){e.exports=n.p+"static/media/twitter_icon.512536cb.png"},function(e,t,n){e.exports=n.p+"static/media/david.eb06a318.jpg"},,,function(e,t,n){e.exports=n(41)},,,,,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(15),o=n.n(l),r=n(43),c=n(44),s=n(45),u=n(16),m=n.n(u),p=n(4),h=n(5),d=n(7),f=n(6),g=n(8),k=function(e){var t=e.joke,n=t.setup,a=t.punchline;return i.a.createElement("p",{style:{margin:20}},n," ",i.a.createElement("em",null,a))},b=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={joke:{},jokes:[]},n.fetchTenJokes=function(){fetch("https://official-joke-api.appspot.com/random_ten").then(function(e){return e.json()}).then(function(e){n.setState({jokes:e})})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://official-joke-api.appspot.com/random_joke").then(function(e){return e.json()}).then(function(t){e.setState({joke:t})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Highlighted Joke"),i.a.createElement(k,{joke:this.state.joke}),i.a.createElement("button",{onClick:this.fetchTenJokes},"Fetch Jokes"),i.a.createElement("h3",null,"Ten Joke"),this.state.jokes.map(function(e){return i.a.createElement(k,{key:e.id,joke:e})}))}}]),t}(a.Component),j=(n(36),n(42)),v=(n(37),n(17)),E=n.n(v),y=n(18),O=n.n(y),w=n(19),I=n.n(w),x=[{id:1,title:"Example React Application",description:"A React App that I built, involving JS and core web dev concepts!",link:"https://github.com/sirkells/example",image:E.a},{id:2,title:"REST API",description:"A REST API that I built for the job finder application",link:"https://github.com/sirkells/Projecty",image:O.a},{id:3,title:"A Blog Application",description:"A simple blog application with authentication built with flask",link:"https://github.com/sirkells/kongblog",image:I.a}],A=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.project,t=e.title,n=e.description,a=e.link,l=e.image;return i.a.createElement("div",{style:{display:"inline-block",width:300,margin:10}},i.a.createElement("h3",null,t),i.a.createElement("img",{src:l,alt:"",style:{width:200,height:120}}),i.a.createElement("p",null,n),i.a.createElement("a",{href:a},a))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Highlighted Projects"),i.a.createElement("div",null,x.map(function(e){return i.a.createElement(A,{key:e.id,project:e})})))}}]),t}(a.Component),B=n(20),C=n.n(B),J=n(21),T=n.n(J),P=n(22),_=n.n(P),R=n(23),M=n.n(R),D=[{id:1,link:"mailto:kelechi_igbokwe@yahoo.com",image:C.a},{id:2,link:"https://github.com/sirkells",image:T.a},{id:3,link:"https://linkedin.com/in/kelechi-igbokwe",image:_.a},{id:4,link:"https://twitter.com/ka2la2chaha3",image:M.a}],H=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.socialProfile,t=e.link,n=e.image;return i.a.createElement("span",null,i.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:n,alt:"social-profile",style:{width:30,height:30,margin:5}})))}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Connect with me?"),i.a.createElement("div",null,D.map(function(e){return i.a.createElement(H,{key:e.id,socialProfile:e})})))}}]),t}(a.Component),W=n(24),N=n.n(W),G=["a Software Developer","a football lover","a lover of Music","an enterprising young man"],K=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={titleIndex:0,fadeIn:!0},n.animateTitle=function(){n.titleInterval=setInterval(function(){var e=n.state,t=e.titleIndex,a=(e.fadeIn,(t+1)%G.length);n.setState({titleIndex:a,fadeIn:!0}),n.timeOut=setTimeout(function(){return n.setState({fadeIn:!1})},2e3)},4e3)},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeOut=setTimeout(function(){return e.setState({fadeIn:!1})},2e3),this.animateTitle()}},{key:"componentWillUnmount",value:function(){clearInterval(this.titleInterval),clearInterval(this.timeOut)}},{key:"render",value:function(){var e=this.state,t=e.titleIndex,n=e.fadeIn,a=G[t];return i.a.createElement("p",{className:n?"title-fade-in":"title-fade-out"},"I am ",a)}}]),t}(a.Component),U={display:"inline-block",margin:10,marginBottom:30},V=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={displayBio:!1},n.toggleBio=function(){n.setState({displayBio:!n.state.displayBio})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.displayBio;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h3",{style:U},i.a.createElement(j.a,{to:"/"},"Home")),i.a.createElement("h3",{style:U},i.a.createElement(j.a,{to:"/jokes"},"Jokes")),i.a.createElement("h3",{style:U},i.a.createElement(j.a,{to:"/musicaly"},"Musicaly"))),i.a.createElement("img",{src:N.a,alt:"profile",className:"profile"}),i.a.createElement("h1",null,"Hello!"),i.a.createElement("p",null,"My name is Kelechiiiii "),i.a.createElement(K,null),i.a.createElement("p",null,"I have great desire to work on innovative and exciting projects"),e?i.a.createElement("div",null,i.a.createElement("p",null,"I live in Siegburg, Germany and i code Everyday"),i.a.createElement("p",null,"I enjoy working with Javascript and Python "),i.a.createElement("p",null,"For Javascript i use React and Vue while for Python i use Django and Flask"),i.a.createElement("button",{onClick:this.toggleBio},"Show less")):i.a.createElement("div",null,i.a.createElement("button",{onClick:this.toggleBio},"Read more")),i.a.createElement("hr",null),i.a.createElement(S,null),i.a.createElement("hr",null),i.a.createElement(F,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(r.a,{history:m()()},i.a.createElement(c.a,null,i.a.createElement(s.a,{exact:!0,path:"/",component:V}),i.a.createElement(s.a,{path:"/jokes",component:b}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[27,1,2]]]);
//# sourceMappingURL=main.1e94ef13.chunk.js.map