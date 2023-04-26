(function(){"use strict";var e={5067:function(e,t,l){var n=l(4220),o=l(9812);const a=(0,o._)("a",{href:"home.html"},"Home",-1);function r(e,t){const l=(0,o.up)("router-link"),n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[a,(0,o.Uk)(" | "),(0,o.Wm)(l,{to:"/Amazon"},{default:(0,o.w5)((()=>[(0,o.Uk)("Amazon")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(l,{to:"/Github"},{default:(0,o.w5)((()=>[(0,o.Uk)("Github")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(l,{to:"/Google"},{default:(0,o.w5)((()=>[(0,o.Uk)("Google")])),_:1})]),(0,o.Wm)(n)],64)}var i=l(8998);const u={},d=(0,i.Z)(u,[["render",r]]);var s=d,p=l(644),c=l(5893);const m=e=>((0,o.dD)("data-v-42de5f10"),e=e(),(0,o.Cn)(),e),h=m((()=>(0,o._)("img",{width:"103",src:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"},null,-1))),f=m((()=>(0,o._)("div",{style:{"padding-top":"20px"}},null,-1))),w={style:{padding:"20px 26px!important"}},g=m((()=>(0,o._)("h1",{style:{"margin-bottom":"10px","margin-top":"0px","font-size":"28px","font-weight":"400","line-height":"1.2","padding-bottom":"4px"}}," Sign in ",-1))),_=m((()=>(0,o._)("label",{style:{"font-weight":"700"}}," Email or mobile phone number ",-1))),v=m((()=>(0,o._)("div",{style:{"padding-top":"18px"}},null,-1))),y=m((()=>(0,o._)("div",{style:{"padding-top":"20px","font-size":"12px","line-height":"1.5"}},[(0,o.Uk)(" By continuing, you agree to Amazon's "),(0,o._)("a",{href:"https://www.amazon.com/"},"Conditions of Use"),(0,o.Uk)(" and "),(0,o._)("a",{href:"https://www.amazon.com/"},"Privacy Notice.")],-1))),k=m((()=>(0,o._)("div",{style:{"padding-top":"20px"}},[(0,o._)("a",{href:"https://www.amazon.com/"},"Need Help?")],-1))),x=m((()=>(0,o._)("a",{href:"https://www.amazon.com/"}," Change",-1))),b=m((()=>(0,o._)("div",{style:{"padding-top":"10px",display:"flex","justify-content":"space-between"}},[(0,o._)("h4",null,"Password"),(0,o._)("a",{href:"https://www.amazon.com/"}," Forgot your password?")],-1))),U=m((()=>(0,o._)("div",{style:{"padding-top":"18px"}},null,-1))),W=m((()=>(0,o._)("div",{style:{"padding-top":"18px"}},[(0,o._)("input",{type:"checkbox",value:"true",tabindex:"4"}),(0,o.Uk)(" Keep me signed in. "),(0,o._)("a",{href:"https://www.amazon.com/"},"Details")],-1)));function z(e,t,l,n,a,r){const i=(0,o.up)("el-input"),u=(0,o.up)("el-button"),d=(0,o.up)("el-carousel-item"),s=(0,o.up)("el-carousel"),p=(0,o.up)("el-card");return(0,o.wg)(),(0,o.iD)(o.HY,null,[h,f,(0,o.Wm)(p,{shadow:"never"},{default:(0,o.w5)((()=>[(0,o._)("div",w,[g,(0,o.Wm)(s,{height:"200px",ref:"carouselMenu","indicator-position":"none",arrow:"never",autoplay:!1,loop:!1,trigger:"click"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[_,(0,o.Wm)(i,{modelValue:a.username,"onUpdate:modelValue":t[0]||(t[0]=e=>a.username=e),placeholder:"Please input your email"},null,8,["modelValue"]),v,(0,o.Wm)(u,{onClick:r.changeToNextPage,style:{width:"100%","border-color":"rgb(124 101 43)"},color:"#f0c14b"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Continue ")])),_:1},8,["onClick"]),y,k])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Uk)((0,c.zw)(a.username)+" ",1),x]),b,(0,o.Wm)(i,{modelValue:a.password,"onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e),placeholder:"Please input your password"},null,8,["modelValue"]),U,(0,o.Wm)(u,{onClick:r.changeToNextPage,style:{width:"100%","border-color":"rgb(124 101 43)"},color:"#f0c14b"},{default:(0,o.w5)((()=>[(0,o.Uk)("Sign in ")])),_:1},8,["onClick"]),W])),_:1})])),_:1},512)])])),_:1})],64)}var C={name:"AmazonCentral",data(){return{username:"",password:""}},methods:{login(){const e="abc",t="abc";console.log(e,t)},changeToNextPage(){this.$refs.carouselMenu.next()}}};const V=(0,i.Z)(C,[["render",z],["__scopeId","data-v-42de5f10"]]);var P=V;const F=e=>((0,o.dD)("data-v-57ecd7a2"),e=e(),(0,o.Cn)(),e),N=F((()=>(0,o._)("svg",{height:"48","aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1",width:"48","data-view-component":"true",class:"octicon octicon-mark-github"},[(0,o._)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})],-1))),A=F((()=>(0,o._)("div",{style:{"padding-top":"20px"}},null,-1))),G=F((()=>(0,o._)("h1",null,"Sign in to GitHub",-1))),j=F((()=>(0,o._)("div",{style:{"padding-top":"15px"}},null,-1))),H=F((()=>(0,o._)("label",null," Username or email address ",-1))),O=F((()=>(0,o._)("div",{style:{"padding-top":"5px"}},null,-1))),D=F((()=>(0,o._)("div",{style:{"padding-top":"15px","padding-bottom":"5px",display:"flex","justify-content":"space-between"}},[(0,o.Uk)(" Password "),(0,o._)("a",{href:"https://github.com/"},"Forgot password?")],-1))),M=F((()=>(0,o._)("div",{style:{"padding-top":"15px"}},null,-1))),T=F((()=>(0,o._)("div",{style:{"padding-top":"20px"}},null,-1))),B=F((()=>(0,o._)("a",{href:"https://github.com/"}," Create an account.",-1)));function Z(e,t,l,n,a,r){const i=(0,o.up)("el-input"),u=(0,o.up)("el-button"),d=(0,o.up)("el-card");return(0,o.wg)(),(0,o.iD)(o.HY,null,[N,A,G,j,(0,o.Wm)(d,{class:"login-card",shadow:"never"},{default:(0,o.w5)((()=>[H,O,(0,o.Wm)(i,{modelValue:e.username,"onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t),placeholder:"Please input your username/email"},null,8,["modelValue"]),D,(0,o.Wm)(i,{modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),placeholder:"Please input your password"},null,8,["modelValue"]),M,(0,o.Wm)(u,{onClick:e.login,style:{width:"100%","border-color":"rgb(24 119 51)"},color:"rgb(24 119 51)"},{default:(0,o.w5)((()=>[(0,o.Uk)("Sign in ")])),_:1},8,["onClick"])])),_:1}),T,(0,o.Wm)(d,{class:"register-card",shadow:"never"},{default:(0,o.w5)((()=>[(0,o.Uk)(" New to GitHub? "),B])),_:1})],64)}var S={name:"GithubCentral"};const L=(0,i.Z)(S,[["render",Z],["__scopeId","data-v-57ecd7a2"]]);var E=L;function X(e,t,l,n,o,a){return null}var Y={name:"NormalLateral"};const I=(0,i.Z)(Y,[["render",X]]);var K=I;const $=e=>((0,o.dD)("data-v-318f7608"),e=e(),(0,o.Cn)(),e),J={class:"cardContainer"},q=$((()=>(0,o._)("div",{class:"cardHeader"},[(0,o._)("svg",{width:"75",height:"24",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("g",{id:"Layer_1"},[(0,o._)("title",null,"Layer 1"),(0,o._)("g",{stroke:"null",id:"svg_18"},[(0,o._)("path",{stroke:"#FFB27C",d:"m15.61592,0.7114c-0.10593,0.38261 -0.95237,1.82066 -2.01265,3.6986c-0.82731,1.46532 -1.13696,2.45291 -1.69486,3.18845c-0.70714,0.9323 -1.40398,1.89111 -2.33043,3.57107c-0.76397,1.38533 -1.358,2.80789 -2.01265,3.57107c-0.54877,0.63975 -1.05929,1.0203 -1.483,1.53046c-0.63557,0.76523 -1.16522,1.65799 -1.37707,2.16815l-0.10593,0",id:"svg_1","stroke-width":"0",fill:"none"}),(0,o._)("path",{stroke:"#FFB27C",d:"m14.23885,1.34909c0,0.12754 -0.12375,0.10959 -0.7415,1.0203c-0.76397,1.12628 -1.57167,2.18295 -2.33043,3.44353c-0.9324,1.54906 -1.81817,3.01748 -2.75415,4.33629c-0.68123,0.95986 -1.21058,1.71199 -1.69486,2.42322c-0.47488,0.69742 -0.84215,1.28051 -1.27114,1.91307c-0.52326,0.77157 -0.98446,1.36804 -1.37707,1.91307c-0.34702,0.48175 -0.42371,0.63769 -0.52964,0.89277l-0.21186,0.12754",id:"svg_2","stroke-width":"0",fill:"none"}),(0,o._)("path",{stroke:"null",id:"svg_6",d:"m-0.40321,5.47808l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.9679l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.9679l3.21924,-6.33955l-3.21924,-6.33955z","stroke-width":"0",fill:"#5b9dff"}),(0,o._)("path",{stroke:"null",id:"svg_14",d:"m12.41416,5.47808l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z","stroke-width":"0",fill:"#FFAAB8"}),(0,o._)("path",{stroke:"null",id:"svg_15",d:"m25.44339,5.8607l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z","stroke-width":"0",fill:"#FFF093"}),(0,o._)("path",{stroke:"null",id:"svg_16",d:"m38.15483,5.98824l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z","stroke-width":"0",fill:"#5b9dff"}),(0,o._)("path",{stroke:"null",id:"svg_17",d:"m50.9722,5.8607l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z","stroke-width":"0",fill:"#D1FFB4"})]),(0,o._)("path",{stroke:"null",id:"svg_19",d:"m63.65751,5.72126l2.78632,-6.08969l2.95987,6.46893l2.95987,-6.46893l2.78635,6.08969l-2.95987,6.46899l2.95987,6.46899l-2.78635,6.08975l-2.95987,-6.46899l-2.95987,6.46899l-2.78632,-6.08975l2.95985,-6.46899l-2.95985,-6.46899z","stroke-width":"0",fill:"#FFAAB8"})])]),(0,o._)("div",{class:"wordContainer"},[(0,o._)("h1",{class:"signinWord"},[(0,o._)("span",null,"Sign in")])]),(0,o._)("div",{class:"myWord"},[(0,o._)("span",null,"to continue to XXXXX")])],-1))),Q={class:"cardBody"},R={style:{width:"100%","padding-top":"10px"}},ee=$((()=>(0,o._)("div",{style:{width:"100%","margin-top":"36px","font-family":"inherit","font-size":"inherit"}},[(0,o._)("span",null,"Not your computer? Use Guest mode to sign in privately.")],-1))),te={style:{width:"100%","padding-top":"10px"}},le={style:{display:"flex","justify-content":"space-between","margin-top":"50px"}},ne={style:{display:"flex","justify-content":"space-between","margin-top":"50px"}},oe={class:"footer"},ae={style:{"margin-top":"10px"}};function re(e,t,l,n,a,r){const i=(0,o.up)("el-input"),u=(0,o.up)("router-link"),d=(0,o.up)("el-button"),s=(0,o.up)("el-carousel-item"),p=(0,o.up)("el-carousel"),c=(0,o.up)("el-card"),m=(0,o.up)("el-option"),h=(0,o.up)("el-select");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,{shadow:"never",class:"box-card"},{default:(0,o.w5)((()=>[(0,o._)("div",J,[q,(0,o._)("div",Q,[(0,o.Wm)(p,{ref:"carouselMenu","indicator-position":"none",arrow:"never",autoplay:!1,loop:!1,trigger:"click"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:e.input,"onUpdate:modelValue":t[0]||(t[0]=t=>e.input=t),placeholder:"Please input your email"},null,8,["modelValue"]),(0,o._)("div",R,[(0,o.Wm)(u,{to:"/404"},{default:(0,o.w5)((()=>[(0,o.Uk)("Forgot email?")])),_:1})]),ee,(0,o._)("div",te,[(0,o.Wm)(u,{to:"/404"},{default:(0,o.w5)((()=>[(0,o.Uk)("Learn more")])),_:1})]),(0,o._)("div",le,[(0,o.Wm)(u,{to:"/404"},{default:(0,o.w5)((()=>[(0,o.Uk)("Create account")])),_:1}),(0,o.Wm)(d,{class:"firstnext",onClick:r.changeToNextPage,type:"primary",style:{height:"36px",width:"80px"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Next ")])),_:1},8,["onClick"])])])),_:1}),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{style:{"margin-top":"60px"},modelValue:e.input,"onUpdate:modelValue":t[1]||(t[1]=t=>e.input=t),placeholder:"Enter your password"},null,8,["modelValue"]),(0,o._)("div",ne,[(0,o.Wm)(u,{to:"/404"},{default:(0,o.w5)((()=>[(0,o.Uk)("Forgot password?")])),_:1}),(0,o.Wm)(d,{onClick:r.login,type:"primary",style:{height:"36px",width:"80px"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Next")])),_:1},8,["onClick"])])])),_:1})])),_:1},512)])])])),_:1}),(0,o._)("div",oe,[(0,o.Wm)(h,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value=t),class:"m-2",placeholder:"Select",size:"large"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.countries,(e=>((0,o.wg)(),(0,o.j4)(m,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,o._)("div",ae,[(0,o.Wm)(d,{text:"true",size:"small"},{default:(0,o.w5)((()=>[(0,o.Uk)("Help")])),_:1}),(0,o.Wm)(d,{text:"true",size:"small"},{default:(0,o.w5)((()=>[(0,o.Uk)("Privacy")])),_:1}),(0,o.Wm)(d,{text:"true",size:"small"},{default:(0,o.w5)((()=>[(0,o.Uk)("Terms")])),_:1})])])],64)}var ie={name:"GoogleCentral",data(){return{countries:["English (United States)","Chinese","Janpanese"],username:"",password:""}},methods:{login(){const e="abc",t="abc";console.log(e,t)},changeToNextPage(){this.$refs.carouselMenu.next()}}};const ue=(0,i.Z)(ie,[["render",re],["__scopeId","data-v-318f7608"]]);var de=ue;function se(e,t,l,n,a,r){const i=(0,o.up)("amazon-central");return(0,o.wg)(),(0,o.j4)(i)}var pe={name:"testNPM",components:{AmazonCentral:P,GoogleCentral:de}};const ce=(0,i.Z)(pe,[["render",se]]);var me=ce;const he=[{path:"/",name:"home",redirect:"/Amazon"},{path:"/Amazon",name:"Amazon",component:P},{path:"/Github",name:"Github",component:E},{path:"/NormalLateral",name:"NormalLateral",component:K},{path:"/Google",name:"Google",component:de},{path:"/testNPM",name:"testNPM",component:me}],fe=(0,p.p7)({history:(0,p.r5)(),routes:he});var we=fe,ge=l(2357),_e=(0,ge.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),ve=l(4321);l(4415);const ye=[de,P,E],ke=e=>{ye.forEach((t=>{e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&ke.install(window.Vue);var xe=ke;(0,n.ri)(s).use(ve.Z).use(_e).use(we).use(xe).mount("#app")}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,l),a.exports}l.m=e,function(){var e=[];l.O=function(t,n,o,a){if(!n){var r=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],a=e[s][2];for(var i=!0,u=0;u<n.length;u++)(!1&a||r>=a)&&Object.keys(l.O).every((function(e){return l.O[e](n[u])}))?n.splice(u--,1):(i=!1,a<r&&(r=a));if(i){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,r=n[0],i=n[1],u=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(u)var s=u(l)}for(t&&t(n);d<r.length;d++)a=r[d],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(s)},n=self["webpackChunkclcl"]=self["webpackChunkclcl"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=l.O(void 0,[998],(function(){return l(5067)}));n=l.O(n)})();
//# sourceMappingURL=app.85ebe5e1.js.map