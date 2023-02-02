"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={title:"ink! vs. CosmWasm",slug:"/ink-vs-cosmwasm",hide_title:!0},s=void 0,i={unversionedId:"intro/ink-vs-cosmwasm",id:"intro/ink-vs-cosmwasm",title:"ink! vs. CosmWasm",description:"A continuaci\xf3n, una breve comparaci\xf3n entre ink!",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intro/ink-vs-cosmwasm.md",sourceDirName:"intro",slug:"/ink-vs-cosmwasm",permalink:"/es/ink-vs-cosmwasm",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/ink-vs-cosmwasm.md",tags:[],version:"current",frontMatter:{title:"ink! vs. CosmWasm",slug:"/ink-vs-cosmwasm",hide_title:!0},sidebar:"reference",previous:{title:"ink! vs. Solidity",permalink:"/es/ink-vs-solidity"},next:{title:"Overview",permalink:"/es/monthly-update/"}},l={},c=[{value:"Dependencias",id:"dependencias",level:2},{value:"Setup del entorno",id:"setup-del-entorno",level:2},{value:"Compilaci\xf3n y Tests",id:"compilaci\xf3n-y-tests",level:2},{value:"Despliegue e Interacci\xf3n",id:"despliegue-e-interacci\xf3n",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/title/cosmwasm.svg",className:"titlePic"}),(0,o.kt)("h1",{id:"ink-vs-cosmwasm"},"ink! vs. CosmWasm"),(0,o.kt)("p",null,"A continuaci\xf3n, una breve comparaci\xf3n entre ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/"},"ink!"),"\ny ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm"},"CosmWasm")," enfocada a desarrolladores que vengan\ndel ecosistema de Cosmos."),(0,o.kt)("h1",{id:"arquitectura"},"Arquitectura"),(0,o.kt)("p",null,"CosmWasm es modular, de manera que cualquier blockchain que use Cosmos SDK puede a\xf1adir\nsoporte para smart contracts. Siendo muy similar al enfoque que toma ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate"),",\ncon el cual cualquier red tiene la opci\xf3n de a\xf1adir el ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-conctracts")," en su runtime."),(0,o.kt)("p",null,"Salvo en esto, la filosof\xeda con la que se ha hecho la arquitectura de CosmWasm e ink! es\ntotalmente diferente. El patr\xf3n de dise\xf1o seguido por CosmWasm es el modelo actor, mientras\nque ink! se construye sobre un modelo de ejecuci\xf3n s\xedncrona. Esto se traduce en diferencias\nfundamentales en como el c\xf3digo fuente es estructurado."),(0,o.kt)("p",null,"El principal punto de entrada de funciones en contratos de CosmWasm son:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"instantiate")," que inicializa el estrado del contrato (asumiendo que ya ha sido desplegado)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"execute")," el actor realizar\xe1 operaciones sobre su estado interno."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query")," devuelve informaci\xf3n sobre el estado interno del actor.")),(0,o.kt)("p",null,"Un contracto en ink! puede tener tanto dispatchables publicos como el desarrollador desee,\ny de manera diferente a CosmWasm, no depende de JSON schemas para definir la estructura de los\nmensajes."),(0,o.kt)("p",null,"En cambio, ink! hace un uso intensivo de las macros de Rust. Las principales macros usadas en ink! son:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#[ink(constructor)]")," la cual es llamada cuando el contrato se despliega, y es responsable\nde inicializar el estado del contrato. Es analoga a la funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"li"},"instantiate")," de CosmWasm."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#[ink(storage)]")," anotar\xe1 una estrucura que represente el estado interno del contrato."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#[ink(message)]")," denota una funci\xf3n como un dispatchable p\xfablico, esto significa que es expuesta\nen la interfaz del contrato al resto del mundo. Esta macro hace que una funci\xf3n se comporte\nanalogamente a las funciones ",(0,o.kt)("inlineCode",{parentName:"li"},"execute")," y ",(0,o.kt)("inlineCode",{parentName:"li"},"query")," de CosmWasm."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#[ink(event)]")," y ",(0,o.kt)("inlineCode",{parentName:"li"},"#[ink(topic)]")," anotar\xe1n estructuras cuyos elementos ser\xe1n los eventos y topics\nque el contrato pueda emitir.")),(0,o.kt)("p",null,"Hay m\xe1s macros usadas en ink!, sus detalles pueden ser encontrados en ",(0,o.kt)("a",{parentName:"p",href:"/macros-attributes"},"Macros & Attributes"),". "),(0,o.kt)("h1",{id:"tests-unitarios"},"Tests unitarios"),(0,o.kt)("p",null,"Los test unitarios en CosmWasm son bastante similares a ink!. Ambos usan la convencional\n",(0,o.kt)("inlineCode",{parentName:"p"},"#[cfg(test)]")," macro de Rust y establecen un entonrno mock on-chain."),(0,o.kt)("p",null,"Mientras que los tests unitarios de CosmWasm tienen diferentes m\xf3dules para cada uno de las tres\nposibles funciones de entrada, ink! permite un enfoque m\xe1s general, ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(test)]")," ser\xe1 usado\npara cada test."),(0,o.kt)("p",null,"Puedes leer m\xe1s sobre ink! y los test unitarios ",(0,o.kt)("a",{parentName:"p",href:"https://ink.substrate.io/basics/contract-testing#unit-tests"},"aqui"),"."),(0,o.kt)("h1",{id:"compilador"},"Compilador"),(0,o.kt)("p",null,"CosmWasm usa ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/crate/cargo-wasm/latest"},"cargo-wasm")," como su principal\ncompilador, mientras que ink! usa ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},"cargo-contract"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," ha sido desarrollado por Parity espec\xedficamente para construir, testear y desplegar\ncontractos escritos usando ink!. "),(0,o.kt)("h1",{id:"desarrollo-local"},"Desarrollo Local"),(0,o.kt)("p",null,"En cuanto a redes para desarrollo local, el repositorio ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia"},"cosmos/gaia"),"\nactua como un template b\xe1sico de un nodo gen\xe9rico de Cosmos. Con la adici\xf3n del m\xf3dulo ",(0,o.kt)("inlineCode",{parentName:"p"},"x/wasm"),"\ny algo de reorganizaci\xf3n del c\xf3digo, este repositorio se conviernte en ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd"},"wasmd"),",\npunto de entrada para el desarrollo con CosmWasm."),(0,o.kt)("p",null,"Con Substrate, ",(0,o.kt)("inlineCode",{parentName:"p"},"substrate-node-template")," es un template gen\xe9rico de un nodo. Similar a ",(0,o.kt)("inlineCode",{parentName:"p"},"x/wasm"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,o.kt)("inlineCode",{parentName:"a"},"pallet-contracts"))," es el m\xf3dulo\nque a\xf1ade soporte para WebAssembly smart contracts a la red. Parity provee ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},(0,o.kt)("inlineCode",{parentName:"a"},"substrate-contracts-node")),", que es el an\xe1logo a ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," - un template de un nodo b\xe1sico para\nel desarrollo de smart contracts."),(0,o.kt)("h1",{id:"testnets"},"Testnets"),(0,o.kt)("p",null,"Para el desarrolly on-chain testing con CosmWasm, ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," puede ser usado para lanzar localmente\n(uno o m\xfaltiples nodos), o conectados a la testnet p\xfablica ",(0,o.kt)("inlineCode",{parentName:"p"},"cliffnet"),"."),(0,o.kt)("p",null,"Por otro lado, existen varias opciones para desplegar contratos ink!:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Localmente, en un \xfanico, o m\xfaltiples, nodos ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-contracts-node"},(0,o.kt)("inlineCode",{parentName:"a"},"substrate-contracts-node")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer"},"Contracts Parachain en Rococo"),", que est\xe1 contectada a ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer"},"Rococo relay chain test network"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.astar.network/maintain/collator/shibuya-network/"},"Astar Network\u2019s Shibuya testnet"),".")),(0,o.kt)("h1",{id:"workflow-de-desarrollo"},"Workflow de Desarrollo"),(0,o.kt)("h2",{id:"dependencias"},"Dependencias"),(0,o.kt)("p",null,"El primer paso desarrollando con CosmWasm es ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/getting-started/installation"},"instalar las dependencias"),", como son Go, Rust y ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd"),"."),(0,o.kt)("p",null,"Para ink! tambi\xe9n puedes encontrar una ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/setup"},"gu\xeda de configuraci\xf3n")," que te ayudar\xe1 a instalar\nlas dependencias necesarias, como Rust, ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node"),"."),(0,o.kt)("h2",{id:"setup-del-entorno"},"Setup del entorno"),(0,o.kt)("p",null,"El siguiente paso en el desarrollo con CosmWasm es hacer el ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/getting-started/setting-env"},"preparar el entorno"),". Consiste en configurar ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," de manera que tengamos\nciertas cuentas con un balance inicial haciendo posible interactuar con la red."),(0,o.kt)("p",null,"De manera similar, cuando lanzamos ",(0,o.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node")," con la flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--dev")," obtendremos\ncuentas pre-fundadas (",(0,o.kt)("inlineCode",{parentName:"p"},"alice"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bob"),", etc.) que est\xe1n listas para ser usadas en nuestro desarrollo."),(0,o.kt)("h2",{id:"compilaci\xf3n-y-tests"},"Compilaci\xf3n y Tests"),(0,o.kt)("p",null,"CosmWasm provee contratos de ejemplo en el repositorio ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-contracts"},"cw-contracts"),".\nTras clonar el repositorio, podremos compilalo con:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cargo wasm\n")),(0,o.kt)("p",null,"y realizar los tests con:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cargo test\n")),(0,o.kt)("p",null,"De manera similar, podemos encontrar ejemplos de ink! en el directorio ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/tree/master/examples"},(0,o.kt)("inlineCode",{parentName:"a"},"examples"))," del repositorio principal."),(0,o.kt)("p",null,"Un contrato pude ser compilado desde su directorio ejecutando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cargo contract build\n")),(0,o.kt)("p",null,"y realizar tests con:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cargo test\n")),(0,o.kt)("h2",{id:"despliegue-e-interacci\xf3n"},"Despliegue e Interacci\xf3n"),(0,o.kt)("p",null,"Los contratos de CosmWasm son deplegados e instanciados con ayuda del ejecutable ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd"),".\nLa lista de pasos a seguir puede encontrarse ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/getting-started/interact-with-contract"},"aqu\xed"),"."),(0,o.kt)("p",null,"Es posible desplegar e interactuar un contrato ink! usando el CLI(",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract"),"), o el UI web (",(0,o.kt)("a",{parentName:"p",href:"https://contracts-ui.substrate.io/"},(0,o.kt)("inlineCode",{parentName:"a"},"contracts-ui")),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/cargo-contract/blob/master/docs/extrinsics.md"},"Instrucciones para ",(0,o.kt)("inlineCode",{parentName:"a"},"cargo-contract"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/getting-started/deploy-your-contract"},"Instrucciones para ",(0,o.kt)("inlineCode",{parentName:"a"},"contracts-ui")))))}m.isMDXComponent=!0}}]);