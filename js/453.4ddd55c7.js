"use strict";(self["webpackChunkdbd_management_system"]=self["webpackChunkdbd_management_system"]||[]).push([[453],{8533:function(e,l){l.A=(e,l)=>{const n=e.__vccOpts||e;for(const[t,s]of l)n[t]=s;return n}},9342:function(e,l,n){n.d(l,{IP:function(){return k},OW:function(){return g},Ow:function(){return s},Q:function(){return p},Q7:function(){return i},QW:function(){return a},T0:function(){return r},TJ:function(){return o},bf:function(){return u},fC:function(){return v},jM:function(){return c},r9:function(){return d}});var t=n(5251);const s=e=>(console.log("页码信息："+e.page),console.log("每页展示："+e.pageSize),t.A.get("/survivor",{params:e})),r=()=>t.A.get("/survivor/all"),i=e=>t.A.get(`/survivor/${e}`),a=e=>t.A.get("/survivor/name",{params:{name:e}}),o=e=>t.A.post("/admin/survivor/add",e),u=e=>t.A.put("/admin/survivor/update",e),c=e=>t.A.delete(`/admin/survivor/delete/${e}`),d=e=>(console.log("页码信息："+e.page),console.log("每页展示："+e.pageSize),t.A.get("/skill/survivor",{params:e})),v=e=>t.A.get(`/skill/survivor/${e}`),k=e=>t.A.post("/admin/skill/survivor/add",e),g=e=>t.A.put("/admin/skill/survivor/update",e),p=e=>t.A.delete(`/admin/skill/survivor/delete/${e}`)},4282:function(e,l,n){n.r(l),n.d(l,{default:function(){return q}});var t=n(4603),s=n(7419),r=n(842),i=n(8482),a=n(1041),o=n(9342),u=n.p+"img/survivor-icon.0b14af2c.png";const c={class:"survivor-details"},d={class:"details"},v={class:"header"},k={class:"avatar"},g=["src"],p={class:"name"},m={class:"icon"},L=["src"],f={class:"body"},h={class:"skill"},y={class:"left"},b={class:"skill-list"},_=["onClick"],A=["src"],R={class:"cover"},T={style:{color:"white"}},w=["innerHTML"],C={class:"right"},M={class:"show"},x=["src"],$={class:"story"},H={class:"right"},I=["innerHTML"];var K={__name:"SurvivorDetailsPage",setup(e){const l=(0,a.lq)(),n=(0,s.KR)({}),K=(0,s.KR)(),S=(0,s.KR)([{id:1,name:"技能1",content:"<span>技能描述</span>",story:""},{id:2,name:"技能2",content:"<span>技能描述</span>",story:""},{id:3,name:"技能3",content:"<span>技能描述</span>",story:""}]),Q=(0,s.KR)();console.log(l.query);const q=e=>{console.log(e),console.log(S.value[e].content),Q.value.innerHTML=`\n  <h2 style="color: white;padding-top: 10px">${S.value[e].name}</h2>\n  <div v-html=${S.value[e].content}</div>\n  `,K.value.src=S.value[e].imgurl},E=e=>{e.target.children[1].style.opacity=.8,e.target.children[2].style.borderTop="5px solid red",e.target.children[2].style.borderLeft="5px solid red",e.target.children[3].style.borderBottom="5px solid red",e.target.children[3].style.borderRight="5px solid red"},O=e=>{e.target.children[1].style.opacity=0,e.target.children[2].style.borderTop="0",e.target.children[2].style.borderLeft="0",e.target.children[3].style.borderBottom="0",e.target.children[3].style.borderRight="0"},X=async()=>{const e=await(0,o.Q7)(l.query.id);console.log(e),n.value=e.data.data,console.log(n.value),S.value=n.value.survivorSkills};return X(),(e,l)=>((0,t.uX)(),(0,t.CE)("div",c,[(0,t.Lk)("div",d,[(0,t.Lk)("div",v,[(0,t.Lk)("div",k,[(0,t.Lk)("img",{src:n.value.image||(0,s.R1)(u),alt:""},null,8,g)]),(0,t.Lk)("div",p,[(0,t.Lk)("div",m,[(0,t.Lk)("img",{src:(0,s.R1)(u),alt:""},null,8,L),l[0]||(l[0]=(0,t.Lk)("span",null,"逃生者",-1))]),(0,t.Lk)("h1",null,(0,r.v_)(n.value.name),1)])]),(0,t.Lk)("div",f,[(0,t.Lk)("div",h,[(0,t.Lk)("div",y,[l[3]||(l[3]=(0,t.Lk)("h1",null,"可传承技能",-1)),(0,t.Lk)("div",b,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.value.survivorSkills,((e,n)=>((0,t.uX)(),(0,t.CE)("div",{onClick:e=>q(n),onMouseenter:E,onMouseleave:O,class:"skill-list-item",key:n},[(0,t.Lk)("img",{src:e.imgurl||(0,s.R1)(u),alt:""},null,8,A),(0,t.Lk)("div",R,[(0,t.Lk)("h3",null,(0,r.v_)(e.name),1)]),l[1]||(l[1]=(0,t.Lk)("span",{class:"top-left"},null,-1)),l[2]||(l[2]=(0,t.Lk)("span",{class:"bottom-right"},null,-1))],40,_)))),128))]),(0,t.Lk)("div",{ref_key:"skillInfoRef",ref:Q,class:"skill-info"},[(0,t.Lk)("h2",T,(0,r.v_)(S.value[0].name),1),(0,t.Lk)("div",{innerHTML:S.value[0].content},null,8,w)],512)]),(0,t.Lk)("div",C,[(0,t.Lk)("div",M,[(0,t.Lk)("img",{ref_key:"bigImage",ref:K,src:S.value[0].imgurl||(0,s.R1)(u),alt:""},null,8,x),l[4]||(l[4]=(0,t.Lk)("span",{class:"top-left"},null,-1)),l[5]||(l[5]=(0,t.Lk)("span",{class:"bottom-right"},null,-1))])])]),(0,t.Lk)("div",$,[l[6]||(l[6]=(0,t.Lk)("div",{class:"left"},[(0,t.Lk)("div",{class:"image"},[(0,t.Lk)("img",{src:i,alt:""})])],-1)),(0,t.Lk)("div",H,[(0,t.Lk)("h1",null,(0,r.v_)(n.value.name)+"的故事",1),(0,t.Lk)("div",{class:"content",innerHTML:n.value.story},null,8,I)])])])])]))}},S=n(8533);const Q=(0,S.A)(K,[["__scopeId","data-v-7d209550"]]);var q=Q},8482:function(e,l,n){e.exports=n.p+"img/dbd-introduction04.2315f2d7.webp"}}]);
//# sourceMappingURL=453.4ddd55c7.js.map