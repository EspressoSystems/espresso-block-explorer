import{R as t}from"./index-Cs7sjTYM.js";import{j as T}from"./jsx-runtime-BlAj40OV.js";import{S as H}from"./SVGPathBuilder-XZx_HA2Y.js";function W(){const a=t.useRef(null),[c,p]=t.useState(null);return t.useEffect(()=>{if(!a.current)return;if(typeof ResizeObserver>"u"){const s=a.current.getBoundingClientRect();p(s);return}const h=new ResizeObserver(s=>{for(const f of s)p(f.contentRect)});return h.observe(a.current),()=>{h.disconnect()}},[a,p]),[a,c]}const V=100,y=30,g=8,x=8,M=8,e=5,G=()=>T.jsx(T.Fragment,{}),b=t.createContext(100),D=t.createContext(100),R=t.createContext(0),_=t.createContext(0),v=t.createContext(.5),z=t.createContext(10),I=t.createContext(null),N=t.createContext(G),X=t.createContext(G),w=()=>{const a=t.useContext(b),c=t.useContext(R),p=t.useContext(_),h=t.useContext(v),s=t.useContext(I),f=t.useContext(z),C=(s==null?void 0:s.width)??V,u=(s==null?void 0:s.height)??y,r=Math.round(C+g+g),l=Math.round(u+x+x),o=M,d=c-(r-e-e-e-e)*h-e,m=p>a/2,i=Math.floor(m?p-l-f-e:p+f+e),n=new H;return n.moveTo(d+o,i),m||(n.lineTo(c-e,i),n.lineTo(c,i-e),n.lineTo(c+e,i)),n.lineTo(d+r-o,i),n.arcTo(o,o,0,0,1,d+r,i+o),n.lineTo(d+r,i+l-o),n.arcTo(o,o,0,0,1,d+r-o,i+l),m&&(n.lineTo(c+e,i+l),n.lineTo(c,i+l+e),n.lineTo(c-e,i+l)),n.lineTo(d+o,i+l),n.arcTo(o,o,0,0,1,d,i+l-o),n.lineTo(d,i+o),n.arcTo(o,o,0,0,1,d+o,i),n.close(),T.jsx("path",{className:"tooltip--card",d:n.instructionToString()})},S=()=>{const a=t.useContext(N),c=t.useContext(X),p=t.useContext(R),h=t.useContext(_),s=t.useContext(v),f=t.useContext(b),C=t.useContext(z),u=t.useRef(null),[r,l]=t.useState(null);t.useEffect(()=>{if(!u.current||!("getBBox"in u.current))return;const P=u.current.getBBox();l(P)},[u,l]);const o=(r==null?void 0:r.width)??V,d=(r==null?void 0:r.height)??y,m=Math.round(o+g+g),i=Math.round(d+x+x),n=p-(m-e-e-e-e)*s-e,j=h>f/2,E=Math.floor(j?h-i-C-e:h+C+e);return T.jsx(I.Provider,{value:r,children:T.jsxs("g",{className:"tooltip",children:[t.createElement(c),T.jsx(w,{}),T.jsx("g",{ref:u,transform:`translate(${n+g}, ${E+x})`,children:t.createElement(a)})]})})};try{w.displayName="ToolTipCard",w.__docgenInfo={description:`ToolTipCard is a component that is meant to draw the outline of a tooltip
in a manner the emulates the Card component. It is comprised of a path
that creates a rounded rectangle with a small arrow pointing up or down
to the target point.`,displayName:"ToolTipCard",props:{}}}catch{}try{S.displayName="SVGTooltip",S.__docgenInfo={description:`SVGToolTip is a helper component to draw a tooltip on an SVG element.
It utilizes the contexts prefixed with "SVGTooltip" to help draw the
component elements in the location desired, with the size information
provided.

Additionally, it allows for the component content to be provided by
a separate widget entirely that is provided through the context of
the component.  This allows this component to be directly created by
this widget, and for it's sizing information to be determined.  This allows
for the tooltip to have a ToolTipCard surrounding the content that aligns
with the content be displayed.

It also allows for the specification of an indicator component that can
be added.  This can be used to highlight the value that the tooltip is
pointing at.`,displayName:"SVGTooltip",props:{}}}catch{}export{D as S,b as a,N as b,R as c,_ as d,v as e,S as f,X as g,W as u};
