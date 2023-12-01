"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[688,952,193,800,545],{9231:function(e,t,a){a.d(t,{J:function(){return o}});a(541),a(7658);var s=a(4870),l=a(2596),n=a(6797),i=a.n(n);const o=(0,s.qj)({List:localStorage.getItem("messageList")?JSON.parse(localStorage.getItem("messageList")):[],template:{title:"",content:"",to:"",from:"",time:""},deletedList:localStorage.getItem("deletedMessageList")?JSON.parse(localStorage.getItem("deletedMessageList")):[],saveList(e,t,a){t.forEach((t=>{this.List.unshift({title:e.title,content:e.content,to:t,from:a,idx:this.List.length,time:i()().format("YYYY-MM-DD")}),l.x.saveList(e,"메세지",t,a)})),localStorage.setItem("messageList",JSON.stringify(this.List))},deleteListByIdx(e){this.deletedList.push(this.List[e]),this.List.splice(e,1),localStorage.setItem("messageList",JSON.stringify(this.List)),localStorage.setItem("deletedMessageList",JSON.stringify(this.deletedList))},callListByName(e){return this.List.filter((t=>t.to.name===e))},callListByFrom(e){return this.List.filter((t=>t.from===e))}})},952:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=a(3396);const l=(0,s._)("div",null,"자기 자신에게 보내는 메일은 자동으로 제외됩니다.",-1),n={class:"center"};function i(e,t,a,i,o,r){const m=(0,s.up)("addMemberV2"),c=(0,s.up)("el-input"),d=(0,s.up)("el-form-item"),u=(0,s.up)("el-alert"),g=(0,s.up)("el-button"),p=(0,s.up)("el-form");return(0,s.wg)(),(0,s.j4)(p,{model:o.messageData,"label-width":"120px","label-position":"left"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{label:"받는 사람",prop:"to"},{default:(0,s.w5)((()=>[r.checkReply?((0,s.wg)(),(0,s.j4)(m,{key:0,parentData:o.messageData.to,onSavePart:r.savePart},null,8,["parentData","onSavePart"])):(0,s.kq)("",!0),(0,s.Wm)(c,{modelValue:o.messageData.to,"onUpdate:modelValue":t[0]||(t[0]=e=>o.messageData.to=e),disabled:"",formatter:r.formatTo},null,8,["modelValue","formatter"])])),_:1}),(0,s.Wm)(u,{type:"info","show-icon":"",closable:!1},{default:(0,s.w5)((()=>[l])),_:1}),(0,s.Wm)(d,{label:"제목",prop:"title"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:o.messageData.title,"onUpdate:modelValue":t[1]||(t[1]=e=>o.messageData.title=e)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(d,{label:"내용"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{type:"textarea",modelValue:o.messageData.content,"onUpdate:modelValue":t[2]||(t[2]=e=>o.messageData.content=e),autosize:""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(g,{type:"primary",onClick:r.onSubmit},{default:(0,s.w5)((()=>[(0,s.Uk)("보내기")])),_:1},8,["onClick"]),(0,s.Wm)(g,{type:"warning",onClick:t[3]||(t[3]=t=>e.$emit("cancel"))},{default:(0,s.w5)((()=>[(0,s.Uk)("취소")])),_:1})])])),_:1})])),_:1},8,["model"])}a(7658);var o=a(9545),r=a(443),m={name:"messageCU",components:{addMemberV2:o["default"]},emits:["saveMessage"],props:{replyData:{type:Object,default:()=>({from:"",content:"",to:[],title:""})}},data(){return{messageData:{from:r.r.currentMember,to:[],content:"",title:""}}},computed:{arrangeTo(){return this.messageData.to.join(", ")},currentTo(){return void 0===this.replyData.to&&""===this.messageData.to?[]:void 0===this.replyData.to?this.messageData.to:this.replyData.to},checkReply(){return 0===Object.keys(this.replyData).length}},methods:{savePart(e){this.messageData.to=e},onSubmit(){this.messageData.to=this.messageData.to.filter((e=>e.name!==r.r.currentMember)),this.messageData.content=this.preserveWhitespace(this.messageData.content),this.$emit("saveMessage",this.messageData)},formatTo(){return Array.isArray(this.messageData.to)?this.messageData.to.map((e=>e.name)).join(", "):""},preserveWhitespace(e){return e.replace(/\n/g,"<br>").replace(/ /g,"&nbsp;")},unpreserveWhitespace(e){return e.replace(/<br>/g,"\n").replace(/&nbsp;/g," ")}},watch:{replyData:{immediate:!0,handler:function(e){0!==Object.keys(e).length&&(this.messageData.to.push(r.r.findMemberByName(e.from)),this.messageData.title=`RE: ${e.title}`,this.messageData.content=`\n\n ------------------ \n\n받는사람:${e.to.name}(${e.to.rank})\n보낸사람:${e.from}\n내용:${this.unpreserveWhitespace(e.content)}`)},deep:!0}}},c=a(89);const d=(0,c.Z)(m,[["render",i]]);var u=d},4688:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=a(3396);const l={key:0},n={key:1};function i(e,t,a,i,o,r){const m=(0,s.up)("personalMessage"),c=(0,s.up)("messageView"),d=(0,s.up)("messageCU");return o.view?((0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(m,{onToggleCheck:r.messageChange,onCreate:r.show},null,8,["onToggleCheck","onCreate"])])):((0,s.wg)(),(0,s.iD)("div",n,[""!==o.message.title?((0,s.wg)(),(0,s.j4)(c,{key:0,message:o.message,onReplyMessage:r.replyMessage,onDeleteMessage:r.deleteMessage,onBack:r.back},null,8,["message","onReplyMessage","onDeleteMessage","onBack"])):((0,s.wg)(),(0,s.j4)(d,{key:1,replyData:o.replyMessageData,onSaveMessage:r.saveMessage,onCancel:r.cancel},null,8,["replyData","onSaveMessage","onCancel"]))]))}var o=a(9231),r=a(800),m=a(8193),c=a(952),d={name:"messageMain",components:{messageView:m["default"],messageCU:c["default"],personalMessage:r["default"]},data(){return{view:!0,message:{from:"",to:"",content:"",title:""},replyMessageData:{}}},methods:{show(){this.view=!this.view},saveMessage(e){o.J.saveList(e,e.to,e.from),this.view=!this.view},messageChange(e){console.log(e),this.message=e,this.view=!this.view},replyMessage(){console.log("replyMessage 실행됨"),this.replyMessageData=this.message,this.message={from:"",to:"",content:"",title:""}},deleteMessage(e){o.J.deleteListByIdx(e.index)},back(){this.message={from:"",to:"",content:"",title:""},this.view=!this.view},cancel(){this.replyMessageData={},this.view=!this.view}}},u=a(89);const g=(0,u.Z)(d,[["render",i]]);var p=g},8193:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=a(3396),l=a(7139);const n=["innerHTML"],i={class:"buttons"};function o(e,t,a,o,r,m){const c=(0,s.up)("el-col"),d=(0,s.up)("el-row"),u=(0,s.up)("el-button");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(d,{class:"contanier"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{span:4,class:"label"},{default:(0,s.w5)((()=>[(0,s.Uk)("보낸 사람")])),_:1}),(0,s.Wm)(c,{span:8,class:"content"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(a.message.from),1)])),_:1}),(0,s.Wm)(c,{span:4,class:"label"},{default:(0,s.w5)((()=>[(0,s.Uk)("보낸 시간")])),_:1}),(0,s.Wm)(c,{span:8,class:"content"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(a.message.time),1)])),_:1})])),_:1}),(0,s.Wm)(d,{class:"contanier"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{span:4,class:"label"},{default:(0,s.w5)((()=>[(0,s.Uk)("제목")])),_:1}),(0,s.Wm)(c,{span:20,class:"content"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(a.message.title),1)])),_:1})])),_:1}),(0,s.Wm)(d,{class:"contanier"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{span:4,class:"label"},{default:(0,s.w5)((()=>[(0,s.Uk)("내용")])),_:1}),(0,s.Wm)(c,{span:20,class:"content"},{default:(0,s.w5)((()=>[(0,s._)("div",{innerHTML:a.message.content},null,8,n)])),_:1})])),_:1}),(0,s._)("div",i,[(0,s.Wm)(u,{type:"primary",onClick:m.replyMessage},{default:(0,s.w5)((()=>[(0,s.Uk)("답장")])),_:1},8,["onClick"]),(0,s.Wm)(u,{type:"warning",onClick:m.deleteMessage},{default:(0,s.w5)((()=>[(0,s.Uk)("삭제")])),_:1},8,["onClick"]),(0,s.Wm)(u,{onClick:m.back},{default:(0,s.w5)((()=>[(0,s.Uk)("목록")])),_:1},8,["onClick"])])],64)}var r={name:"messageView",emits:["replyMessage","deleteMessage","back"],props:{message:{type:Object,required:!0}},methods:{replyMessage(){this.$emit("replyMessage")},deleteMessage(){this.$emit("deleteMessage",this.message)},back(){this.$emit("back")}}},m=a(89);const c=(0,m.Z)(r,[["render",o]]);var d=c},800:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=a(3396),l=a(7139);const n={class:"button"};function i(e,t,a,i,o,r){const m=(0,s.up)("el-button"),c=(0,s.up)("el-table-column"),d=(0,s.up)("el-link"),u=(0,s.up)("el-table");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",n,[(0,s.Wm)(m,{type:"primary",onClick:r.create},{default:(0,s.w5)((()=>[(0,s.Uk)("작성")])),_:1},8,["onClick"]),(0,s.Wm)(m,{type:"warning",onClick:r.deleteMessage},{default:(0,s.w5)((()=>[(0,s.Uk)("삭제")])),_:1},8,["onClick"])]),(0,s.Wm)(u,{data:r.messageList,border:"",onSelectionChange:r.handleSelect},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{type:"selection",width:"55"}),(0,s.Wm)(c,{prop:"from",label:"보낸 사람",width:"150"}),(0,s.Wm)(c,{prop:"title",label:"제목"},{default:(0,s.w5)((e=>[(0,s.Wm)(d,{type:"primary",onClick:t=>r.toggleCheck(e.row)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.row.title),1)])),_:2},1032,["onClick"])])),_:1}),(0,s.Wm)(c,{prop:"time",label:"시간",width:"200"})])),_:1},8,["data","onSelectionChange"])],64)}var o=a(443),r=a(9231),m={name:"personalMessage",emits:["toggleCheck","create"],data(){return{selectedRow:[],currentMember:o.r.currentMember}},computed:{messageList(){return r.J.callListByName(this.currentMember)}},methods:{handleSelect(e){this.selectedRow=e},toggleCheck(e){this.$emit("toggleCheck",e)},create(){this.$emit("create")},deleteMessage(){0!==this.selectedRow.length?this.$confirm("정말 삭제하시겠습니까?","삭제 확인",{confirmButtonText:"삭제",cancelButtonText:"취소",type:"warning"}).then((()=>{this.$message({type:"success",message:"삭제되었습니다."}),this.selectedRow.forEach((e=>{r.J.deleteListByIdx(e.idx)})),this.selectedRow=[]})).catch((()=>{this.$message({type:"info",message:"취소되었습니다."})})):this.$message({message:"삭제할 메시지를 선택해주세요.",type:"warning"})}}},c=a(89);const d=(0,c.Z)(m,[["render",i],["__scopeId","data-v-b6e8bbe2"]]);var u=d},9545:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=a(3396),l=a(7139);const n={class:"dialogHeader"},i=["id"],o={class:"transfer"},r={class:"buttons"};function m(e,t,a,m,c,d){const u=(0,s.up)("el-button"),g=(0,s.up)("el-transfer"),p=(0,s.up)("el-dialog");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(u,{type:"primary",onClick:t[0]||(t[0]=e=>c.shown=!0),class:"buttons"},{default:(0,s.w5)((()=>[(0,s.Uk)("추가")])),_:1}),(0,s.Wm)(p,{modelValue:c.shown,"onUpdate:modelValue":t[2]||(t[2]=e=>c.shown=e),"show-close":!1},{header:(0,s.w5)((({titleId:e,titleClass:t})=>[(0,s._)("div",n,[(0,s._)("h2",{id:e,class:(0,l.C_)(t)},"참여인원",10,i)])])),default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s.Wm)(g,{modelValue:c.member,"onUpdate:modelValue":t[1]||(t[1]=e=>c.member=e),data:d.MemberTable,titles:["직원","참가인원"],"filter-placeholder":"직원 검색",filterable:""},null,8,["modelValue","data"])]),(0,s._)("div",r,[(0,s.Wm)(u,{type:"primary",onClick:d.Confirm},{default:(0,s.w5)((()=>[(0,s.Uk)("확인")])),_:1},8,["onClick"]),(0,s.Wm)(u,{type:"primary",onClick:d.debug},{default:(0,s.w5)((()=>[(0,s.Uk)("디버그")])),_:1},8,["onClick"]),(0,s.Wm)(u,{type:"warning",onClick:d.notSave},{default:(0,s.w5)((()=>[(0,s.Uk)("취소")])),_:1},8,["onClick"])])])),_:1},8,["modelValue"])],64)}var c=a(443),d={name:"addMember",emits:["savePart"],methods:{Confirm(){this.member=this.member.map((e=>{const t=this.MemberList.List[e];return{name:t.name,job:t.job,rank:t.rank}})),this.$emit("savePart",this.member),this.shown=!1},notSave(){this.member=this.parentData,this.shown=!1},debug(){console.log(this.member),console.log(this.parentData),console.log(this.MemberTable)}},data(){return{shown:!1,MemberList:c.r,member:[]}},props:{parentData:{type:Array,default:()=>[]}},computed:{MemberTable(){return this.MemberList.List.map(((e,t)=>({key:t,label:`${e.name}(${e.job})`})))}},watch:{parentData:{handler:function(e){const t=e.map((e=>c.r.findIndexByRankName(e.rank,e.name)));JSON.stringify(t)!==JSON.stringify(this.member)&&(this.member=t)},deep:!0}}},u=a(89);const g=(0,u.Z)(d,[["render",m],["__scopeId","data-v-48f2e405"]]);var p=g}}]);
//# sourceMappingURL=688.4e37d644.js.map