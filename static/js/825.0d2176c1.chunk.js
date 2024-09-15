"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[825],{2828:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(2050),s=n(4138),a=n(950),c=n(1849),o=n(184);const i=e=>{const t=e.info;return(0,o.jsxs)("div",{className:"w-full flex flex-col items-center",children:[(0,o.jsx)(a.a,{info:t.detail}),(0,o.jsx)("section",{className:"w-full flex flex-col items-center border-y border-[#d2d2d2]",children:(0,o.jsx)("img",{src:"/images/portfolio.webp",alt:"",width:"1300",height:"1000",className:"w-[1000px] h-auto"})}),(0,o.jsx)("section",{className:"w-full",children:t.detail.simImageSrc&&(0,o.jsx)(c.Z,{data:t.detail.simImageSrc})}),(0,o.jsxs)("section",{className:"w-full bg-[var(--secondary-bgColor)]",children:[(0,o.jsx)(s.Z,{tech:t.detail.tech}),(0,o.jsx)(r.Z,{info:t.detail.whatIDid})]})]})}},1849:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(168),s=n(6444),a=n(2791);const c=e=>{const t=(0,a.useRef)(null),[n,r]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{if(t.current){const n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?r(!0):r(!1)}))}),{threshold:e});return n.observe(t.current),()=>{n&&(console.log("observer \uc885\ub8cc"),n&&n.disconnect())}}}),[]),{target:t,isIntersecting:n}};var o,i,l,d=n(184);let u;const h=s.ZP.div(o||(o=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: -1;\n  backdrop-filter: blur(10px);\n  transition: all 0.1s;\n"]))),x=s.ZP.img(i||(i=(0,r.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: opacity 300ms;\n"]))),f=s.ZP.div(l||(l=(0,r.Z)(['\n  position: relative;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16/10;\n  overflow: hidden;\n  box-shadow: #00000069 0 5px 15px -5px;\n  transition: all 0.5s;\n  cursor: pointer;\n\n  &[data-is-active="true"] {\n    z-index: 2;\n  }\n  &[data-is-active="false"] {\n    z-index: 0;\n  }\n  &.hover > .thumbnail {\n    opacity: 0;\n  }\n  &:nth-child(even).hover {\n    transform: scale(1.12) translateY(-15%) translateX(12%);\n    box-shadow: #00000050 -10px 10px 30px -10px;\n  }\n  &:nth-child(odd).hover {\n    transform: scale(1.12) translateY(-15%) translateX(-12%);\n    box-shadow: #00000050 10px 10px 30px -10px;\n  }\n']))),m=e=>{const t=e.data,n=(0,a.useRef)(),r=(0,a.useRef)({currentIndex:-1,hoverIndex:-1,clickIndex:-1}),[s,o]=(0,a.useState)(-1),{target:i,isIntersecting:l}=c(.7);(0,a.useEffect)((()=>(m(t),()=>u)),[]),(0,a.useEffect)((()=>{l?n.current||(p(0),n.current=setInterval((()=>{const e=r.current.currentIndex,n=e+1>=t.length?0:e+1;p(n)}),3e3)):(p(-1),w(),n.current&&clearInterval(n.current),n.current=void 0)}),[l]);const m=e=>{e.forEach((e=>{(new Image).src=e[1]}))},p=e=>{if(r.current.hoverIndex>-1||r.current.clickIndex>-1)return;const t=document.querySelector("#sim-".concat(e));t?(r.current.currentIndex=e,w(),v(t,t.dataset.src),o(e)):o(e)},g=()=>{document.querySelectorAll(".sim").forEach((e=>{v(e,e.dataset.thumbnail)})),o(-1),r.current.hoverIndex=-1},v=(e,t)=>{t&&(e.src=t)},I=e=>({top:e.offsetTop,left:e.offsetLeft,height:e.offsetHeight,width:e.offsetWidth}),b=e=>{r.current.clickIndex>-1||g()},w=()=>{document.querySelectorAll(".animatedImage").forEach((e=>{e.parentNode.style.transform="",e.parentNode.style.opacity="",v(e,e.dataset.thumbnail),"true"===e.parentNode.dataset.isActive&&setTimeout((()=>{e.parentNode.dataset.isActive="false"}),500)})),r.current.clickIndex=-1;const e=document.querySelector("#blurbg-sim");e.style.opacity="",e.style.zIndex="",g()},y=(e,t)=>{r.current.hoverIndex===t?((e,t)=>{r.current.clickIndex=t;const n=I(e.currentTarget),s=I(document.querySelector("#container-wrapcards")),a=s.left+s.width/2,c=s.top+s.height/2,o=s.left+n.left+n.width/2,i=s.top+n.top+n.height/2,l=e.currentTarget;l.dataset.isActive="true",l.style.transform="translateX(".concat(a-o,"px) translateY(").concat(c-i,"px) scale(2)");const d=document.querySelector("#blurbg-sim");d.style.opacity="1",d.style.zIndex="1"})(e,t):(e=>{r.current.clickIndex>-1||(p(e),r.current.hoverIndex=e)})(t)};return(0,d.jsxs)("div",{className:"w-full relative flex flex-row justify-center",children:[(0,d.jsx)("div",{id:"container-wrapcards",ref:i,className:"relative w-full max-w-[700px] py-[5rem] lg:py-[10rem] px-12 sm:px-20 grid gap-4 md:gap-6 grid-cols-2 content-center",children:t.map(((e,t)=>(0,d.jsxs)(f,{className:"sim rounded-lg sm:rounded-xl".concat(s===t?" hover":""),onClick:e=>y(e,t),onMouseLeave:b,onMouseOver:e=>y(e,t),children:[(0,d.jsx)(x,{id:"sim-".concat(t),className:"animatedImage",src:e[0],"data-src":e[1],"data-thumbnail":e[0],alt:"simulationImage_".concat(t+1)}),(0,d.jsx)(x,{className:"thumbnail",src:e[0],alt:"simulationImage_".concat(t+1)})]},"".concat(e,"-").concat(t))))}),(0,d.jsx)(h,{id:"blurbg-sim",onClick:w})]})}}}]);
//# sourceMappingURL=825.0d2176c1.chunk.js.map