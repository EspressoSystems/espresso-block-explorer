import{R as s,j as e}from"./iframe-hlwV_SLU.js";import"./byte_size_text-BgslcI2e.js";import"./wallet_address_text-BqWLkzAy.js";import"./date_time_text-BhhckyY6.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-BSzh9nv8.js";import"./money_text-D0p8Y8LA.js";import{M as l}from"./money_text_full-mZgISvxt.js";import"./number_text-yX4kUbct.js";import"./relative_time_since_date_text-DQ4LaVpf.js";import"./tagged_base64_text-ClsJrra7.js";import"./text-CEhLEmI-.js";import"./time_text-CBcl6HLm.js";import{b as m}from"./bigint-nvMxq-Qk.js";import{M as i}from"./monetary_value-DqTXp7cz.js";import{E as c}from"./esp_input-Cuc0mbnl.js";const r=n=>{const{initialValue:o=null}=n,[t,a]=s.useState(o?i.ESP(m.decode(o)):null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("style",{children:`
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
        `}),e.jsx(c,{id:"stake-amount",value:t,onChange:(d,p)=>{a(p)}})]}),e.jsx("br",{}),e.jsx("div",{title:(t??i.ESP(0n)).toString(),children:e.jsx(l,{money:t??i.ESP(0n)})})]})},R={component:r,args:{},argTypes:{initialValue:{type:"string"}}};try{r.displayName="Example",r.__docgenInfo={description:"",displayName:"Example",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string | null"}}}}}catch{}export{r as E,R as e};
