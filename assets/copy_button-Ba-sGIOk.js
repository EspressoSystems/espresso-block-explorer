import{R as n,j as e}from"./iframe-3Z2fgCPY.js";import{N as c}from"./now_provider-5ZcTXbz-.js";import{a}from"./higher_order-HipsDJR4.js";import{C as l}from"./check_circle_filled-DDgAunYF.js";import{M as d}from"./copy-BAAgR512.js";const p=1e3,f=t=>{const i=n.useContext(c),[r,s]=n.useState(new Date(0));return i.valueOf()-r.valueOf()<p?e.jsx("button",{...t,className:a(t.className,"btn--copy copied"),title:"Copy Contents",children:e.jsx(l,{})}):e.jsx("button",{...t,className:a(t.className,"btn--copy"),onClick:o=>{o.preventDefault(),o.stopPropagation(),!(typeof window>"u"||!navigator||!navigator.clipboard)&&(s(new Date),navigator.clipboard.writeText(t.content))},title:"Copy Contents",children:e.jsx(d,{})})};try{copybutton.displayName="copybutton",copybutton.__docgenInfo={description:`CopyButton is a button that allows the user to copy it's given text contents
into the text clipboard.  It handles the clipboard interaction for you, while
allowing the user the ability to override this behavior should that be
desired.

It is recommended to not overwrite this behavior, however, as some extra
features are provided that help indicate to the user that their desired
copy was provided without issue.

When interacted with, the button will copy the content passed to the
component via the content prop.  The content must be a string for it to be
able to be copied.`,displayName:"copybutton",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}}}catch{}export{f as C};
