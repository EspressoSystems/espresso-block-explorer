import{j as d}from"./jsx-runtime-BlAj40OV.js";import{a as c}from"./higher_order-DnPEgWEz.js";import{R as a}from"./index-Cs7sjTYM.js";const r=a.createContext("a"),s=e=>{const n=a.useContext(r),{className:t,children:o,...p}=e;return a.createElement(n,{...p,className:c(t,"link")},o)},i=e=>{const{className:n,children:t,...o}=e;return d.jsx("a",{...o,className:c(n,"link"),children:t})};try{r.displayName="InternalLinkAnchorComponentContext",r.__docgenInfo={description:`InternalLinkAnchorComponentContext is a context that is used to determine the
underlying component to use for the internal link. This allows the component
to be easily swapped out for a different component if needed.

The primary use case for this feature is to facilitate the special Link
components provided by NextJS, or other libraries as an enhancement to the
standard anchor tag.`,displayName:"InternalLinkAnchorComponentContext",props:{}}}catch{}try{s.displayName="InternalLink",s.__docgenInfo={description:`InternalLink component represents a simple Anchor tag link. This link is
expected to navigate to a different page on the same webpage. This component
may be expanded and have many different variations.

This component utilizes the AnchorComponentContext to determine the
underlying component to use for the link. This allows the component to be
easily swapped out for a different component if needed.  The default
component specified by AnchorComponentContext is an anchor tag.`,displayName:"InternalLink",props:{}}}catch{}try{i.displayName="EgressLink",i.__docgenInfo={description:`EgressLink is a component that represents a simple Anchor tag link. This
is provided separately from InternalLink as a means of adding context as to
the intent of the underlying link to navigate away from the current domain.`,displayName:"EgressLink",props:{}}}catch{}export{i as E,s as I};
