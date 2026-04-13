import{R as s,j as e}from"./iframe-COKd2Os-.js";import"./byte_size_text-B8oLdHc1.js";import"./wallet_address_text-DCA28Uqg.js";import"./date_time_text-CDMhlPwa.js";import"./full_hex_text-DhrOCfLO.js";import"./hex_text-DK79PIUk.js";import"./money_text-C-wrGRGL.js";import{M as l}from"./money_text_full-LCIKV8NP.js";import"./number_text-CAbUHr29.js";import"./relative_time_since_date_text-CnpaFYv_.js";import"./tagged_base64_text-VkJW1cYD.js";import"./text-CEhLEmI-.js";import"./time_text-hbHHO61s.js";import{b as m}from"./bigint-nvMxq-Qk.js";import{M as i}from"./monetary_value-DqTXp7cz.js";import{E as c}from"./esp_input-DBtO5HVz.js";const r=n=>{const{initialValue:o=null}=n,[t,a]=s.useState(o?i.ESP(m.decode(o)):null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("style",{children:`
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
