"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[405,680],{9130:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(6252),n=a(3577);const r={key:0};function o(e,t,a,o,u,s){const d=(0,l.up)("el-descriptions-item"),i=(0,l.up)("showMemberV2"),p=(0,l.up)("el-descriptions"),c=(0,l.up)("el-dialog");return a.eventData?((0,l.wg)(),(0,l.j4)(c,{key:0,modelValue:u.display,"onUpdate:modelValue":t[0]||(t[0]=e=>u.display=e)},{header:(0,l.w5)((()=>[(0,l._)("span",null,(0,n.zw)(s.form.title),1),void 0===this.eventData.start?((0,l.wg)(),(0,l.iD)("span",r," 반복 일정 ")):(0,l.kq)("",!0)])),default:(0,l.w5)((()=>[(0,l.Wm)(p,{column:1,border:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{label:"일정 제목",width:"100px","label-align":"center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(s.form.title),1)])),_:1}),(0,l.Wm)(d,{label:"일정 내용","label-align":"center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(s.form.desc),1)])),_:1}),(0,l.Wm)(d,{label:"참가 인원","label-align":"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{parentData:s.form.member},null,8,["parentData"])])),_:1}),void 0!==this.eventData.start?((0,l.wg)(),(0,l.j4)(d,{key:0,label:"기간","label-align":"center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(this.eventData.start)+" ~ "+(0,n.zw)(this.eventData.end),1)])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1},8,["modelValue"])):(0,l.kq)("",!0)}var u=a(5680),s={name:"arrangeEvent",components:{showMemberV2:u["default"]},data(){return{forms:{title:"",member:[],desc:""},display:!1}},props:{eventData:{type:Object,default:()=>{}}},methods:{handleClose(){this.display=!1}},watch:{eventData(){0!==Object.keys(this.eventData).length&&(this.display=!0)}},computed:{form(){return 0!==Object.keys(this.eventData).length?this.eventData:this.forms}}},d=a(3744);const i=(0,d.Z)(s,[["render",o]]);var p=i},5680:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(6252);function n(e,t,a,n,r,o){const u=(0,l.up)("el-table-column"),s=(0,l.up)("el-table");return(0,l.wg)(),(0,l.j4)(s,{data:a.parentData,border:"",onSelectionChange:o.handleSelect,"table-layout":r.tableLayout},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{prop:"name",label:"Name"}),(0,l.Wm)(u,{prop:"job",label:"Job"}),(0,l.Wm)(u,{prop:"rank",label:"Rank"})])),_:1},8,["data","onSelectionChange","table-layout"])}var r=a(443),o={name:"projectPlan",props:{parentData:{type:Array,default:()=>[]}},data(){return{currentProject:null,tableData:[],MemberList:r.r,tableLayout:"auto"}},methods:{handleSelect(e){this.selectedRow=e}}},u=a(3744);const s=(0,u.Z)(o,[["render",n]]);var d=s}}]);
//# sourceMappingURL=405.b3a5e6e9.js.map