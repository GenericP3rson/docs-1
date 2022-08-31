import{S as l,b as _,s as c,W as d,q as r,X as b,l as h,n as i,j as p}from"./framework.40d14ebd.js";function u(t){let e,n=`<p class="__vbk__">Imagine a world where you can sign up to get a driver's license for the internet. This driver's license would be encrypted on the Sonr network blockchain retaining a record book of all your devices and data quickly guaranteeing you universal validity. Only you will be able to access your record book with your driver\u2019s license.</p>
<p class="__vbk__">When signing into a traditional application you have probably been asked to sign in with Google or Facebook. Your internet driver\u2019s license would be able to sign you in just as easily!</p>
<p class="__vbk__">But beyond sign-in, your driver\u2019s license could directly contact every other driver\u2019s license on earth in real-time allowing you to exchange files, money, messages, contracts, and anything digital with other driver\u2019s licenses. Since your driver\u2019s license would be encrypted on a blockchain your exchanges will become quicker and more secure than typical cloud storage that is prone to hacks.</p>
<p class="__vbk__">Soon you won\u2019t even have to imagine it!\u{1F680}</p>
<h1 id="how-it-works" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#how-it-works" aria-hidden="true">#</a> How it works</h1>
<p class="__vbk__">Sonr decentralizes application databases, making data universally composable and reusable across applications. The network consists of three core parts:  </p>
<ul class="__vbk__">
<li class="__vbk__">
<p class="__vbk__">Highly-scalable, decentralized infrastructure for data availability and consensus, </p>
</li>
<li class="__vbk__">
<p class="__vbk__">Marketplace of community-created data models</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Suite of standard APIs for storing, updating, and retrieving data from those models.</p>
</li>
</ul>
<h1 id="fundamental-building-blocks" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#fundamental-building-blocks" aria-hidden="true">#</a> Fundamental Building Blocks</h1>
<ol class="__vbk__">
<li class="__vbk__">
<p class="__vbk__">Verifiable User Identity</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Realtime Peer-to-Peer Network</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Permission-less Application Hub</p>
</li>
<li class="__vbk__">
<p class="__vbk__">IBC Enabled Blockchain</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Object Storage (Data)</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Blob Storage (Files)</p>
</li>
<li class="__vbk__">
<p class="__vbk__">(Location based discovery) (Device Discovery)</p>
</li>
</ol>
<h1 id="verifiable-user-identity" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#verifiable-user-identity" aria-hidden="true">#</a> Verifiable User Identity</h1>
<p class="__vbk__">Our base DID (or decentralized identifier) follows a syntactic structure of the <strong class="__vbk__">root</strong> (your DID), followed by a <strong class="__vbk__">method</strong> (or in our case, in every case with this SDK, Sonr), then followed by a <strong class="__vbk__">public key</strong></p>
<p class="__vbk__"><img src="https://archbee-image-uploads.s3.amazonaws.com/YigsjtwFFq_eX7dhChoeN/ze9buUbapxPP7S5ROVXn__6e60b2d-screenshot2022-03-10at25108pm.png" alt="DID and channel schema"></p>
<h1 id="realtime-peer-to-peer-network" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#realtime-peer-to-peer-network" aria-hidden="true">#</a> Realtime Peer to Peer Network</h1>
<p class="__vbk__">Our network is build upon <code class="__vbk__">LibP2P</code> a peer to peer communication protocol. This allows Highway Nodes and Motor nodes to transmit data, share files, and locate one another. Each motor node in our network is assigned a <code class="__vbk__">DHT</code> address which allows for unique addressing of each motor in our application network.</p>
<h1 id="ibc-inter-blockhain-communication" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#ibc-inter-blockhain-communication" aria-hidden="true">#</a> IBC (Inter Blockhain Communication)</h1>
<p class="__vbk__">IBC can be implemented by any consensus algorithm that supports cheaply verifiable finality with any state machine that supports vector commitments. IBC defines a set of low-level primitives for authentication, transport, and ordering, and a set of application-level standards for asset &amp; data semantics. Ledgers which support compatible standards can be connected together without any special permissions.</p>
<h1 id="why-sonr" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#why-sonr" aria-hidden="true">#</a> Why Sonr?</h1>
<p class="__vbk__">Sonr's decentralized realtime network provides Web3 developers with a toolset that makes it possible to quickly deploy scalable Web3 applications with verifiable data that can be reused and shared across all Sonr powered applications.</p>
<h3 id="developer-experience" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#developer-experience" aria-hidden="true">#</a> Developer Experience</h3>
<p class="__vbk__">We believe application development should be as straight forward as possible. Sonr's SDK's is an all-in-one solution for developing applications for the Sonr network. We believe in consistency and openness, our libraries are built on open standards.</p>
<h3 id="verifiable-identity" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#verifiable-identity" aria-hidden="true">#</a> Verifiable Identity</h3>
<p class="__vbk__">Each domain registered is backed by a Decentralized Identifier (DID) which is unique on our network for your domain name. This identifier is paired with a public key credential which creates your unique profile. Your <code class="__vbk__">did</code> is written on our block chains ledger. This ledger is open to all and fully auditable.</p>
<h3 id="composable-by-design" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#composable-by-design" aria-hidden="true">#</a> Composable by Design</h3>
<p class="__vbk__">Our protocols are flexible and are capable of wrapping custom protocols, These protocols are extendable, and support merging allowing for reusability and composability.</p>
<h1 id="community" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#community" aria-hidden="true">#</a> Community</h1>
<ul class="__vbk__">
<li class="__vbk__">
<p class="__vbk__">Join the <a href="https://sonr.io/discord" target="_blank" rel="noopener noreferrer" class="__vbk__"><strong class="__vbk__">Discord</strong><OutboundLink></OutboundLink></a> to ask questions and engage with the community</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Follow us on <a href="https://sonr.io/twitter" target="_blank" rel="noopener noreferrer" class="__vbk__"><strong class="__vbk__">Twitter</strong><OutboundLink></OutboundLink></a> for updates</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Read the <a href="https://pulse.sonr.io" target="_blank" rel="noopener noreferrer" class="__vbk__"><strong class="__vbk__">blog</strong><OutboundLink></OutboundLink></a> for news, announcements, and tutorials</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Watch the <a href="https://sonr.io/youtube" target="_blank" rel="noopener noreferrer" class="__vbk__"><strong class="__vbk__">Youtube channel</strong><OutboundLink></OutboundLink></a> for videos and presentations</p>
</li>
<li class="__vbk__">
<p class="__vbk__">Work on the Sonr Project through visiting our <a href="https://sonr.io/jobs" target="_blank" rel="noopener noreferrer" class="__vbk__">open roles<OutboundLink></OutboundLink></a></p>
</li>
</ul>`,s;return{c(){e=new d(!1),s=r(),this.h()},l(a){e=b(a,!1),s=r(),this.h()},h(){e.a=s},m(a,o){e.m(n,a,o),h(a,s,o)},p:i,i,o:i,d(a){a&&p(s),a&&e.d()}}}const v={excerpt:"",headers:[{level:3,title:"Developer Experience",slug:"developer-experience",children:[]},{level:3,title:"Verifiable Identity",slug:"verifiable-identity",children:[]},{level:3,title:"Composable by Design",slug:"composable-by-design",children:[]}],title:"What is Sonr?",frontmatter:{title:"What is Sonr?"},lastUpdated:1661981452211};class m extends l{constructor(e){super(),_(this,e,null,u,c,{})}}export{v as __pageMeta,m as default};
