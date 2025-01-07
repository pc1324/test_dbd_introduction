"use strict";(self["webpackChunkdbd_management_system"]=self["webpackChunkdbd_management_system"]||[]).push([[510],{8533:function(l,e){e.A=(l,e)=>{const n=l.__vccOpts||l;for(const[t,i]of e)n[t]=i;return n}},2303:function(l,e,n){n.d(e,{H2:function(){return i},IO:function(){return c},XC:function(){return v},aO:function(){return s},ic:function(){return k},ii:function(){return d},kN:function(){return u},m5:function(){return o},r6:function(){return a},vL:function(){return r},vM:function(){return g},vr:function(){return p}});var t=n(5251);const i=l=>(console.log("页码信息："+l.page),console.log("每页展示："+l.pageSize),t.A.get("/killer",{params:l})),s=()=>t.A.get("/killer/all"),a=l=>t.A.get(`/killer/${l}`),r=l=>t.A.get("/killer/condition",{params:l}),o=l=>t.A.post("/admin/killer/add",l),c=l=>t.A.put("/admin/killer/update",l),d=l=>t.A.delete(`/admin/killer/delete/${l}`),u=l=>(console.log("页码信息："+l.page),console.log("每页展示："+l.pageSize),t.A.get("/skill/killer",{params:l})),k=l=>t.A.get(`/skill/killer/${l}`),v=l=>t.A.post("/admin/skill/killer/add",l),g=l=>t.A.put("/admin/skill/killer/update",l),p=l=>t.A.delete(`/admin/skill/killer/delete/${l}`)},9672:function(l,e,n){n.r(e),n.d(e,{default:function(){return N}});var t=n(4603),i=n(7419),s=n(842),a=n.p+"img/trapper.cebe2e55.webp",r=n(1041),o=n(2303),c=n.p+"img/killer-icon.a36eb9ea.png";const d={class:"killer-details"},u={class:"details"},k={class:"header"},v={class:"avatar"},g=["src"],p={class:"name"},L={class:"icon"},m=["src"],f={class:"body"},h={class:"skill"},y={class:"left"},b={class:"skill-list"},_=["onClick"],R=["src"],A={class:"cover"},M={style:{color:"white"}},w=["innerHTML"],T={class:"right"},C={class:"show"},H=["src"],K={class:"ability"},I={class:"left"},$={style:{color:"white"}},x=["innerHTML"],S={class:"right"},X={class:"show"},q=["src"],E={class:"story"},O={class:"right"},z=["innerHTML"];var B={__name:"KillerDetailsPage",setup(l){const e=(0,r.lq)(),n=(0,i.KR)({}),B=(0,i.KR)(),D=(0,i.KR)([{id:1,name:"技能1",content:"<span>技能描述</span>",story:""},{id:2,name:"技能2",content:"<span>技能描述</span>",story:""},{id:3,name:"技能3",content:"<span>技能描述</span>",story:""}]),F=(0,i.KR)({id:1,name:"力量1",description:"<p>技能描述</p>",image:""}),N=(0,i.KR)(),P=(0,i.KR)();console.log(e.query);const j=l=>{console.log(l),console.log(D.value[l].content),N.value.innerHTML=`\n  <h2 style="color: white;padding-top: 10px">${D.value[l].name}</h2>\n  <div v-html=${D.value[l].content}</div>\n  `,B.value.src=D.value[l].imgurl},G=l=>{l.target.children[1].style.opacity=.8,l.target.children[2].style.borderTop="5px solid red",l.target.children[2].style.borderLeft="5px solid red",l.target.children[3].style.borderBottom="5px solid red",l.target.children[3].style.borderRight="5px solid red"},J=l=>{l.target.children[1].style.opacity=0,l.target.children[2].style.borderTop="0",l.target.children[2].style.borderLeft="0",l.target.children[3].style.borderBottom="0",l.target.children[3].style.borderRight="0"},Q=async()=>{const l=await(0,o.r6)(e.query.id);console.log(l),n.value=l.data.data,console.log(n.value),D.value=n.value.killerSkills,F.value=n.value.ability};return Q(),(l,e)=>((0,t.uX)(),(0,t.CE)("div",d,[(0,t.Lk)("div",u,[(0,t.Lk)("div",k,[(0,t.Lk)("div",v,[(0,t.Lk)("img",{src:n.value.image||(0,i.R1)(c),alt:""},null,8,g)]),(0,t.Lk)("div",p,[(0,t.Lk)("div",L,[(0,t.Lk)("img",{src:(0,i.R1)(c),alt:""},null,8,m),e[0]||(e[0]=(0,t.Lk)("span",null,"杀手",-1))]),(0,t.Lk)("h1",null,(0,s.v_)(n.value.name),1)])]),(0,t.Lk)("div",f,[(0,t.Lk)("div",h,[(0,t.Lk)("div",y,[e[3]||(e[3]=(0,t.Lk)("h1",null,"可传承技能",-1)),(0,t.Lk)("div",b,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.value.killerSkills,((l,n)=>((0,t.uX)(),(0,t.CE)("div",{onClick:l=>j(n),onMouseenter:G,onMouseleave:J,class:"skill-list-item",key:n},[(0,t.Lk)("img",{src:l.imgurl||(0,i.R1)(c),alt:""},null,8,R),(0,t.Lk)("div",A,[(0,t.Lk)("h3",null,(0,s.v_)(l.name),1)]),e[1]||(e[1]=(0,t.Lk)("span",{class:"top-left"},null,-1)),e[2]||(e[2]=(0,t.Lk)("span",{class:"bottom-right"},null,-1))],40,_)))),128))]),(0,t.Lk)("div",{ref_key:"skillInfoRef",ref:N,class:"skill-info"},[(0,t.Lk)("h2",M,(0,s.v_)(D.value[0].name),1),(0,t.Lk)("div",{innerHTML:D.value[0].content},null,8,w)],512)]),(0,t.Lk)("div",T,[(0,t.Lk)("div",C,[(0,t.Lk)("img",{ref_key:"bigImage",ref:B,src:D.value[0].imgurl||(0,i.R1)(c),alt:""},null,8,H),e[4]||(e[4]=(0,t.Lk)("span",{class:"top-left"},null,-1)),e[5]||(e[5]=(0,t.Lk)("span",{class:"bottom-right"},null,-1))])])]),(0,t.Lk)("div",K,[(0,t.Lk)("div",I,[e[6]||(e[6]=(0,t.Lk)("h1",null,"杀手力量",-1)),(0,t.Lk)("div",{ref_key:"abilityInfoRef",ref:P,class:"ability-info"},[(0,t.Lk)("h2",$,(0,s.v_)(F.value.name),1),(0,t.Lk)("div",{class:"content",innerHTML:F.value.description},null,8,x)],512)]),(0,t.Lk)("div",S,[(0,t.Lk)("div",X,[(0,t.Lk)("img",{src:F.value.image||(0,i.R1)(c),alt:""},null,8,q),e[7]||(e[7]=(0,t.Lk)("span",{class:"top-left"},null,-1)),e[8]||(e[8]=(0,t.Lk)("span",{class:"bottom-right"},null,-1))])])]),(0,t.Lk)("div",E,[e[9]||(e[9]=(0,t.Lk)("div",{class:"left"},[(0,t.Lk)("div",{class:"image"},[(0,t.Lk)("img",{src:a,alt:""})])],-1)),(0,t.Lk)("div",O,[(0,t.Lk)("h1",null,(0,s.v_)(n.value.name)+"的故事",1),(0,t.Lk)("div",{class:"content",innerHTML:n.value.story},null,8,z)])])])])]))}},D=n(8533);const F=(0,D.A)(B,[["__scopeId","data-v-5e54c8ee"]]);var N=F}}]);
//# sourceMappingURL=510.97623964.js.map