import{b as p,a as n}from"./higher_order-BfTEeOwN.js";import{j as e,R as a}from"./iframe-zEcEksBb.js";import{N as h}from"./NowProvider-BzxzTsO6.js";import{C as m}from"./CheckCircle-BOQxnE9B.js";import{M as u}from"./Copy-B4M9VoCc.js";function i(t){return p(t,"loading-shimmer")}try{i.displayName="WithLoadingShimmer",i.__docgenInfo={description:`WithLoadingShimmer is a higher order component that adds the loading-shimmer
class to the given component.`,displayName:"WithLoadingShimmer",props:{}}}catch{}const r=t=>e.jsx("div",{className:"skeleton-content",...t});try{r.displayName="SkeletonContent",r.__docgenInfo={description:"",displayName:"SkeletonContent",props:{}}}catch{}const y=1e3,s=t=>{const c=a.useContext(h),[d,l]=a.useState(new Date(0));return c.valueOf()-d.valueOf()<y?e.jsx("button",{...t,className:n(t.className,"btn--copy copied"),title:"Copy Contents",children:e.jsx(m,{})}):e.jsx("button",{...t,className:n(t.className,"btn--copy"),onClick:o=>{o.preventDefault(),o.stopPropagation(),!(typeof window>"u"||!navigator||!navigator.clipboard)&&(l(new Date),navigator.clipboard.writeText(t.content))},title:"Copy Contents",children:e.jsx(u,{})})};try{s.displayName="CopyButton",s.__docgenInfo={description:`CopyButton is a button that allows the user to copy it's given text contents
into the text clipboard.  It handles the clipboard interaction for you, while
allowing the user the ability to override this behavior should that be
desired.

It is recommended to not overwrite this behavior, however, as some extra
features are provided that help indicate to the user that their desired
copy was provided without issue.

When interacted with, the button will copy the content passed to the
component via the content prop.  The content must be a string for it to be
able to be copied.`,displayName:"CopyButton",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}}}catch{}export{s as C,r as S,i as W};
