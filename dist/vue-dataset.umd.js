(function(c,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(c=typeof globalThis!="undefined"?globalThis:c||self,e(c.VueDataset={},c.Vue))})(this,function(c,e){"use strict";var x={show:"Show",entries:"entries",previous:"Previous",next:"Next",showing:"Showing",showingTo:"to",showingOf:"of",showingEntries:"entries"};const P="...";function I(n,a,s){let t;return function(){const r=this,i=arguments;clearTimeout(t),s&&!t&&n.apply(r,i),t=setTimeout(function(){t=null,s||n.apply(r,i)},a)}}function D(n){for(const a in n)return!1;return!0}function B(n,a){const t=[],r=[];let i;if(t.push(1),n<=1)return t;for(let o=a-2;o<=a+2;o++)o<n&&o>1&&t.push(o);t.push(n);for(let o=0;o<t.length;o++)i&&(t[o]-i===2?r.push(i+1):t[o]-i!==1&&r.push(P)),r.push(t[o]),i=t[o];return r}function N(n,a={}){const s=[];let t;const r=n.length;return n=n.map(function(i,o){return i[0]==="-"?(s[o]=-1,i=i.substring(1)):s[o]=1,i}),function(i,o){for(t=0;t<r;t++){const l=n[t],f=a[l]?a[l](i.value[l]):i.value[l],u=a[l]?a[l](o.value[l]):o.value[l];if(f>u)return s[t];if(f<u)return-s[t]}return 0}}function j(n,a){for(const s in a)n=n.filter(function(t){const r=t.value;for(const i in r)if(i===s){if(typeof a[s]=="function")return a[s](r[i]);if(a[s]===""||r[i]===a[s])return!0}return!1});return n}function F(n,a,s,t){t=String(t).toLowerCase();for(const r in s)if(n.length===0||n.indexOf(r)!==-1){const i=String(s[r]).toLowerCase();for(const o in a)if(o===r&&typeof a[o]=="function"){const l=a[o](i,t,s);if(l===!0)return l}if(i.indexOf(t)>=0)return!0}return!1}var h=(n,a)=>{const s=n.__vccOpts||n;for(const[t,r]of a)s[t]=r;return s};const A={props:{dsData:{type:Array,default:()=>[]},dsFilterFields:{type:Object,default:()=>({})},dsSortby:{type:Array,default:()=>[]},dsSearchIn:{type:Array,default:()=>[]},dsSearchAs:{type:Object,default:()=>({})},dsSortAs:{type:Object,default:()=>({})}},setup(n){const a=e.ref(1),s=e.ref(""),t=e.ref(10),r=e.ref(x),i=e.ref([]),o=g=>{s.value=g},l=async g=>{const b=y.value;t.value=g,await e.nextTick();const d=y.value;d.length<b.length&&f(d[d.length-1])},f=g=>{a.value=g},u=e.computed(()=>(n.dsData,s.value,n.dsSortby,n.dsFilterFields,n.dsSearchIn,n.dsSearchAs,n.dsSortAs,Date.now())),E=e.computed(()=>i.value.slice(_.value,p.value)),y=e.computed(()=>B(S.value,a.value)),w=e.computed(()=>i.value.length),S=e.computed(()=>Math.ceil(w.value/t.value)),_=e.computed(()=>(a.value-1)*t.value),p=e.computed(()=>a.value*t.value);return e.watch(w,(g,b)=>{f(1)}),e.watch(u,(g,b)=>{let d=[];!s.value&&!n.dsSortby.length&&D(n.dsFilterFields)?d=n.dsData.map((m,k)=>k):(d=n.dsData.map((m,k)=>({index:k,value:m})),D(n.dsFilterFields)||(d=j(d,n.dsFilterFields)),s.value&&(d=d.filter(m=>F(n.dsSearchIn,n.dsSearchAs,m.value,s.value))),n.dsSortby.length&&d.sort(N(n.dsSortby,n.dsSortAs)),d=d.map(m=>m.index)),i.value=d},{immediate:!0}),e.provide("dsIndexes",i),e.provide("search",o),e.provide("showEntries",l),e.provide("setActive",f),e.provide("datasetI18n",r),e.provide("dsData",e.computed(()=>n.dsData)),e.provide("dsRows",E),e.provide("dsPages",y),e.provide("dsResultsNumber",w),e.provide("dsPagecount",S),e.provide("dsFrom",_),e.provide("dsTo",p),e.provide("dsPage",a),{dsIndexes:i,dsShowEntries:t,dsResultsNumber:w,dsPage:a,dsPagecount:S,dsFrom:_,dsTo:p,dsRows:E,dsPages:y,search:o,showEntries:l,setActive:f}}};function R(n,a,s,t,r,i){return e.renderSlot(n.$slots,"default",{ds:{dsIndexes:t.dsIndexes,dsShowEntries:t.dsShowEntries,dsResultsNumber:t.dsResultsNumber,dsPage:t.dsPage,dsPagecount:t.dsPagecount,dsFrom:t.dsFrom,dsTo:t.dsTo,dsData:s.dsData,dsRows:t.dsRows,dsPages:t.dsPages,search:t.search,showEntries:t.showEntries,setActive:t.setActive}})}var T=h(A,[["render",R]]);const C={setup(){const n=e.inject("dsResultsNumber"),a=e.inject("dsFrom"),s=e.inject("dsTo"),t=e.computed(()=>n.value!==0?a.value+1:0),r=e.computed(()=>s.value>=n.value?n.value:s.value);return{datasetI18n:e.inject("datasetI18n"),dsResultsNumber:n,showing:t,showingTo:r}}};function V(n,a,s,t,r,i){return e.openBlock(),e.createElementBlock("div",null,e.toDisplayString(t.datasetI18n.showing)+" "+e.toDisplayString(t.showing)+" "+e.toDisplayString(t.datasetI18n.showingTo)+" "+e.toDisplayString(t.showingTo)+" "+e.toDisplayString(t.datasetI18n.showingOf)+" "+e.toDisplayString(t.dsResultsNumber)+" "+e.toDisplayString(t.datasetI18n.showingEntries),1)}var O=h(C,[["render",V]]);const L={props:{tag:{type:String,default:"div"}},setup(){const n=e.computed(()=>{const a=[];for(let s=e.inject("dsFrom").value;s<e.inject("dsTo").value;s++)a.push(s);return a});return{dsData:e.inject("dsData"),dsRows:e.inject("dsRows"),indexes:n}}};function M(n,a,s,t,r,i){return e.openBlock(),e.createBlock(e.resolveDynamicComponent(s.tag),null,{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.dsRows,(o,l)=>e.renderSlot(n.$slots,"default",{row:t.dsData[o],rowIndex:o,index:t.indexes[l]})),256)),t.dsRows.length?e.createCommentVNode("",!0):e.renderSlot(n.$slots,"noDataFound",{key:0})]),_:3})}var z=h(L,[["render",M]]);const v={setup(){const n=e.ref(P),a=e.inject("dsPage"),s=e.inject("dsPagecount"),t=e.computed(()=>a.value===1),r=e.computed(()=>a.value===s.value||s.value===0);return{datasetI18n:e.inject("datasetI18n"),setActive:e.inject("setActive"),dsPages:e.inject("dsPages"),dsPagecount:s,dsPage:a,morePages:n,disabledPrevious:t,disabledNext:r}}},K={class:"pagination"},q=["tabindex","aria-disabled"],G=["onClick"],W={key:1,class:"page-link"},H=["tabindex","aria-disabled"];function J(n,a,s,t,r,i){return e.openBlock(),e.createElementBlock("ul",K,[e.createElementVNode("li",{class:e.normalizeClass(["page-item",t.disabledPrevious&&"disabled"])},[e.createElementVNode("a",{class:"page-link",href:"#",tabindex:t.disabledPrevious?"-1":null,"aria-disabled":t.disabledPrevious?"true":null,onClick:a[0]||(a[0]=e.withModifiers(o=>t.setActive(t.dsPage!==1&&t.dsPagecount!==0?t.dsPage-1:t.dsPage),["prevent"]))},e.toDisplayString(t.datasetI18n.previous),9,q)],2),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.dsPages,(o,l)=>(e.openBlock(),e.createElementBlock("li",{key:l,class:e.normalizeClass(["page-item",o===t.dsPage&&"active",o===t.morePages&&"disabled"])},[o!==t.morePages?(e.openBlock(),e.createElementBlock("a",{key:0,class:"page-link",href:"#",onClick:e.withModifiers(f=>t.setActive(o),["prevent"])},e.toDisplayString(o),9,G)):(e.openBlock(),e.createElementBlock("span",W,e.toDisplayString(o),1))],2))),128)),e.createElementVNode("li",{class:e.normalizeClass(["page-item",t.disabledNext&&"disabled"])},[e.createElementVNode("a",{class:"page-link",href:"#",tabindex:t.disabledNext?"-1":null,"aria-disabled":t.disabledNext?"true":null,onClick:a[1]||(a[1]=e.withModifiers(o=>t.setActive(t.dsPage!==t.dsPagecount&&t.dsPagecount!==0?t.dsPage+1:t.dsPage),["prevent"]))},e.toDisplayString(t.datasetI18n.next),9,H)],2)])}var Q=h(v,[["render",J]]);const U={props:{dsSearchPlaceholder:{type:String,default:""},wait:{type:Number,default:0}},setup(n){const a=e.inject("search"),s=e.ref(""),t=I(r=>{a(r)},n.wait);return{dsSearch:s,input:t}}},X=["placeholder","value"];function Y(n,a,s,t,r,i){return e.openBlock(),e.createElementBlock("input",{type:"text",placeholder:s.dsSearchPlaceholder,class:"form-control",value:t.dsSearch,onInput:a[0]||(a[0]=o=>t.input(o.target.value))},null,40,X)}var Z=h(U,[["render",Y]]);const $={props:{dsShowEntries:{type:Number,default:10},dsShowEntriesLovs:{type:Array,default:()=>[{value:5,text:5},{value:10,text:10},{value:25,text:25},{value:50,text:50},{value:100,text:100}]}},emits:["changed"],setup(n,{emit:a}){const s=e.inject("showEntries"),t=r=>{a("changed",Number(r.target.value)),s(Number(r.target.value))};return s(Number(n.dsShowEntries)),{datasetI18n:e.inject("datasetI18n"),change:t}}},ee={class:"form-inline"},te=["value"],ne=["value"];function ae(n,a,s,t,r,i){return e.openBlock(),e.createElementBlock("div",ee,[e.createElementVNode("label",null,e.toDisplayString(t.datasetI18n.show),1),e.createElementVNode("select",{value:s.dsShowEntries,class:"form-control mr-1 ml-1",onChange:a[0]||(a[0]=(...o)=>t.change&&t.change(...o))},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.dsShowEntriesLovs,o=>(e.openBlock(),e.createElementBlock("option",{key:o.value,value:o.value},e.toDisplayString(o.text),9,ne))),128))],40,te),e.createElementVNode("label",null,e.toDisplayString(t.datasetI18n.entries),1)])}var se=h($,[["render",ae]]);c.Dataset=T,c.DatasetInfo=O,c.DatasetItem=z,c.DatasetPager=Q,c.DatasetSearch=Z,c.DatasetShow=se,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
