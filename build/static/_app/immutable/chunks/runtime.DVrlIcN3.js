var yt=Array.isArray,Ht=Array.from,jt=Object.isFrozen,qt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Tt=Object.getOwnPropertyDescriptors,Yt=Object.prototype,Vt=Array.prototype,Bt=Object.getPrototypeOf,tt=Map.prototype,At=tt.set,mt=tt.get;function Kt(t,n,e){At.call(t,n,e)}function zt(t,n){return mt.call(t,n)}const g=2,H=4,N=8,nt=16,h=32,q=64,D=128,T=256,A=512,F=1024,P=2048,k=4096,et=8192,St=16384,W=Symbol("$state");function rt(t){return t===this.v}function Ot(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!Ot(t,this.v)}const Zt=1,$t=2,Gt=4,Qt=8,Wt=16,Xt=64,Jt=1,tn=2,nn=4,en=8,rn=1,sn=2,on="[",It="]",un=`${It}!`,Nt=Symbol(),ln=["touchstart","touchmove","touchend"];function st(t){return{f:0,reactions:null,equals:rt,v:t,version:0}}function fn(t){const n=st(t);return n.equals=Rt,c&&(c.d??(c.d=[])).push(n),n}function an(t,n){var e=t.v!==Nt;if(!O&&e&&v!==null&&z()&&v.f&g)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");return t.equals(n)||(t.v=n,t.version++,z()&&e&&l!==null&&l.f&T&&!(l.f&h)&&(_!==null&&_.includes(t)?(y(l,A),V(l)):S===null?Lt([t]):S.push(t)),Q(t,A,!0)),n}function cn(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function Dt(t){if(yt(t))for(var n=0;n<t.length;n++){var e=t[n];e.isConnected&&e.remove()}else t.isConnected&&t.remove()}function Ct(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function x(t,n,e){var r=(t&q)!==0,s={ctx:c,deps:null,dom:null,f:t|A,first:null,fn:n,last:null,next:null,parent:r?null:l,prev:null,teardown:null,transitions:null};if(v!==null&&!r&&Ct(s,v),e){var o=w;try{X(!0),Y(s),s.f|=St}finally{X(o)}}else V(s);return s}function _n(){return l?(l.f&(h|q))===0:!1}function pn(t){if(l===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");if(l.f&N&&c!==null&&!c.m){const e=c;(e.e??(e.e=[])).push(t)}else ot(t)}function vn(t){if(l===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");return wt(t)}function dn(t){const n=x(q,t,!0);return()=>{$(n)}}function ot(t){return x(H,t,!1)}function wt(t){return x(N,t,!0)}function En(t){return x(N|nt,t,!0)}function hn(t){return x(N|h,t,!0)}function $(t){var o;var n=t.dom;if(n!==null&&Dt(n),G(t),U(t,0),y(t,k),t.transitions)for(const u of t.transitions)u.stop();(o=t.teardown)==null||o.call(null);var e=t.parent;if(e!==null&&t.f&h&&e.first!==null){var r=t.prev,s=t.next;r!==null?s!==null?(r.next=s,s.prev=r):(r.next=null,e.last=r):s!==null?(s.prev=null,e.first=s):(e.first=null,e.last=null)}t.next=t.prev=t.teardown=t.ctx=t.dom=t.deps=t.parent=t.fn=null}function yn(t,n){var e=[];ut(t,e,!0),Ft(e,()=>{$(t),n&&n()})}function Ft(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var s of t)s.out(r)}else n()}function ut(t,n,e){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const u of t.transitions)(u.is_global||e)&&n.push(u);for(var r=t.first;r!==null;){var s=r.next,o=(r.f&et)!==0||(r.f&h)!==0;ut(r,n,o?e:!1),r=s}}}function Tn(t){lt(t,!0)}function lt(t,n){if(t.f&P){t.f^=P,M(t)&&Y(t);for(var e=t.first;e!==null;){var r=e.next,s=(e.f&et)!==0||(e.f&h)!==0;lt(e,s?n:!1),e=r}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}let K=!1;function An(t){let n=g|A;l===null&&(n|=D);const e={deps:null,deriveds:null,equals:rt,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(v!==null&&v.f&g){var r=v;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function it(t){G(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var e=0;e<n.length;e+=1)Pt(n[e])}}function ft(t,n){var e=K;K=!0,it(t);var r=ct(t);K=e;var s=(L||t.f&D)&&t.deps!==null?F:T;y(t,s),t.equals(r)||(t.v=r,Q(t,A,n))}function Pt(t){it(t),U(t,0),y(t,k),t.first=t.last=t.deps=t.reactions=t.fn=null}const at=0,kt=1;let b=at,j=!1,w=!1;function X(t){w=t}let R=[],I=0,v=null;function mn(t){v=t}let l=null;function Sn(t){l=t}let _=null,a=0,S=null;function Lt(t){S=t}let O=!1,L=!1,c=null;function On(t){c=t}function z(){return c!==null&&c.r}function M(t){var n=t.f;if(n&A)return!0;if(n&F){var e=t.deps,r=(n&D)!==0;if(e!==null)for(var s=e.length,o=0;o<s;o++){var u=e[o];if(M(u)&&(ft(u,!0),t.f&A))return!0;var d=u.version;if(r&&d>t.version)return t.version=d,!0}r||y(t,T)}return!1}function ct(t){const n=_,e=a,r=S,s=v,o=L,u=O;_=null,a=0,S=null,v=t,L=!w&&(t.f&D)!==0,O=!1;try{let d=t.fn(),i=t.deps;if(_!==null){let f;if(i!==null){const p=i.length,E=a===0?_:i.slice(0,a).concat(_),C=E.length>16&&p-a>1?new Set(E):null;for(f=a;f<p;f++){const m=i[f];(C!==null?!C.has(m):!E.includes(m))&&_t(t,m)}}if(i!==null&&a>0)for(i.length=a+_.length,f=0;f<_.length;f++)i[a+f]=_[f];else t.deps=i=_;if(!L)for(f=a;f<i.length;f++){const p=i[f],E=p.reactions;E===null?p.reactions=[t]:E[E.length-1]!==t&&E.push(t)}}else i!==null&&a<i.length&&(U(t,a),i.length=a);return d}finally{_=n,a=e,S=r,v=s,L=o,O=u}}function _t(t,n){const e=n.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(t);s!==-1&&(r===0?n.reactions=null:(e[s]=e[r],e.pop()))}r===0&&n.f&D&&(y(n,A),U(n,0))}function U(t,n){const e=t.deps;if(e!==null){const r=n===0?null:e.slice(0,n);let s;for(s=n;s<e.length;s++){const o=e[s];(r===null||!r.includes(o))&&_t(t,o)}}}function G(t){let n=t.first;t.first=null,t.last=null;for(var e;n!==null;)e=n.next,$(n),n=e}function Y(t){var u;var n=t.f;if(!(n&k)){y(t,T);var e=t.ctx,r=l,s=c;l=t,c=e;try{n&nt||G(t),(u=t.teardown)==null||u.call(null);var o=ct(t);t.teardown=typeof o=="function"?o:null}finally{l=r,c=s}}}function pt(){if(I>1e3)throw I=0,new Error("ERR_SVELTE_TOO_MANY_UPDATES");I++}function vt(t){for(var n=0;n<t.length;n++){var e=t[n];Et(e,N|H)}}function J(t){var n=t.length;if(n!==0){pt();for(var e=0;e<n;e++){var r=t[e];!(r.f&(k|P))&&M(r)&&Y(r)}}}function gt(){if(j=!1,I>101)return;const t=R;R=[],vt(t),j||(I=0)}function V(t){b===at&&(j||(j=!0,queueMicrotask(gt)));for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&h){if(!(e&T))return;y(n,F)}}R.push(n)}function dt(t,n,e,r){var s=t.first,o=[];t:for(;s!==null;){var u=s.f,d=(u&(k|P))===0,i=u&h,f=(u&T)!==0,p=s.first;if(d&&(!i||!f)){if(i&&y(s,T),u&N){if(i){if(!e&&p!==null){s=p;continue}}else if(M(s)&&(Y(s),p=s.first),!e&&p!==null){s=p;continue}}else if(u&H)if(i||f){if(!e&&p!==null){s=p;continue}}else o.push(s)}var E=s.next;if(E===null){let m=s.parent;for(;m!==null;){if(t===m)break t;var B=m.next;if(B!==null){s=B;continue t}m=m.parent}}s=E}if(o.length>0&&(n&H&&r.push(...o),!e))for(var C=0;C<o.length;C++)dt(o[C],n,!1,r)}function Et(t,n,e=!1){var r=[],s=w;w=!0;try{t.first===null&&!(t.f&h)?J([t]):(dt(t,n,e,r),J(r))}finally{w=s}}function Rn(t){I=0,Et(t,N,!0)}function ht(t,n=!0){var e=b,r=R;try{pt();const o=[];b=kt,R=o,n&&vt(r);var s=t==null?void 0:t();return(R.length>0||o.length>0)&&ht(),I=0,s}finally{b=e,R=r}}async function In(){await Promise.resolve(),ht()}function xt(t){const n=t.f;if(n&k)return t.v;if(v!==null&&!(v.f&(h|q))&&!O){const e=(v.f&D)!==0,r=v.deps;_===null&&r!==null&&r[a]===t&&!(e&&l!==null)?a++:(r===null||a===0||r[a-1]!==t)&&(_===null?_=[t]:_.push(t)),S!==null&&l!==null&&l.f&T&&!(l.f&h)&&S.includes(t)&&(y(l,A),V(l))}return n&g&&M(t)&&ft(t,!1),t.v}function Q(t,n,e){var r=t.reactions;if(r!==null)for(var s=z(),o=r.length,u=0;u<o;u++){var d=r[u];if(!((!e||!s)&&d===l)){var i=d.f;y(d,n);var f=(i&F)!==0,p=(i&D)!==0;(i&T||f&&p)&&(d.f&g?Q(d,F,e):V(d))}}}function Nn(t){const n=O;try{return O=!0,t()}finally{O=n}}const Mt=~(A|F|T);function y(t,n){t.f=t.f&Mt|n}function bt(t){return typeof t=="object"&&t!==null&&typeof t.f=="number"}function Dn(t,n=!1,e){c={x:null,c:null,e:null,m:!1,p:c,d:null,s:t,r:n,l1:[],l2:st(!1),u:null}}function Cn(t){const n=c;if(n!==null){t!==void 0&&(n.x=t);const e=n.e;if(e!==null){n.e=null;for(let r=0;r<e.length;r++)ot(e[r])}c=n.p,n.m=!0}return t||{}}function wn(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(W in t)Z(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&W in e&&Z(e)}}}function Z(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t);for(let r in t)try{Z(t[r],n)}catch{}const e=Object.getPrototypeOf(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=Tt(e);for(let s in r){const o=r[s].get;if(o)try{o.call(t)}catch{}}}}}function Fn(t){return bt(t)?xt(t):t}export{Kt as $,wn as A,En as B,T as C,Tn as D,hn as E,yn as F,Dt as G,un as H,et as I,ot as J,wt as K,ht as L,on as M,Ht as N,dn as O,nn as P,ln as Q,Zt as R,W as S,$t as T,Nt as U,Xt as V,ut as W,Ft as X,$ as Y,Qt as Z,Gt as _,Dn as a,zt as a0,Wt as a1,It as a2,cn as a3,rn as a4,sn as a5,Fn as a6,In as a7,P as a8,Sn as a9,mn as aa,On as ab,xt as b,an as c,Jt as d,tn as e,Nn as f,Ut as g,An as h,en as i,st as j,jt as k,Vt as l,fn as m,qt as n,Yt as o,Cn as p,yt as q,K as r,Rt as s,_n as t,pn as u,Bt as v,vn as w,c as x,l as y,Rn as z};
