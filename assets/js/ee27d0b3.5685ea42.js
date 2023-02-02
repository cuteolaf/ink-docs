"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6534],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=s(n),h=r,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(g,o(o({ref:e},u),{},{components:n})):a.createElement(g,o({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[p]="string"==typeof t?t:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1896:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Call Your Contract",slug:"/getting-started/calling-your-contract",hide_title:!0},o=void 0,c={unversionedId:"getting-started/calling",id:"getting-started/calling",title:"Call Your Contract",description:"Now that your contract has been fully deployed, we can start interacting with it! Flipper only has",source:"@site/docs/getting-started/calling.md",sourceDirName:"getting-started",slug:"/getting-started/calling-your-contract",permalink:"/getting-started/calling-your-contract",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/getting-started/calling.md",tags:[],version:"current",frontMatter:{title:"Call Your Contract",slug:"/getting-started/calling-your-contract",hide_title:!0},sidebar:"reference",previous:{title:"Deploy Your Contract",permalink:"/getting-started/deploy-your-contract"},next:{title:"Troubleshooting",permalink:"/getting-started/troubleshooting"}},l={},s=[{value:"RPC calls vs. Transactions",id:"rpc-calls-vs-transactions",level:2},{value:"Dry-run via RPC",id:"dry-run-via-rpc",level:3},{value:"State mutating via submitting a Transaction",id:"state-mutating-via-submitting-a-transaction",level:3},{value:"Using the Contracts UI",id:"using-the-contracts-ui",level:2},{value:"1. <code>get()</code> function",id:"1-get-function",level:3},{value:"2. <code>flip()</code> function",id:"2-flip-function",level:3},{value:"Using <code>cargo-contract</code>",id:"using-cargo-contract",level:2},{value:"1. <code>get()</code> function",id:"1-get-function-1",level:3},{value:"2. <code>flip()</code> function",id:"2-flip-function-1",level:3}],u={toc:s};function p(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that your contract has been fully deployed, we can start interacting with it! Flipper only has\ntwo functions: ",(0,r.kt)("inlineCode",{parentName:"p"},"flip()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get()"),". We will show you what it's like to play with both of them."),(0,r.kt)("h2",{id:"rpc-calls-vs-transactions"},"RPC calls vs. Transactions"),(0,r.kt)("p",null,"There are two ways of calling a contract:"),(0,r.kt)("h3",{id:"dry-run-via-rpc"},"Dry-run via RPC"),(0,r.kt)("p",null,"Remote procedure calls, or RPC methods, are a way for an external program \u2013 for example, a browser\nor front-end application \u2013 to communicate with a Substrate node.\nFor example, you might use an RPC method to read a stored value, submit a transaction, or request\ninformation about the chain a node is connected to."),(0,r.kt)("p",null,"If a user interface displays the value of a contract (e.g. the balance of an account in\nan ERC-20 contract), then this is typically done via RPC. Specifically it is done by\nexecuting a synchronous dry-run of the contract method and returning its result.\nThe following schema depicts this."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contract dry-run via RPC",src:n(5858).Z,width:"1288",height:"534"})),(0,r.kt)("p",null,"RPC calls don't require any tokens, they just require a connection to a node in the\nnetwork. It's important to note that the execution won't result in any state mutations\non the blockchain, it really just is a dry-run."),(0,r.kt)("h3",{id:"state-mutating-via-submitting-a-transaction"},"State mutating via submitting a Transaction"),(0,r.kt)("p",null,"The other method of executing a call to a contract is by submitting a transaction\non-chain. This requires tokens of the network to pay for the cost of the transaction.\nThe transaction will be put in a transaction pool and asynchronously processed.\nThe important implication here is that during submission of the transaction no result\nis available. This is different from an RPC call."),(0,r.kt)("p",null,"The typical pattern for how a client can recognize the result of the contract call is\nto have the contract emit an event and have the client actively listen for such an\nevent. Typically libraries (like ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot-js/api"),") provide API functions to do just that.\nThe important take-away is that contract developers have to make sure that events\nare emitted if they want clients to be able to pick up on them."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contract execution via transaction",src:n(5049).Z,width:"1288",height:"534"})),(0,r.kt)("h2",{id:"using-the-contracts-ui"},"Using the Contracts UI"),(0,r.kt)("h3",{id:"1-get-function"},"1. ",(0,r.kt)("inlineCode",{parentName:"h3"},"get()")," function"),(0,r.kt)("p",null,"We set the initial value of the Flipper contract\n",(0,r.kt)("inlineCode",{parentName:"p"},"value")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when we instantiated the contract. Let's check that this is the case."),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Message to Send"),' section, select the "',(0,r.kt)("strong",{parentName:"p"},"get(): bool"),'" message and accept the default\nvalues for the other options.'),(0,r.kt)("p",null,"Press ",(0,r.kt)("strong",{parentName:"p"},'"Read"')," and confirm that it returns the value ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image of Flipper RPC call with false",src:n(9456).Z,width:"2750",height:"1952"})),(0,r.kt)("h3",{id:"2-flip-function"},"2. ",(0,r.kt)("inlineCode",{parentName:"h3"},"flip()")," function"),(0,r.kt)("p",null,"So let's make the value turn ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," now!"),(0,r.kt)("p",null,"The alternative message to send with the UI is ",(0,r.kt)("inlineCode",{parentName:"p"},"flip()"),". Again, accept the default values for the other options and click ",(0,r.kt)("strong",{parentName:"p"},"Call")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image of a Flipper transaction",src:n(1120).Z,width:"2750",height:"1952"})),(0,r.kt)("p",null,"If the transaction was successful, we should then be able to go back to the ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," function and see our updated storage:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image of Flipper RPC call with true",src:n(8509).Z,width:"2750",height:"1952"})),(0,r.kt)("h2",{id:"using-cargo-contract"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"cargo-contract")),(0,r.kt)("p",null,"Calling a contract can also be done via the command-line! "),(0,r.kt)("h3",{id:"1-get-function-1"},"1. ",(0,r.kt)("inlineCode",{parentName:"h3"},"get()")," function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract build\ncargo contract upload --suri //Alice\n\ncargo contract instantiate --suri //Alice --args true\n# The output of this command will contain the contract address,\n# insert it in the command below.\n\ncargo contract call --contract ... --message get --dry-run --suri //Alice\n")),(0,r.kt)("h3",{id:"2-flip-function-1"},"2. ",(0,r.kt)("inlineCode",{parentName:"h3"},"flip()")," function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract call --contract ... --message flip --suri //Alice\n")))}p.isMDXComponent=!0},5049:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/events-9f1d9c0bb31d3777ff8f425bcaba99c5.png"},9456:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/flipper-false-e8506dfd800a64c0d39ebc50ba2813e5.png"},8509:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/flipper-true-5647327602f44a9e51b710f7ece60c77.png"},5858:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/rpc-14af8881faec3037c133a95208fd4735.png"},1120:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/send-as-transaction-f551eeeeb6eee601202582d3405efc37.png"}}]);