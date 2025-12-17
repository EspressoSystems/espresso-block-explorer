import{R as l,j as e}from"./iframe-CA0H6dFm.js";import{M as p}from"./money_text_full-DefdVbAl.js";import{b as d}from"./bigint-DtebN9dC.js";import{M as t}from"./monetary_value-CBH2RXSq.js";import{E as c}from"./esp_input-DXjTLng-.js";const a=i=>{const{initialValue:n=null}=i,[r,o]=l.useState(n?t.ESP(d.decode(n)):null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("style",{children:`
        .currency-code{
          padding: 8px;
        }
        .esp-input-container {
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 32px;
          display: grid;
          align-items: center;
          padding: 0;
          margin: 0;
          overflow: hidden;
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
        }
        `}),e.jsx(c,{id:"stake-amount",value:r,onChange:(u,s)=>{o(s)}})]}),e.jsx("br",{}),e.jsx("div",{title:(r??t.ESP(0n)).toString(),children:e.jsx(p,{money:r??t.ESP(0n)})})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string | null"}}}}}catch{}export{a as E};
