(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2354],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||l;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4340:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=["components"],o={title:"#[ink(payable)]",slug:"/macros-attributes/payable"},c=void 0,s={unversionedId:"macros-attributes/payable",id:"macros-attributes/payable",isDocsHomePage:!1,title:"#[ink(payable)]",description:"Applicable to ink! messages.",source:"@site/docs/macros-attributes/payable.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/payable",permalink:"/ink-docs/macros-attributes/payable",editUrl:"https://github.com/ink-docs/edit/master/docs/macros-attributes/payable.md",version:"current",frontMatter:{title:"#[ink(payable)]",slug:"/macros-attributes/payable"},sidebar:"reference",previous:{title:'#[ink(namespace = "\u2026")]',permalink:"/ink-docs/macros-attributes/namespace"},next:{title:'#[ink(selector = "\u2026")]',permalink:"/ink-docs/macros-attributes/selector"}},p=[{value:"Example",id:"example",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Applicable to ink! messages."),(0,l.kt)("p",null,"Allows receiving value as part of the call of the ink! message.\nink! constructors are implicitly payable, due to the initial endowment which a contract requires."),(0,l.kt)("p",null,"An ink! message by default will reject calls that additional fund the smart contract.\nAuthors of ink! smart contracts can make an ink! message payable by adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"payable"),"\nflag to it. An example below:"),(0,l.kt)("p",null,"Note that ink! constructors are always implicitly payable and thus cannot be flagged\nas such."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(payable)] // You can either specify payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message, payable)] // or specify payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message, payable)]\npub fn pay_me(&self) {\n    let _transferred = self.env().transferred_balance();\n}\n")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/contract-transfer/lib.rs"},(0,l.kt)("inlineCode",{parentName:"a"},"examples/contract-transfer"))," contract for a more extensive example."))}m.isMDXComponent=!0}}]);