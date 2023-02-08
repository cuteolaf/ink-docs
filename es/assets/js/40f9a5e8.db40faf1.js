"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[219],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Storage Layout",slug:"/datastructures/storage-layout",hide_title:!0},i=void 0,s={unversionedId:"datastructures/storage-layout",id:"datastructures/storage-layout",title:"Storage Layout",description:"TODO: Translate to Spanish.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/datastructures/storage-layout.md",sourceDirName:"datastructures",slug:"/datastructures/storage-layout",permalink:"/es/datastructures/storage-layout",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/datastructures/storage-layout.md",tags:[],version:"current",frontMatter:{title:"Storage Layout",slug:"/datastructures/storage-layout",hide_title:!0},sidebar:"reference",previous:{title:"Working with Mapping",permalink:"/es/datastructures/mapping"},next:{title:"Custom Data Structures",permalink:"/es/datastructures/custom-datastructure"}},l={},c=[{value:"Storage Organization",id:"storage-organization",level:2},{value:"Packed vs Non-Packed layout",id:"packed-vs-non-packed-layout",level:2},{value:"Eager Loading vs. Lazy Loading",id:"eager-loading-vs-lazy-loading",level:2},{value:"Manual vs. Automatic Key Generation",id:"manual-vs-automatic-key-generation",level:2},{value:"Considerations",id:"considerations",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/storage.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"storage-layout"},"Storage Layout"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"TODO: Translate to Spanish.")),(0,r.kt)("p",null,"Smart contract authors are given some flexibility in regards on how they want to organize\nthe storage layout of their contracts.\nLet's dive deeper into the concepts behind ink! storage to get a better understanding\nof some of its implications and limitations."),(0,r.kt)("h2",{id:"storage-organization"},"Storage Organization"),(0,r.kt)("p",null,"The following schema depicts the storage which is exposed\nto ink! by the contracts pallet:"),(0,r.kt)("div",{class:"schema"},(0,r.kt)("img",{src:"/img/kv.svg",alt:"Storage Organization: Layout"})),(0,r.kt)("p",null,"Storage data is always encoded with the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/scale-codec/"},(0,r.kt)("inlineCode",{parentName:"a"},"SCALE"))," codec.\nThe storage API operates by storing and loading entries into and from a single storages\ncells, where each storage cell is accessed under its own dedicated storage key. To some\nextent, the storage API works similar to a traditional key-value database."),(0,r.kt)("h2",{id:"packed-vs-non-packed-layout"},"Packed vs Non-Packed layout"),(0,r.kt)("p",null,"Types that can be stored entirely under a single storage cell are considered\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0-rc/ink_storage_traits/trait.Packed.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Packed")),".\nBy default, ink! tries to store all storage struct fields under a single storage cell.\nConsequentially, with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," storage layout, any message interacting with the contract\nstorage will always need to operate on the entire contract storage struct."),(0,r.kt)("p",null,"For example, if we have a somewhat small contract storage struct consisting of only a few\ntiny fields, pulling everything from the storage inside every message is not\nproblematic. It may even be advantageous - especially if we expect most messages to\ninteract with most of the storage fields."),(0,r.kt)("p",null,"On the other hand, this can get problematic if we're storing a large ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::prelude::vec::Vec"),"\nin the contract storage but provide messages that do not need to read and write from this\n",(0,r.kt)("inlineCode",{parentName:"p"},"Vec"),". In that scenario, each and every contract message bears runtime overhead by dealing\nwith that ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec"),", regardless whether they access it or not. This results in extra gas costs.\nTo solve this problem we need to turn our storage into a non-packed layout somehow."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If any type exhibiting ",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," layout gets large enough (an ever growing ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," might be\na prime candidate for this), it will break your contract.\nThis is because for encoding and decoding storage items, there is a buffer with only limited\ncapacity (around 16KB in the default configuration) available. This means any contract\ntrying to decode more than that will trap! If you are unsure about the potential size a\ndatastructure might get, consider using an ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),", which can store an arbitrary\nnumber of elements, instead.")),(0,r.kt)("h2",{id:"eager-loading-vs-lazy-loading"},"Eager Loading vs. Lazy Loading"),(0,r.kt)("p",null,"ink! provides means of breaking the storage up into smaller pieces, which can be loaded\non demand, with the\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink/storage/struct.Lazy.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Lazy"))," primitive.\nWrapping any storage field inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"Lazy")," struct makes the storage\nstruct in which that field appears also\nnon-",(0,r.kt)("inlineCode",{parentName:"p"},"Packed"),", preventing it from being eagerly loaded during arbitrary storage operations."),(0,r.kt)("p",null,"The following example demonstrates how we can solve the problem introduced in the above\nsection. You'll notice that for the lazily loaded storage field, we now work with getters\nand setters to access and modify the underlying storage value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[ink::contract]\nmod mycontract {\n    use ink::prelude::vec::Vec;\n    use ink::storage::Lazy;\n\n    #[derive(Default)]\n    #[ink(storage)]\n    pub struct MyContract {\n        tiny_value: Balance,\n        /// This vector might get large and expensive to work with.\n        /// We want to enforce a non-`Packed` storage layout.\n        large_vec: Lazy<Vec<Balance>>,\n    }\n\n    impl MyContract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self::default()\n        }\n\n        /// Because `large_vec` is loaded lazily, this message is always cheap.\n        #[ink(message)]\n        pub fn get_balance(&self) -> Balance {\n            self.tiny_value\n        }\n\n        /// Lazy fields like `large_vec` provide `get()` and `set()` storage operators.\n        #[ink(message)]\n        pub fn add_balance(&mut self, value: Balance) {\n            let mut balances = self.large_vec.get_or_default();\n            balances.push(value);\n            self.large_vec.set(&balances);\n        }\n    }\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"ink::prelude::vec::Vec"),"'s are always loaded in their entirety. This is because all elements\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::prelude::vec::Vec")," live under a single storage key. Wrapping the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ink::prelude::vec::Vec")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"Lazy"),", like the\nprovided example above does, has no influence on its inner layout. If you are dealing with\nlarge or sparse arrays on contract storage, consider using a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," instead.")),(0,r.kt)("h2",{id:"manual-vs-automatic-key-generation"},"Manual vs. Automatic Key Generation"),(0,r.kt)("p",null,"By default, keys are calculated automatically for you, thanks to the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0-rc/ink_storage_traits/struct.AutoKey.html"},(0,r.kt)("inlineCode",{parentName:"a"},"AutoKey")),"\nprimitive. They'll be generated at compile time and ruled out for conflicts.\nHowever, for non-",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," types like ",(0,r.kt)("inlineCode",{parentName:"p"},"Lazy")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),", the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0-rc/ink_storage_traits/struct.ManualKey.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ManualKey")),"\nprimitive allows manual control over the storage key of a field like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    /// The storage key for this field is always `0x0000007f`\n    inner: Lazy<bool, ManualKey<127>>,\n}\n")),(0,r.kt)("p",null,"This may be advantageous: Your storage key will always stay the same, regardless of\nthe version of your contract or ink! itself (note that the key calculation algorithm may\nchange with future ink! versions)."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"ManualKey")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoKey")," might be especially desirable for upgradable\ncontracts, as using ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoKey")," might result in a different storage key for the same field\nin a newer version of the contract. This may break your contract after an upgrade \ud83d\ude31!")),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"It might be worthwhile to think about the desired storage layout of your contract. While\nusing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," layout will keep your contracts overall code size smaller, it can cause\nunnecessarily high gas costs. Thus we consider it a good practice to break up large\nor complex storage layouts into reasonably sized distinct storage cells."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"s are always non-",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," and loaded lazily, one key-value pair at the time.")))}u.isMDXComponent=!0}}]);