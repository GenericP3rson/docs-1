import{S as z,b as E,s as P,e as c,F as b,E as j,d as m,f as u,H as U,j as f,G as L,k,J as g,l as T,m as i,I as w,q as M,n as v,A as h,o as q}from"../framework.40d14ebd.js";import{l as A,c as C,b as N,q as y}from"../../entry-client.b6b3bd15.js";function S(s){let a,e,t,l,r,n;return{c(){a=c("p"),e=c("span"),t=b(s[2]),l=j(),r=c("span"),n=b(s[0]),this.h()},l(d){a=m(d,"P",{class:!0});var o=u(a);e=m(o,"SPAN",{class:!0});var p=u(e);t=U(p,s[2]),p.forEach(f),l=L(o),r=m(o,"SPAN",{class:!0});var _=u(r);n=U(_,s[0]),_.forEach(f),o.forEach(f),this.h()},h(){k(e,"class","md-footer__last-updated__text __vbk__ svelte-1guz00j"),k(r,"class","md-footer__last-updated__date __vbk__ svelte-1guz00j"),k(a,"class","md-footer__last-updated __vbk__ svelte-1guz00j"),g(a,"dark",s[4])},m(d,o){T(d,a,o),i(a,e),i(e,t),i(a,l),i(a,r),i(r,n)},p(d,o){o&4&&w(t,d[2]),o&1&&w(n,d[0]),o&16&&g(a,"dark",d[4])},d(d){d&&f(a)}}}function D(s){let a,e=s[1]&&s[3]&&S(s);return{c(){e&&e.c(),a=M()},l(t){e&&e.l(t),a=M()},m(t,l){e&&e.m(t,l),T(t,a,l)},p(t,[l]){t[1]&&t[3]?e?e.p(t,l):(e=S(t),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:v,o:v,d(t){e&&e.d(t),t&&f(a)}}}function F(s,a,e){let t,l,r,n,d,o;h(s,A,_=>e(5,n=_)),h(s,C,_=>e(6,d=_)),h(s,N,_=>e(4,o=_));let p="";return q(()=>{e(0,p=new Date(t??0).toLocaleDateString("en-US",{}))}),s.$$.update=()=>{s.$$.dirty&64&&e(1,t=d?.lastUpdated),s.$$.dirty&96&&e(3,l=d?.frontmatter.lastUpdated??n.markdown?.lastUpdated??y.markdown.lastUpdated),s.$$.dirty&32&&e(2,r=n.markdown?.lastUpdatedText??y.markdown.lastUpdatedText)},[p,t,r,l,o,n,d]}class I extends z{constructor(a){super(),E(this,a,F,D,P,{})}}export{I as default};