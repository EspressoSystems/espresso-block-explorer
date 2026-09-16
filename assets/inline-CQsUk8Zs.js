import{R as n,j as e}from"./iframe-z4x_zXym.js";import{N as p}from"./relative_time_since_date_text-6zfx7s1m.js";import{a as s}from"./higher_order-VFVdagsA.js";import{M as l}from"./x_icon-Y7J_inEY.js";import{C as d}from"./twitter_icon-X0-7L21F.js";import"./chevron_up-D3KUNchR.js";import"./vertical_scroll-_GLN_rWZ.js";const u=1e3,r=t=>{const a=n.useContext(p),[i,c]=n.useState(new Date(0));return a.valueOf()-i.valueOf()<u?e.jsx("button",{...t,className:s(t.className,"btn--copy copied"),title:"Copy Contents",children:e.jsx(d,{})}):e.jsx("button",{...t,className:s(t.className,"btn--copy"),onClick:o=>{o.preventDefault(),o.stopPropagation(),!(typeof window>"u"||!navigator||!navigator.clipboard)&&(c(new Date),navigator.clipboard.writeText(t.content))},title:"Copy Contents",children:e.jsx(l,{})})};try{r.displayName="copybutton",r.__docgenInfo={description:`CopyButton is a button that allows the user to copy it's given text contents
into the text clipboard.  It handles the clipboard interaction for you, while
allowing the user the ability to override this behavior should that be
desired.

It is recommended to not overwrite this behavior, however, as some extra
features are provided that help indicate to the user that their desired
copy was provided without issue.

When interacted with, the button will copy the content passed to the
component via the content prop.  The content must be a string for it to be
able to be copied.`,displayName:"copybutton",filePath:"/home/runner/work/espresso-block-explorer/espresso-block-explorer/packages/espresso-block-explorer-components/src/sites/block_explorer/components/hid/buttons/copy_button/copy_button.tsx",methods:[],props:{content:{defaultValue:null,declarations:[{fileName:"espresso-block-explorer-components/src/sites/block_explorer/components/hid/buttons/copy_button/copy_button.tsx",name:"ButtonProps"}],description:"",name:"content",parent:{fileName:"espresso-block-explorer-components/src/sites/block_explorer/components/hid/buttons/copy_button/copy_button.tsx",name:"ButtonProps"},required:!0,tags:{},type:{name:"string"}}},tags:{}}}catch{}export{r as C};
