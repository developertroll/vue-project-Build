"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[112,947,733],{267:function(t,e,i){i.d(e,{o:function(){return o}});i(7658);var r=i(4870),n=i(5086),s=i(443),a=i(2596);const o=(0,r.qj)({eventList:localStorage.getItem("eventList")?JSON.parse(localStorage.getItem("eventList")):[],detailList:localStorage.getItem("detailList")?JSON.parse(localStorage.getItem("detailList")):[],eventTemplate:{title:"",start:"",end:"",id:""},detailTemplate:{id:"",people:[],description:"",location:""},recurringEventTemplate:{groupId:"",startTime:"",endTime:"",title:"",id:""},memberSpecificEventList:[],setList(t){const e=n.b.findWorkByName(t),i=[];e.forEach((t=>{const e=n.b.findProjectByWork(t);i.push({title:e.title+" - "+t.position+" 마감일",end:t.deadLine,start:t.deadLine,allDay:!0,backgroundColor:"#f56954",type:"work",id:-1})})),this.memberSpecificEventList=i},saveList(t){void 0===t.id&&(t.id=this.eventList.length+1),a.x.saveList(t,"일정",t.member,s.r.currentMember),this.eventList.push(t),localStorage.setItem("eventList",JSON.stringify(this.eventList))},setEventByProjects(){const t=n.b.callPlanList(),e=t.map((t=>({title:t.title,start:t.date1[0],end:t.date1[1],projectIdx:t.index,id:this.eventList.length+1,people:t.Partipacants})));return e}})},7029:function(t,e,i){i.d(e,{M:function(){return n}});i(541);var r=i(4870);const n=(0,r.qj)({boardList:JSON.parse(localStorage.getItem("boardList"))||[],boardTemplate:{title:"",content:"",date:"",index:"",views:0},boardKeyTranslate:{title:"제목",content:"내용",date:"작성일",views:"조회수"},saveList(t,e=void 0){if(void 0!==e){const i=e;this.boardList[i]={...t,index:i}}else{const e=this.boardList.length;this.boardList.unshift({...t,index:e})}localStorage.setItem("boardList",JSON.stringify(this.boardList))},deleteList(t){this.boardList.splice(t,1),localStorage.setItem("boardList",JSON.stringify(this.boardList))},findListByTitle(t){const e=this.boardList.find((e=>e.title.includes(t)));return e},findListByContent(t){const e=this.boardList.find((e=>e.content.includes(t)));return e},findListByDate(t){const e=this.boardList.find((e=>e.date.includes(t)));return e},updateView(t){const e=t.index,i=this.boardList.find((t=>t.index===e));i.views+=1,localStorage.setItem("boardList",JSON.stringify(this.boardList))},showPage(t){const e=5*(t-1),i=e+4,r=this.boardList.slice(e,i+1);return r}})},5086:function(t,e,i){i.d(e,{b:function(){return l}});i(7658);var r=i(4870),n=i(6797),s=i.n(n),a=i(2596),o=i(443);const l=(0,r.qj)({List:JSON.parse(localStorage.getItem("projectPlanList"))||[],workList:JSON.parse(localStorage.getItem("workList"))||[],finishedList:JSON.parse(localStorage.getItem("finishedList"))||[],saveList(t,e=void 0){if(console.log(t),void 0!==e){const i=e,r={works:t.works,parentIdx:i};delete t.works,this.List[i]={...t,index:i,status:"진행"},console.log(r),this.workList.push(r)}else{const e=this.List.length,i={works:t.works,parentIdx:e};delete t.works,this.List.push({...t,index:e,status:"진행"}),console.log(i),this.workList.push(i)}a.x.saveList(t,"프로젝트",t.Partipacants,o.r.currentMember),this.setCookies()},callWorkList(t){const e=this.workList.find((e=>e.parentIdx===t.index));return e},callPlanList(){const t=this.List;console.log(t,"rawData");const e=t.filter((t=>"취소"!==t.status));return console.log(e,"result"),e},callList(){const t=this.List;console.log(t,"rawData");const e=t.filter((t=>"진행"===t.status&&t.date1[0]<s()().format("YYYY-MM-DD")));return console.log(e,"result"),e},findParentWorkList(t){const e=this.workList.find((e=>e.parentIdx===t));return e},workFinish(t){const e=this.findParentWorkList(t.parent.index),i=e.works.find((e=>e.name===t.name));if(i.status="완료",console.log(i),e.works.every((t=>"완료"===t.status))){const t=this.List.find((t=>t.index===e.parentIdx));t.status="완료";const i={...t,works:e.works};this.finishedList.push(i);const r=this.workList.indexOf(e);this.workList.splice(r,1)}this.setCookies()},findWorks(t){console.log("입장",t),console.log("플젝리스트",this.List),console.log("업무리스트",this.workList);const e=this.List.find((e=>e===t.parent||e.index===t.index||e.title===t));console.log("parentProject",e);const i=this.workList.find((t=>t.parentIdx===e.index));console.log("result",i);const r=i.works.find((e=>e.name===t.title));return console.log(r),r},findProject(t){const e=this.findWorks(t),i=this.List.find((t=>t.index===e.parentIdx));return i},findWorkAndProject(t){const e=this.List.find((e=>e.title===t));let i;if(e){const t=this.workList.find((t=>t.parentIdx===e.index));t&&(i=t.works)}return{work:i,project:e}},callFinishedList(){return this.finishedList},findProject2(t){return this.List.find((e=>e.index===t.parentIdx))},deletePlanWork(t){this.List=this.List.filter((e=>e.index!==t.index)),this.workList=this.workList.filter((e=>e.parentIdx!==t.index))},modifySaveList(t,e){console.log(t,e);const i=t.index;this.deletePlanWork(t),delete e.originalTitle,this.saveList(e,i)},findWorkByName(t){const e=this.workList.flatMap((e=>e.works.filter((e=>e.name===t))));return e},findProjectByName(t){const e=this.findWorkByName(t),i=this.workList.filter((t=>e.some((e=>t.works.includes(e)))));console.log(e,i,"works,workLists");const r=i.map((t=>{const e=t.parentIdx;return this.List.find((t=>t.index===e))}));return r},findProjectByWork(t){const e=this.workList.find((e=>e.works.find((e=>e===t))));if(!e)return null;const i=e.parentIdx,r=this.List.find((t=>t.index===i));return r},setCookies(){localStorage.setItem("projectPlanList",JSON.stringify(this.List)),localStorage.setItem("workList",JSON.stringify(this.workList)),localStorage.setItem("finishedList",JSON.stringify(this.finishedList))},getCookies(){this.List=JSON.parse(localStorage.getItem("projectPlanList")),this.workList=JSON.parse(localStorage.getItem("workList")),this.finishedList=JSON.parse(localStorage.getItem("finishedList"))}})},9112:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var r=i(3396),n=i(7139);const s=t=>((0,r.dD)("data-v-751545d4"),t=t(),(0,r.Cn)(),t),a={class:"title"},o={class:"card-header"},l=s((()=>(0,r._)("span",null,"진행중인 프로젝트",-1))),d={class:"card-header"},c=s((()=>(0,r._)("span",null,"진행중인 업무",-1))),u={class:"card-header"},m=s((()=>(0,r._)("span",null,"최근 공지사항",-1))),p={class:"card-header"},h=s((()=>(0,r._)("span",null,"오늘 일정",-1)));function f(t,e,i,s,f,L){const w=(0,r.up)("el-button"),k=(0,r.up)("mainTable"),g=(0,r.up)("el-card"),b=(0,r.up)("noticeBoard"),v=(0,r.up)("el-space");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,(0,n.zw)(L.currentMember)+" 님, 반갑습니다!",1),(0,r.Wm)(v,{wrap:"",fill:"",fillRatio:90,size:"large"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{header:(0,r.w5)((()=>[(0,r._)("div",o,[l,(0,r.Wm)(w,{type:"primary",onClick:e[0]||(e[0]=t=>L.handleClick(0))},{default:(0,r.w5)((()=>[(0,r.Uk)("상세")])),_:1})])])),default:(0,r.w5)((()=>[(0,r.Wm)(k,{currentMember:L.currentMember,currentTable:"projectPlan"},null,8,["currentMember"])])),_:1}),(0,r.Wm)(g,null,{header:(0,r.w5)((()=>[(0,r._)("div",d,[c,(0,r.Wm)(w,{type:"primary",onClick:e[1]||(e[1]=t=>L.handleClick(1))},{default:(0,r.w5)((()=>[(0,r.Uk)("상세")])),_:1})])])),default:(0,r.w5)((()=>[(0,r.Wm)(k,{currentMember:L.currentMember,currentTable:"workList"},null,8,["currentMember"])])),_:1}),(0,r.Wm)(g,null,{header:(0,r.w5)((()=>[(0,r._)("div",u,[m,(0,r.Wm)(w,{type:"primary",onClick:e[2]||(e[2]=t=>L.handleClick(2))},{default:(0,r.w5)((()=>[(0,r.Uk)("상세")])),_:1})])])),default:(0,r.w5)((()=>[(0,r.Wm)(b,{main:!1})])),_:1}),(0,r.Wm)(g,null,{header:(0,r.w5)((()=>[(0,r._)("div",p,[h,(0,r.Wm)(w,{type:"primary",onClick:e[3]||(e[3]=t=>L.handleClick(3))},{default:(0,r.w5)((()=>[(0,r.Uk)("상세")])),_:1})])])),default:(0,r.w5)((()=>[(0,r.Wm)(k,{currentMember:L.currentMember,currentTable:"eventList"},null,8,["currentMember"])])),_:1})])),_:1})],64)}var L=i(7733),w=i(3947),k=i(443),g={name:"mainPage",emits:["handleMain"],components:{mainTable:w["default"],noticeBoard:L["default"]},data(){return{emitterMenus:[{label:"프로젝트 계획",index:"projectPlan",path:"project"},{label:"진행중인 프로젝트",index:"projectOngoing",path:"project"},{label:"공지 게시판",index:"noticeMain",path:"mainPage"},{label:"일정표",index:"orgCalendar",path:"org"}]}},methods:{handleClick(t){this.$emit("handleMain",this.emitterMenus[t])}},computed:{currentMember(){return k.r.currentMember}}},b=i(89);const v=(0,b.Z)(g,[["render",f],["__scopeId","data-v-751545d4"]]);var y=v},3947:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var r=i(3396);const n={key:0},s={key:1};function a(t,e,i,a,o,l){const d=(0,r.up)("el-table-column"),c=(0,r.up)("el-table");return l.tableData===[]?((0,r.wg)(),(0,r.iD)("div",n,"없음")):((0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(c,{data:l.tableData,border:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.tableData[0],((t,e)=>((0,r.wg)(),(0,r.j4)(d,{label:e,prop:e,key:e,"show-overflow-tooltip":""},null,8,["label","prop"])))),128))])),_:1},8,["data"])]))}i(7658);var o=i(5086),l=i(267),d=i(6797),c=i.n(d),u={name:"mainTable",props:{currentMember:{type:String,required:!0},currentTable:{type:String,required:!0}},data(){return{}},mounted(){console.log(this.currentTable+":",this.currentMember)},computed:{tableData(){switch(this.currentTable){case"projectPlan":{let t=o.b.findProjectByName(this.currentMember),e=[];return t.forEach((t=>{t.date1[0]<c()().format("YYYY-MM-DD")&&t.date1[1]>c()().format("YYYY-MM-DD")&&e.push({"제목":t.title,"시작일":t.date1[0],"마감일":t.date1[1],"설명":t.desc,"갱신일":t.update})})),e}case"eventList":{let t=l.o.eventList.filter((t=>t.member.find((t=>t.name===this.currentMember))&&(c()(t.start).isSame(c()(),"day")||c()(t.end).isSame(c()(),"day")))),e=[];return t.forEach((t=>{let i=t.member.map((t=>t.name)).join(", ");e.push({"제목":t.title,"설명":t.desc,"참가인원":i})})),e}case"workList":{let t=o.b.findWorkByName(this.currentMember),e=[];return t.forEach((t=>{let i=o.b.findProjectByWork(t);e.push({"프로젝트":i.title,"업무":t.position,"설명":t.desc,"마감일":t.deadLine})})),e}default:return[]}}}},m=i(89);const p=(0,m.Z)(u,[["render",a]]);var h=p},7733:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var r=i(3396),n=i(7139);const s={key:0,class:"page"},a={class:"button"};function o(t,e,i,o,l,d){const c=(0,r.up)("el-table-column"),u=(0,r.up)("el-button"),m=(0,r.up)("el-table"),p=(0,r.up)("el-pagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(m,{data:d.noticeList,"table-layout":"auto",border:""},{default:(0,r.w5)((()=>[i.main?((0,r.wg)(),(0,r.j4)(c,{key:0,label:"번호",prop:"index"})):(0,r.kq)("",!0),(0,r.Wm)(c,{label:"제목"},{default:(0,r.w5)((t=>[(0,r.Wm)(u,{type:"primary",onClick:e=>d.noticeView(t.row),link:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(t.row.title),1)])),_:2},1032,["onClick"])])),_:1}),(0,r.Wm)(c,{label:"작성일",prop:"update"}),(0,r.Wm)(c,{label:"조회수",prop:"views"})])),_:1},8,["data"]),i.main?((0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(p,{layout:"prev, pager, next",total:d.total,background:"",onCurrentChange:d.showPage},null,8,["total","onCurrentChange"])])):(0,r.kq)("",!0),(0,r._)("div",a,[d.admin?((0,r.wg)(),(0,r.j4)(u,{key:0,type:"primary",onClick:d.writeEmit},{default:(0,r.w5)((()=>[(0,r.Uk)("글쓰기")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])],64)}var l=i(7029),d=i(443),c={name:"noticeBoard",emits:["transition","writeEmit"],data(){return{currentPage:1}},props:{main:{type:Boolean,default:!0}},methods:{saveNotice(t){l.M.saveNotice(t)},noticeView(t){console.log(t),l.M.updateView(t),this.$emit("transition",t)},showPage(t=1){this.currentPage=t},writeEmit(){this.$emit("writeEmit")}},computed:{noticeList(){return l.M.showPage(this.currentPage)},total(){return l.M.boardList.length},admin(){return d.r.currentMember===d.r.currentAdmin}}},u=i(89);const m=(0,u.Z)(c,[["render",o],["__scopeId","data-v-3e4839d1"]]);var p=m}}]);
//# sourceMappingURL=112.a5a9f532.js.map