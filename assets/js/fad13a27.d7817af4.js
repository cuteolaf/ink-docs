(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1291],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,h=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1290:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],c={title:"Environment Functions",slug:"/basics/environment-functions"},l=void 0,s={unversionedId:"basics/env-functions",id:"basics/env-functions",isDocsHomePage:!1,title:"Environment Functions",description:"ink! exposes a number of handy environment functions.",source:"@site/docs/basics/env-functions.md",sourceDirName:"basics",slug:"/basics/environment-functions",permalink:"/ink-docs/basics/environment-functions",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/env-functions.md",version:"current",frontMatter:{title:"Environment Functions",slug:"/basics/environment-functions"},sidebar:"reference",previous:{title:"Contract Testing",permalink:"/ink-docs/basics/contract-testing"},next:{title:"Overview",permalink:"/ink-docs/macros-attributes"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ink! exposes a number of handy environment functions.\nA full overview ",(0,a.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_env/#functions"},"is found here"),"."),(0,a.kt)("p",null,"In an ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"  use ",(0,a.kt)("inlineCode",{parentName:"p"},"Self::env()")," to access those,\nin an ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"self.env()"),".\nSo e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Self::env().caller()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"self.env().caller()"),"."),(0,a.kt)("p",null,"Some handy functions include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_env/fn.caller.html"},(0,a.kt)("inlineCode",{parentName:"a"},"caller()")),": Returns the address of the caller of the executed contract. An example\nof how to utilize this particular call is ",(0,a.kt)("a",{parentName:"li",href:"/datastructures/hashmap#contract-caller"},"found here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_env/fn.account_id.html"},(0,a.kt)("inlineCode",{parentName:"a"},"account_id()")),": Returns the account ID of the executed contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_env/fn.balance.html"},(0,a.kt)("inlineCode",{parentName:"a"},"balance()")),": Returns the balance of the executed contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_env/fn.block_number.html"},(0,a.kt)("inlineCode",{parentName:"a"},"block_number()")),": Returns the current block number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_env/fn.random.html"},(0,a.kt)("inlineCode",{parentName:"a"},"random()")),": Returns a random hash seed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_env/fn.emit_event.html"},(0,a.kt)("inlineCode",{parentName:"a"},"emit_event(\u2026)")),": Emits an event with the given event data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_env/fn.transfer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"transfer(\u2026)")),": Transfers value from the contract to the destination account ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_env/fn.hash_bytes.html"},(0,a.kt)("inlineCode",{parentName:"a"},"hash_bytes(\u2026)")),": Conducts the crypto hash of the given input and stores the result in output."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_env/#functions"},"\u2026and many more"),".")))}m.isMDXComponent=!0}}]);