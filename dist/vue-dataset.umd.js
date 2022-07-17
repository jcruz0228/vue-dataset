(function(c,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(c=typeof globalThis<"u"?globalThis:c||self,e(c.VueDataset={},c.Vue))})(this,function(c,e){"use strict";const x={show:"Show",entries:"entries",previous:"Previous",next:"Next",showing:"Showing",showingTo:"to",showingOf:"of",showingEntries:"entries"},P="...";function I(n,s,a){let t;return function(){const r=this,i=arguments;clearTimeout(t),a&&!t&&n.apply(r,i),t=setTimeout(function(){t=null,a||n.apply(r,i)},s)}}function D(n){for(const s in n)return!1;return!0}function B(n,s){const t=[],r=[];let i;if(t.push(1),n<=1)return t;for(let o=s-2;o<=s+2;o++)o<n&&o>1&&t.push(o);t.push(n);for(let o=0;o<t.length;o++)i&&(t[o]-i===2?r.push(i+1):t[o]-i!==1&&r.push(P)),r.push(t[o]),i=t[o];return r}function N(n,s={}){const a=[];let t;const r=n.length;return n=n.map(function(i,o){return i[0]==="-"?(a[o]=-1,i=i.substring(1)):a[o]=1,i}),function(i,o){for(t=0;t<r;t++){const l=n[t],f=s[l]?s[l](i.value[l]):i.value[l],u=s[l]?s[l](o.value[l]):o.value[l];if(f>u)return a[t];if(f<u)return-a[t]}return 0}}function j(n,s){for(const a in s)n=n.filter(function(t){const r=t.value;for(const i in r)if(i===a){if(typeof s[a]=="function")return s[a](r[i]);if(s[a]===""||r[i]===s[a])return!0}return!1});return n}function F(n,s,a,t){t=String(t).toLowerCase();for(const r in a)if(n.length===0||n.indexOf(r)!==-1){const i=String(a[r]).toLowerCase();for(const o in s)if(o===r&&typeof s[o]=="function"){const l=s[o](i,t,a);if(l===!0)return l}if(i.indexOf(t)>=0)return!0}return!1}const h=(n,s)=>{const a=n.__vccOpts||n;for(const[t,r]of s)a[t]=r;return a},A={props:{dsData:{type:Array,default:()=>[]},dsFilterFields:{type:Object,default:()=>({})},dsSortby:{type:Array,default:()=>[]},dsSearchIn:{type:Array,default:()=>[]},dsSearchAs:{type:Object,default:()=>({})},dsSortAs:{type:Object,default:()=>({})}},setup(n){const s=e.ref(1),a=e.ref(""),t=e.ref(10),r=e.ref(x),i=e.ref([]),o=g=>{a.value=g},l=async g=>{const b=y.value;t.value=g,await e.nextTick();const d=y.value;d.length<b.length&&f(d[d.length-1])},f=g=>{s.value=g},u=e.computed(()=>(n.dsData,a.value,n.dsSortby,n.dsFilterFields,n.dsSearchIn,n.dsSearchAs,n.dsSortAs,Date.now())),E=e.computed(()=>i.value.slice(_.value,p.value)),y=e.computed(()=>B(S.value,s.value)),w=e.computed(()=>i.value.length),S=e.computed(()=>Math.ceil(w.value/t.value)),_=e.computed(()=>(s.value-1)*t.value),p=e.computed(()=>s.value*t.value);return e.watch(w,(g,b)=>{f(1)}),e.watch(u,(g,b)=>{let d=[];!a.value&&!n.dsSortby.length&&D(n.dsFilterFields)?d=n.dsData.map((m,k)=>k):(d=n.dsData.map((m,k)=>({index:k,value:m})),D(n.dsFilterFields)||(d=j(d,n.dsFilterFields)),a.value&&(d=d.filter(m=>F(n.dsSearchIn,n.dsSearchAs,m.value,a.value))),n.dsSortby.length&&d.sort(N(n.dsSortby,n.dsSortAs)),d=d.map(m=>m.index)),i.value=d},{immediate:!0}),e.provide("dsIndexes",i),e.provide("search",o),e.provide("showEntries",l),e.provide("setActive",f),e.provide("datasetI18n",r),e.provide("dsData",e.computed(()=>n.dsData)),e.provide("dsRows",E),e.provide("dsPages",y),e.provide("dsResultsNumber",w),e.provide("dsPagecount",S),e.provide("dsFrom",_),e.provide("dsTo",p),e.provide("dsPage",s),{dsIndexes:i,dsShowEntries:t,dsResultsNumber:w,dsPage:s,dsPagecount:S,dsFrom:_,dsTo:p,dsRows:E,dsPages:y,search:o,showEntries:l,setActive:f}}};function R(n,s,a,t,r,i){return e.renderSlot(n.$slots,"default",{ds:{dsIndexes:t.dsIndexes,dsShowEntries:t.dsShowEntries,dsResultsNumber:t.dsResultsNumber,dsPage:t.dsPage,dsPagecount:t.dsPagecount,dsFrom:t.dsFrom,dsTo:t.dsTo,dsData:a.dsData,dsRows:t.dsRows,dsPages:t.dsPages,search:t.search,showEntries:t.showEntries,setActive:t.setActive}})}const T=h(A,[["render",R]]),C={setup(){const n=e.inject("dsResultsNumber"),s=e.inject("dsFrom"),a=e.inject("dsTo"),t=e.computed(()=>n.value!==0?s.value+1:0),r=e.computed(()=>a.value>=n.value?n.value:a.value);return{datasetI18n:e.inject("datasetI18n"),dsResultsNumber:n,showing:t,showingTo:r}}};function V(n,s,a,t,r,i){return e.openBlock(),e.createElementBlock("div",null,e.toDisplayString(t.datasetI18n.showing)+" "+e.toDisplayString(t.showing)+" "+e.toDisplayString(t.datasetI18n.showingTo)+" "+e.toDisplayString(t.showingTo)+" "+e.toDisplayString(t.datasetI18n.showingOf)+" "+e.toDisplayString(t.dsResultsNumber)+" "+e.toDisplayString(t.datasetI18n.showingEntries),1)}const O=h(C,[["render",V]]),L={props:{tag:{type:String,default:"div"}},setup(){const n=e.computed(()=>{const s=[];for(let a=e.inject("dsFrom").value;a<e.inject("dsTo").value;a++)s.push(a);return s});return{dsData:e.inject("dsData"),dsRows:e.inject("dsRows"),indexes:n}}};function M(n,s,a,t,r,i){return e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.tag),null,{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.dsRows,(o,l)=>e.renderSlot(n.$slots,"default",{row:t.dsData[o],rowIndex:o,index:t.indexes[l]})),256)),t.dsRows.length?e.createCommentVNode("",!0):e.renderSlot(n.$slots,"noDataFound",{key:0})]),_:3})}const z=h(L,[["render",M]]),K={setup(){const n=e.ref(P),s=e.inject("dsPage"),a=e.inject("dsPagecount"),t=e.computed(()=>s.value===1),r=e.computed(()=>s.value===a.value||a.value===0);return{datasetI18n:e.inject("datasetI18n"),setActive:e.inject("setActive"),dsPages:e.inject("dsPages"),dsPagecount:a,dsPage:s,morePages:n,disabledPrevious:t,disabledNext:r}}},q={class:"pagination"},G=["tabindex","aria-disabled"],W=["onClick"],H={key:1,class:"page-link"},J=["tabindex","aria-disabled"];function Q(n,s,a,t,r,i){return e.openBlock(),e.createElementBlock("ul",q,[e.createElementVNode("li",{class:e.normalizeClass(["page-item",t.disabledPrevious&&"disabled"])},[e.createElementVNode("a",{class:"page-link",href:"#",tabindex:t.disabledPrevious?"-1":null,"aria-disabled":t.disabledPrevious?"true":null,onClick:s[0]||(s[0]=e.withModifiers(o=>t.setActive(t.dsPage!==1&&t.dsPagecount!==0?t.dsPage-1:t.dsPage),["prevent"]))},e.toDisplayString(t.datasetI18n.previous),9,G)],2),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.dsPages,(o,l)=>(e.openBlock(),e.createElementBlock("li",{key:l,class:e.normalizeClass(["page-item",o===t.dsPage&&"active",o===t.morePages&&"disabled"])},[o!==t.morePages?(e.openBlock(),e.createElementBlock("a",{key:0,class:"page-link",href:"#",onClick:e.withModifiers(f=>t.setActive(o),["prevent"])},e.toDisplayString(o),9,W)):(e.openBlock(),e.createElementBlock("span",H,e.toDisplayString(o),1))],2))),128)),e.createElementVNode("li",{class:e.normalizeClass(["page-item",t.disabledNext&&"disabled"])},[e.createElementVNode("a",{class:"page-link",href:"#",tabindex:t.disabledNext?"-1":null,"aria-disabled":t.disabledNext?"true":null,onClick:s[1]||(s[1]=e.withModifiers(o=>t.setActive(t.dsPage!==t.dsPagecount&&t.dsPagecount!==0?t.dsPage+1:t.dsPage),["prevent"]))},e.toDisplayString(t.datasetI18n.next),9,J)],2)])}const U=h(K,[["render",Q]]),X={props:{dsSearchPlaceholder:{type:String,default:""},wait:{type:Number,default:0}},setup(n){const s=e.inject("search"),a=e.ref(""),t=I(r=>{s(r)},n.wait);return{dsSearch:a,input:t}}},Y=["placeholder","value"];function Z(n,s,a,t,r,i){return e.openBlock(),e.createElementBlock("input",{type:"text",placeholder:a.dsSearchPlaceholder,class:"form-control",value:t.dsSearch,onInput:s[0]||(s[0]=o=>t.input(o.target.value))},null,40,Y)}const v=h(X,[["render",Z]]),$={props:{dsShowEntries:{type:Number,default:10},dsShowEntriesLovs:{type:Array,default:()=>[{value:5,text:5},{value:10,text:10},{value:25,text:25},{value:50,text:50},{value:100,text:100}]}},emits:["changed"],setup(n,{emit:s}){const a=e.inject("showEntries"),t=r=>{s("changed",Number(r.target.value)),a(Number(r.target.value))};return a(Number(n.dsShowEntries)),{datasetI18n:e.inject("datasetI18n"),change:t}}},ee={class:"form-inline"},te=["value"],ne=["value"];function se(n,s,a,t,r,i){return e.openBlock(),e.createElementBlock("div",ee,[e.createElementVNode("label",null,e.toDisplayString(t.datasetI18n.show),1),e.createElementVNode("select",{value:a.dsShowEntries,class:"form-control mr-1 ml-1",onChange:s[0]||(s[0]=(...o)=>t.change&&t.change(...o))},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.dsShowEntriesLovs,o=>(e.openBlock(),e.createElementBlock("option",{key:o.value,value:o.value},e.toDisplayString(o.text),9,ne))),128))],40,te),e.createElementVNode("label",null,e.toDisplayString(t.datasetI18n.entries),1)])}const ae=h($,[["render",se]]);c.Dataset=T,c.DatasetInfo=O,c.DatasetItem=z,c.DatasetPager=U,c.DatasetSearch=v,c.DatasetShow=ae,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
