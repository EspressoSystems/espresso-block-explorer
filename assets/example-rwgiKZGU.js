import{R as a,j as e}from"./iframe-z4x_zXym.js";import"./byte_size_text-DUdUrgv2.js";import"./wallet_address_text-BUfsO0-3.js";import"./date_time_text-BRDcVIE3.js";import"./full_hex_text-Dy0lP2Mx.js";import"./hex_text-Cr6kAKL1.js";import"./money_text-CjywtH9I.js";import{M as l}from"./money_text_full-DZpXCFsv.js";import"./number_text-DNM9iOtW.js";import"./percentage_text-6LSlrrGd.js";import"./relative_time_since_date_text-6zfx7s1m.js";import"./tagged_base64_text-BJQaZWlM.js";import"./text-CbLn7ebu.js";import"./time_text-t9zcV9sC.js";import{b as m}from"./bigint-BA49fcqT.js";import{M as t}from"./monetary_value-1a23Gg5O.js";import{E as c}from"./esp_input-C-hEZQiF.js";const o=s=>{const{initialValue:n=null}=s,[r,i]=a.useState(n?t.ESP(m.decode(n)):null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("style",{children:`
        .esp-input-container {
          display: grid;
          grid-template-columns: auto 1fr;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 32px;
          align-items: center;
          padding: 0;
          margin: 0;
          overflow: hidden;
        }
        .esp-input-container .currency-code{
          position: unset !important;
          padding: 8px;
        }
        .esp-input-container.currency-prefix {
          grid-template-columns: auto 1fr;
        }
        .esp-input-container.currency-suffix {
          grid-template-columns: 1fr auto;
        }
        .esp-input-container input {
          font-size: inherit;
          border: 0;
          border-radius: 8px;
          box-sizing: border-box;
        }
        `}),e.jsx(c,{id:"stake-amount",value:r,onChange:(d,p)=>{i(p)}})]}),e.jsx("br",{}),e.jsx("div",{title:(r??t.ESP(0n)).toString(),children:e.jsx(l,{money:r??t.ESP(0n)})})]})},z={component:o,args:{},argTypes:{initialValue:{type:"string"}}};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",filePath:"/home/runner/work/espresso-block-explorer/espresso-block-explorer/packages/espresso-block-explorer-components/src/components/input/esp/__shared__/example.tsx",methods:[],props:{initialValue:{defaultValue:null,declarations:[{fileName:"espresso-block-explorer-components/src/components/input/esp/__shared__/example.tsx",name:"ExampleProps"}],description:"",name:"initialValue",parent:{fileName:"espresso-block-explorer-components/src/components/input/esp/__shared__/example.tsx",name:"ExampleProps"},required:!1,tags:{},type:{name:"string | null"}}},tags:{}}}catch{}export{o as E,z as e};
