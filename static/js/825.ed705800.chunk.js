(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[825],{2828:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var r=t(2050),a=t(4138),c=t(950),n=t(1883),i=t(184);const l=e=>{const s=e.info;return(0,i.jsxs)("div",{className:"w-full flex flex-col items-center",children:[(0,i.jsx)(c.a,{info:s.detail}),(0,i.jsxs)("section",{className:"w-full flex flex-col items-center border-y border-[#d2d2d2]",children:[(0,i.jsx)("img",{src:"/images/portfolio.webp",alt:"",width:"1300",height:"1000",className:"w-[1000px] h-auto"}),s.detail.simImageSrc&&(0,i.jsx)(n.Z,{data:s.detail.simImageSrc})]}),(0,i.jsxs)("section",{className:"w-full bg-[#fbfbfb]",children:[(0,i.jsx)(a.Z,{tech:s.detail.tech}),(0,i.jsx)(r.Z,{info:s.detail.whatIDid})]})]})}},950:(e,s,t)=>{"use strict";t.d(s,{a:()=>Z});var r,a,c,n,i,l,o,d,x=t(2791),m=t(168),p=t(6444),u=t(1062),f=t(184);const h=p.ZP.h1(r||(r=(0,m.Z)(["\n  font-weight: 700;\n"]))),g=p.ZP.h2(a||(a=(0,m.Z)(["\n  font-weight: 700;\n  color: black;\n"]))),v=p.ZP.div(c||(c=(0,m.Z)(["\n  padding-bottom: 10px;\n  color: #696969;\n"]))),b=p.ZP.div(n||(n=(0,m.Z)(["\n  margin-top: 20px;\n  color: #696969;\n"]))),w=p.ZP.div(i||(i=(0,m.Z)(["\n  margin-top: 10px;\n  color: #696969;\n"]))),j=p.ZP.div(l||(l=(0,m.Z)(["\n  margin-top: 10px;\n  color: #696969;\n"]))),N=p.ZP.div(o||(o=(0,m.Z)(["\n  width: 100%;\n  margin-top: 2rem;\n  padding: 1rem 0;\n  border-top: 1px solid #00000020;\n"]))),y=p.ZP.a(d||(d=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 0.9rem;\n  border-radius: 0.6rem;\n  background: #50a78f;\n  color: white;\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  &:hover {\n    background: #43b495;\n  }\n"]))),T=e=>{const s=e.info;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("hr",{className:"w-full border-[#00000020] block sm:hidden mb-10 sm:mb-0"}),(0,f.jsx)(h,{className:"text-[2rem] sm:text-[2.5rem] lg:text-[3rem]",children:s.title}),(0,f.jsx)(v,{children:s.description}),(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsxs)(b,{className:"text-sm sm:text-base",children:[(0,f.jsx)(g,{children:"\uae30\uac04"}),s.period]}),s.memberInfo&&(0,f.jsxs)(w,{className:"text-sm sm:text-base",children:[(0,f.jsx)(g,{children:"\uc778\uc6d0"}),s.memberInfo]}),(0,f.jsxs)(j,{className:"text-sm sm:text-base",children:[(0,f.jsx)(g,{children:"\uc8fc\uc694 \uae30\ub2a5"}),s.mainFunction.map(((e,s)=>(0,f.jsx)("p",{children:e},"".concat(e,"-").concat(s))))]}),(0,f.jsx)(N,{children:(0,f.jsxs)(y,{href:e.info.gitHub,target:"_blank",rel:"noopener noreferrer",children:[(0,f.jsx)(u.p,{size:"2rem",className:"mr-2"})," \ucf54\ub4dc \ubcf4\uae30"]})})]})]})},Z=e=>{const s=(0,x.useRef)(null);return(0,x.useEffect)((()=>{s.current&&s.current.dataset.src&&(s.current.src=s.current.dataset.src)}),[]),(0,f.jsx)("section",{className:"flex flex-col justify-center min-h-[calc(100vh-45px)] pb-10",children:(0,f.jsxs)("div",{className:"flex flex-col sm:flex-row max-w-[1300px]",children:[(0,f.jsx)("div",{className:"px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem]",children:(0,f.jsx)("img",{ref:s,src:e.info.lowThumbnail,"data-src":e.info.thumbnail,alt:"thumbnail",width:"770px",height:"592.3px"})}),(0,f.jsx)("div",{className:"flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-start",children:(0,f.jsx)(T,{info:e.info})})]})})}},1883:(e,s,t)=>{"use strict";t.d(s,{Z:()=>p});var r=t(168),a=t(6444),c=t(2791);const n=(e,s)=>{const t=(0,c.useRef)(null);return(0,c.useEffect)((()=>{if(t.current){const r=new IntersectionObserver(e,{threshold:s});return r.observe(t.current),()=>{r&&(console.log("observer \uc885\ub8cc"),r&&r.disconnect())}}}),[]),[t]},i=(e,s)=>{const[t,r]=(0,c.useState)(-2);return(0,c.useEffect)((()=>{if(-1===t){const a=setTimeout((()=>{-1===t&&(r(0),e())}),s);return()=>clearTimeout(a)}}),[e,s,t]),{status:t,setStatus:r}};var l,o,d=t(184);const x=a.ZP.img(l||(l=(0,r.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: 300ms;\n  &.gif {\n    opacity: 0;\n  }\n"]))),m=a.ZP.div(o||(o=(0,r.Z)(["\n  position: relative;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16/10;\n  overflow: hidden;\n  box-shadow: #00000069 0 5px 15px -5px;\n  transition-duration: 0.5s;\n  cursor: pointer;\n\n  &.active > .gif {\n    opacity: 1;\n  }\n\n  &:nth-child(even).active {\n    transform: scale(1.12) translateY(-15%) translateX(12%);\n    box-shadow: #00000050 -10px 10px 30px -10px;\n  }\n  &:nth-child(odd).active {\n    transform: scale(1.12) translateY(-15%) translateX(-12%);\n    box-shadow: #00000050 10px 10px 30px -10px;\n  }\n"]))),p=e=>{const[s,t]=(0,c.useState)(-1),r=e.data,a=(0,c.useCallback)((()=>{t(s<r.length-1?s+1:0)}),[r.length,s]),{status:l,setStatus:o}=i(a,1e3);(0,c.useEffect)((()=>{if(0===l){const e=setTimeout(a,3e3);return()=>{clearTimeout(e)}}}),[a,l]),(0,c.useEffect)((()=>{p(s),u()}),[s]),(0,c.useEffect)((()=>{h(r)}),[]);const p=e=>{const s=document.querySelector(".active > .gif");s&&s.dataset.src&&(g(s,s.dataset.src),t(e))},u=()=>{const e=document.querySelectorAll(".inactive > .gif");e&&e.forEach((e=>{g(e,e.dataset.thumbnail)}))},[f]=n((e=>{e.forEach((e=>{e.isIntersecting?(o(0),t(0)):(o(-2),t(-1))}))}),.7),h=e=>{e.forEach((e=>{(new Image).src=e[1]}))},g=(e,s)=>{e.src=s},v=e=>{g(e.currentTarget,e.currentTarget.dataset.thumbnail),t(-1),o(-1)};return(0,d.jsx)("div",{ref:f,className:"w-full max-w-[700px] py-[5rem] lg:py-[10rem] px-12 sm:px-20 grid gap-4 md:gap-6 grid-cols-2 content-center",children:r.map(((e,r)=>(0,d.jsxs)(m,{className:"rounded-lg sm:rounded-xl ".concat(s===r?"active":"inactive"),children:[(0,d.jsx)(x,{src:e[0],alt:"simulationImage_".concat(r+1)}),(0,d.jsx)(x,{className:"gif",onMouseOver:e=>((e,s)=>{e.currentTarget.dataset.src&&(g(e.currentTarget,e.currentTarget.dataset.src),t(s),o(1))})(e,r),onMouseLeave:v,src:e[0],"data-src":e[1],"data-thumbnail":e[0],alt:"simulationImage_".concat(r+1)})]},"".concat(e,"-").concat(r))))})}},4138:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(184);const a=e=>{const s={TypeScript:"TypeScript.svg",JavaScript:"JavaScript.svg",Css:"css.svg",Html:"Html.svg",Nextjs:"Next.js.svg",Python:"Python.svg",Reactjs:"React.js.svg",Tailwind:"Tailwind.svg",Vuejs:"Vue.js.svg",OpenAi:"OpenAi.svg",WebRTC:"WebRTC.svg",OpenVidu:"OpenVidu.webp",Threejs:"Three.js.webp",ReactQuery:"ReactQuery.svg",FastApi:"FastApi.svg",Azure:"Azure.svg",SWR:"Swr.svg"};return(0,r.jsxs)("div",{className:"mx-auto max-w-[1000px] border-b border-[#d2d2d2] py-[4rem] sm:py-[7rem]",children:[(0,r.jsx)("h1",{className:"text-center text-[2rem] font-extrabold",children:"What I used"}),(0,r.jsx)("div",{className:"flex flex-row justify-center items-end flex-wrap mt-8",children:e.tech.map(((e,a)=>(0,r.jsxs)("div",{className:"p-4 mx-4",children:[s[e]&&(0,r.jsx)("img",{src:t(5605)("./".concat(s[e])),alt:e,className:"w-[4.5rem] h-[4.5rem] mx-auto"}),(0,r.jsx)("p",{className:"mt-4 text-center",children:e})]},a)))})]})}},2050:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(184);const a=e=>{const s=e.info;return(0,r.jsxs)("div",{className:"w-full h-full max-w-[1000px] mx-auto flex flex-row flex-wrap justify-between py-[4rem] sm:py-[7rem]",children:[(0,r.jsx)("div",{className:"w-full sm:w-[50%] sm:h-[250px] p-4 flex flex-col justify-center",children:(0,r.jsx)("p",{className:"text-[2rem] text-center font-extrabold ",children:"What I did"})}),(0,r.jsx)("div",{className:"hidden sm:block w-[50%] h-[250px] p-4",children:(0,r.jsx)("div",{className:"w-full h-full rounded-xl shadow-xl border bg-center bg-cover bg-[url('https://cdn.pixabay.com/photo/2020/03/13/08/22/brain-4927267_1280.jpg')]"})}),s.map(((e,s)=>(0,r.jsx)("div",{className:"w-full h-[120px] sm:w-[50%] sm:h-[250px] px-4 py-2 sm:p-4 text-sm sm:text-[1.2rem] ",children:(0,r.jsxs)("div",{className:"w-full h-full rounded-xl shadow-md sm:shadow-xl bg-[#fff] px-7 py-3 sm:p-7 flex flex-row items-center text-left break-words border ".concat((s%4===0||s%4===3)&&"sm:bg-[#eaeaea]"),children:[(0,r.jsx)("span",{className:"sm:hidden text-2xl mr-5",children:s+1}),e]})},s)))]})}},1062:(e,s,t)=>{var r=t(3867).w_;e.exports.p=function(e){return r({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}}]})(e)}},5605:(e,s,t)=>{var r={"./Azure.svg":2571,"./Css.svg":4182,"./DanielLEE_192.webp":5297,"./DanielLEE_512.webp":9607,"./FastApi.svg":3594,"./Html.svg":2406,"./JavaScript.svg":1864,"./Next.js.svg":755,"./OpenAi.svg":2417,"./OpenVidu.webp":6601,"./Python.svg":1118,"./React.js.svg":920,"./ReactQuery.svg":6293,"./Swr.svg":693,"./Tailwind.svg":7036,"./Three.js.webp":5,"./TypeScript.svg":7939,"./Vue.js.svg":8777,"./WebRTC.svg":8886,"./arrow.svg":4124};function a(e){var s=c(e);return t(s)}function c(e){if(!t.o(r,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=5605},2571:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/Azure.cbbb50ea7fa1540941d3.svg"},4182:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/Css.d775a84d2e94cdab548c.svg"},5297:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/DanielLEE_192.a9bd955829d31b7d6dbf.webp"},9607:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/DanielLEE_512.232a2aacfa2438e05359.webp"},3594:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/FastApi.a8ea15acfdd82bb091e5.svg"},2406:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/Html.51305ec564cee03372ec.svg"},1864:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/JavaScript.63b93412a24001eff2ac.svg"},755:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/Next.js.2426e69d99a468ba1535.svg"},2417:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/OpenAi.625019fb7fdd3bd538d0.svg"},6601:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/OpenVidu.48e975f12b1d3f4ff64b.webp"},1118:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/Python.744ffb84e4cd8e0d59bd.svg"},920:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/React.js.0cc978f43ea437de003e.svg"},6293:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/ReactQuery.75443f72333b37c2c79e.svg"},693:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/Swr.45e6f1d4dbf9a9c99aca.svg"},7036:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/Tailwind.681db3393706b0b8d30f.svg"},5:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/Three.js.0af4b9642bc827787e2c.webp"},7939:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/TypeScript.0553733a9d433cefaf9e.svg"},8777:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/Vue.js.0747f6ef54c1a4334ff0.svg"},8886:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/WebRTC.17fa80686fc9716e8a12.svg"},4124:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/arrow.b671035f71e705927940.svg"}}]);
//# sourceMappingURL=825.ed705800.chunk.js.map