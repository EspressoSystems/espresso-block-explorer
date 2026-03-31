import{R as p,j as e}from"./iframe-BtlXJKZ1.js";import{M as l}from"./money_text_full-BJiWhaEl.js";import{M as n,b as c}from"./monetary_value-BBaBP7s4.js";import{E as d}from"./esp_input-DOUmUYCk.js";const i=r=>{const{initialValue:a=null}=r,[t,o]=p.useState(a?n.ESP(c.decode(a)):null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("style",{children:`
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
        `}),e.jsx(d,{id:"stake-amount",value:t,onChange:(u,s)=>{o(s)}})]}),e.jsx("br",{}),e.jsx("div",{title:(t??n.ESP(0n)).toString(),children:e.jsx(l,{money:t??n.ESP(0n)})})]})},y={component:i,args:{},argTypes:{initialValue:{type:"string"}}};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string | null"}}}}}catch{}export{i as E,y as e};
