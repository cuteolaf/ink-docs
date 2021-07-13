(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5318],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4991:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],s={title:"Spread vs. Packed",slug:"/datastructures/spread-packed-layout"},l=void 0,c={unversionedId:"datastructures/spread-packed",id:"datastructures/spread-packed",isDocsHomePage:!1,title:"Spread vs. Packed",description:"Storage Organization",source:"@site/docs/datastructures/spread-packed.md",sourceDirName:"datastructures",slug:"/datastructures/spread-packed-layout",permalink:"/ink-docs/datastructures/spread-packed-layout",editUrl:"https://github.com/ink-docs/edit/master/docs/datastructures/spread-packed.md",version:"current",frontMatter:{title:"Spread vs. Packed",slug:"/datastructures/spread-packed-layout"},sidebar:"reference",previous:{title:"Working with Datastructures",permalink:"/ink-docs/datastructures/hashmap"},next:{title:"Opt out of Storage",permalink:"/ink-docs/datastructures/opting-out"}},u=[{value:"Storage Organization",id:"storage-organization",children:[]},{value:"Default: Spreading Mode",id:"default-spreading-mode",children:[]},{value:"Packing Storage",id:"packing-storage",children:[]},{value:"Spreading Array Cells",id:"spreading-array-cells",children:[]}],d={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"storage-organization"},"Storage Organization"),(0,o.kt)("p",null,"The following schema depicts the storage which is exposed\nto ink! by the contracts pallet:"),(0,o.kt)("div",{class:"schema"},(0,o.kt)("img",{src:"../img/kv.svg",alt:"Storage Organization: Layout"})),(0,o.kt)("p",null,"Storing or loading complex data structures to and from contract storage can be done in many different ways. You could store all information into a single storage cell or you could try to store all information into as many different cells as possible. Both strategies have pros and cons under different conditions."),(0,o.kt)("p",null,"For example it might be a very good idea to store all the information under the same cell if all the information is very compact. For example when we are dealing with a byte vector that is expected to never be larger than approx a thousand elements it would probably be more efficient if we store all those thousand bytes in the same cell and especially if we often access many of those (or all) in our contract messages."),(0,o.kt)("p",null,"On the other hand spreading information across as many cells as possible might be much more efficient if we are dealing with big data structures, a lot of information that is not compact, or when messages that operate on the data always only need a small fraction of the whole data.\nAn example for this use case is if you have a vector of user accounts where each account stores potentially a lot of information, e.g. a 32-byte hash etc and where our messages only every operate on only a few of those at a time."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate provides the user full control over the strategy or a mix of these two root strategies through some fundamental abstractions that we are briefly presenting to you."),(0,o.kt)("h3",{id:"default-spreading-mode"},"Default: Spreading Mode"),(0,o.kt)("p",null,"By default ink! spreads information to as many cells as possible. For example if you have the following ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct every field will live in its own single storage cell. Note that for ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," all 32 bytes will share the same cell!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct Spreaded {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n    c: [u8; 32],\n}\n")),(0,o.kt)("p",null,"The following schema depicts the storage layout for a vector with three elements,\npersisted to storage in a spreaded layout."),(0,o.kt)("div",{class:"schema"},(0,o.kt)("img",{src:"../img/spread.svg",alt:"Storage Organization: Spreading"})),(0,o.kt)("h3",{id:"packing-storage"},"Packing Storage"),(0,o.kt)("p",null,"We can alter this behaviour by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_storage::Pack")," abstraction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Spreaded {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n    c: [u8; 32],\n}\n\n#[ink(storage)]\npub struct Packed {\n    packed: ink_storage::Pack<Spreaded>,\n}\n")),(0,o.kt)("p",null,"Now all fields of ",(0,o.kt)("inlineCode",{parentName:"p"},"Spreaded")," will share the same storage cell. This means whenever one of them is stored to or loaded from the contract storage, all of them are stored or loaded. A user has to choose wisely what mode of operation is more suitable for their contract."),(0,o.kt)("p",null,"These abstractions can be combined in various ways, yielding full control to the users. For example, in the following only ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," share a common storage cell while ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," lives in its own:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Spreaded {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n}\n\n#[ink(storage)]\npub struct Packed {\n    packed: ink_storage::Pack<Spreaded>,\n    c: [u8; 32],\n}\n")),(0,o.kt)("p",null,"The following schema depicts the spreaded vector from the previous\nsection in a packed layout."),(0,o.kt)("div",{class:"schema"},(0,o.kt)("img",{src:"../img/packed.svg",alt:"Storage Organization: Packing"})),(0,o.kt)("h3",{id:"spreading-array-cells"},"Spreading Array Cells"),(0,o.kt)("p",null,"If we prefer to store all bytes of ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," into their own storage cell we can make use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SmallVec")," data structure. The ",(0,o.kt)("inlineCode",{parentName:"p"},"SmallVec")," is a high-level data structure that allows to efficiently organize a fixed number of elements similar to a Rust array. However, unlike a Rust array it acts lazily upon the storage and spreads its elements into different cells."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use typenum::U32;\n\npub struct Spreaded {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n}\n\n#[ink(storage)]\npub struct Packed {\n    packed: ink_storage::Pack<Spreaded>,\n    c: SmallVec<u8, U32>,\n}\n")))}p.isMDXComponent=!0}}]);