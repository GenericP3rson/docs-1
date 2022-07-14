import{S as r,b as o,s as _,W as p,q as i,X as b,l as d,n,j as u}from"./framework.40d14ebd.js";function k(l){let e,c=`<h1 id="buckets" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#buckets" aria-hidden="true">#</a> Buckets</h1>
<p class="__vbk__">Similar to Amazon S3 or DigitalOcean Spaces, developers can leverage our decentralized storage module for uploading either application specific assets or user specific assets. While we encourage developers to use our SDK for best results, this storage is S3-compliant.</p>
<p class="__vbk__">The Sonr bucket module is used to record the defined collections of Objects utilized by an Application on the Sonr Network. A bucket can be either public access, private access, or restricted access based on Developer configuration. A bucket is used to help organize similar objects for a given application.</p>
<h2 id="overview" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p class="__vbk__">The record type utilized in the <strong class="__vbk__">Bucket module</strong> is the <code class="__vbk__">WhichIs</code> type. This type provides both an interface to utilize VerifiableCredentials and modify the BucketDoc type definition</p>
<h3 id="bucket-types" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#bucket-types" aria-hidden="true">#</a> Bucket Types</h3>
<ul class="__vbk__">
<li class="__vbk__">
<p class="__vbk__"><strong class="__vbk__">App-specific bucket</strong> -- a bucket created by the developer containing visual assets and other media germane to the App.</p>
</li>
<li class="__vbk__">
<p class="__vbk__"><strong class="__vbk__">User-specific bucket</strong> -- a bucket contrived through user-created data, facilitated by an <strong class="__vbk__">Object</strong> or <strong class="__vbk__">Channel</strong>.</p>
</li>
</ul>
<h2 id="usage" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#usage" aria-hidden="true">#</a> Usage</h2>
<blockquote class="__vbk__">
<p class="__vbk__">Blockchain Methods supplied by Channel Module. Full implementation is still a work in progress.</p>
</blockquote>
<h3 id="createbucket-creates-a-new-bucket-implementation-for-a-given-application" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#createbucket-creates-a-new-bucket-implementation-for-a-given-application" aria-hidden="true">#</a> <code class="__vbk__">CreateBucket()</code> - Creates a new bucket implementation for a given application</h3>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Creator                : The Account Address signing this message</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Session&#39;) Session               : The Session for the authenticated user</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Label                  : Name of the bucket defined by developer</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Description            : Description of the bucket defined by developer</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Kind                   : Functionality of the bucket i.e. (&#39;public&#39;, &#39;private&#39;, &#39;restricted&#39;) *WIP*</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;List&#39;) InitialObjects           : The initial list of objects to add to the bucket</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br><span class="line-number __vbk__">6</span><br></div></div><h3 id="updatebucket-modifies-the-bucket-configuration-and-or-updates-the-bucket-objects" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#updatebucket-modifies-the-bucket-configuration-and-or-updates-the-bucket-objects" aria-hidden="true">#</a> <code class="__vbk__">UpdateBucket()</code> - Modifies the bucket configuration and/or updates the bucket objects</h3>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Creator                : The Account Address signing this message</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Session&#39;) Session               : The Session for the authenticated user</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Label                  : Name of the bucket defined by developer</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Description            : Description of the bucket defined by developer</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;List&#39;) AddedObjects             : The list of objects to add to the bucket</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;List&#39;) RemovedObjects           : The list of objects to remove from the bucket</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br><span class="line-number __vbk__">6</span><br></div></div><h2 id="status-codes" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#status-codes" aria-hidden="true">#</a> Status Codes</h2>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">200 - SUCCESS</span></span>
<span class="line"><span style="color: #D8DEE9FF">300 - MULTIPLE CHOICE</span></span>
<span class="line"><span style="color: #D8DEE9FF">304 - NOT MODIFIED</span></span>
<span class="line"><span style="color: #D8DEE9FF">400 - BAD REQUEST</span></span>
<span class="line"><span style="color: #D8DEE9FF">401 - NOT AUTHORIZED</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br></div></div>`,a;return{c(){e=new p(!1),a=i(),this.h()},l(s){e=b(s,!1),a=i(),this.h()},h(){e.a=a},m(s,t){e.m(c,s,t),d(s,a,t)},p:n,i:n,o:n,d(s){s&&u(a),s&&e.d()}}}const v={excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[{level:3,title:"Bucket Types",slug:"bucket-types",children:[]}]},{level:2,title:"Usage",slug:"usage",children:[{level:3,title:"CreateBucket() - Creates a new bucket implementation for a given application",slug:"createbucket-creates-a-new-bucket-implementation-for-a-given-application",children:[]},{level:3,title:"UpdateBucket() - Modifies the bucket configuration and/or updates the bucket objects",slug:"updatebucket-modifies-the-bucket-configuration-and-or-updates-the-bucket-objects",children:[]}]},{level:2,title:"Status Codes",slug:"status-codes",children:[]}],title:"Overview",frontmatter:{title:"Overview"},lastUpdated:1657820692118};class m extends r{constructor(e){super(),o(this,e,null,k,_,{})}}export{v as __pageMeta,m as default};
