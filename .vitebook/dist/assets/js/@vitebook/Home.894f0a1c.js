import{S as U,b as W,s as X,e as g,d as y,f as E,j as u,k as d,l as m,m as $,M as pe,q as V,n as T,A as M,E as P,G as I,F as O,H as F,a5 as x,a4 as de,I as R,N as ve,W as ke,X as be,z as p,p as C,t as q,u as z,w as b,x as S,v as Q,y as Y,V as N,R as B,T as j,U as G}from"../framework.40d14ebd.js";import{d as $e,l as ge,_ as L,c as ye,a as Ee,B as me}from"../../entry-client.b6b3bd15.js";const Z=$e(ge,r=>r.homePage!==!1?r.homePage??{}:void 0);function ee(r,o,t){const e=r.slice();return e[5]=o[t],e[7]=t,e}function te(r){let o,t,e=[],l=new Map,_=r[0];const n=i=>i[5];for(let i=0;i<_.length;i+=1){let f=ee(r,_,i),a=n(f);l.set(a,e[i]=re(a,f))}return{c(){o=g("div"),t=g("div");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){o=y(i,"DIV",{class:!0});var f=E(o);t=y(f,"DIV",{class:!0});var a=E(t);for(let c=0;c<e.length;c+=1)e[c].l(a);a.forEach(u),f.forEach(u),this.h()},h(){d(t,"class","home__features__container __vbk__ svelte-1mlg9u3"),d(o,"class","home__features __vbk__ svelte-1mlg9u3")},m(i,f){m(i,o,f),$(o,t);for(let a=0;a<e.length;a+=1)e[a].m(t,null)},p(i,f){f&3&&(_=i[0],e=pe(e,f,n,1,i,_,l,t,ve,re,null,ee))},d(i){i&&u(o);for(let f=0;f<e.length;f+=1)e[f].d()}}}function oe(r){let o,t,e=r[5].title+"",l,_=r[1][r[7]]&&le(r);return{c(){o=g("h2"),_&&_.c(),t=P(),l=O(e),this.h()},l(n){o=y(n,"H2",{class:!0});var i=E(o);_&&_.l(i),t=I(i),l=F(i,e),i.forEach(u),this.h()},h(){d(o,"class","home__feature__title __vbk__ svelte-1mlg9u3")},m(n,i){m(n,o,i),_&&_.m(o,null),$(o,t),$(o,l)},p(n,i){n[1][n[7]]?_?_.p(n,i):(_=le(n),_.c(),_.m(o,t)):_&&(_.d(1),_=null),i&1&&e!==(e=n[5].title+"")&&R(l,e)},d(n){n&&u(o),_&&_.d()}}}function le(r){let o,t,e={ctx:r,current:null,token:null,hasCatch:!1,pending:Ae,then:we,catch:Te,value:8};return x(t=r[1][r[7]](),e),{c(){o=g("div"),e.block.c(),this.h()},l(l){o=y(l,"DIV",{class:!0});var _=E(o);e.block.l(_),_.forEach(u),this.h()},h(){d(o,"class","home__feature__icon __vbk__ svelte-1mlg9u3")},m(l,_){m(l,o,_),e.block.m(o,e.anchor=null),e.mount=()=>o,e.anchor=null},p(l,_){r=l,e.ctx=r,_&3&&t!==(t=r[1][r[7]]())&&x(t,e)||de(e,r,_)},d(l){l&&u(o),e.block.d(),e.token=null,e=null}}}function Te(r){return{c:T,l:T,m:T,p:T,d:T}}function we(r){let o,t=(r[8]?r[8].default:"")+"",e;return{c(){o=new ke(!1),e=V(),this.h()},l(l){o=be(l,!1),e=V(),this.h()},h(){o.a=e},m(l,_){o.m(t,l,_),m(l,e,_)},p(l,_){_&3&&t!==(t=(l[8]?l[8].default:"")+"")&&o.p(t)},d(l){l&&u(e),l&&o.d()}}}function Ae(r){return{c:T,l:T,m:T,p:T,d:T}}function _e(r){let o,t=r[5].body+"",e;return{c(){o=g("p"),e=O(t),this.h()},l(l){o=y(l,"P",{class:!0});var _=E(o);e=F(_,t),_.forEach(u),this.h()},h(){d(o,"class","home__feature__body __vbk__ svelte-1mlg9u3")},m(l,_){m(l,o,_),$(o,e)},p(l,_){_&1&&t!==(t=l[5].body+"")&&R(e,t)},d(l){l&&u(o)}}}function re(r,o){let t,e,l,_,n=o[5].title&&oe(o),i=o[5].body&&_e(o);return{key:r,first:null,c(){t=g("section"),e=g("div"),n&&n.c(),l=P(),i&&i.c(),_=P(),this.h()},l(f){t=y(f,"SECTION",{class:!0});var a=E(t);e=y(a,"DIV",{class:!0});var c=E(e);n&&n.l(c),l=I(c),i&&i.l(c),c.forEach(u),_=I(a),a.forEach(u),this.h()},h(){d(e,"class","__vbk__"),d(t,"class","home__feature with-icon __vbk__ svelte-1mlg9u3"),this.first=t},m(f,a){m(f,t,a),$(t,e),n&&n.m(e,null),$(e,l),i&&i.m(e,null),$(t,_)},p(f,a){o=f,o[5].title?n?n.p(o,a):(n=oe(o),n.c(),n.m(e,l)):n&&(n.d(1),n=null),o[5].body?i?i.p(o,a):(i=_e(o),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(f){f&&u(t),n&&n.d(),i&&i.d()}}}function He(r){let o,t=r[2]&&te(r);return{c(){t&&t.c(),o=V()},l(e){t&&t.l(e),o=V()},m(e,l){t&&t.m(e,l),m(e,o,l)},p(e,[l]){e[2]?t?t.p(e,l):(t=te(e),t.c(),t.m(o.parentNode,o)):t&&(t.d(1),t=null)},i:T,o:T,d(e){t&&t.d(e),e&&u(o)}}}function Pe(r,o,t){let e,l,_,n;M(r,Z,f=>t(3,n=f));function i(f){return f.length===0?[]:[async()=>f.length>0&&await L(()=>import("./svg/home-feature.db6cddd4.js"),[]),async()=>f.length>1&&await L(()=>import("./svg/home-feature.db6cddd4.js"),[]),async()=>f.length>2&&await L(()=>import("./svg/home-feature.db6cddd4.js"),[]),async()=>f.length>3&&await L(()=>import("./svg/home-feature.db6cddd4.js"),[]),async()=>f.length>4&&await L(()=>import("./svg/home-feature.db6cddd4.js"),[]),async()=>f.length>5&&await L(()=>import("./svg/home-feature.db6cddd4.js"),[])]}return r.$$.update=()=>{r.$$.dirty&8&&t(2,e=(n?.features?.length??0)>0),r.$$.dirty&8&&t(0,l=n?.features??[]),r.$$.dirty&1&&t(1,_=i(l))},[l,_,e,n]}class Ie extends U{constructor(o){super(),W(this,o,Pe,He,X,{})}}var De=Ie;function se(r){let o,t,e,l;return{c(){o=g("footer"),t=g("div"),e=g("p"),l=O(r[0]),this.h()},l(_){o=y(_,"FOOTER",{class:!0});var n=E(o);t=y(n,"DIV",{class:!0});var i=E(t);e=y(i,"P",{class:!0});var f=E(e);l=F(f,r[0]),f.forEach(u),i.forEach(u),n.forEach(u),this.h()},h(){d(e,"class","home__footer-text __vbk__ svelte-90ohkz"),d(t,"class","home__footer__container __vbk__ svelte-90ohkz"),d(o,"class","home__footer __vbk__ svelte-90ohkz")},m(_,n){m(_,o,n),$(o,t),$(t,e),$(e,l)},p(_,n){n&1&&R(l,_[0])},d(_){_&&u(o)}}}function Ve(r){let o,t=r[0]&&se(r);return{c(){t&&t.c(),o=V()},l(e){t&&t.l(e),o=V()},m(e,l){t&&t.m(e,l),m(e,o,l)},p(e,[l]){e[0]?t?t.p(e,l):(t=se(e),t.c(),t.m(o.parentNode,o)):t&&(t.d(1),t=null)},i:T,o:T,d(e){t&&t.d(e),e&&u(o)}}}function Le(r,o,t){let e,l,_;return M(r,Z,n=>t(1,l=n)),M(r,ye,n=>t(2,_=n)),r.$$.update=()=>{r.$$.dirty&6&&t(0,e=_?.frontmatter.footer??l?.footer)},[e,l,_]}class Oe extends U{constructor(o){super(),W(this,o,Le,Ve,X,{})}}var Fe=Oe;function ie(r){let o,t,e,l,_,n,i,f=r[2]&&ne(r),a=r[1]&&fe(r);return{c(){o=g("header"),t=g("h1"),e=O(r[3]),l=P(),_=g("div"),f&&f.c(),n=P(),a&&a.c(),this.h()},l(c){o=y(c,"HEADER",{class:!0});var v=E(o);t=y(v,"H1",{"v-if":!0,id:!0,class:!0});var k=E(t);e=F(k,r[3]),k.forEach(u),l=I(v),_=y(v,"DIV",{class:!0});var D=E(_);f&&f.l(D),n=I(D),a&&a.l(D),D.forEach(u),v.forEach(u),this.h()},h(){d(t,"v-if","heroText"),d(t,"id","main-title"),d(t,"class","home__hero__title __vbk__ svelte-1499vnq"),d(_,"class","home__hero__actions __vbk__ svelte-1499vnq"),d(o,"class","home__hero __vbk__ svelte-1499vnq")},m(c,v){m(c,o,v),$(o,t),$(t,e),$(o,l),$(o,_),f&&f.m(_,null),$(_,n),a&&a.m(_,null),i=!0},p(c,v){(!i||v&8)&&R(e,c[3]),c[2]?f?(f.p(c,v),v&4&&p(f,1)):(f=ne(c),f.c(),p(f,1),f.m(_,n)):f&&(Q(),b(f,1,1,()=>{f=null}),Y()),c[1]?a?(a.p(c,v),v&2&&p(a,1)):(a=fe(c),a.c(),p(a,1),a.m(_,null)):a&&(Q(),b(a,1,1,()=>{a=null}),Y())},i(c){i||(p(f),p(a),i=!0)},o(c){b(f),b(a),i=!1},d(c){c&&u(o),f&&f.d(),a&&a.d()}}}function ne(r){let o,t,e;return t=new me({props:{type:"primary",href:r[0]?.primaryActionLink??"",$$slots:{default:[Re]},$$scope:{ctx:r}}}),{c(){o=g("div"),C(t.$$.fragment),this.h()},l(l){o=y(l,"DIV",{class:!0});var _=E(o);q(t.$$.fragment,_),_.forEach(u),this.h()},h(){d(o,"class","home__hero__actions__primary __vbk__ svelte-1499vnq")},m(l,_){m(l,o,_),z(t,o,null),e=!0},p(l,_){const n={};_&1&&(n.href=l[0]?.primaryActionLink??""),_&65&&(n.$$scope={dirty:_,ctx:l}),t.$set(n)},i(l){e||(p(t.$$.fragment,l),e=!0)},o(l){b(t.$$.fragment,l),e=!1},d(l){l&&u(o),S(t)}}}function Re(r){let o=r[0]?.primaryActionText+"",t;return{c(){t=O(o)},l(e){t=F(e,o)},m(e,l){m(e,t,l)},p(e,l){l&1&&o!==(o=e[0]?.primaryActionText+"")&&R(t,o)},d(e){e&&u(t)}}}function fe(r){let o,t,e;return t=new me({props:{type:"secondary",href:r[0]?.secondaryActionLink??"",$$slots:{default:[Ce]},$$scope:{ctx:r}}}),{c(){o=g("div"),C(t.$$.fragment),this.h()},l(l){o=y(l,"DIV",{class:!0});var _=E(o);q(t.$$.fragment,_),_.forEach(u),this.h()},h(){d(o,"class","home__hero__actions__secondary __vbk__ svelte-1499vnq")},m(l,_){m(l,o,_),z(t,o,null),e=!0},p(l,_){const n={};_&1&&(n.href=l[0]?.secondaryActionLink??""),_&65&&(n.$$scope={dirty:_,ctx:l}),t.$set(n)},i(l){e||(p(t.$$.fragment,l),e=!0)},o(l){b(t.$$.fragment,l),e=!1},d(l){l&&u(o),S(t)}}}function Ce(r){let o=r[0]?.secondaryActionText+"",t;return{c(){t=O(o)},l(e){t=F(e,o)},m(e,l){m(e,t,l)},p(e,l){l&1&&o!==(o=e[0]?.secondaryActionText+"")&&R(t,o)},d(e){e&&u(t)}}}function qe(r){let o,t,e=r[4]&&ie(r);return{c(){e&&e.c(),o=V()},l(l){e&&e.l(l),o=V()},m(l,_){e&&e.m(l,_),m(l,o,_),t=!0},p(l,[_]){l[4]?e?(e.p(l,_),_&16&&p(e,1)):(e=ie(l),e.c(),p(e,1),e.m(o.parentNode,o)):e&&(Q(),b(e,1,1,()=>{e=null}),Y())},i(l){t||(p(e),t=!0)},o(l){b(e),t=!1},d(l){e&&e.d(l),l&&u(o)}}}function ze(r,o,t){let e,l,_,n,i,f;return M(r,Z,a=>t(0,i=a)),M(r,Ee,a=>t(5,f=a)),r.$$.update=()=>{r.$$.dirty&1&&t(4,e=i?.heroText),r.$$.dirty&33&&t(3,l=i?.heroText??f.title),r.$$.dirty&1&&t(2,_=i?.primaryActionText&&i?.primaryActionLink),r.$$.dirty&1&&t(1,n=i?.secondaryActionText&&i?.secondaryActionLink)},[i,n,_,l,e,f]}class Se extends U{constructor(o){super(),W(this,o,ze,qe,X,{})}}var Me=Se;const Ne=r=>({}),ae=r=>({}),Be=r=>({}),ce=r=>({}),je=r=>({}),ue=r=>({}),Ge=r=>({}),he=r=>({});function Ue(r){let o,t,e,l,_,n,i,f,a,c;const v=r[1]["before-hero"],k=N(v,r,r[0],he);t=new Me({});const D=r[1]["after-hero"],w=N(D,r,r[0],ue);_=new De({});const J=r[1]["after-features"],A=N(J,r,r[0],ce);f=new Fe({});const K=r[1]["after-footer"],H=N(K,r,r[0],ae);return{c(){k&&k.c(),o=P(),C(t.$$.fragment),e=P(),w&&w.c(),l=P(),C(_.$$.fragment),n=P(),A&&A.c(),i=P(),C(f.$$.fragment),a=P(),H&&H.c()},l(s){k&&k.l(s),o=I(s),q(t.$$.fragment,s),e=I(s),w&&w.l(s),l=I(s),q(_.$$.fragment,s),n=I(s),A&&A.l(s),i=I(s),q(f.$$.fragment,s),a=I(s),H&&H.l(s)},m(s,h){k&&k.m(s,h),m(s,o,h),z(t,s,h),m(s,e,h),w&&w.m(s,h),m(s,l,h),z(_,s,h),m(s,n,h),A&&A.m(s,h),m(s,i,h),z(f,s,h),m(s,a,h),H&&H.m(s,h),c=!0},p(s,[h]){k&&k.p&&(!c||h&1)&&B(k,v,s,s[0],c?G(v,s[0],h,Ge):j(s[0]),he),w&&w.p&&(!c||h&1)&&B(w,D,s,s[0],c?G(D,s[0],h,je):j(s[0]),ue),A&&A.p&&(!c||h&1)&&B(A,J,s,s[0],c?G(J,s[0],h,Be):j(s[0]),ce),H&&H.p&&(!c||h&1)&&B(H,K,s,s[0],c?G(K,s[0],h,Ne):j(s[0]),ae)},i(s){c||(p(k,s),p(t.$$.fragment,s),p(w,s),p(_.$$.fragment,s),p(A,s),p(f.$$.fragment,s),p(H,s),c=!0)},o(s){b(k,s),b(t.$$.fragment,s),b(w,s),b(_.$$.fragment,s),b(A,s),b(f.$$.fragment,s),b(H,s),c=!1},d(s){k&&k.d(s),s&&u(o),S(t,s),s&&u(e),w&&w.d(s),s&&u(l),S(_,s),s&&u(n),A&&A.d(s),s&&u(i),S(f,s),s&&u(a),H&&H.d(s)}}}function We(r,o,t){let{$$slots:e={},$$scope:l}=o;return r.$$set=_=>{"$$scope"in _&&t(0,l=_.$$scope)},[l,e]}class Ke extends U{constructor(o){super(),W(this,o,We,Ue,X,{})}}export{Ke as default};