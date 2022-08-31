import{S as d,b as i,s as l,W as o,q as _,X as h,l as p,n as t,j as b}from"./framework.40d14ebd.js";function k(c){let e,r=`<h1 id="adr-003-buckets" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#adr-003-buckets" aria-hidden="true">#</a> ADR-003: Buckets</h1>
<h2 id="summary" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#summary" aria-hidden="true">#</a> Summary</h2>
<p class="__vbk__">Associate data on the Sonr network together with the addition of a new resource type: buckets.</p>
<h2 id="abstract" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#abstract" aria-hidden="true">#</a> Abstract</h2>
<p class="__vbk__">The canonical storage resource inside the Sonr network is the <strong class="__vbk__">Bucket</strong> - an encrypted, schemaless, storage container.
By using buckets, developers may leverage a secure and private decentralized storage layer for their applications.</p>
<h2 id="objectives" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#objectives" aria-hidden="true">#</a> Objectives</h2>
<ul class="__vbk__">
<li class="__vbk__">Private and secure storage mechanism</li>
<li class="__vbk__">Support Access Control Lists</li>
<li class="__vbk__">Support CRUD operations for buckets and bucket content</li>
<li class="__vbk__">Support revokation of access</li>
</ul>
<h2 id="use-cases" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#use-cases" aria-hidden="true">#</a> Use Cases</h2>
<ul class="__vbk__">
<li class="__vbk__">Store multiple associated files (application assets)</li>
<li class="__vbk__">Store staticly served files</li>
</ul>
<h2 id="concept" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#concept" aria-hidden="true">#</a> Concept</h2>
<p class="__vbk__">Conceptually, buckets behave similarly to a key-value store, where the keys are developer-created and mapped one-to-one with a CID.
The content is encrypted using the shared member's JWKs (JSON Web Keys).</p>
<p class="__vbk__">Creating and managing buckets require updates to the underlying blockchain.
This includes deleting the bucket, adding new resources, or updating permissions.
The bucket model itself is stored in IPFS, but the CID for the model will be stored on-chain; this significantly reduces the usage of on-chain space.</p>
<h2 id="bucket-model" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#bucket-model" aria-hidden="true">#</a> Bucket Model</h2>
<p class="__vbk__">The model for a bucket, which will be stored in IPFS, is as follows.</p>
<div class="language-go ext-go line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #81A1C1">type</span><span style="color: #D8DEE9FF"> Bucket </span><span style="color: #81A1C1">struct</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #ECEFF4">&#123;</span></span>
<span class="line"><span style="color: #D8DEE9FF">    Did </span><span style="color: #81A1C1">string</span></span>
<span class="line"><span style="color: #D8DEE9FF">    Label </span><span style="color: #81A1C1">string</span></span>
<span class="line"><span style="color: #D8DEE9FF">    IsActive </span><span style="color: #81A1C1">bool</span></span>
<span class="line"><span style="color: #D8DEE9FF">    EncryptedJwks </span><span style="color: #81A1C1">map</span><span style="color: #ECEFF4">[</span><span style="color: #D8DEE9FF">CID</span><span style="color: #ECEFF4">]</span><span style="color: #81A1C1">map</span><span style="color: #ECEFF4">[</span><span style="color: #D8DEE9FF">PublicKey</span><span style="color: #ECEFF4">]</span><span style="color: #D8DEE9FF">EncryptedJWK</span></span>
<span class="line"><span style="color: #D8DEE9FF">    Content </span><span style="color: #81A1C1">map</span><span style="color: #ECEFF4">[</span><span style="color: #81A1C1">string</span><span style="color: #ECEFF4">]</span><span style="color: #D8DEE9FF">CID</span></span>
<span class="line"><span style="color: #ECEFF4">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #81A1C1">type</span><span style="color: #D8DEE9FF"> CID </span><span style="color: #81A1C1">string</span></span>
<span class="line"><span style="color: #81A1C1">type</span><span style="color: #D8DEE9FF"> PublicKey </span><span style="color: #81A1C1">string</span></span>
<span class="line"><span style="color: #81A1C1">type</span><span style="color: #D8DEE9FF"> EncryptedJWK </span><span style="color: #ECEFF4">[]</span><span style="color: #81A1C1">byte</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br><span class="line-number __vbk__">6</span><br><span class="line-number __vbk__">7</span><br><span class="line-number __vbk__">8</span><br><span class="line-number __vbk__">9</span><br><span class="line-number __vbk__">10</span><br><span class="line-number __vbk__">11</span><br></div></div><h4 id="did" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#did" aria-hidden="true">#</a> DID</h4>
<p class="__vbk__">A DID which uniquely identifies the bucket.</p>
<h4 id="label" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#label" aria-hidden="true">#</a> Label</h4>
<p class="__vbk__">A label for conveniently referencing the bucket.</p>
<h4 id="isactive" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#isactive" aria-hidden="true">#</a> IsActive</h4>
<p class="__vbk__">Reflects whether or not the bucket is active.
Inactive buckets cannot be modified.</p>
<h4 id="encryptedjwks" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#encryptedjwks" aria-hidden="true">#</a> EncryptedJwks</h4>
<p class="__vbk__">A map that stores the encrypted keys for each party who should have access to the content referenced by a CID.
Each CID entry contains a map of public keys (those of the members being granted access) to the JWK encrypted with that public key (PK). This allows the user to find the JWK they need to decrypt the data found with <code class="__vbk__">CID</code>.</p>
<h4 id="content" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#content" aria-hidden="true">#</a> Content</h4>
<p class="__vbk__">Maps developer-defined keys to the CID for content. Content is posted via the APIs described below and can be found again via this map.</p>
<h2 id="bucket-api" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#bucket-api" aria-hidden="true">#</a> Bucket API</h2>
<p class="__vbk__">At a high-level, the supported Bucket operations are:</p>
<h3 id="createbucket-label" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#createbucket-label" aria-hidden="true">#</a> <code class="__vbk__">CreateBucket(label)</code></h3>
<h4 id="parameters" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#parameters" aria-hidden="true">#</a> Parameters</h4>
<p class="__vbk__"><code class="__vbk__">label (string)</code>
: The label for the bucket. A convenient way to reference the bucket in addition to the generated DID.</p>
<h4 id="description" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#description" aria-hidden="true">#</a> Description</h4>
<p class="__vbk__">Provisions a new bucket with the given label. New buckets will be initialized with a corresponding DID and DID Document. The <code class="__vbk__">content</code> and <code class="__vbk__">encryptedJwks</code> fields will be empty.</p>
<p class="__vbk__">The bucket model itself will be persisted via IPFS, while the DID Document and a record which references the newly created bucket will be stored on-chain.</p>
<blockquote class="__vbk__">
<p class="__vbk__">Data persisted via IPFS will incur a storage cost relative to the size of the data storage.
Additonal costs will be incurred for storing the bucket reference on the chain.</p>
</blockquote>
<h3 id="updatelabel-did-new-label" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#updatelabel-did-new-label" aria-hidden="true">#</a> <code class="__vbk__">UpdateLabel(did, new_label)</code></h3>
<h4 id="parameters-1" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>
<p class="__vbk__"><code class="__vbk__">did (string)</code>
: The DID of the bucket to update.</p>
<p class="__vbk__"><code class="__vbk__">new_label (string)</code>
: The new label for the bucket.</p>
<h4 id="description-1" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#description-1" aria-hidden="true">#</a> Description</h4>
<p class="__vbk__">Updates the label for the given bucket DID. Updating a label requires updating the bucket model in IPFS, which in turn will require an on-chain transaction to update the DID-CID pair.</p>
<blockquote class="__vbk__">
<p class="__vbk__">Data persisted to IPFS as part of an update will incur a storage cost that is linked to the size of the changed files.
IPFS will persist all files, so any files with changes will need to be re-uploaded, as well as the bucket model.
The changes will need to persist to the chain incurring an additional cost.</p>
</blockquote>
<h3 id="addcontent-did-name-encryptedcontent-sharedmembersencryptedkey" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#addcontent-did-name-encryptedcontent-sharedmembersencryptedkey" aria-hidden="true">#</a> <code class="__vbk__">AddContent(did, name, encryptedContent, sharedMembersEncryptedKey)</code></h3>
<h4 id="parameters-2" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>
<p class="__vbk__"><code class="__vbk__">did (string)</code>
: The did of the bucket to add content to.</p>
<p class="__vbk__"><code class="__vbk__">name (string)</code>
: The key used to reference the content being added. This will be addressable via DID URL.</p>
<p class="__vbk__"><code class="__vbk__">encryptedContent (string)</code>
: The content to be added, encrypted with a JWK. The JWK should be one known only to the parties included in <code class="__vbk__">sharedMembersEncryptedKeys</code>.</p>
<p class="__vbk__"><code class="__vbk__">sharedMembersEncryptedKeys (map[string]string)</code>
: A map containing the JWK used for encrypting the content, encrypted with the public key of each party to share with.</p>
<h4 id="description-2" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#description-2" aria-hidden="true">#</a> Description</h4>
<p class="__vbk__">Adds encrypted content to an existing bucket.
A JWK is used to encrypt the content, and that JWK is encrypted once for every user who should have access to it.
This enables data to be securely stored and access to be securely distributed.</p>
<blockquote class="__vbk__">
<p class="__vbk__">This call will require a new DID-CID pair to be added to the chain and as such will incur a cost.
Additionally, this will charge for the cost of the file storage on IPFS</p>
</blockquote>
<h3 id="updatecontent-did-name-encryptedcontent-sharedmembersencryptedkeys" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#updatecontent-did-name-encryptedcontent-sharedmembersencryptedkeys" aria-hidden="true">#</a> <code class="__vbk__">UpdateContent(did, name, encryptedContent, sharedMembersEncryptedKeys)</code></h3>
<h4 id="parameters-3" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4>
<p class="__vbk__"><code class="__vbk__">did (string)</code>
: The did of the bucket to update content on.</p>
<p class="__vbk__"><code class="__vbk__">name (string)</code>
: The key used to reference the content being updated. The updated CID will replace the value found at this name.</p>
<p class="__vbk__"><code class="__vbk__">encryptedContent (string)</code>
: The new content, encrypted with a JWK. The JWK should be one known only to the parties included in <code class="__vbk__">sharedMembersEncryptedKeys</code>.</p>
<p class="__vbk__"><code class="__vbk__">sharedMembersEncryptedKey (map[string]string)</code>
: A map containing the JWK used for encrypting the content, encrypted with the public key of each party to share with.</p>
<h4 id="description-3" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#description-3" aria-hidden="true">#</a> Description</h4>
<p class="__vbk__">Updates a bucket's content at the given name. The CID generated for the updated content will replace the CID found under <code class="__vbk__">name</code> in the content map.
A new entry into the encrypted key map for <code class="__vbk__">sharedMembersEncryptedKey</code>.</p>
<blockquote class="__vbk__">
<p class="__vbk__">This update will require a new DID-CID pair written to the chain.
This change will charge for the size of the new entry on IPFS as well as CID on-chain update</p>
</blockquote>
<h3 id="removecontent-did-name" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#removecontent-did-name" aria-hidden="true">#</a> <code class="__vbk__">RemoveContent(did, name)</code></h3>
<h4 id="parameters-4" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4>
<p class="__vbk__"><code class="__vbk__">did (string)</code>
: The did of the bucket to update content on.</p>
<p class="__vbk__"><code class="__vbk__">name (string)</code>
: The content name.</p>
<h4 id="description-4" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#description-4" aria-hidden="true">#</a> Description</h4>
<p class="__vbk__">Removes content from a bucket.
This does not delete content from IPFS, but it removes the entry in the <code class="__vbk__">content</code> map and <code class="__vbk__">encryptedJwks</code> and map.</p>
<blockquote class="__vbk__">
<p class="__vbk__">Removing content, like updating, requires a single transaction on chain for updating the DID-CID pair for this bucket.</p>
</blockquote>
<h3 id="deactivatebucket-did" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#deactivatebucket-did" aria-hidden="true">#</a> <code class="__vbk__">DeactivateBucket(did)</code></h3>
<h4 id="parameters-5" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4>
<p class="__vbk__"><code class="__vbk__">did (string)</code>
: The bucket's DID.</p>
<h4 id="description-5" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#description-5" aria-hidden="true">#</a> Description</h4>
<p class="__vbk__">Sets the bucket's <code class="__vbk__">IsActive</code> field to false. Requires a transaction on-chain to update the DID-CID pair.</p>
<h3 id="getbucket-did" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#getbucket-did" aria-hidden="true">#</a> <code class="__vbk__">GetBucket(did)</code></h3>
<h4 id="parameters-6" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4>
<p class="__vbk__"><code class="__vbk__">did (string)</code>
: The bucket's DID.</p>
<h4 id="description-6" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#description-6" aria-hidden="true">#</a> Description</h4>
<p class="__vbk__">Returns the bucket model for the given DID. No transactions on-chain are required.</p>
<h3 id="bucketexists-did" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#bucketexists-did" aria-hidden="true">#</a> <code class="__vbk__">BucketExists(did)</code></h3>
<h4 id="parameters-7" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4>
<p class="__vbk__"><code class="__vbk__">did (string)</code>
: The bucket's DID.</p>
<h4 id="description-7" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#description-7" aria-hidden="true">#</a> Description</h4>
<p class="__vbk__">Checks if a bucket exists for a given DID. No transactions on-chain are required.</p>`,s;return{c(){e=new o(!1),s=_(),this.h()},l(a){e=h(a,!1),s=_(),this.h()},h(){e.a=s},m(a,n){e.m(r,a,n),p(a,s,n)},p:t,i:t,o:t,d(a){a&&b(s),a&&e.d()}}}const v={excerpt:"",headers:[{level:2,title:"Summary",slug:"summary",children:[]},{level:2,title:"Abstract",slug:"abstract",children:[]},{level:2,title:"Objectives",slug:"objectives",children:[]},{level:2,title:"Use Cases",slug:"use-cases",children:[]},{level:2,title:"Concept",slug:"concept",children:[]},{level:2,title:"Bucket Model",slug:"bucket-model",children:[]},{level:2,title:"Bucket API",slug:"bucket-api",children:[{level:3,title:"CreateBucket(label)",slug:"createbucket-label",children:[]},{level:3,title:"UpdateLabel(did, new_label)",slug:"updatelabel-did-new-label",children:[]},{level:3,title:"AddContent(did, name, encryptedContent, sharedMembersEncryptedKey)",slug:"addcontent-did-name-encryptedcontent-sharedmembersencryptedkey",children:[]},{level:3,title:"UpdateContent(did, name, encryptedContent, sharedMembersEncryptedKeys)",slug:"updatecontent-did-name-encryptedcontent-sharedmembersencryptedkeys",children:[]},{level:3,title:"RemoveContent(did, name)",slug:"removecontent-did-name",children:[]},{level:3,title:"DeactivateBucket(did)",slug:"deactivatebucket-did",children:[]},{level:3,title:"GetBucket(did)",slug:"getbucket-did",children:[]},{level:3,title:"BucketExists(did)",slug:"bucketexists-did",children:[]}]}],title:"3. User and App Specific Storage",frontmatter:{title:"3. User and App Specific Storage"},lastUpdated:1661981452210};class y extends d{constructor(e){super(),i(this,e,null,k,l,{})}}export{v as __pageMeta,y as default};
