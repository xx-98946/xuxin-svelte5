import{B as J,q as Y,D as w,E as K,F as ee,R as y,c as z,T as j,V as M,m as ae,j as F,W as re,X as se,Y as te,Z as V,k as le,S as ne,_ as fe,H as ie,G as ue,M as Q,$ as ve,a0 as _e,J as oe,f as he,a1 as pe}from"./runtime.DVrlIcN3.js";import{e as U,h as c,d as R,s as H,b as k,j as me,m as de}from"./disclose-version.BHL-t9ee.js";var N=-1,Z=-2;let D=null;function O(e,a,r){for(var s=[],t=e.length,i=0;i<t;i++)re(e[i],s,!0);if(e.length>0&&s.length===0&&a!==null){var f=a.parentNode;f.textContent="",f.append(a)}se(s,()=>{for(var v=0;v<t;v++)te(e[v]);r!==void 0&&r()})}function $(e,a,r,s,t,i,f){var v={flags:a,items:[]},n=(a&V)!==0;if(n){var o=e;e=c?R(o.firstChild):o.appendChild(U())}var p=null;J(()=>{var m=r(),_=Y(m)?m:m==null?[]:Array.from(m),u=s===null?_:_.map(s),l=_.length,A=v.flags;A&M&&!le(_)&&!(ne in _)&&(A^=M,A&fe&&!(A&y)&&(A^=y));let E=!1;if(c){var I=e.data===ie;I!==(l===0)&&(ue(k),H(!1),E=!0)}if(c){for(var T=[],d=k[0],h=0;h<l;h++){if(d.nodeType!==8||d.data!==Q){E=!0,H(!1);break}d=R(d),T[h]=b(d,_[h],u==null?void 0:u[h],h,t,A),d=d.nextSibling}if(l>0)for(;d!==e;){var g=d.nextSibling;d.remove(),d=g}v.items=T}c||f(_,v,e,t,A,u),i!==null&&(l===0?p?w(p):p=K(()=>i(e)):p!==null&&ee(p,()=>{p=null})),E&&H(!0)})}function we(e,a,r,s,t,i=null){$(e,a,r,s,t,i,Ee)}function ye(e,a,r,s,t=null){$(e,a,r,null,s,t,Ae)}function Ae(e,a,r,s,t){for(var i=a.items,f=i.length,v=e.length,n=Math.min(f,v),o=Array(v),p,m,_=0;_<n;_+=1)m=e[_],p=i[_],o[_]=p,S(p,m,_,t),w(p.e);if(v>f){for(;_<v;_+=1)m=e[_],p=b(r,m,null,_,s,t),o[_]=p;a.items=o}else if(f>v){var u=[];for(_=v;_<f;_+=1)u.push(i[_].e);var l=t&V&&v===0?r:null;O(u,l,()=>{a.items.length=v})}}function Ee(e,a,r,s,t,i){var B,W,X;for(var f=a.items,v=f.length,n=e.length,o=Array(n),p=(t&pe)!==0,m=(t&(y|j))!==0,_=(t&V)!==0,u=0,l,A=[],E=[];v>0&&n>0&&f[v-1].k===i[n-1];)l=o[--n]=f[--v],r=L(l),w(l.e),m&&S(l,e[n],n,t),p&&((B=l.a)==null||B.measure(),E.push(l));for(;u<v&&u<n&&f[u].k===i[u];)l=o[u]=f[u],w(l.e),m&&S(l,e[u],u,t),p&&((W=l.a)==null||W.measure(),E.push(l)),u+=1;if(u===v)for(;u<n;)l=b(r,e[u],i[u],u,s,t),o[u++]=l;else if(u===n)for(;u<v;)A.push(f[u++].e);else{var I=!1,T=new Int32Array(n-u),d=new Map,h,g,C;for(h=u;h<n;h+=1)T[h-u]=N,ve(d,i[h],h);if(p)for(h=0;h<f.length;h+=1)l=f[h],d.has(l.k)&&((X=l.a)==null||X.measure(),E.push(l));for(h=u;h<v;h+=1)l=f[h],g=_e(d,l.k),w(l.e),g===void 0?A.push(l.e):(I=!0,T[g-u]=h,o[g]=l,p&&E.push(l));for(I?ce(T):_&&A.length===f.length&&(O(A,r),A=[]);n-- >u;){g=T[n-u];var x=g===N;x?(C!==void 0&&(r=L(C)),l=b(r,e[n],i[n],n,s,t)):(l=o[n],m&&S(l,e[n],n,t),I&&g!==Z&&(C!==void 0&&(r=L(C)),ge(l.e.dom,r))),C=o[n]=l}}E.length>0&&oe(()=>{he(()=>{var q;for(l of E)(q=l.a)==null||q.apply()})});var P=_&&o.length===0?r:null;O(A,P,()=>{a.items=o})}function ce(e){for(var a=e.length,r=new Int32Array(a),s=new Int32Array(a),t=0,i=0,f,v,n,o;e[i]===N;++i);for(s[0]=i++;i<a;++i)if(v=e[i],v!==N)if(f=s[t],e[f]<v)r[i]=f,s[++t]=i;else{for(n=0,o=t;n<o;)f=n+o>>1,e[s[f]]<v?n=f+1:o=f;v<e[s[n]]&&(n>0&&(r[i]=s[n-1]),s[n]=i)}for(f=s[t];t-->=0;)e[f]=Z,f=r[f]}function L(e){var a=e.e.dom;return Y(a)?a[0]:a}function S(e,a,r,s){s&y&&z(e.v,a),s&j?z(e.i,r):e.i=r}function b(e,a,r,s,t,i){var f=D;try{var v=(i&y)!==0,n=(i&M)===0,o=v?n?ae(a):F(a):a,p=i&j?F(s):s,m={i:p,v:o,k:r,a:null,e:null};return D=m,m.e=K(()=>t(e,o,p)),m}finally{D=f}}function ge(e,a){if(Y(e))for(var r=0;r<e.length;r++)a.before(e[r]);else a.before(e)}function Se(e){let a=null,r=c;var s;if(c){a=k;let t=document.head.firstChild;for(;t.nodeType!==8||t.data!==Q;)t=t.nextSibling;t=R(t)}else s=document.head.appendChild(U());try{J(()=>e(s))}finally{r&&me(a)}}function Ne(e){c&&(G(e,"value",null),G(e,"checked",null))}function G(e,a,r){r=r==null?null:r+"";var s=e.__attributes??(e.__attributes={});c&&(s[a]=e.getAttribute(a),a==="src"||a==="href"||a==="srcset")||s[a]!==(s[a]=r)&&(r===null?e.removeAttribute(a):e.setAttribute(a,r))}function be(e,a){var r=e.__className,s=Te(a);c&&e.className===s?e.__className=s:(r!==s||c&&e.className!==s)&&(a==null?e.removeAttribute("class"):de(e,s),e.__className=s)}function Te(e){return e??""}function He(e,a,r){r?e.classList.add(a):e.classList.remove(a)}export{be as a,we as b,ye as e,Se as h,Ne as r,G as s,He as t};
