(self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[]).push([[808],{9808:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>H});var r=s(3673);function o(e,a,s,o,l,t){const n=(0,r.up)("crossroads-card"),i=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(i,{class:"flex flex-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{info:e.cards[0]},null,8,["info"])])),_:1})}var l=s(7874),t=s(8880),n=s(2323);const i=(0,r.HX)("data-v-156b50ec");(0,r.dD)("data-v-156b50ec");const c={class:"card row justify-center"},d={key:"trigger",class:"trigger full-height absolute"},u={class:"text-italic"},f={class:"row justify-around"},m={key:"card-info",class:"card-info absolute"},p={class:"text-center text-uppercase text-h6"},v={key:"options"},g={class:"option-label text-center text-uppercase text-subtitle2"},w={class:"row justify-center"},C={key:"result",class:"column"},W={class:"row justify-around"};(0,r.Cn)();const h=i(((e,a,s,o,l,h)=>{const k=(0,r.up)("q-btn"),b=(0,r.up)("q-card"),y=(0,r.up)("q-separator"),z=(0,r.up)("q-space"),_=(0,r.up)("q-scroll-area"),j=(0,r.up)("q-card-section");return(0,r.wg)(),(0,r.j4)("div",c,[(0,r.Wm)(b,{class:["card side-back absolute column justify-end items-center",{"card-rotate":e.isVisible}]},{default:i((()=>[(0,r.Wm)(k,{color:"green-10",icon:"play_circle_filled",size:"3.5em",flat:"",round:"",onClick:e.showCard},null,8,["onClick"])])),_:1},8,["class"]),(0,r.Wm)(b,{class:["card side-front absolute",{"card-rotate":!e.isVisible}]},{default:i((()=>[(0,r.Wm)(j,{class:"full-height"},{default:i((()=>[(0,r.Wm)(_,{class:"full-height"},{default:i((()=>[(0,r.Wm)(t.W3,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:i((()=>[e.isTriggered?((0,r.wg)(),(0,r.j4)("div",m,[(0,r.Wm)("div",p,(0,n.zw)(e.name),1),(0,r.Wm)(t.W3,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:i((()=>[(0,r.wy)((0,r.Wm)("div",v,[(0,r.Wm)("div",null,(0,n.zw)(e.intro),1),(0,r.Wm)(y,{color:"grey-10",spaced:""}),((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.options,(a=>((0,r.wg)(),(0,r.j4)("div",{key:a.label},[(0,r.Wm)("div",g,(0,n.zw)(a.label),1),(0,r.Wm)("div",{class:"cursor-pointer border-blink q-pa-xs",onClick:s=>e.showResult(a.result)},[(0,r.Wm)("div",null,(0,n.zw)(a.subtext),1)],8,["onClick"])])))),128)),(0,r.Wm)("div",w,[(0,r.Wm)(k,{color:"grey-14",icon:"undo",size:"1.5em",flat:"",round:"",onClick:e.hideCardInfo},null,8,["onClick"])])],512),[[t.F8,!e.isShowingResult]]),(0,r.wy)((0,r.Wm)("div",C,[(0,r.Wm)("div",null,(0,n.zw)(e.result),1),(0,r.Wm)(z),(0,r.Wm)("div",W,[(0,r.Wm)(k,{color:"grey-14",icon:"undo",size:"1.5em",flat:"",round:"",onClick:e.hideResult},null,8,["onClick"]),(0,r.Wm)(k,{color:"red-10",icon:"arrow_forward",size:"1.5em",flat:"",round:"",onClick:e.showCardInfo},null,8,["onClick"])])],512),[[t.F8,e.isShowingResult]])])),_:1})])):((0,r.wg)(),(0,r.j4)("div",d,[(0,r.Wm)("div",u,(0,n.zw)(e.trigger),1),(0,r.Wm)("div",f,[(0,r.Wm)(k,{color:"grey-14",icon:"close",size:"1.5em",flat:"",round:""}),(0,r.Wm)(k,{color:"grey-14",icon:"undo",size:"1.5em",flat:"",round:"",onClick:e.hideCard},null,8,["onClick"]),(0,r.Wm)(k,{color:"red-10",icon:"arrow_forward",size:"1.5em",flat:"",round:"",onClick:e.showCardInfo},null,8,["onClick"])])]))])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])}));var k=s(1959);const b=(0,r.aZ)({name:"CrossroadsCard",props:{info:{type:Object,required:!0}},setup(e){const a=(0,k.iH)(!1),s=()=>{a.value=!0},r=()=>{a.value=!1},o=(0,k.iH)(!1),l=()=>{o.value=!0},t=()=>{o.value=!1},n=(0,k.iH)(""),i=(0,k.iH)(!1),c=e=>{n.value=e,i.value=!0},d=()=>{n.value="",i.value=!1};return{isVisible:a,showCard:s,hideCard:r,isTriggered:o,showCardInfo:l,hideCardInfo:t,result:n,isShowingResult:i,showResult:c,hideResult:d,trigger:e.info.trigger,name:e.info.name,intro:e.info.intro,options:e.info.options}}});var y=s(151),z=s(1828),_=s(5589),j=s(7704),x=s(5869),q=s(2025),I=s(7518),Z=s.n(I);b.render=h,b.__scopeId="data-v-156b50ec";const R=b;Z()(b,"components",{QCard:y.Z,QBtn:z.Z,QCardSection:_.Z,QScrollArea:j.Z,QSeparator:x.Z,QSpace:q.Z});const Q=(0,r.aZ)({name:"PageIndex",components:{CrossroadsCard:R},setup(){const e=(0,l.oR)(),a=(0,r.Fl)((()=>e.getters.getCards));return{cards:a}}});var S=s(4379);Q.render=o;const H=Q;Z()(Q,"components",{QPage:S.Z})}}]);