import{R as s,j as e}from"./iframe-Czs2L5m1.js";import"./byte_size_text-LFOa9cPx.js";import"./wallet_address_text-b1XU89BU.js";import"./date_time_text-DTv9voBS.js";import"./full_hex_text-B9F7kEcQ.js";import"./hex_text-D4ncCmSo.js";import"./money_text-BJ-uCKea.js";import{M as l}from"./money_text_full-Cn1Suzc2.js";import"./number_text-NeBjfjp9.js";import"./percentage_text-DYq2RApP.js";import"./relative_time_since_date_text-DLaNVU8u.js";import"./tagged_base64_text-BpgIJSgf.js";import"./text-CEhLEmI-.js";import"./time_text-DXVJqvoG.js";import{b as m}from"./bigint-CufIvmoo.js";import{M as i}from"./monetary_value-DN71IgaJ.js";import{E as c}from"./esp_input-BVb18h_j.js";const r=n=>{const{initialValue:o=null}=n,[t,a]=s.useState(o?i.ESP(m.decode(o)):null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("style",{children:`
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
        `}),e.jsx(c,{id:"stake-amount",value:t,onChange:(d,p)=>{a(p)}})]}),e.jsx("br",{}),e.jsx("div",{title:(t??i.ESP(0n)).toString(),children:e.jsx(l,{money:t??i.ESP(0n)})})]})},C={component:r,args:{},argTypes:{initialValue:{type:"string"}}};try{r.displayName="Example",r.__docgenInfo={description:"",displayName:"Example",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string | null"}}}}}catch{}export{r as E,C as e};
