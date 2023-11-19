import{aj as F,k as V,ak as H,N as Y,z as Z,a4 as G,al as p,am as N,an as $,ao as A,ap as T,aq as tt,P as et,ar as st,c as nt}from"./framework.V9Xktqrn.js";var ot=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let q;const E=t=>q=t,z=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function ht(){const t=F(!0),o=t.run(()=>V({}));let s=[],e=[];const r=H({install(u){E(r),r._a=u,u.provide(z,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const B=()=>{};function O(t,o,s,e=B){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const ct=t=>t();function I(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];R(r)&&R(e)&&t.hasOwnProperty(s)&&!p(e)&&!N(e)?t[s]=I(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!R(t)||!t.hasOwnProperty(rt)}const{assign:v}=Object;function at(t){return!!(p(t)&&t.effect)}function ft(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const y=st(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((m,_)=>(m[_]=H(nt(()=>{E(s);const d=s._s.get(t);return f[_].call(d,d)})),m),{}))}return g=D(t,b,o,s,e,!0),g}function D(t,o,s={},e,r,u){let f;const a=v({actions:{}},s),g={deep:!0};let b,y,m=[],_=[],d;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let L;function W(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:k.patchFunction,storeId:t,events:d}):(I(e.state.value[t],c),n={type:k.patchObject,payload:c,storeId:t,events:d});const h=L=Symbol();et().then(()=>{L===h&&(b=!0)}),y=!0,P(m,n,e.state.value[t])}const J=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{v(S,h)})}:B;function K(){f.stop(),m=[],_=[],e._s.delete(t)}function M(c,n){return function(){E(e);const h=Array.from(arguments),S=[],x=[];function U(l){S.push(l)}function X(l){x.push(l)}P(_,{args:h,name:c,store:i,after:U,onError:X});let C;try{C=n.apply(this&&this.$id===t?this:i,h)}catch(l){throw P(x,l),l}return C instanceof Promise?C.then(l=>(P(S,l),l)).catch(l=>(P(x,l),Promise.reject(l))):(P(S,C),C)}}const Q={_p:e,$id:t,$onAction:O.bind(null,_),$patch:W,$reset:J,$subscribe(c,n={}){const h=O(m,c,n.detached,()=>S()),S=f.run(()=>Z(()=>e.state.value[t],x=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:k.direct,events:d},x)},v({},g,n)));return h},$dispose:K},i=G(Q);e._s.set(t,i);const w=(e._a&&e._a.runWithContext||ct)(()=>e._e.run(()=>(f=F()).run(o)));for(const c in w){const n=w[c];if(p(n)&&!at(n)||N(n))u||(j&&ut(n)&&(p(n)?n.value=j[c]:I(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=M(c,n);w[c]=h,a.actions[c]=n}}return v(i,w),v($(i),w),Object.defineProperty(i,"$state",{get:()=>e.state.value[t],set:c=>{W(n=>{v(n,c)})}}),e._p.forEach(c=>{v(i,f.run(()=>c({store:i,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(i.$state,j),b=!0,y=!0,i}function bt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,g){const b=A();return a=a||(b?Y(z,null):null),a&&E(a),a=q,a._s.has(e)||(u?D(e,o,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}export{ht as c,bt as d};
