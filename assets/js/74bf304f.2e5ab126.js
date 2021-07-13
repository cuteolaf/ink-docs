(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4741],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7750:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={title:"Overview",slug:"/examples"},c=void 0,p={unversionedId:"examples/overview",id:"examples/overview",isDocsHomePage:!1,title:"Overview",description:"In our examples folder you find a number of examples written in ink!.",source:"@site/docs/examples/overview.md",sourceDirName:"examples",slug:"/examples",permalink:"/ink-docs/examples",editUrl:"https://github.com/ink-docs/edit/master/docs/examples/overview.md",version:"current",frontMatter:{title:"Overview",slug:"/examples"},sidebar:"reference",previous:{title:"Custom Datastructures",permalink:"/ink-docs/datastructures/custom-datastructure"},next:{title:"Overview",permalink:"/ink-docs/cargo-contract-cli"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In our ",(0,o.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples"},"examples folder")," you find a number of examples written in ink!."),(0,o.kt)("p",null,"Some of the most interesting ones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delegator")," \u2012 Implements cross-contract calling."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trait-erc20")," \u2012 Defines a trait for ",(0,o.kt)("inlineCode",{parentName:"li"},"Erc20")," contracts and implements it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"erc721")," \u2012 An exemplary implementation of ",(0,o.kt)("inlineCode",{parentName:"li"},"Erc721")," NFT tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dns")," \u2012  A simple ",(0,o.kt)("inlineCode",{parentName:"li"},"DomainNameService")," smart contract."),(0,o.kt)("li",{parentName:"ul"},"\u2026and more, just rummage through the folder \ud83d\ude43.")),(0,o.kt)("p",null,"To build a single example navigate to the root of the example and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract build\n")),(0,o.kt)("p",null,"As a result you'll get a file ",(0,o.kt)("inlineCode",{parentName:"p"},"target/flipper.wasm")," file, a ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.json")," file and a ",(0,o.kt)("inlineCode",{parentName:"p"},"<contract-name>.contract")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"target/")," folder of your contract.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},".contract")," file combines the Wasm and metadata into one file and needs to be used when deploying the contract."),(0,o.kt)("p",null,"For further information, please have a look at the ",(0,o.kt)("a",{parentName:"p",href:"#play-with-it"},"Play with It")," section or our ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/substrate-contracts-workshop/"},"smart contracts workshop"),"."))}m.isMDXComponent=!0}}]);