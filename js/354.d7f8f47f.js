"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[354],{2616:function(t,e,s){s.d(e,{e:function(){return l}});s(7658);var i=s(2262),o=s(5086),r=s(2596),n=s(443);const l=(0,i.qj)({requestList:localStorage.getItem("requestList")?JSON.parse(localStorage.getItem("requestList")):[],completeList:localStorage.getItem("completeList")?JSON.parse(localStorage.getItem("completeList")):[],async request(t,e,s){const i=await n.r.findHighestRankMember(t.Partipacants);console.log(i,"ApprovalMember");const o={...t,type:e,status:s,master:`${i.name}(${i.rank})`,writer:n.r.currentMember};r.x.saveList(o,"결재",i,n.r.currentMember),this.requestList.push(o),console.log(this.requestList,"this.requestList"),this.setCookies()},completion(t){let e="",s="";switch(console.log(t),t.type){case"계획":e=this.requestList.find((e=>e.title===t.title)),o.b.saveList(t),this.completeList.push(t),s=this.requestList.findIndex((t=>t.title===e.title)),-1!==s&&this.requestList.splice(s,1);break;case"업무":o.b.workFinish(t),this.completeList.push(t),e=this.requestList.find((e=>e.name===t.name)),s=this.requestList.indexOf(e),this.requestList.splice(s,1);break}this.setCookies()},type:["계획","업무","휴가","기타"],status:["대기","승인","반려","취소"],findList(t){return this.requestList.find((e=>e.title===t))},search(t){const e=this.requestList.filter((e=>e.title===t));return e},changeStatus(t,e){const s=this.requestList.find((e=>e.title===t.title||e.name===t.name));s.status=e,r.x.saveList(s,"결재",s.writer,s.master)},modifyCompletion(t){try{const e=this.requestList.find((e=>e.title===t.title||e.name===t.name||e.title===t.originalTitle));if(console.log(e,"raw"),void 0===e)return void console.error("No matching item found in requestList");console.log(o.b.List,"this.projectPlanList.List");const s=o.b.List.find((t=>t.index===e.index));if(void 0===s)return void console.error("No matching item found in projectPlanList.List");console.log(s,"dataRaw"),console.log(t,"item"),o.b.modifySaveList(s,t),this.completeList.push(e);let i=this.requestList.indexOf(e);-1!==i&&this.requestList.splice(i,1)}catch(e){console.error("An error occurred:",e)}},setCookies(){const t=JSON.stringify(this.requestList),e=JSON.stringify(this.completeList);localStorage.setItem("requestList",t),localStorage.setItem("completeList",e)},findRequestListByMember(t){const e=this.requestList.filter((e=>e.master===t));return e},findRequestListByWriter(t){this.requestList=JSON.parse(localStorage.getItem("requestList"));const e=this.requestList.filter((e=>e.writer===t));return e},deleteRequestList(t){const e=this.requestList.find((e=>e.title===t.title||e.name===t.name)),s=this.requestList.indexOf(e);this.requestList.splice(s,1)},callRequestListByMaster(t){this.requestList=JSON.parse(localStorage.getItem("requestList")),console.log(this.requestList,"this.requestList after loading from localStorage");const e=this.requestList.filter((e=>e.master&&e.master.includes(t)));console.log(e);const s=e.some((e=>e.master.includes(t)));return console.log("Is master included?",s),e},storageDebug(){console.log(this.requestList,"Data before saving"),localStorage.setItem("requestList",JSON.stringify(this.requestList));const t=localStorage.getItem("requestList");console.log(t,"Loaded data");const e=JSON.parse(t);console.log(e,"Parsed data")}})},5086:function(t,e,s){s.d(e,{b:function(){return a}});s(7658);var i=s(2262),o=s(381),r=s.n(o),n=s(2596),l=s(443);const a=(0,i.qj)({List:JSON.parse(localStorage.getItem("projectPlanList"))||[],workList:JSON.parse(localStorage.getItem("workList"))||[],finishedList:JSON.parse(localStorage.getItem("finishedList"))||[],saveList(t,e=void 0){if(console.log(t),void 0!==e){const s=e,i={works:t.works,parentIdx:s};delete t.works,this.List[s]={...t,index:s,status:"진행"},console.log(i),this.workList.push(i)}else{const e=this.List.length,s={works:t.works,parentIdx:e};delete t.works,this.List.push({...t,index:e,status:"진행"}),console.log(s),this.workList.push(s)}n.x.saveList(t,"프로젝트",t.Partipacants,l.r.currentMember),this.setCookies()},callWorkList(t){const e=this.workList.find((e=>e.parentIdx===t.index));return e},callPlanList(){const t=this.List;console.log(t,"rawData");const e=t.filter((t=>"취소"!==t.status));return console.log(e,"result"),e},callList(){const t=this.List;console.log(t,"rawData");const e=t.filter((t=>"진행"===t.status&&t.date1[0]<r()().format("YYYY-MM-DD")));return console.log(e,"result"),e},findParentWorkList(t){const e=this.workList.find((e=>e.parentIdx===t));return e},workFinish(t){const e=this.findParentWorkList(t.parent.index),s=e.works.find((e=>e.name===t.name));if(s.status="완료",console.log(s),e.works.every((t=>"완료"===t.status))){const t=this.List.find((t=>t.index===e.parentIdx));t.status="완료";const s={...t,works:e.works};this.finishedList.push(s);const i=this.workList.indexOf(e);this.workList.splice(i,1)}this.setCookies()},findWorks(t){console.log("입장",t),console.log("플젝리스트",this.List),console.log("업무리스트",this.workList);const e=this.List.find((e=>e===t.parent||e.index===t.index||e.title===t));console.log("parentProject",e);const s=this.workList.find((t=>t.parentIdx===e.index));console.log("result",s);const i=s.works.find((e=>e.name===t.title));return console.log(i),i},findProject(t){const e=this.findWorks(t),s=this.List.find((t=>t.index===e.parentIdx));return s},findWorkAndProject(t){const e=this.List.find((e=>e.title===t));let s;if(e){const t=this.workList.find((t=>t.parentIdx===e.index));t&&(s=t.works)}return{work:s,project:e}},callFinishedList(){return this.finishedList},findProject2(t){return this.List.find((e=>e.index===t.parentIdx))},deletePlanWork(t){this.List=this.List.filter((e=>e.index!==t.index)),this.workList=this.workList.filter((e=>e.parentIdx!==t.index))},modifySaveList(t,e){console.log(t,e);const s=t.index;this.deletePlanWork(t),delete e.originalTitle,this.saveList(e,s)},findWorkByName(t){const e=this.workList.flatMap((e=>e.works.filter((e=>e.name===t))));return e},findProjectByName(t){const e=this.findWorkByName(t),s=this.workList.filter((t=>e.some((e=>t.works.includes(e)))));console.log(e,s,"works,workLists");const i=s.map((t=>{const e=t.parentIdx;return this.List.find((t=>t.index===e))}));return i},findProjectByWork(t){const e=this.workList.find((e=>e.works.find((e=>e===t))));if(!e)return null;const s=e.parentIdx,i=this.List.find((t=>t.index===s));return i},setCookies(){localStorage.setItem("projectPlanList",JSON.stringify(this.List)),localStorage.setItem("workList",JSON.stringify(this.workList)),localStorage.setItem("finishedList",JSON.stringify(this.finishedList))},getCookies(){this.List=JSON.parse(localStorage.getItem("projectPlanList")),this.workList=JSON.parse(localStorage.getItem("workList")),this.finishedList=JSON.parse(localStorage.getItem("finishedList"))}})}}]);
//# sourceMappingURL=354.d7f8f47f.js.map