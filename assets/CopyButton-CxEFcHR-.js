import{R as n,j as e}from"./iframe-BYhJ0elB.js";import{N as l}from"./NowProvider-DPFdN-s-.js";import{a}from"./higher_order-CiFIqkYR.js";import{C as d}from"./CheckCircleFilled-BTQ9yhTR.js";import{M as p}from"./Copy-B8g8a5_A.js";const u=1e3,i=t=>{const r=n.useContext(l),[s,c]=n.useState(new Date(0));return r.valueOf()-s.valueOf()<u?e.jsx("button",{...t,className:a(t.className,"btn--copy copied"),title:"Copy Contents",children:e.jsx(d,{})}):e.jsx("button",{...t,className:a(t.className,"btn--copy"),onClick:o=>{o.preventDefault(),o.stopPropagation(),!(typeof window>"u"||!navigator||!navigator.clipboard)&&(c(new Date),navigator.clipboard.writeText(t.content))},title:"Copy Contents",children:e.jsx(p,{})})};try{i.displayName="CopyButton",i.__docgenInfo={description:`CopyButton is a button that allows the user to copy it's given text contents
into the text clipboard.  It handles the clipboard interaction for you, while
allowing the user the ability to override this behavior should that be
desired.

It is recommended to not overwrite this behavior, however, as some extra
features are provided that help indicate to the user that their desired
copy was provided without issue.

When interacted with, the button will copy the content passed to the
component via the content prop.  The content must be a string for it to be
able to be copied.`,displayName:"CopyButton",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}}}catch{}export{i as C};
