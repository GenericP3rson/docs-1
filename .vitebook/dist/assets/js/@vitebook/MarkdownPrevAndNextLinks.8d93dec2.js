import{S as z,b as j,s as B,e as c,E,d as k,f as m,j as p,G as P,k as u,l as A,m as v,F as b,H as L,I as g,q as T,n as N,A as S}from"../framework.40d14ebd.js";import{t as F,d as C,v as G,c as H,l as D,x as O,y as U,w,q as I}from"../../entry-client.b6b3bd15.js";function V(s){return s.reduce((e,t)=>(F(t)?e=[...e,...V(t.children)]:e.push({text:t.text,link:t.link}),e),[])}const J=C(U,s=>O(s)?V(s):[]);function K(){return C([G,H,D,J],([s,e,t,a])=>{if(!s)return{next:null,prev:null,hasLinks:!1};const r=a.findIndex(d=>d.link===s.route);function n(){return t.markdown?.nextLink!==!1&&e?.frontmatter.nextLink!==!1&&r>-1&&r<a.length-1?a[r+1]:null}function l(){return t.markdown?.prevLink!==!1&&e?.frontmatter.prevLink!==!1&&r>0?a[r-1]:null}const i=n(),_=l();return{next:i,prev:_,hasLinks:!!i||!!_}})}function y(s){let e,t,a,r,n=s[2].prev&&M(s),l=s[2].next&&q(s);return{c(){e=c("div"),t=c("div"),n&&n.c(),a=E(),r=c("div"),l&&l.c(),this.h()},l(i){e=k(i,"DIV",{class:!0});var _=m(e);t=k(_,"DIV",{class:!0});var d=m(t);n&&n.l(d),d.forEach(p),a=P(_),r=k(_,"DIV",{class:!0});var o=m(r);l&&l.l(o),o.forEach(p),_.forEach(p),this.h()},h(){u(t,"class","md-footer__pagination-nav-item prev __vbk__ svelte-3l6r00"),u(r,"class","md-footer__pagination-nav-item next __vbk__ svelte-3l6r00"),u(e,"class","md-footer__pagination-nav __vbk__ svelte-3l6r00")},m(i,_){A(i,e,_),v(e,t),n&&n.m(t,null),v(e,a),v(e,r),l&&l.m(r,null)},p(i,_){i[2].prev?n?n.p(i,_):(n=M(i),n.c(),n.m(t,null)):n&&(n.d(1),n=null),i[2].next?l?l.p(i,_):(l=q(i),l.c(),l.m(r,null)):l&&(l.d(1),l=null)},d(i){i&&p(e),n&&n.d(),l&&l.d()}}}function M(s){let e,t,a,r,n,l,i=s[2].prev.text+"",_,d;return{c(){e=c("a"),t=c("span"),a=b(s[1]),r=E(),n=c("span"),l=b("\xAB "),_=b(i),this.h()},l(o){e=k(o,"A",{href:!0,class:!0});var f=m(e);t=k(f,"SPAN",{class:!0});var x=m(t);a=L(x,s[1]),x.forEach(p),r=P(f),n=k(f,"SPAN",{class:!0});var h=m(n);l=L(h,"\xAB "),_=L(h,i),h.forEach(p),f.forEach(p),this.h()},h(){u(t,"class","md-footer__pagination-nav-item__title __vbk__ svelte-3l6r00"),u(n,"class","md-footer__pagination-nav-item__text __vbk__ svelte-3l6r00"),u(e,"href",d=w(s[2].prev.link)),u(e,"class","md-footer__pagination-nav-item__link __vbk__ svelte-3l6r00")},m(o,f){A(o,e,f),v(e,t),v(t,a),v(e,r),v(e,n),v(n,l),v(n,_)},p(o,f){f&2&&g(a,o[1]),f&4&&i!==(i=o[2].prev.text+"")&&g(_,i),f&4&&d!==(d=w(o[2].prev.link))&&u(e,"href",d)},d(o){o&&p(e)}}}function q(s){let e,t,a,r,n,l=s[2].next.text+"",i,_,d;return{c(){e=c("a"),t=c("span"),a=b(s[0]),r=E(),n=c("span"),i=b(l),_=b(" \xBB"),this.h()},l(o){e=k(o,"A",{href:!0,class:!0});var f=m(e);t=k(f,"SPAN",{class:!0});var x=m(t);a=L(x,s[0]),x.forEach(p),r=P(f),n=k(f,"SPAN",{class:!0});var h=m(n);i=L(h,l),_=L(h," \xBB"),h.forEach(p),f.forEach(p),this.h()},h(){u(t,"class","md-footer__pagination-nav-item__title __vbk__ svelte-3l6r00"),u(n,"class","md-footer__pagination-nav-item__text __vbk__ svelte-3l6r00"),u(e,"href",d=w(s[2].next.link)),u(e,"class","md-footer__pagination-nav-item__link __vbk__ svelte-3l6r00")},m(o,f){A(o,e,f),v(e,t),v(t,a),v(e,r),v(e,n),v(n,i),v(n,_)},p(o,f){f&1&&g(a,o[0]),f&4&&l!==(l=o[2].next.text+"")&&g(i,l),f&4&&d!==(d=w(o[2].next.link))&&u(e,"href",d)},d(o){o&&p(e)}}}function Q(s){let e,t=s[2].hasLinks&&y(s);return{c(){t&&t.c(),e=T()},l(a){t&&t.l(a),e=T()},m(a,r){t&&t.m(a,r),A(a,e,r)},p(a,[r]){a[2].hasLinks?t?t.p(a,r):(t=y(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:N,o:N,d(a){t&&t.d(a),a&&p(e)}}}function R(s,e,t){let a,r,n,l;S(s,D,_=>t(4,n=_));const i=K();return S(s,i,_=>t(2,l=_)),s.$$.update=()=>{s.$$.dirty&16&&t(1,a=n.markdown?.prevLinkText??I.markdown.prevLinkText),s.$$.dirty&16&&t(0,r=n.markdown?.nextLinkText??I.markdown.nextLinkText)},[r,a,l,i,n]}class Y extends z{constructor(e){super(),j(this,e,R,Q,B,{})}}export{Y as default};