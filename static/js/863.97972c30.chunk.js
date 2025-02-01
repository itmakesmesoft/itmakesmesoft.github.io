(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[863],{950:(e,t,s)=>{"use strict";s.d(t,{a:()=>g});var r=s(2791),i=s(6444),a=s(1062),n=s(184);const c=i.ZP.h1`
  font-weight: 700;
`,o=i.ZP.h2`
  font-weight: 700;
  color: black;
`,l=i.ZP.div`
  padding-bottom: 10px;
  color: #696969;
`,d=i.ZP.div`
  margin-top: 20px;
  color: #696969;
`,m=i.ZP.div`
  margin-top: 10px;
  color: #696969;
`,p=i.ZP.div`
  margin-top: 10px;
  color: #696969;
`,x=i.ZP.div`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid #00000020;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,u=i.ZP.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  color: white;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  height: 2.75rem;
`,f=e=>{var t;const s=e.info;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("hr",{className:"w-full border-[#00000020] block sm:hidden mb-10 sm:mb-0"}),(0,n.jsx)(c,{className:"text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[2rem] sm:leading-[2.5rem] lg:leading-[3rem]",children:s.title}),(0,n.jsx)(l,{children:s.description}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsxs)(d,{className:"text-sm sm:text-base",children:[(0,n.jsx)(o,{children:"\uae30\uac04"}),s.period]}),s.memberInfo&&(0,n.jsxs)(m,{className:"text-sm sm:text-base",children:[(0,n.jsx)(o,{children:"\uc778\uc6d0"}),s.memberInfo]}),(0,n.jsxs)(p,{className:"text-sm sm:text-base",children:[(0,n.jsx)(o,{children:"\uc8fc\uc694 \uae30\ub2a5"}),s.mainFunction.map(((e,t)=>(0,n.jsx)("p",{children:e},`${e}-${t}`)))]}),(0,n.jsxs)(x,{children:[(0,n.jsxs)(u,{href:e.info.gitHub,target:"_blank",rel:"noopener noreferrer",className:"bg-[#50a78f] hover:bg-[#43b495]",children:[(0,n.jsx)(a.p,{size:"2rem",className:"mr-2"})," \ucf54\ub4dc \ubcf4\uae30"]}),(null===(t=e.info)||void 0===t?void 0:t.link)&&(0,n.jsx)(u,{href:e.info.link,target:"_blank",rel:"noopener noreferrer",className:"bg-[#3a8ac3] hover:bg-[#439cdc]",children:"\uc11c\ube44\uc2a4 \ubc14\ub85c\uac00\uae30"})]})]})]})},g=e=>{var t,s;const i=(0,r.useRef)(null),a=new Image;return a.src=e.info.lowThumbnail,a.onload=()=>{i.current&&i.current.dataset.src&&(i.current.src=i.current.dataset.src)},(0,n.jsx)("section",{className:"flex flex-col justify-center min-h-[calc(100vh-45px)] pb-10",children:(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row max-w-[1300px]",children:[(0,n.jsx)("div",{className:"px-[3rem] sm:px-[1.7rem] lg:px-[2.7rem]",children:(0,n.jsx)("img",{ref:i,src:null===(t=e.info)||void 0===t?void 0:t.lowThumbnail,"data-src":null===(s=e.info)||void 0===s?void 0:s.thumbnail,alt:"thumbnail",width:"770px",height:"592.3px"})}),(0,n.jsx)("div",{className:"flex-none w-full sm:w-[350px] lg:w-[450px] px-[3rem] sm:px-[1.5rem] lg:px-[2.5rem] flex flex-col justify-center items-start",children:(0,n.jsx)(f,{info:e.info})})]})})}},1849:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var r=s(6444),i=s(2791);const a=e=>{const t=(0,i.useRef)(null),[s,r]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{if(t.current){const s=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?r(!0):r(!1)}))}),{threshold:e});return s.observe(t.current),()=>{s&&s&&s.disconnect()}}}),[]),{target:t,isIntersecting:s}};var n=s(184);const c=r.ZP.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  backdrop-filter: blur(10px);
  transition: opacity ${200}ms;
`,o=r.ZP.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity ${200}ms;
`,l=r.ZP.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 16/10;
  overflow: hidden;
  box-shadow: #00000069 0 5px 15px -5px;
  transition: transform 0.5s;
  cursor: pointer;
  &.hover > .thumbnail {
    opacity: 0;
  }
  &:nth-child(even).hover {
    transform: scale(1.12) translateY(-15%) translateX(12%);
    box-shadow: #00000050 -10px 10px 30px -10px;
  }
  &:nth-child(odd).hover {
    transform: scale(1.12) translateY(-15%) translateX(-12%);
    box-shadow: #00000050 10px 10px 30px -10px;
  }
`,d=e=>{const t=e.data,s=(0,i.useRef)(),[r,d]=(0,i.useState)(-1),[m,p]=(0,i.useState)(!1),{target:x,isIntersecting:u}=a(.7),f=(0,i.useRef)({animatedIndex:-1,hoverIndex:-1,activeIndex:-1});(0,i.useEffect)((()=>(g(t),()=>{})),[t]),(0,i.useEffect)((()=>(document.addEventListener("click",I),()=>{document.removeEventListener("click",I)})),[]),(0,i.useEffect)((()=>{u?s.current||(h(0),s.current=setInterval((()=>{const e=f.current.animatedIndex,s=e+1>=t.length?0:e+1;h(s)}),3e3)):(h(-1),s.current&&clearInterval(s.current),s.current=void 0)}),[u]);const g=e=>{e.forEach((e=>{(new Image).src=e[1]}))},h=e=>{const t=document.querySelector(`#sim-${e}`),{hoverIndex:s,activeIndex:r}=f.current;if(!t)return d(e);s>-1||r>-1||(f.current.animatedIndex=e,w(t,t.dataset.src),d(e))},v=()=>{document.querySelectorAll(".sim").forEach((e=>{b(e)})),d(-1),S(),f.current.hoverIndex=-1,f.current.activeIndex=-1},b=e=>{"false"!==e.dataset.isActive&&(w(e,e.dataset.thumbnail),N(e))},w=(e,t)=>{t&&(e.src=t)},j=e=>({top:e.offsetTop,left:e.offsetLeft,height:e.offsetHeight,width:e.offsetWidth}),y=e=>{f.current.activeIndex>-1||(f.current.activeIndex=-1,v())},A=e=>{p(!0);const t=j(e),s=j(document.querySelector("#container-wrapcards")),r=s.left+s.width/2,i=s.top+s.height/2,a=s.left+t.left+t.width/2,n=s.top+t.top+t.height/2;e.dataset.isActive="true",Object.assign(e.style,{transform:`translateX(${r-a}px) translateY(${i-n}px) scale(2)`,"z-index":50}),p(!1)},N=e=>{p(!0),"false"!==e.dataset.isActive&&(e.dataset.isActive="false",Object.assign(e.style,{transform:"","z-index":1}),setTimeout((()=>{Object.assign(e.style,{"z-index":0}),p(!1)}),200))},I=e=>{e.target.closest(".sim")||(S(),v())},E=()=>{const e=document.querySelector("#blurbg-sim");Object.assign(e.style,{opacity:"1",zIndex:"2"})},S=()=>{const e=document.querySelector("#blurbg-sim");Object.assign(e.style,{opacity:"0",zIndex:"-1"})},T=(e,t)=>{m||(f.current.hoverIndex===t?((e,t)=>{f.current.activeIndex=t;const s=e.currentTarget;A(s),E()})(e,t):(e=>{f.current.activeIndex>-1||(h(e),f.current.hoverIndex=e)})(t))};return(0,n.jsxs)("div",{className:"w-full relative flex flex-row justify-center",children:[(0,n.jsx)("div",{id:"container-wrapcards",ref:x,className:"relative w-full max-w-[700px] py-[5rem] lg:py-[10rem] px-12 sm:px-20 grid gap-4 md:gap-6 grid-cols-2 content-center",children:t.map(((e,t)=>(0,n.jsxs)(l,{className:"sim rounded-lg sm:rounded-xl"+(r===t?" hover":""),onClick:e=>T(e,t),onMouseLeave:y,onMouseOver:e=>T(e,t),children:[(0,n.jsx)(o,{id:`sim-${t}`,className:"animatedImage",src:e[0],"data-src":e[1],"data-thumbnail":e[0],alt:`simulationImage_${t+1}`}),(0,n.jsx)(o,{className:"thumbnail",src:e[0],alt:`simulationImage_${t+1}`})]},`${e}-${t}`)))}),(0,n.jsx)(c,{id:"blurbg-sim"})]})}},4138:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var r=s(2791),i=s(6444),a=s(184);const n={TypeScript:{src:"TypeScript.svg",info:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ud0c0\uc785\uc744 \ubbf8\ub9ac \uc815\uc758\ud558\uc5ec \uac1c\ubc1c \uacfc\uc815\uc758 \uc2e4\uc218\ub97c \ubc29\uc9c0\ud560 \uc218 \uc788\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc288\ud37c\uc14b\uc778 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc785\ub2c8\ub2e4."},JavaScript:{src:"JavaScript.svg",info:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc6f9 \ube0c\ub77c\uc6b0\uc800 \ub0b4\uc5d0\uc11c \uc8fc\ub85c \uc0ac\uc6a9\ub418\ub294 \uac1d\uccb4 \uae30\ubc18\uc758 \uc2a4\ud06c\ub9bd\ud2b8 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc785\ub2c8\ub2e4."},Css:{src:"css.svg",info:"CSS\ub294 HTML\uacfc \uac19\uc740 \ub9c8\ud06c\uc5c5 \ubb38\uc11c\ub97c \uafb8\ubbf8\uae30 \uc704\ud574 \uc791\uc131\ud558\ub294 \uc2a4\ud0c0\uc77c \uc2dc\ud2b8 \uc5b8\uc5b4\uc785\ub2c8\ub2e4."},Html:{src:"Html.svg",info:"HTML\uc740 \uc6f9 \ud398\uc774\uc9c0\uc758 \uae30\ubcf8\uc774 \ub418\ub294 \ub9c8\ud06c\uc5c5 \uc5b8\uc5b4\uc785\ub2c8\ub2e4."},Nextjs:{src:"Next.js.svg",info:"NEXT.js\ub294 \uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1, \uc815\uc801 \uc6f9 \ud398\uc774\uc9c0 \uc0dd\uc131 \ub4f1 \ub9ac\uc561\ud2b8 \uae30\ubc18 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uae30\ub2a5\ub4e4\uc744 \uac00\ub2a5\ucf00 \ud558\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4."},Python:{src:"Python.svg",info:"test"},Reactjs:{src:"React.js.svg",info:"React.js\ub294 Single Page Application\uc744 \uac1c\ubc1c\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4."},Tailwind:{src:"Tailwind.svg",info:"\ud074\ub798\uc2a4\uba85\uc744 \ud1b5\ud574 \uc571\uc744 \ub354 \ube60\ub974\uace0 \uc27d\uac8c \uc2a4\ud0c0\uc77c\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub41c CSS \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4."},Vuejs:{src:"Vue.js.svg",info:"Vue.js\ub294 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \uc624\ud508 \uc18c\uc2a4 \ud504\ub85c\uadf8\ub808\uc2dc\ube0c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4."},OpenAi:{src:"OpenAi.svg",info:"OpenAi API\ub294 \uc9c0\ub3c4 \ud559\uc2b5\uacfc \uac15\ud654 \ud559\uc2b5\uc744 \ud65c\uc6a9\ud574 \uc778\uac04\uacfc \uc720\uc0ac\ud55c \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \ub300\ud654\ud615 \uc778\uacf5\uc9c0\ub2a5 \uc11c\ube44\uc2a4 REST API\uc785\ub2c8\ub2e4."},WebRTC:{src:"WebRTC.svg",info:"WebRTC\ub294 \uc6f9 \ube0c\ub77c\uc6b0\uc800 \uac04\uc5d0 \ud50c\ub7ec\uadf8\uc778\uc758 \ub3c4\uc6c0 \uc5c6\uc774 \uc11c\ub85c \ud1b5\uc2e0\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub41c API\uc785\ub2c8\ub2e4."},OpenVidu:{src:"OpenVidu.webp",info:"OpenVidu\ub294 \uc6f9 \ub610\ub294 \ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ud654\uc0c1 \ud1b5\ud654\ub97c \uc27d\uac8c \ucd94\uac00\ud560 \uc218 \uc788\ub294 WebRTC \uae30\ubc18\uc758 \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4."},Threejs:{src:"Three.js.webp",info:"Three.js\ub294 \uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c 3\ucc28\uc6d0 \ucef4\ud4e8\ud130 \uadf8\ub798\ud53d\uc2a4 \uc560\ub2c8\uba54\uc774\uc158 \uc751\uc6a9\uc744 \ub9cc\ub4e4\uace0 \ud45c\ud604\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4."},ReactQuery:{src:"ReactQuery.svg",info:"ReactQuery\ub294 \ub9ac\uc561\ud2b8\uc758 \ub370\uc774\ud130 Fetching\uacfc Caching, \ub3d9\uae30\ud654, \uc11c\ubc84 \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8 \ub4f1\uc744 \uc27d\uac8c \ub9cc\ub4e4\uc5b4 \uc8fc\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4"},FastApi:{src:"FastApi.svg",info:"FastApi\ub294 Python\uc744 \ud1b5\ud574 API\ub97c \ube4c\ub4dc\ud558\uae30 \uc704\ud55c \uc6f9 \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4"},Azure:{src:"Azure.svg",info:"Azure\ub294 \ub9c8\uc774\ud06c\ub85c\uc18c\ud504\ud2b8\uc758 \ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."},SWR:{src:"Swr.svg",info:"SWR\uc740 React \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud6c5 \ud615\ud0dc\uc758 \ub370\uc774\ud130 \ud398\uce6d\uc744 \uc704\ud55c SWR \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4."},NPM:{src:"NPM.svg",info:"Node.js\uc758 \ud328\ud0a4\uc9c0\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4."}},c=e=>{(0,r.useEffect)((()=>(document.addEventListener("click",i),()=>{document.removeEventListener("click",i)})),[]);const t=e=>{if(document.querySelectorAll(".active").length<1){const t=e.currentTarget.children[0],[s,r]=(e=>{const t=e.currentTarget.children[0],s=document.querySelectorAll("#parent")[0],{left:r,width:i,height:a,top:n}=s.getBoundingClientRect(),{left:c,width:o,height:l,top:d}=t.getBoundingClientRect();return[(i-o)/2-(c-r),(a-l)/2-(d-n)]})(e);((e,t)=>{e.classList.add(t)})(t,"active"),c(),document.querySelectorAll(".wrapitem").forEach((e=>{e.style.zIndex=null})),e.currentTarget.style.zIndex=1,t.style.transform=`translateX(${s}px) translateY(${r}px) translateZ(0) scale(200%) rotateY(180deg)`}},i=e=>{var t;e.target.closest(".wrapitem")||(t="active",document.querySelectorAll(`.${t}`).forEach((e=>{e.classList.remove(t),e.style.transform=null})),p())},c=()=>{const e=document.querySelector("#blurbg-tech");e&&Object.assign(e.style,{opacity:"1",zIndex:"0"})},p=()=>{const e=document.querySelector("#blurbg-tech");e&&Object.assign(e.style,{opacity:"",zIndex:""})};return(0,a.jsxs)("div",{id:"parent",className:"relative mx-auto max-w-[1000px] border-b border-[#d2d2d2] py-[4rem] sm:py-[7rem]",children:[(0,a.jsx)("h1",{className:"text-center text-[2rem] font-extrabold",children:"What I used"}),(0,a.jsx)("div",{className:"flex flex-row justify-center items-end flex-wrap mt-8",children:e.tech.map(((e,r)=>(0,a.jsx)(o,{className:"wrapitem",onClick:t,children:(0,a.jsxs)(d,{className:"techitem w-[7rem] sm:w-[7.5rem] md:w-[8rem] px-2 py-4 sm:px-6 mb-4",children:[n[e]&&(0,a.jsx)("img",{src:s(5605)(`./${n[e].src}`),alt:e,className:"w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] mx-auto"}),(0,a.jsx)("p",{className:"mt-4 text-center",children:e}),(0,a.jsxs)(l,{className:"info",children:[(0,a.jsx)("header",{children:e}),(0,a.jsx)("article",{children:n[e].info})]})]})},r)))}),(0,a.jsx)(m,{id:"blurbg-tech"})]})},o=i.ZP.div`
  transform-style: preserve-3d;
  perspective: 300px;
  position: relative;
  box-sizing: border-box;
`,l=i.ZP.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  padding: 1rem;
  opacity: 0;
  word-wrap: break-word;
  text-align: center;
  transition: opacity 0.2s;
  transform: rotateY(180deg) scale(50%);
  will-change: transform;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 0.85rem;

  & > header {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 700;
  }

  @media screen and (min-width: 640px) {
    font-size: 1rem;
    padding: 1.5rem;
    & > header {
      font-size: 1.25rem;
    }
  }
`,d=i.ZP.div`
  transition: 0.5s;
  cursor: pointer;
  border-radius: 1rem;
  box-sizing: border-box;
  &:hover {
    transition: 0.2s;
    transform: rotateY(45deg);
    background: white;
    box-shadow: 0px 0px 20px -15px black;
    & > img,
    > p {
      opacity: 0.7;
    }
  }

  &.active {
    transition: 0.5s;
    background: white;
    box-shadow: #00000017 0px 0px 15px -10px;
    & img,
    p {
      opacity: 0;
    }
    & > .info {
      transition: 0.5s;
      opacity: 1;
    }
  }
`,m=i.ZP.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(50px);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
`},2050:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(184);const i=e=>{const t=e.info;return(0,r.jsxs)("div",{className:"w-full h-full max-w-[1000px] mx-auto flex flex-row flex-wrap justify-between py-[4rem] sm:py-[7rem]",children:[(0,r.jsx)("div",{className:"w-full sm:w-[50%] sm:h-[250px] p-4 flex flex-col justify-center",children:(0,r.jsx)("p",{className:"text-[2rem] text-center font-extrabold ",children:"What I did"})}),(0,r.jsx)("div",{className:"hidden sm:block w-[50%] h-[250px] p-4",children:(0,r.jsx)("div",{className:"w-full h-full rounded-xl shadow-xl border bg-center bg-cover bg-[url('https://cdn.pixabay.com/photo/2020/03/13/08/22/brain-4927267_1280.jpg')]"})}),t.map(((e,t)=>(0,r.jsx)("div",{className:"w-full h-[120px] sm:w-[50%] sm:h-[250px] px-4 py-2 sm:p-4 text-sm sm:text-[1.2rem] ",children:(0,r.jsxs)("div",{className:`w-full h-full rounded-xl shadow-md sm:shadow-xl bg-white px-7 py-3 sm:p-7 flex flex-row items-center text-left break-words border ${(t%4===0||t%4===3)&&"sm:bg-light-primary/50"}`,children:[(0,r.jsx)("span",{className:"sm:hidden text-2xl mr-5",children:t+1}),e]})},t)))]})}},1062:(e,t,s)=>{var r=s(3867).w_;e.exports.p=function(e){return r({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}}]})(e)}},5605:(e,t,s)=>{var r={"./Azure.svg":2571,"./Css.svg":4182,"./DanielLEE_192.webp":5297,"./DanielLEE_512.webp":9607,"./FastApi.svg":3594,"./Html.svg":2406,"./JavaScript.svg":1864,"./NPM.svg":167,"./Next.js.svg":755,"./OpenAi.svg":2417,"./OpenVidu.webp":6601,"./Python.svg":1118,"./React.js.svg":920,"./ReactQuery.svg":6293,"./Swr.svg":693,"./Tailwind.svg":7036,"./Three.js.webp":5,"./TypeScript.svg":7939,"./Vue.js.svg":8777,"./WebRTC.svg":8886,"./arrow.svg":4124,"./link.png":2714};function i(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=5605},2571:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Azure.cbbb50ea7fa1540941d3.svg"},4182:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Css.d775a84d2e94cdab548c.svg"},5297:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/DanielLEE_192.a9bd955829d31b7d6dbf.webp"},9607:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/DanielLEE_512.232a2aacfa2438e05359.webp"},3594:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/FastApi.a8ea15acfdd82bb091e5.svg"},2406:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Html.51305ec564cee03372ec.svg"},1864:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/JavaScript.63b93412a24001eff2ac.svg"},167:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/NPM.87689eab730642c86d2b.svg"},755:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Next.js.2426e69d99a468ba1535.svg"},2417:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/OpenAi.625019fb7fdd3bd538d0.svg"},6601:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/OpenVidu.48e975f12b1d3f4ff64b.webp"},1118:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Python.744ffb84e4cd8e0d59bd.svg"},920:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/React.js.0cc978f43ea437de003e.svg"},6293:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/ReactQuery.681997346420bc501102.svg"},693:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Swr.45e6f1d4dbf9a9c99aca.svg"},7036:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Tailwind.681db3393706b0b8d30f.svg"},5:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Three.js.0af4b9642bc827787e2c.webp"},7939:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/TypeScript.0553733a9d433cefaf9e.svg"},8777:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/Vue.js.0747f6ef54c1a4334ff0.svg"},8886:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/WebRTC.17fa80686fc9716e8a12.svg"},4124:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/arrow.4e9060da2013b8d4a1c2.svg"},2714:e=>{"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABC0lEQVR4nO2WOw7CMAxAcw6YmeA6iIGDcCUYejKERFlBeqjQgU+B1nFjI/nt2O8lUUVKQRAEbgFmQAWcENIxU2VOX/mDdKGHgCpX3jrg9O8BeQOG71sC5+etGfuzByjKN0iGPjGKebrtWXXIv8W4DKD75C/A2n3AN/mksX/MgF/yrgP6yLsN6CvvMmCIvLuAofKuAiTyKmgEmMlrBJjK5waYy+cEaMmT+4QlAzRPntIB2s+GkgFjvHlKBQCLD//nV1J5ixvYaJ28ScBDhNqnktIB7W/mElk3AZoQAS/EDZQ+QOIG7G+gxg9HScAOP2wlAVNgb23O3WEyOKCNmDT1Rs+pbnfL5IMgCFIJrgzRaGUki4tZAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=863.97972c30.chunk.js.map