import{S as i,b as c,s as r,W as d,q as l,X as p,l as b,n as a,j as u}from"./framework.40d14ebd.js";function h(o){let s,_=`<h1 id="adr-006-functions" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#adr-006-functions" aria-hidden="true">#</a> ADR-006: Functions</h1>
<h2 id="introduction" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p class="__vbk__">Implement user defined functions invokable over HTTP within Highway.</p>
<h2 id="abstract" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#abstract" aria-hidden="true">#</a> Abstract</h2>
<p class="__vbk__">The goal of user-defined functions is to allow for custom-defined behavior, defined by users which are accessible via <code class="__vbk__">HTTP</code>.
These functions will all be accessible over a single endpoint, predefined within the highway.</p>
<p class="__vbk__">When a request is sent to a static endpoint, containing the desired name of the invokable function, the function will be then invoked, with a single parameter queried from <code class="__vbk__">ipfs</code> by the given <code class="__vbk__">CID</code> in the declaration of the url.</p>
<h2 id="user-functions" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#user-functions" aria-hidden="true">#</a> User functions</h2>
<p class="__vbk__">A User <code class="__vbk__">Defined Function</code> is repersented by a single <code class="__vbk__">binary</code> file which is assumed to be executable, and corresponding <code class="__vbk__">callback Urls</code> associated with said executable file. said functions are not permitted to return data to the caller directly, but rather the outer managment of the defined function will provide data to the given <code class="__vbk__">urls</code> as <code class="__vbk__">base64 encoded</code> repersentations as to not permit users to modify the system state of any <code class="__vbk__">highway</code> node directly.</p>
<h3 id="function-definition-format" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#function-definition-format" aria-hidden="true">#</a> Function definition format</h3>
<p class="__vbk__">The user's defined function is assumed to be precompiled into binary format. Said Binary is <code class="__vbk__">jailed</code> as to resrtrict privlages on the execution enviorment to the host.</p>
<p class="__vbk__">Currently, the executable options are more appealing as it is easier to sandbox a plain binary into a \u2018jail\u2019 rather than implementing sandboxing around a reflection execution implementation.
Below is a primitive definition for a user-defined function.
Said binary is stored within the highway node's <code class="__vbk__">ipfs</code> storage with the following file contents as a blob of <code class="__vbk__">JSON</code></p>
<div class="language-go ext-go line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">UserFunction </span><span style="color: #ECEFF4">&#123;</span></span>
<span class="line"><span style="color: #D8DEE9FF">    did </span><span style="color: #81A1C1">string</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #616E88">// did from defintion</span></span>
<span class="line"><span style="color: #D8DEE9FF">    file </span><span style="color: #ECEFF4">[]</span><span style="color: #D8DEE9FF">bytes </span><span style="color: #616E88">// file as a byte encoding</span></span>
<span class="line"><span style="color: #D8DEE9FF">    parameters</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #81A1C1">map</span><span style="color: #ECEFF4">[</span><span style="color: #81A1C1">string</span><span style="color: #ECEFF4">]</span><span style="color: #81A1C1">string</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #616E88">// not the value string is the &quot;type&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">&#125;</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br></div></div><blockquote class="__vbk__">
<p class="__vbk__">In the above definition, the total size of the file stored for a user function would be the total bytes of the array and the did string of the owner.
This data would be stored on IPFS incurring the cost of file storage and passing that on to the uploader of the function.</p>
</blockquote>
<p class="__vbk__">Once a function is associated with a name and provided to the highway, a function will then have the association of label \u2192 function.
Each function will be a single relation to the user-given function.
Meaning a function can be resolved via its name <code class="__vbk__">name</code> but a function cannot resolve its name, as the function is not explicitly required to have an associative name that matches its function name.</p>
<div class="language-go ext-go line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">&#123;</span></span>
<span class="line"><span style="color: #D8DEE9FF">    did</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #81A1C1">string</span></span>
<span class="line"><span style="color: #D8DEE9FF">    ref</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> cid</span></span>
<span class="line"><span style="color: #D8DEE9FF">    isActive</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> boolean</span></span>
<span class="line"><span style="color: #ECEFF4">&#125;</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br></div></div><blockquote class="__vbk__">
<p class="__vbk__">The above model will be stored within the chain upon <code class="__vbk__">creation</code> and <code class="__vbk__">update</code>. This chain store will incur a cost on the uploader. Later changing the function to inactive will also incur a cost on chain.</p>
</blockquote>
<p class="__vbk__">The above model is then stored as a file in <code class="__vbk__">IPFS</code> queriable by the returned <code class="__vbk__">CID</code>.</p>
<h2 id="url-schema" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#url-schema" aria-hidden="true">#</a> URL Schema</h2>
<p class="__vbk__">User Defined functions within the Highway will have a single entry point.</p>
<p class="__vbk__"><code class="__vbk__">/sonr/functions/invoke/&#123;version&#125;/&#123;label&#125;</code></p>
<p class="__vbk__">Where <code class="__vbk__">label</code> is defined when the definition of the function is created.</p>
<h3 id="params-to-a-user-defined-function-over-url" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#params-to-a-user-defined-function-over-url" aria-hidden="true">#</a> params to a user defined function over URL</h3>
<p class="__vbk__">callback? (base64 encoding).
cid? (id of the content from a highway node you wish to provide to a function)
the above URL has two params</p>
<table class="__vbk__">
<thead class="__vbk__">
<tr class="__vbk__">
<th class="__vbk__">Name</th>
<th class="__vbk__">Type</th>
<th class="__vbk__">Description</th>
</tr>
</thead>
<tbody class="__vbk__">
<tr class="__vbk__">
<td class="__vbk__">queryCid</td>
<td class="__vbk__">string</td>
<td class="__vbk__">Content ID to be retrieved from file storage (object, blob)</td>
</tr>
<tr class="__vbk__">
<td class="__vbk__">returnData</td>
<td class="__vbk__">string</td>
<td class="__vbk__">A <code class="__vbk__">URL</code> that will be called and given the returned data from a function</td>
</tr>
</tbody>
</table>
<h2 id="function-parameters" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#function-parameters" aria-hidden="true">#</a> Function Parameters</h2>
<p class="__vbk__">Parameters to functions will be nameless and of type <code class="__vbk__">string</code>. the provided data will be deserailized to the described types and given to functions as what they are specified to be in the delceration upon creation. Parameters to functions will be applied in the order as they are provided, content queried by the <code class="__vbk__">CID</code> provided URL when the function is invoked will be the last parameter to the function. The function implementor is responsible for the mapping of the parameters based on the index when implementing.</p>
<h2 id="returning-data-from-a-user-defined-function" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#returning-data-from-a-user-defined-function" aria-hidden="true">#</a> Returning data from a user defined function</h2>
<p class="__vbk__">User defined functions cannot modify the state of <code class="__vbk__">highways</code>, meaning data stored within the network. Instead one or many <code class="__vbk__">callback URLs</code> are specifiable, allowing for data to be sent to said urls through <code class="__vbk__">url encoding</code> data return by any function must be <code class="__vbk__">encodable</code> to <code class="__vbk__">Base64</code> standard or data will not be sent.</p>
<p class="__vbk__">The <code class="__vbk__">callback URLs</code> can be either an external resource outside of the network of highways, or can be another function defined on the highway.</p>
<h2 id="invoking-a-user-defined-function" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#invoking-a-user-defined-function" aria-hidden="true">#</a> Invoking a User Defined Function</h2>
<p class="__vbk__">A function that's invoked should have the following defined within the <code class="__vbk__">body</code> of the <code class="__vbk__">HTTP</code> request</p>
<div class="language-text ext-text line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #d8dee9ff">&#123;
    did string // owner did
    label: string // file as a byte encoding
    cid: string // identifier of the function stored within ipfs.
    parameters: map[string]string
    callbackURLS: string[]
&#125;
</span></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br><span class="line-number __vbk__">6</span><br><span class="line-number __vbk__">7</span><br></div></div><p class="__vbk__">The return value will simply be an empty response body with an <code class="__vbk__">HTTP</code> status.</p>
<p class="__vbk__">When a function is &quot;invoked&quot; we will use one of the following strategies for calulating cost for a given function's invokation.</p>
<table class="__vbk__">
    <tr class="__vbk__">
        <th></th>
        <th class="__vbk__">Description</th>
        <th class="__vbk__">Formula</th>
        <th class="__vbk__">User Pays</th>
        <th class="__vbk__">Highway Runner Gets</th>
        <th class="__vbk__">Function Writer Gets</th>
    </tr>
    <tr class="__vbk__">
        <td class="__vbk__">Static Cost Functions</td>
        <td class="__vbk__">Cost is staticly defined at function creation time. The run time cost is added in addition to the cost paid by the caller</td>
        <td class="__vbk__">total_cost = static_cost + runtime_fees</td>
        <td class="__vbk__">total_cost</td>
        <td class="__vbk__">runtime_fees</td>
        <td class="__vbk__">static_cost</td>
    </tr>
    <tr class="__vbk__">
        <td class="__vbk__">Variable Cost Functions</td>
        <td class="__vbk__">
            Cost is defined when the function is running. There is a max and min cost that can be paid from the caller's wallet predefined in the function definition. The caller will also need to fund a transaction to refund the remainder
            of the gas fees to caller.
        </td>
        <td class="__vbk__">total_cost = variable_cost + runtime_fees + gas_fees</td>
        <td class="__vbk__">total_cost</td>
        <td class="__vbk__">runtime_fees</td>
        <td class="__vbk__">variable_cost</td>
    </tr>
    <tr class="__vbk__">
        <td class="__vbk__">"Free" Functions</td>
        <td class="__vbk__">The function only costs as much as the runtime_fees</td>
        <td class="__vbk__">total_cost = runtime_fees</td>
        <td class="__vbk__">total_cost</td>
        <td class="__vbk__">runtime_fees</td>
        <td class="__vbk__">N/A</td>
    </tr>
</table>
<blockquote class="__vbk__">
<p class="__vbk__">Static and Varible functions are useful when the function needs to make its own interaction with the chain or fund calls within.</p>
</blockquote>
<h2 id="models-and-methods-highway" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#models-and-methods-highway" aria-hidden="true">#</a> Models and Methods (Highway)</h2>
<p class="__vbk__">The following methods will be added to <code class="__vbk__">Highway</code> as a module within <code class="__vbk__">x</code></p>
<h3 id="methods" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#methods" aria-hidden="true">#</a> Methods</h3>
<h4 id="createfunction" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#createfunction" aria-hidden="true">#</a> CreateFunction()</h4>
<p class="__vbk__">Creates a new function with the provided <code class="__vbk__">label</code> and <code class="__vbk__">definition</code> (function converted to <code class="__vbk__">bytes</code>)</p>
<div class="language-go ext-go line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #81A1C1">type</span><span style="color: #D8DEE9FF"> FunctionDefiniton </span><span style="color: #81A1C1">struct</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #ECEFF4">&#123;</span></span>
<span class="line"><span style="color: #D8DEE9FF">	label </span><span style="color: #81A1C1">string</span></span>
<span class="line"><span style="color: #D8DEE9FF">    did </span><span style="color: #81A1C1">string</span></span>
<span class="line"><span style="color: #D8DEE9FF">	definition </span><span style="color: #ECEFF4">[]</span><span style="color: #81A1C1">byte</span></span>
<span class="line"><span style="color: #D8DEE9FF">        parameters</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #81A1C1">map</span><span style="color: #ECEFF4">[</span><span style="color: #81A1C1">string</span><span style="color: #ECEFF4">]</span><span style="color: #81A1C1">type</span></span>
<span class="line"><span style="color: #D8DEE9FF">&#125;</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br><span class="line-number __vbk__">6</span><br></div></div><p class="__vbk__"><strong class="__vbk__">Returns</strong></p>
<div class="language-json ext-json line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">&#123;</span></span>
<span class="line"><span style="color: #D8DEE9FF">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">code</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #D8DEE9">int</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">did</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">cid</span><span style="color: #ECEFF4">&quot;</span><span style="color: #D8DEE9">:</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">&#125;</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br></div></div><h4 id="updatefunction" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#updatefunction" aria-hidden="true">#</a> UpdateFunction()</h4>
<div class="language-go ext-go line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #81A1C1">type</span><span style="color: #D8DEE9FF"> FunctionDefiniton </span><span style="color: #81A1C1">struct</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #ECEFF4">&#123;</span></span>
<span class="line"><span style="color: #D8DEE9FF">	label </span><span style="color: #81A1C1">string</span></span>
<span class="line"><span style="color: #D8DEE9FF">	did </span><span style="color: #81A1C1">string</span></span>
<span class="line"><span style="color: #D8DEE9FF">	definition </span><span style="color: #ECEFF4">[]</span><span style="color: #81A1C1">byte</span></span>
<span class="line"><span style="color: #ECEFF4">&#125;</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br></div></div><blockquote class="__vbk__">
<p class="__vbk__">Updating a function does not remove the previous function defintion, as there could be reliance on said function. Updating a function creates a new instance of an already defined function by requiring a new  version specified in the URL.</p>
</blockquote>
<p class="__vbk__"><strong class="__vbk__">Returns</strong></p>
<div class="language-json ext-json line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">&#123;</span></span>
<span class="line"><span style="color: #D8DEE9FF">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">code</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #D8DEE9">int</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">did</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">cid</span><span style="color: #ECEFF4">&quot;</span><span style="color: #D8DEE9">:</span><span style="color: #D8DEE9FF">&nbsp;</span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">&#125;</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br></div></div><h2 id="cli-commands" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#cli-commands" aria-hidden="true">#</a> CLI Commands</h2>
<p class="__vbk__">The CLI will need a single root level command called <code class="__vbk__">function</code>. function will have the following two sub commands</p>
<table class="__vbk__">
<thead class="__vbk__">
<tr class="__vbk__">
<th class="__vbk__">Name</th>
<th class="__vbk__">params</th>
<th class="__vbk__">Description</th>
</tr>
</thead>
<tbody class="__vbk__">
<tr class="__vbk__">
<td class="__vbk__">add</td>
<td class="__vbk__">&quot;name&quot; &quot;path-to-binary&quot;</td>
<td class="__vbk__">Adds a single function to a defined name</td>
</tr>
<tr class="__vbk__">
<td class="__vbk__">remove</td>
<td class="__vbk__">&quot;name&quot;</td>
<td class="__vbk__">Removes user defined function from the function table</td>
</tr>
</tbody>
</table>
<h2 id="diagrams" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#diagrams" aria-hidden="true">#</a> Diagrams</h2>
<p class="__vbk__"><a href="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fv9E6Om23rm80JROFHVnr31%2FHighway-sdk-user-defined-functions-(non-faas)%3Fnode-id%3D0%253A1" target="_blank" rel="noopener noreferrer" class="__vbk__"><img src="/img/diagrams/user-functions-adr-6.png" alt="Writing encrypted data">
<OutboundLink></OutboundLink></a></p>`,n;return{c(){s=new d(!1),n=l(),this.h()},l(e){s=p(e,!1),n=l(),this.h()},h(){s.a=n},m(e,t){s.m(_,e,t),b(e,n,t)},p:a,i:a,o:a,d(e){e&&u(n),e&&s.d()}}}const f={excerpt:"",headers:[{level:2,title:"Introduction",slug:"introduction",children:[]},{level:2,title:"Abstract",slug:"abstract",children:[]},{level:2,title:"User functions",slug:"user-functions",children:[{level:3,title:"Function definition format",slug:"function-definition-format",children:[]}]},{level:2,title:"URL Schema",slug:"url-schema",children:[{level:3,title:"params to a user defined function over URL",slug:"params-to-a-user-defined-function-over-url",children:[]}]},{level:2,title:"Function Parameters",slug:"function-parameters",children:[]},{level:2,title:"Returning data from a user defined function",slug:"returning-data-from-a-user-defined-function",children:[]},{level:2,title:"Invoking a User Defined Function",slug:"invoking-a-user-defined-function",children:[]},{level:2,title:"Models and Methods (Highway)",slug:"models-and-methods-highway",children:[{level:3,title:"Methods",slug:"methods",children:[]}]},{level:2,title:"CLI Commands",slug:"cli-commands",children:[]},{level:2,title:"Diagrams",slug:"diagrams",children:[]}],title:"6. Invokable Functions",frontmatter:{title:"6. Invokable Functions"},lastUpdated:1661677402471};class k extends i{constructor(s){super(),c(this,s,null,h,r,{})}}export{f as __pageMeta,k as default};
