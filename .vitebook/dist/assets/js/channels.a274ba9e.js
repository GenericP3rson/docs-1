import{S as _,b as c,s as o,W as p,q as i,X as d,l as h,n,j as b}from"./framework.40d14ebd.js";function v(t){let e,r=`<h1 id="channels" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#channels" aria-hidden="true">#</a> Channels</h1>
<p class="__vbk__">The Sonr channel module is used to store the records of the active pubsub topics associated with Applications powered by the Sonr Network. Each record contains a <code class="__vbk__">ChannelDoc</code> which describes the Topic configuration and status of the channel. Each channel is required to have a set RegisteredType to pass as a payload with ChannelMessages.</p>
<h2 id="overview" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p class="__vbk__">The record type utilized in the <strong class="__vbk__">Channel module</strong> is the <code class="__vbk__">HowIs</code> type. This type provides both an interface to utilize VerifiableCredentials and modify the ChannelDoc type definition</p>
<h3 id="objects-relation" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#objects-relation" aria-hidden="true">#</a> Objects Relation</h3>
<p class="__vbk__">While channels determine and facilitate the actions passed through an application through realtime data streams, validators - or in our case, <strong class="__vbk__">Objects</strong>, are essential to validating that data stream. Objects also make decisions as to which buckets user created data will be stored in.</p>
<h3 id="examples" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#examples" aria-hidden="true">#</a> Examples</h3>
<ul class="__vbk__">
<li class="__vbk__">
<p class="__vbk__">Realtime document editing -&gt; imagine a decentralized version of Notion!</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Shared device positioning and tracking -&gt; think location services/device mapping.</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Group Chat messaging -&gt; p2p messaging, airdrops, all decentralized.</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Secure direct transactions of data -&gt; decentralized Dropbox or WeTransfer.</p>
</li>
</ul>
<h2 id="usage" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#usage" aria-hidden="true">#</a> Usage</h2>
<blockquote class="__vbk__">
<p class="__vbk__">Blockchain Methods supplied by Channel Module. Full implementation is still a work in progress.</p>
</blockquote>
<h3 id="createchannel-records-a-new-channel-configuration-for-a-specified-application-on-sonr" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#createchannel-records-a-new-channel-configuration-for-a-specified-application-on-sonr" aria-hidden="true">#</a> <code class="__vbk__">CreateChannel()</code> - Records a new Channel configuration for a specified application on Sonr.</h3>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Creator                : The Account Address signing this message</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Session&#39;) Session               : The Session for the authenticated user</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Label                  : Name of the channel defined by developer</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Description            : Description of the channel defined by developer</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;ObjectDoc&#39;) ObjectToRegister    : The registered verified type to be sent in channel messages</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br></div></div><h2 id="status-codes" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#status-codes" aria-hidden="true">#</a> Status Codes</h2>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">200 - SUCCESS</span></span>
<span class="line"><span style="color: #D8DEE9FF">300 - MULTIPLE CHOICE</span></span>
<span class="line"><span style="color: #D8DEE9FF">304 - NOT MODIFIED</span></span>
<span class="line"><span style="color: #D8DEE9FF">400 - BAD REQUEST</span></span>
<span class="line"><span style="color: #D8DEE9FF">401 - NOT AUTHORIZED</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br><span class="line-number __vbk__">6</span><br></div></div>`,a;return{c(){e=new p(!1),a=i(),this.h()},l(s){e=d(s,!1),a=i(),this.h()},h(){e.a=a},m(s,l){e.m(r,s,l),h(s,a,l)},p:n,i:n,o:n,d(s){s&&b(a),s&&e.d()}}}const k={excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[{level:3,title:"Objects Relation",slug:"objects-relation",children:[]},{level:3,title:"Examples",slug:"examples",children:[]}]},{level:2,title:"Usage",slug:"usage",children:[{level:3,title:"CreateChannel() - Records a new Channel configuration for a specified application on Sonr.",slug:"createchannel-records-a-new-channel-configuration-for-a-specified-application-on-sonr",children:[]}]},{level:2,title:"Status Codes",slug:"status-codes",children:[]}],title:"Overview",frontmatter:{title:"Overview"},lastUpdated:1661973586087};class g extends _{constructor(e){super(),c(this,e,null,v,o,{})}}export{k as __pageMeta,g as default};
