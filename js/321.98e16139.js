"use strict";(self["webpackChunkdbd_management_system"]=self["webpackChunkdbd_management_system"]||[]).push([[321],{2448:function(e,l,a){a.r(l),a.d(l,{default:function(){return L}});var t=a(8031),n=(a(8380),a(6246),a(4871)),s=(a(1500),a(6684),a(3407),a(4603)),u=a(7419),o=a(842),i=a.p+"img/dbd-logo(1).530e0e2a.png",r=a(7090),d=a(4741),c=a.p+"media/Michel F. April - Dead By Daylight (Theme).3e69cad5.mp3";const k={class:"audio-com"},v=["src"];var f={__name:"AudioCom",setup(e,{expose:l}){const a=(0,u.KR)(null),t=(0,u.KR)(!1),n=()=>{a.value.play()},o=()=>{a.value.pause()},i=()=>{t.value=!t.value,console.log(t.value)};return(0,s.wB)(t,(e=>{e?n():o()})),l({play:n,stop:o,changeMuted:i}),(e,l)=>((0,s.uX)(),(0,s.CE)("div",k,[(0,s.Lk)("audio",{ref_key:"audio",ref:a,src:(0,u.R1)(c)},null,8,v),(0,s.Lk)("div",{class:"btns"},[(0,s.Lk)("div",{class:"change-btn",onClick:i},l[0]||(l[0]=[(0,s.Lk)("span",null,"音乐",-1)]))])]))}},m=a(8533);const p=(0,m.A)(f,[["__scopeId","data-v-4c33455f"]]);var _=p,b=a(1041),h=a(7462);a(8501);const g={class:"layout-container"},W={class:"myInfo"},x={class:"username"};var y={__name:"LayoutContainer",setup(e){const l=(0,r.kH)(),a=(0,b.lq)(),c=(0,u.KR)(""),k=(0,s.EW)((()=>a.path.startsWith("/survivor")?"/survivor":a.path.startsWith("/killer")?"/killer":a.path));(0,s.wB)((()=>a.path),(e=>{console.log("路由变化",e),c.value=k.value}),{immediate:!0});const v=async()=>{await h.s.confirm("你确认要进行退出么","温馨提示",{type:"warning",confirmButtonText:"确认",cancelButtonText:"取消"}),l.removeToken(),l.setUser({})};return(e,a)=>{const r=t.ct,k=t.$b,f=n.zv,m=t.lj,p=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",g,[(0,s.bF)(m,{"default-active":c.value,class:"el-menu-demo",mode:"horizontal","background-color":"#000","text-color":"#fff","active-text-color":"#ffd04b",ellipsis:!1,router:"",onSelect:e.handleSelect},{default:(0,s.k6)((()=>[(0,s.bF)(r,{class:"logo"},{default:(0,s.k6)((()=>a[0]||(a[0]=[(0,s.Lk)("img",{style:{height:"100%"},src:i,alt:"黎明杀机logo"},null,-1)]))),_:1}),(0,s.bF)(r,{index:"/home"},{default:(0,s.k6)((()=>a[1]||(a[1]=[(0,s.eW)("首页")]))),_:1}),(0,s.bF)(r,{index:"/survivor"},{default:(0,s.k6)((()=>a[2]||(a[2]=[(0,s.eW)("逃生者")]))),_:1}),(0,s.bF)(r,{index:"/killer"},{default:(0,s.k6)((()=>a[3]||(a[3]=[(0,s.eW)("杀手")]))),_:1}),(0,s.bF)(k,{index:"2"},{title:(0,s.k6)((()=>a[4]||(a[4]=[(0,s.Lk)("span",null,"技能",-1)]))),default:(0,s.k6)((()=>[(0,s.bF)(r,{index:"/skill/survivor"},{default:(0,s.k6)((()=>a[5]||(a[5]=[(0,s.eW)("逃生者技能")]))),_:1}),(0,s.bF)(r,{index:"/skill/killer"},{default:(0,s.k6)((()=>a[6]||(a[6]=[(0,s.eW)("杀手技能")]))),_:1})])),_:1}),(0,s.bF)(r,{index:"/prop"},{default:(0,s.k6)((()=>a[7]||(a[7]=[(0,s.eW)("道具")]))),_:1}),(0,s.bF)(r,{index:"/map"},{default:(0,s.k6)((()=>a[8]||(a[8]=[(0,s.eW)("地图")]))),_:1}),(0,s.bF)(r,{index:"/offer"},{default:(0,s.k6)((()=>a[9]||(a[9]=[(0,s.eW)("祭品")]))),_:1}),(0,s.bF)(k,null,{title:(0,s.k6)((()=>[(0,s.Lk)("div",W,[(0,s.bF)(f,{shape:"circle",size:50,src:(0,u.R1)(l).user.avatar||(0,u.R1)(d)},null,8,["src"]),(0,s.Lk)("div",x,(0,o.v_)((0,u.R1)(l).user.username?(0,u.R1)(l).user.username.length>5?(0,u.R1)(l).user.username.slice(0,5)+"...":(0,u.R1)(l).user.username:"未登录"),1)])])),default:(0,s.k6)((()=>[(0,u.R1)(l).token?((0,s.uX)(),(0,s.Wv)(r,{key:0,index:"/user"},{default:(0,s.k6)((()=>a[10]||(a[10]=[(0,s.eW)("用户中心(暂无)")]))),_:1})):(0,s.Q3)("",!0),(0,u.R1)(l).token?((0,s.uX)(),(0,s.Wv)(r,{key:2,onClick:v},{default:(0,s.k6)((()=>a[12]||(a[12]=[(0,s.eW)("退出登录")]))),_:1})):((0,s.uX)(),(0,s.Wv)(r,{key:1,index:"/login"},{default:(0,s.k6)((()=>a[11]||(a[11]=[(0,s.eW)("登录")]))),_:1}))])),_:1})])),_:1},8,["default-active","onSelect"]),(0,s.bF)(p),(0,s.bF)(_),a[13]||(a[13]=(0,s.Lk)("div",{class:"footer"},[(0,s.Lk)("div",{class:"list"},[(0,s.Lk)("div",null,"1"),(0,s.Lk)("div",null,"2"),(0,s.Lk)("div",null,"3"),(0,s.Lk)("div",null,"4")]),(0,s.Lk)("p",null," © 2024-2025 and pcloud、23433的植物 and other friends and dbd-logo from Behaviour Interactive Inc. All rights reserved pcloud ")],-1))])}}};const F=(0,m.A)(y,[["__scopeId","data-v-e38fc528"]]);var L=F}}]);
//# sourceMappingURL=321.98e16139.js.map