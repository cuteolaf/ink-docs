"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3522],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const i={title:"Storing Values",slug:"/basics/storing-values"},o=void 0,s={unversionedId:"basics/storing-values",id:"version-4.0.0-alpha.1/basics/storing-values",title:"Storing Values",description:"Here is how you store simple values in storage:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/basics/storing-values.md",sourceDirName:"basics",slug:"/basics/storing-values",permalink:"/es/4.0.0-alpha.1/basics/storing-values",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/basics/storing-values.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Storing Values",slug:"/basics/storing-values"},sidebar:"reference",previous:{title:"Contract Template",permalink:"/es/4.0.0-alpha.1/basics/contract-template"},next:{title:"Reading Values from Storage",permalink:"/es/4.0.0-alpha.1/basics/reading-values"}},u={},l=[{value:"Use of enum",id:"use-of-enum",level:2},{value:"Supported Types",id:"supported-types",level:2},{value:"Initializing Storage in Constructors",id:"initializing-storage-in-constructors",level:2}],c={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here is how you store simple values in storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    // Store a bool\n    my_bool: bool,\n    // Store some number\n    my_number: u32,\n}\n/* --snip-- */\n")),(0,r.kt)("p",null,"Here is an example of a structure storing ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"Hash")," values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Auction {\n    /// Branded name of the auction event.\n    name: String,\n    /// Some hash identifying the auction subject.\n    subject: Hash,\n    /// Auction status.\n    status: Status, // Enum: Usage shown in next section\n    /// Candle auction can have no winner.\n    /// If auction is finalized, that means that the winner is determined.\n    finalized: bool,\n    /// vector\n    vector: Vec<u8>,\n}\n")),(0,r.kt)("h2",{id:"use-of-enum"},"Use of enum"),(0,r.kt)("p",null,"Enum can be used as a datatype in ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," as depicted above in ",(0,r.kt)("inlineCode",{parentName:"p"},"struct Auction")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Status {\n    /// An auction has not started yet.\n    NotStarted,\n    /// We are in the starting period of the auction, collecting initial bids.\n    OpeningPeriod,\n    /// We are in the ending period of the auction, where we are taking snapshots\n    /// of the winning bids. \n}\n")),(0,r.kt)("p",null,"The values of an enum should be referenced as ",(0,r.kt)("inlineCode",{parentName:"p"},"Status::OpeningPeriod"),"."),(0,r.kt)("h2",{id:"supported-types"},"Supported Types"),(0,r.kt)("p",null,"Substrate contracts may store types that are encodable and decodable with\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-codec"},"Parity Codec")," which includes most Rust common data\ntypes such as ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"u{8,16,32,64,128}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"i{8,16,32,64,128}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", tuples, and arrays."),(0,r.kt)("p",null,"ink! provides Substrate specific types like ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Hash")," to smart contracts as if\nthey were primitive types. "),(0,r.kt)("p",null,"ink! also provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," storage type. You can read more about it ",(0,r.kt)("a",{parentName:"p",href:"/datastructures/mapping"},"here"),"."),(0,r.kt)("p",null,"Here is an example of how you would store an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// We are importing the default ink! types\nuse ink_lang as ink;\n\n#[ink::contract]\nmod MyContract {\n\n    // Our struct will use those default ink! types\n    #[ink(storage)]\n    pub struct MyContract {\n        // Store some AccountId\n        my_account: AccountId,\n        // Store some Balance\n        my_balance: Balance,\n    }\n    /* --snip-- */\n}\n")),(0,r.kt)("h2",{id:"initializing-storage-in-constructors"},"Initializing Storage in Constructors"),(0,r.kt)("p",null,"Constructors are how values get initialized.\nEvery ink! smart contract must have a constructor which is run once when a contract is created. ink! smart contracts can have multiple constructors:"),(0,r.kt)("p",null,"Note that if you have a contract whose storage contains ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping'"),"s you will need to use\n",(0,r.kt)("inlineCode",{parentName:"p"},"ink_lang::utils::initialize_contract")," in your constructor. See the\n",(0,r.kt)("a",{parentName:"p",href:"/datastructures/mapping"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping")," documentation")," for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod mycontract {\n\n    #[ink(storage)]\n    pub struct MyContract {\n        number: u32,\n    }\n\n    impl MyContract {\n        /// Constructor that initializes the `u32` value to the given `init_value`.\n        #[ink(constructor)]\n        pub fn new(init_value: u32) -> Self {\n            Self {\n                number: init_value,\n            }\n        }\n\n        /// Constructor that initializes the `u32` value to the `u32` default.\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            Self {\n                number: Default::default(),\n            }\n        }\n    /* --snip-- */\n    }\n}\n")))}p.isMDXComponent=!0}}]);