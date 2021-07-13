(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8798],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return t?r.createElement(d,o(o({ref:n},l),{},{components:t})):r.createElement(d,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2951:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],u={title:"Reading Values from Storage",slug:"/basics/reading-values"},s=void 0,c={unversionedId:"basics/reading-values",id:"basics/reading-values",isDocsHomePage:!1,title:"Reading Values from Storage",description:"Reading from storage is where the fun begins!",source:"@site/docs/basics/reading-values.md",sourceDirName:"basics",slug:"/basics/reading-values",permalink:"/ink-docs/basics/reading-values",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/reading-values.md",version:"current",frontMatter:{title:"Reading Values from Storage",slug:"/basics/reading-values"},sidebar:"reference",previous:{title:"Storing Values",permalink:"/ink-docs/basics/storing-values"},next:{title:"Mutating Storage Values",permalink:"/ink-docs/basics/mutating-values"}},l=[{value:"Contract Functions",id:"contract-functions",children:[{value:"Public and Private Functions",id:"public-and-private-functions",children:[]}]},{value:"Getting a Value",id:"getting-a-value",children:[]}],p={toc:l};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reading from storage is where the fun begins!"),(0,i.kt)("h2",{id:"contract-functions"},"Contract Functions"),(0,i.kt)("p",null,"As you can see in the contract template, all of your contract functions are part of your contract module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    // Public and Private functions can go here\n}\n")),(0,i.kt)("h3",{id:"public-and-private-functions"},"Public and Private Functions"),(0,i.kt)("p",null,"In Rust, you can make as many implementations as you want. As a stylistic choice, we recommend\nbreaking up your implementation definitions for your private and public functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    /// Public function\n    #[ink(message)]\n    pub fn my_public_function(&self) {\n        /* --snip-- */\n    }\n\n    /// Private function\n    fn my_private_function(&self) {\n        /* --snip-- */\n    }\n\n    /* --snip-- */\n}\n")),(0,i.kt)("p",null,"You can also choose to split things up however is most clear for your project."),(0,i.kt)("p",null,"Note that all public functions must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," attribute."),(0,i.kt)("h2",{id:"getting-a-value"},"Getting a Value"),(0,i.kt)("p",null,"We already showed you how to initialize a storage value in the chapter ",(0,i.kt)("a",{parentName:"p",href:"/basics/storing-values"},"Storing Values"),".\nGetting the value is just as simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.number\n    }\n}\n")),(0,i.kt)("p",null,"In Rust, if the last expression in a function does not have a semicolon, then it will be the return value."))}f.isMDXComponent=!0}}]);