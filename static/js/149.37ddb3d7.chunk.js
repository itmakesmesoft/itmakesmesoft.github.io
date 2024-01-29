(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[149],{8149:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var n=s(2050),r=s(4138),a=s(1883),i=s(950),c=s(184);const o=e=>{const t=e.info;return(0,c.jsxs)("div",{className:"w-full flex flex-col items-center",children:[(0,c.jsx)(i.a,{info:t.detail}),(0,c.jsxs)("section",{className:"bg-[#a0c846] w-full flex flex-col items-center",children:[(0,c.jsx)("img",{src:s(2898),alt:"",width:"1300",height:"1000",className:"w-full h-full max-w-[1000px]"}),t.detail.simImageSrc&&(0,c.jsx)(a.Z,{data:t.detail.simImageSrc})]}),(0,c.jsxs)("section",{className:"w-full bg-[#fbfbfb]",children:[(0,c.jsx)(r.Z,{tech:t.detail.tech}),(0,c.jsx)(n.Z,{info:t.detail.whatIDid})]})]})}},950:(e,t,s)=>{"use strict";s.d(t,{a:()=>T});var n,r,a,i,c,o,l,d,p=s(2791),m=s(168),x=s(6444),u=s(1062),f=s(184);const h=x.ZP.h1(n||(n=(0,m.Z)(["\n  font-weight: 700;\n"]))),g=x.ZP.h2(r||(r=(0,m.Z)(["\n  font-weight: 700;\n  color: black;\n"]))),b=x.ZP.div(a||(a=(0,m.Z)(["\n  padding-bottom: 10px;\n  color: #696969;\n"]))),v=x.ZP.div(i||(i=(0,m.Z)(["\n  margin-top: 20px;\n  color: #696969;\n"]))),w=x.ZP.div(c||(c=(0,m.Z)(["\n  margin-top: 10px;\n  color: #696969;\n"]))),j=x.ZP.div(o||(o=(0,m.Z)(["\n  margin-top: 10px;\n  color: #696969;\n"]))),y=x.ZP.div(l||(l=(0,m.Z)(["\n  width: 100%;\n  margin-top: 2rem;\n  padding: 1rem 0;\n  border-top: 1px solid #00000020;\n"]))),N=x.ZP.a(d||(d=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 0.9rem;\n  border-radius: 0.6rem;\n  background: #50a78f;\n  color: white;\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  &:hover {\n    background: #43b495;\n  }\n"]))),Z=e=>{const t=e.info;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("hr",{className:"w-full border-[#00000020] block sm:hidden mb-10 sm:mb-0"}),(0,f.jsx)(h,{className:"text-[2rem] sm:text-[2.5rem] lg:text-[3rem]",children:t.title}),(0,f.jsx)(b,{children:t.description}),(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsxs)(v,{className:"text-sm sm:text-base",children:[(0,f.jsx)(g,{children:"\uae30\uac04"}),t.period]}),t.memberInfo&&(0,f.jsxs)(w,{className:"text-sm sm:text-base",children:[(0,f.jsx)(g,{children:"\uc778\uc6d0"}),t.memberInfo]}),(0,f.jsxs)(j,{className:"text-sm sm:text-base",children:[(0,f.jsx)(g,{children:"\uc8fc\uc694 \uae30\ub2a5"}),t.mainFunction.map(((e,t)=>(0,f.jsx)("p",{children:e},"".concat(e,"-").concat(t))))]}),(0,f.jsx)(y,{children:(0,f.jsxs)(N,{href:e.info.gitHub,target:"_blank",rel:"noopener noreferrer",children:[(0,f.jsx)(u.p,{size:"2rem",className:"mr-2"})," \ucf54\ub4dc \ubcf4\uae30"]})})]})]})},T=e=>{const t=(0,p.useRef)(null),s=new Image;return s.src=e.info.lowThumbnail,s.onload=()=>{t.current&&t.current.dataset.src&&(t.current.src=t.current.dataset.src)},(0,f.jsx)("section",{className:"flex flex-col justify-center min-h-[calc(100vh-45px)] pb-10",children:(0,f.jsxs)("div",{className:"flex flex-col sm:flex-row max-w-[1300px]",children:[(0,f.jsx)("div",{className:"px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]",children:(0,f.jsx)("img",{ref:t,src:e.info.lowThumbnail,"data-src":e.info.thumbnail,alt:"thumbnail",width:"770px",height:"592.3px"})}),(0,f.jsx)("div",{className:"flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-start",children:(0,f.jsx)(Z,{info:e.info})})]})})}},1883:(e,t,s)=>{"use strict";s.d(t,{Z:()=>x});var n=s(168),r=s(6444),a=s(2791);const i=(e,t)=>{const s=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(s.current){const n=new IntersectionObserver(e,{threshold:t});return n.observe(s.current),()=>{n&&(console.log("observer \uc885\ub8cc"),n&&n.disconnect())}}}),[]),[s]},c=(e,t)=>{const[s,n]=(0,a.useState)(-2);return(0,a.useEffect)((()=>{if(-1===s){const r=setTimeout((()=>{-1===s&&(n(0),e())}),t);return()=>clearTimeout(r)}}),[e,t,s]),{status:s,setStatus:n}};var o,l,d=s(184);const p=r.ZP.img(o||(o=(0,n.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: 300ms;\n  &.gif {\n    opacity: 0;\n  }\n"]))),m=r.ZP.div(l||(l=(0,n.Z)(["\n  position: relative;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16/10;\n  overflow: hidden;\n  box-shadow: #00000069 0 5px 15px -5px;\n  transition-duration: 0.5s;\n  cursor: pointer;\n\n  &.active > .gif {\n    opacity: 1;\n  }\n\n  &:nth-child(even).active {\n    transform: scale(1.12) translateY(-15%) translateX(12%);\n    box-shadow: #00000050 -10px 10px 30px -10px;\n  }\n  &:nth-child(odd).active {\n    transform: scale(1.12) translateY(-15%) translateX(-12%);\n    box-shadow: #00000050 10px 10px 30px -10px;\n  }\n"]))),x=e=>{const[t,s]=(0,a.useState)(-1),n=e.data,r=(0,a.useCallback)((()=>{s(t<n.length-1?t+1:0)}),[n.length,t]),{status:o,setStatus:l}=c(r,1e3);(0,a.useEffect)((()=>{if(0===o){const e=setTimeout(r,3e3);return()=>{clearTimeout(e)}}}),[r,o]),(0,a.useEffect)((()=>{x(t),u()}),[t]),(0,a.useEffect)((()=>{h(n)}),[]);const x=e=>{const t=document.querySelector(".active > .gif");t&&t.dataset.src&&(g(t,t.dataset.src),s(e))},u=()=>{const e=document.querySelectorAll(".inactive > .gif");e&&e.forEach((e=>{g(e,e.dataset.thumbnail)}))},[f]=i((e=>{e.forEach((e=>{e.isIntersecting?(l(0),s(0)):(l(-2),s(-1))}))}),.7),h=e=>{e.forEach((e=>{(new Image).src=e[1]}))},g=(e,t)=>{t&&(e.src=t)},b=e=>{g(e.currentTarget,e.currentTarget.dataset.thumbnail),s(-1),l(-1)};return(0,d.jsx)("div",{ref:f,className:"w-full max-w-[700px] py-[5rem] lg:py-[10rem] px-12 sm:px-20 grid gap-4 md:gap-6 grid-cols-2 content-center",children:n.map(((e,n)=>(0,d.jsxs)(m,{className:"rounded-lg sm:rounded-xl ".concat(t===n?"active":"inactive"),children:[(0,d.jsx)(p,{src:e[0],alt:"simulationImage_".concat(n+1)}),(0,d.jsx)(p,{className:"gif",onMouseOver:e=>((e,t)=>{e.currentTarget.dataset.src&&(g(e.currentTarget,e.currentTarget.dataset.src),s(t),l(1))})(e,n),onMouseLeave:b,src:e[0],"data-src":e[1],"data-thumbnail":e[0],alt:"simulationImage_".concat(n+1)})]},"".concat(e,"-").concat(n))))})}},4138:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var n,r,a,i,c=s(168),o=s(6444),l=s(184);const d={TypeScript:{src:"TypeScript.svg",info:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ud0c0\uc785\uc744 \ubbf8\ub9ac \uc815\uc758\ud558\uc5ec \uac1c\ubc1c \uacfc\uc815\uc758 \uc2e4\uc218\ub97c \ubc29\uc9c0\ud560 \uc218 \uc788\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc288\ud37c\uc14b\uc778 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc785\ub2c8\ub2e4."},JavaScript:{src:"JavaScript.svg",info:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc6f9 \ube0c\ub77c\uc6b0\uc800 \ub0b4\uc5d0\uc11c \uc8fc\ub85c \uc0ac\uc6a9\ub418\ub294 \uac1d\uccb4 \uae30\ubc18\uc758 \uc2a4\ud06c\ub9bd\ud2b8 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc785\ub2c8\ub2e4."},Css:{src:"css.svg",info:"HTML\uacfc \uac19\uc740 \ub9c8\ud06c\uc5c5 \ubb38\uc11c\ub97c \uafb8\ubbf8\uae30 \uc704\ud574 \uc791\uc131\ud558\ub294 \uc2a4\ud0c0\uc77c \uc2dc\ud2b8 \uc5b8\uc5b4\uc785\ub2c8\ub2e4."},Html:{src:"Html.svg",info:"\uc6f9 \ud398\uc774\uc9c0\uc758 \uae30\ubcf8\uc774 \ub418\ub294 \ub9c8\ud06c\uc5c5 \uc5b8\uc5b4\uc785\ub2c8\ub2e4."},Nextjs:{src:"Next.js.svg",info:"\uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1, \uc815\uc801 \uc6f9 \ud398\uc774\uc9c0 \uc0dd\uc131 \ub4f1 \ub9ac\uc561\ud2b8 \uae30\ubc18 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uae30\ub2a5\ub4e4\uc744 \uac00\ub2a5\ucf00 \ud558\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4."},Python:{src:"Python.svg",info:"test"},Reactjs:{src:"React.js.svg",info:"Single Page Application\uc744 \uac1c\ubc1c\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4."},Tailwind:{src:"Tailwind.svg",info:"\ud074\ub798\uc2a4\uba85\uc744 \ud1b5\ud574 \uc571\uc744 \ub354 \ube60\ub974\uace0 \uc27d\uac8c \uc2a4\ud0c0\uc77c\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub41c CSS \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4."},Vuejs:{src:"Vue.js.svg",info:"\uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \uc624\ud508 \uc18c\uc2a4 \ud504\ub85c\uadf8\ub808\uc2dc\ube0c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4."},OpenAi:{src:"OpenAi.svg",info:"\uc9c0\ub3c4 \ud559\uc2b5\uacfc \uac15\ud654 \ud559\uc2b5\uc744 \ud65c\uc6a9\ud574 \uc778\uac04\uacfc \uc720\uc0ac\ud55c \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \ub300\ud654\ud615 \uc778\uacf5\uc9c0\ub2a5 \uc11c\ube44\uc2a4 REST API\uc785\ub2c8\ub2e4."},WebRTC:{src:"WebRTC.svg",info:"\uc6f9 \ube0c\ub77c\uc6b0\uc800 \uac04\uc5d0 \ud50c\ub7ec\uadf8\uc778\uc758 \ub3c4\uc6c0 \uc5c6\uc774 \uc11c\ub85c \ud1b5\uc2e0\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub41c API\uc785\ub2c8\ub2e4."},OpenVidu:{src:"OpenVidu.webp",info:"\uc6f9 \ub610\ub294 \ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ud654\uc0c1 \ud1b5\ud654\ub97c \uc27d\uac8c \ucd94\uac00\ud560 \uc218 \uc788\ub294 WebRTC \uae30\ubc18\uc758 \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4."},Threejs:{src:"Three.js.webp",info:"\uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c 3\ucc28\uc6d0 \ucef4\ud4e8\ud130 \uadf8\ub798\ud53d\uc2a4 \uc560\ub2c8\uba54\uc774\uc158 \uc751\uc6a9\uc744 \ub9cc\ub4e4\uace0 \ud45c\ud604\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4."},ReactQuery:{src:"ReactQuery.svg",info:"\ub9ac\uc561\ud2b8\uc758 \ub370\uc774\ud130 Fetching\uacfc Caching, \ub3d9\uae30\ud654, \uc11c\ubc84 \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8 \ub4f1\uc744 \uc27d\uac8c \ub9cc\ub4e4\uc5b4 \uc8fc\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4"},FastApi:{src:"FastApi.svg",info:"Python\uc744 \ud1b5\ud574 API\ub97c \ube4c\ub4dc\ud558\uae30 \uc704\ud55c \uc6f9 \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4"},Azure:{src:"Azure.svg",info:"\ub9c8\uc774\ud06c\ub85c\uc18c\ud504\ud2b8\uc758 \ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."},SWR:{src:"Swr.svg",info:"React \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud6c5 \ud615\ud0dc\uc758 \ub370\uc774\ud130 \ud398\uce6d\uc744 \uc704\ud55c SWR \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4."}},p=e=>{const t=e=>{const t=e.currentTarget.children[0];console.log(t);const[s,a]=(e=>{const t=e.currentTarget.children[0],s=document.querySelectorAll("#parent")[0],{left:n,width:r,height:a,top:i}=s.getBoundingClientRect(),{left:c,width:o,height:l,top:d}=t.getBoundingClientRect();return[(r-o)/2-(c-n),(a-l)/2-(d-i)]})(e),i=document.querySelectorAll(".active");n(),i.length<1&&(((e,t)=>{e.classList.add(t)})(t,"active"),r(),document.querySelectorAll(".wrapitem").forEach((e=>{e.style.zIndex=null})),e.currentTarget.style.zIndex=1,t.style.transform="translateX(".concat(s,"px) translateY(").concat(a,"px) translateZ(0px) scale(200%) rotateY(180deg)"))},n=()=>{var e;e="active",document.querySelectorAll(".".concat(e)).forEach((t=>{t.classList.remove(e),t.style.transform=null})),a()},r=()=>{const e=document.querySelector("#blurBg");e&&(e.style.opacity="1",e.style.zIndex="0")},a=()=>{const e=document.querySelector("#blurBg");e&&(e.style.opacity="",e.style.zIndex="")};return(0,l.jsxs)("div",{id:"parent",className:"relative mx-auto max-w-[1000px] border-b border-[#d2d2d2] py-[4rem] sm:py-[7rem]",children:[(0,l.jsx)("h1",{className:"text-center text-[2rem] font-extrabold",children:"What I used"}),(0,l.jsx)("div",{className:"flex flex-row justify-center items-end flex-wrap mt-8",children:e.tech.map(((e,n)=>(0,l.jsx)(m,{className:"wrapitem",onClick:t,children:(0,l.jsxs)(u,{className:"techitem w-[7rem] sm:w-[7.5rem] md:w-[8rem] px-2 py-4 sm:px-6 mb-4",children:[d[e]&&(0,l.jsx)("img",{src:s(5605)("./".concat(d[e].src)),alt:e,className:"w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] mx-auto"}),(0,l.jsx)("p",{className:"mt-4 text-center",children:e}),(0,l.jsxs)(x,{className:"info",children:[(0,l.jsx)("header",{children:e}),(0,l.jsx)("article",{children:d[e].info})]})]})},n)))}),(0,l.jsx)(f,{id:"blurBg",onClick:n})]})},m=o.ZP.div(n||(n=(0,c.Z)(["\n  transform-style: preserve-3d;\n  perspective: 300px;\n  position: relative;\n  box-sizing: border-box;\n"]))),x=o.ZP.div(r||(r=(0,c.Z)(["\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  opacity: 0;\n  transition: opacity 0.2s;\n  transform: rotateY(180deg) scale(50%);\n  padding: 1.5rem;\n  word-wrap: break-word;\n  text-align: center;\n  will-change: transform;\n  -webkit-font-smoothing: subpixel-antialiased;\n  display: table;\n\n  & > header {\n    margin-bottom: 1rem;\n    font-size: 1.25rem;\n    font-weight: 700;\n  }\n"]))),u=o.ZP.div(a||(a=(0,c.Z)(["\n  transition: 0.5s;\n  cursor: pointer;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  &:hover {\n    transition: 0.2s;\n    transform: rotateY(45deg);\n    background: white;\n    box-shadow: 0px 0px 20px -15px black;\n    & > img,\n    > p {\n      transition: 0.2s;\n      opacity: 0.7;\n    }\n  }\n\n  &.active {\n    transition: 0.5s;\n    background: white;\n    box-shadow: #00000017 0px 0px 15px -10px;\n    & img,\n    p {\n      opacity: 0;\n    }\n    & > .info {\n      opacity: 1;\n    }\n  }\n"]))),f=o.ZP.div(i||(i=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(50px);\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: -1;\n  transition: all 0.5s;\n"])))},2050:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var n=s(184);const r=e=>{const t=e.info;return(0,n.jsxs)("div",{className:"w-full h-full max-w-[1000px] mx-auto flex flex-row flex-wrap justify-between py-[4rem] sm:py-[7rem]",children:[(0,n.jsx)("div",{className:"w-full sm:w-[50%] sm:h-[250px] p-4 flex flex-col justify-center",children:(0,n.jsx)("p",{className:"text-[2rem] text-center font-extrabold ",children:"What I did"})}),(0,n.jsx)("div",{className:"hidden sm:block w-[50%] h-[250px] p-4",children:(0,n.jsx)("div",{className:"w-full h-full rounded-xl shadow-xl border bg-center bg-cover bg-[url('https://cdn.pixabay.com/photo/2020/03/13/08/22/brain-4927267_1280.jpg')]"})}),t.map(((e,t)=>(0,n.jsx)("div",{className:"w-full h-[120px] sm:w-[50%] sm:h-[250px] px-4 py-2 sm:p-4 text-sm sm:text-[1.2rem] ",children:(0,n.jsxs)("div",{className:"w-full h-full rounded-xl shadow-md sm:shadow-xl bg-[#fff] px-7 py-3 sm:p-7 flex flex-row items-center text-left break-words border ".concat((t%4===0||t%4===3)&&"sm:bg-[#f4f4f4]"),children:[(0,n.jsx)("span",{className:"sm:hidden text-2xl mr-5",children:t+1}),e]})},t)))]})}},1062:(e,t,s)=>{var n=s(3867).w_;e.exports.p=function(e){return n({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}}]})(e)}},5605:(e,t,s)=>{var n={"./Azure.svg":2571,"./Css.svg":4182,"./DanielLEE_192.webp":5297,"./DanielLEE_512.webp":9607,"./FastApi.svg":3594,"./Html.svg":2406,"./JavaScript.svg":1864,"./Next.js.svg":755,"./OpenAi.svg":2417,"./OpenVidu.webp":6601,"./Python.svg":1118,"./React.js.svg":920,"./ReactQuery.svg":6293,"./Swr.svg":693,"./Tailwind.svg":7036,"./Three.js.webp":5,"./TypeScript.svg":7939,"./Vue.js.svg":8777,"./WebRTC.svg":8886,"./arrow.svg":4124};function r(e){var t=a(e);return s(t)}function a(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=5605},2571:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Azure.cbbb50ea7fa1540941d3.svg"},4182:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Css.d775a84d2e94cdab548c.svg"},5297:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/DanielLEE_192.a9bd955829d31b7d6dbf.webp"},9607:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/DanielLEE_512.232a2aacfa2438e05359.webp"},3594:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/FastApi.a8ea15acfdd82bb091e5.svg"},2406:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Html.51305ec564cee03372ec.svg"},1864:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/JavaScript.63b93412a24001eff2ac.svg"},755:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Next.js.2426e69d99a468ba1535.svg"},2417:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/OpenAi.625019fb7fdd3bd538d0.svg"},6601:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/OpenVidu.48e975f12b1d3f4ff64b.webp"},1118:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Python.744ffb84e4cd8e0d59bd.svg"},920:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/React.js.0cc978f43ea437de003e.svg"},6293:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/ReactQuery.75443f72333b37c2c79e.svg"},693:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Swr.45e6f1d4dbf9a9c99aca.svg"},7036:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Tailwind.681db3393706b0b8d30f.svg"},5:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Three.js.0af4b9642bc827787e2c.webp"},7939:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/TypeScript.0553733a9d433cefaf9e.svg"},8777:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Vue.js.0747f6ef54c1a4334ff0.svg"},8886:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/WebRTC.17fa80686fc9716e8a12.svg"},4124:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/arrow.b671035f71e705927940.svg"},2898:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/project2_2.c6ab5fda9e59a20af99c.webp"}}]);
//# sourceMappingURL=149.37ddb3d7.chunk.js.map