(self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[]).push([[783],{1783:(e,l,s)=>{"use strict";s.r(l),s.d(l,{default:()=>S});var a=s(3673);const o=(0,a.HX)("data-v-09162e20"),r=o(((e,l,s,r,t,n)=>{const i=(0,a.up)("crossroads-card"),c=(0,a.up)("q-carousel-slide"),d=(0,a.up)("q-carousel"),u=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(u,{class:"flex flex-center"},{default:o((()=>[(0,a.Wm)(d,{modelValue:e.selected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.selected=l),class:"cr-carousel full-height full-width","transition-prev":"slide-right","transition-next":"slide-left",animated:""},{default:o((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.cards,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.name,name:e.name,class:"row justify-center"},{default:o((()=>[(0,a.Wm)(i,{info:e},null,8,["info"])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])),_:1})}));var t=s(7874),n=s(2323),i=s(8880);const c=(0,a.HX)("data-v-3de1cb40");(0,a.dD)("data-v-3de1cb40");const d={class:"card-ctn row justify-center"},u={key:0,class:"card-name text-center text-uppercase"},m={key:"trigger",class:"full-height absolute"},f={class:"text-italic"},g={class:"row justify-around"},p={key:"options",class:"absolute"},w={class:"option-label text-center text-uppercase"},v={class:"row justify-center"},C={key:"result",class:"column absolute"},k={class:"row justify-around"};(0,a.Cn)();const h=c(((e,l,s,o,r,t)=>{const h=(0,a.up)("q-btn"),W=(0,a.up)("q-card"),b=(0,a.up)("q-separator"),y=(0,a.up)("q-scroll-area"),j=(0,a.up)("q-card-section");return(0,a.wg)(),(0,a.j4)("div",d,[(0,a.Wm)(W,{class:["card side-back absolute column justify-end items-center",{"card-rotate":e.isVisible}]},{default:c((()=>[(0,a.Wm)(h,{color:"green-10",icon:"play_circle_filled",size:"2em",flat:"",round:"",onClick:e.showCard},null,8,["onClick"])])),_:1},8,["class"]),(0,a.Wm)(W,{class:["card side-front absolute",{"card-rotate":!e.isVisible}]},{default:c((()=>[e.isVisible?((0,a.wg)(),(0,a.j4)(j,{key:0,class:"full-height column"},{default:c((()=>[e.isTriggered?((0,a.wg)(),(0,a.j4)("div",u,(0,n.zw)(e.name),1)):(0,a.kq)("",!0),(0,a.Wm)(y,{class:"col-grow"},{default:c((()=>[(0,a.Wm)(i.W3,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:c((()=>[e.isTriggered?e.isShowingResult?((0,a.wg)(),(0,a.j4)("div",C,[(0,a.Wm)("div",null,(0,n.zw)(e.result),1),(0,a.Wm)("div",k,[(0,a.Wm)(h,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideResult},null,8,["onClick"]),(0,a.Wm)(h,{color:"red-10",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showCardInfo},null,8,["onClick"])])])):((0,a.wg)(),(0,a.j4)("div",p,[(0,a.Wm)("div",null,(0,n.zw)(e.intro),1),(0,a.Wm)(b,{color:"grey-10",spaced:""}),((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.options,(l=>((0,a.wg)(),(0,a.j4)("div",{key:l.label},[(0,a.Wm)("div",w,(0,n.zw)(l.label),1),(0,a.Wm)("div",{class:"cursor-pointer border-blink q-pa-xs",onClick:s=>e.showResult(l.result)},[(0,a.Wm)("div",null,(0,n.zw)(l.subtext),1)],8,["onClick"])])))),128)),(0,a.Wm)("div",v,[(0,a.Wm)(h,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCardInfo},null,8,["onClick"])])])):((0,a.wg)(),(0,a.j4)("div",m,[(0,a.Wm)("div",f,(0,n.zw)(e.trigger),1),(0,a.Wm)("div",g,[(0,a.Wm)(h,{color:"grey-14",icon:"close",size:"1em",flat:"",round:""}),(0,a.Wm)(h,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCard},null,8,["onClick"]),(0,a.Wm)(h,{color:"red-10",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showCardInfo},null,8,["onClick"])])]))])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1},8,["class"])])}));var W=s(1959);const b=(0,a.aZ)({name:"CrossroadsCard",props:{info:{type:Object,required:!0}},setup(e){const l=(0,W.iH)(!1),s=()=>{l.value=!0},a=()=>{l.value=!1},o=(0,W.iH)(!1),r=()=>{o.value=!0},t=()=>{o.value=!1},n=(0,W.iH)("Result"),i=(0,W.iH)(!1),c=e=>{n.value=e,i.value=!0},d=()=>{n.value="",i.value=!1};return{isVisible:l,showCard:s,hideCard:a,isTriggered:o,showCardInfo:r,hideCardInfo:t,result:n,isShowingResult:i,showResult:c,hideResult:d,trigger:e.info.trigger,name:e.info.name,intro:e.info.intro,options:e.info.options}}});var y=s(151),j=s(1828),_=s(5589),z=s(7704),q=s(5869),x=s(7518),Z=s.n(x);b.render=h,b.__scopeId="data-v-3de1cb40";const I=b;Z()(b,"components",{QCard:y.Z,QBtn:j.Z,QCardSection:_.Z,QScrollArea:z.Z,QSeparator:q.Z});const H=(0,a.aZ)({name:"PageIndex",components:{CrossroadsCard:I},setup(){const e=(0,t.oR)(),l=(0,a.Fl)((()=>e.getters.getFilteredCards)),s=(0,a.Fl)((()=>l.value[e.getters.getCounter].name));return{selected:s,cards:l}}});var Q=s(4379),R=s(7565),V=s(4593);H.render=r,H.__scopeId="data-v-09162e20";const S=H;Z()(H,"components",{QPage:Q.Z,QCarousel:R.Z,QCarouselSlide:V.Z})}}]);