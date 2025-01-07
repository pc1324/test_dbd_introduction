"use strict";(self["webpackChunkdbd_management_system"]=self["webpackChunkdbd_management_system"]||[]).push([[182],{3182:function(e,a,l){l.r(a),l.d(a,{default:function(){return $}});var t=l(1326),u=(l(8380),l(7778),l(6675)),o=(l(3594),l(2575)),r=(l(3233),l(4079)),d=(l(9234),l(988)),i=(l(3843),l(4871)),n=(l(1500),l(4849),l(3429)),s=(l(1236),l(3634)),p=(l(9759),l(7414),l(8700),l(5718)),b=(l(4541),l(8015)),c=(l(358),l(5026),l(4603)),v=l(842),f=l(7419),m=l(7235),g=(l(289),l(1194)),k=(l(8809),l(8358)),F=(l(1514),l(6527),l(9306),l(8589),l(2279)),y=l(5251);const _=e=>(console.log("页码信息："+e.page),console.log("每页展示："+e.pageSize),y.A.get("/offer",{params:e})),w=e=>y.A.get(`/offer/${e}`),h=e=>y.A.post("/admin/offer/add",e),V=e=>y.A.put("/admin/offer/update",e),R=e=>y.A.delete(`/admin/offer/delete/${e}`);var z=l(2796);l(5397);const x=["src"],C={class:"editor"};var q={__name:"OfferEdit",emits:["success"],setup(e,{expose:a,emit:l}){const t=(0,f.KR)(!1),u=(0,f.KR)(),o={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:10,message:"用户名必须是2-10位的字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,12}$/,message:"密码必须是6-12位的非空字符",trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"},{validator:(e,a,l)=>{a<0||a>200?l(new Error("请确保输入的年龄在0-200之间")):l()},trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"邮箱格式不正确，请检查输入内容",trigger:"blur"}]},r=(0,f.KR)({modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}]]}}),d={name:"",description:"",quality:"",image:"",offerType:""},i=(0,f.KR)(""),v=(0,f.KR)({...d}),y=e=>{console.log(e),i.value=URL.createObjectURL(e.raw),v.value.image=e.raw},_=l,R=async()=>{const e=new FormData;for(let a in v.value)e.append(a,v.value[a]);console.log(e),v.value.id?(await u.value.validate(),await V(e),z.nk.success("修改成功"),t.value=!1,_("success","edit")):(await u.value.validate(),await h(e),z.nk.success("添加成功"),t.value=!1,_("success","add")),i.value=""},q=(0,f.KR)(),S=async e=>{if(t.value=!0,e.id){const a=await w(e.id);v.value=a.data.data,i.value=v.value.image}else v.value={...d},i.value="",(0,c.dY)((()=>{q.value.setHTML("")}))};return a({open:S}),(e,a)=>{const l=p.WK,d=n.xE,_=s.P9,w=s.AV,h=k.tk,V=g.j5,z=(0,c.g2)("quill-editor"),S=b.S2,U=n.US,K=m.pw;return(0,c.uX)(),(0,c.Wv)(K,{modelValue:t.value,"onUpdate:modelValue":a[4]||(a[4]=e=>t.value=e),title:v.value.id?"编辑祭品":"新增祭品",direction:"rtl",size:"50%"},{default:(0,c.k6)((()=>[(0,c.bF)(U,{ref_key:"form",ref:u,rules:o,model:v.value,"label-width":"100px"},{default:(0,c.k6)((()=>[(0,c.bF)(d,{label:"祭品名",prop:"name"},{default:(0,c.k6)((()=>[(0,c.bF)(l,{modelValue:v.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value.name=e),placeholder:"请输入祭品名"},null,8,["modelValue"])])),_:1}),(0,c.bF)(d,{label:"祭品品质",prop:"quality"},{default:(0,c.k6)((()=>[(0,c.bF)(w,{style:{width:"220px"},modelValue:v.value.quality,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value.quality=e)},{default:(0,c.k6)((()=>[(0,c.bF)(_,{label:"普通",value:"普通"}),(0,c.bF)(_,{label:"精良",value:"精良"}),(0,c.bF)(_,{label:"稀有",value:"稀有"}),(0,c.bF)(_,{label:"非常稀有",value:"非常稀有"}),(0,c.bF)(_,{label:"超级稀有",value:"超级稀有"}),(0,c.bF)(_,{label:"活动",value:"活动"})])),_:1},8,["modelValue"])])),_:1}),(0,c.bF)(d,{label:"祭品种类",prop:"offerType"},{default:(0,c.k6)((()=>[(0,c.bF)(w,{style:{width:"220px"},modelValue:v.value.offerType,"onUpdate:modelValue":a[2]||(a[2]=e=>v.value.offerType=e)},{default:(0,c.k6)((()=>[(0,c.bF)(_,{label:"通用",value:"0"}),(0,c.bF)(_,{label:"逃生者祭品",value:"1"}),(0,c.bF)(_,{label:"杀手祭品",value:"2"})])),_:1},8,["modelValue"])])),_:1}),(0,c.bF)(d,{label:"图片",prop:"image"},{default:(0,c.k6)((()=>[(0,c.bF)(V,{class:"avatar-uploader","show-file-list":!1,"auto-upload":!1,"on-change":y},{default:(0,c.k6)((()=>[i.value?((0,c.uX)(),(0,c.CE)("img",{key:0,src:i.value,class:"avatar"},null,8,x)):((0,c.uX)(),(0,c.Wv)(h,{key:1,class:"avatar-uploader-icon"},{default:(0,c.k6)((()=>[(0,c.bF)((0,f.R1)(F.FWt))])),_:1}))])),_:1})])),_:1}),(0,c.bF)(d,{label:"祭品介绍",prop:"description"},{default:(0,c.k6)((()=>[(0,c.Lk)("div",C,[(0,c.bF)(z,{ref_key:"editorRef",ref:q,content:v.value.description,"onUpdate:content":a[3]||(a[3]=e=>v.value.description=e),"content-type":"html",theme:"snow",options:r.value},null,8,["content","options"])])])),_:1}),(0,c.bF)(d,null,{default:(0,c.k6)((()=>[(0,c.bF)(S,{onClick:R,type:"primary"},{default:(0,c.k6)((()=>a[5]||(a[5]=[(0,c.eW)("提交")]))),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])}}},S=l(8533);const U=(0,S.A)(q,[["__scopeId","data-v-158ebc50"]]);var K=U,T=l(4741),A=l(7462);l(8501);const W={class:"map-list"},L={class:"card-header"},E={class:"btns"},X=["src"];var j={__name:"OfferPage",setup(e){const a=(0,f.KR)([]),l=(0,f.KR)(0),m=(0,f.KR)(!1),g=(0,f.KR)([]),k=(0,f.KR)({page:1,pageSize:5,name:"",quality:"",offerType:""}),y=(0,f.KR)(),w=async()=>{console.log("查询参数",k.value),m.value=!0;const e=await _(k.value);console.log("祭品列表",e.data.data),a.value=e.data.data.rows,l.value=e.data.data.total,m.value=!1},h=e=>{k.value.page=1,k.value.pageSize=e,w()},V=e=>{k.value.page=e,w()},x=()=>{k.value.page=1,w()},C=()=>{k.value.page=1,k.value.name="",k.value.quality="",k.value.offerType="",w()},q=async e=>{console.log(e),await A.s.confirm("你确认要删除所选祭品吗？","温馨提示",{type:"warning",confirmButtonText:"确认",cancelButtonText:"取消"}),await R(e),z.nk.success("删除成功"),w()},S=()=>{y.value.open({})},U=e=>{y.value.open(e)},j=e=>{g.value=e.map((e=>e.id))},P=e=>{if("add"===e){const e=Math.ceil((l.value+1)/k.value.pageSize);k.value.page=e}w()};return w(),(e,_)=>{const w=b.S2,R=p.WK,z=n.xE,A=s.P9,$=s.AV,I=n.US,O=r.o8,Z=i.zv,B=d.x0,M=r.Up,D=o.aQ,H=u.Ik,Q=t.L;return(0,c.uX)(),(0,c.CE)("div",W,[(0,c.bF)(H,{style:{"max-width":"100vw"}},{header:(0,c.k6)((()=>[(0,c.Lk)("div",L,[_[8]||(_[8]=(0,c.Lk)("span",null,"祭品列表",-1)),(0,c.Lk)("div",E,[(0,c.bF)(w,{type:"primary",onClick:S},{default:(0,c.k6)((()=>_[6]||(_[6]=[(0,c.eW)("添加祭品")]))),_:1}),(0,c.bF)(w,{type:"danger",onClick:_[0]||(_[0]=e=>q(g.value))},{default:(0,c.k6)((()=>_[7]||(_[7]=[(0,c.eW)("批量删除")]))),_:1})])])])),default:(0,c.k6)((()=>[(0,c.bF)(I,{inline:""},{default:(0,c.k6)((()=>[(0,c.bF)(z,{label:"祭品名"},{default:(0,c.k6)((()=>[(0,c.bF)(R,{modelValue:k.value.name,"onUpdate:modelValue":_[1]||(_[1]=e=>k.value.name=e),placeholder:"请输入祭品名"},null,8,["modelValue"])])),_:1}),(0,c.bF)(z,{label:"祭品品质"},{default:(0,c.k6)((()=>[(0,c.bF)($,{style:{width:"220px"},modelValue:k.value.quality,"onUpdate:modelValue":_[2]||(_[2]=e=>k.value.quality=e)},{default:(0,c.k6)((()=>[(0,c.bF)(A,{label:"普通",value:"普通"}),(0,c.bF)(A,{label:"精良",value:"精良"}),(0,c.bF)(A,{label:"稀有",value:"稀有"}),(0,c.bF)(A,{label:"非常稀有",value:"非常稀有"}),(0,c.bF)(A,{label:"超级稀有",value:"超级稀有"}),(0,c.bF)(A,{label:"活动",value:"活动"})])),_:1},8,["modelValue"])])),_:1}),(0,c.bF)(z,{label:"祭品种类"},{default:(0,c.k6)((()=>[(0,c.bF)($,{style:{width:"220px"},modelValue:k.value.offerType,"onUpdate:modelValue":_[3]||(_[3]=e=>k.value.offerType=e)},{default:(0,c.k6)((()=>[(0,c.bF)(A,{label:"通用",value:"0"}),(0,c.bF)(A,{label:"逃生者祭品",value:"1"}),(0,c.bF)(A,{label:"杀手祭品",value:"2"})])),_:1},8,["modelValue"])])),_:1}),(0,c.bF)(z,null,{default:(0,c.k6)((()=>[(0,c.bF)(w,{type:"primary",onClick:x},{default:(0,c.k6)((()=>_[9]||(_[9]=[(0,c.eW)("搜索")]))),_:1}),(0,c.bF)(w,{onClick:C},{default:(0,c.k6)((()=>_[10]||(_[10]=[(0,c.eW)("重置")]))),_:1})])),_:1})])),_:1}),(0,c.bo)(((0,c.uX)(),(0,c.Wv)(M,{key:0,onSelectionChange:j,data:a.value,stripe:"",style:{width:"100%"}},{empty:(0,c.k6)((()=>[(0,c.bF)(B,{description:"没有数据"})])),default:(0,c.k6)((()=>[(0,c.bF)(O,{type:"selection",selectable:e.selectable,width:"55"},null,8,["selectable"]),(0,c.bF)(O,{type:"index",label:"序号",width:"80"}),(0,c.bF)(O,{prop:"name",label:"祭品名",width:"180"}),(0,c.bF)(O,{prop:"description",label:"祭品介绍",width:"500"}),(0,c.bF)(O,{prop:"quality",label:"祭品品质",width:"180"}),(0,c.bF)(O,{prop:"offerType",label:"祭品种类",width:"180"},{default:(0,c.k6)((({row:e})=>[(0,c.eW)((0,v.v_)("0"===e.offerType?"通用":"1"===e.offerType?"逃生者祭品":"杀手祭品"),1)])),_:1}),(0,c.bF)(O,{prop:"image",label:"图片",width:"180"},{default:(0,c.k6)((({row:e})=>[(0,c.bF)(Z,{size:60},{default:(0,c.k6)((()=>[(0,c.Lk)("img",{src:e.image||(0,f.R1)(T)},null,8,X)])),_:2},1024)])),_:1}),(0,c.bF)(O,{fixed:"right",label:"操作",width:"180"},{default:(0,c.k6)((({row:e})=>[(0,c.bF)(w,{icon:(0,f.R1)(F.ffu),circle:"",type:"primary",plain:"",onClick:a=>U(e)},null,8,["icon","onClick"]),(0,c.bF)(w,{icon:(0,f.R1)(F.epd),circle:"",type:"danger",plain:"",onClick:a=>q(e.id)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data"])),[[Q,m.value]]),(0,c.bF)(D,{"current-page":k.value.page,"onUpdate:currentPage":_[4]||(_[4]=e=>k.value.page=e),"page-size":k.value.pageSize,"onUpdate:pageSize":_[5]||(_[5]=e=>k.value.pageSize=e),"page-sizes":[3,5,8,10],size:"large",background:!0,layout:"jumper, total, sizes, prev, pager, next",total:l.value,onSizeChange:h,onCurrentChange:V,style:{"margin-top":"20px","justify-content":"flex-end"}},null,8,["current-page","page-size","total"]),(0,c.bF)(K,{ref_key:"articleRef",ref:y,onSuccess:P},null,512)])),_:1})])}}};const P=(0,S.A)(j,[["__scopeId","data-v-36d8f330"]]);var $=P}}]);
//# sourceMappingURL=182.e61d6159.js.map