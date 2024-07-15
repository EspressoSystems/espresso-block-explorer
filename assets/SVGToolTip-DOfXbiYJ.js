import{R as t}from"./index-BwDkhjyp.js";import{j as m,F as M,a as N}from"./jsx-runtime-C8OW3RLV.js";import{S as X}from"./SVGPathBuilder-CAxdfrWF.js";function F(){const a=t.useRef(null),[c,p]=t.useState(null);return t.useEffect(()=>{if(!a.current)return;if(typeof ResizeObserver>"u"){const s=a.current.getBoundingClientRect();p(s);return}const h=new ResizeObserver(s=>{for(const T of s)p(T.contentRect)});return h.observe(a.current),()=>{h.disconnect()}},[a,p]),[a,c]}const V=100,y=30,g=8,C=8,Y=8,e=5,G=()=>m(M,{}),b=t.createContext(100),$=t.createContext(100),_=t.createContext(0),R=t.createContext(0),v=t.createContext(.5),z=t.createContext(10),I=t.createContext(null),A=t.createContext(G),O=t.createContext(G),w=()=>{const a=t.useContext(b),c=t.useContext(_),p=t.useContext(R),h=t.useContext(v),s=t.useContext(I),T=t.useContext(z),x=(s==null?void 0:s.width)??V,u=(s==null?void 0:s.height)??y,r=Math.round(x+g+g),l=Math.round(u+C+C),o=Y,d=c-(r-e-e-e-e)*h-e,f=p>a/2,i=Math.floor(f?p-l-T-e:p+T+e),n=new X;return n.moveTo(d+o,i),f||(n.lineTo(c-e,i),n.lineTo(c,i-e),n.lineTo(c+e,i)),n.lineTo(d+r-o,i),n.arcTo(o,o,0,0,1,d+r,i+o),n.lineTo(d+r,i+l-o),n.arcTo(o,o,0,0,1,d+r-o,i+l),f&&(n.lineTo(c+e,i+l),n.lineTo(c,i+l+e),n.lineTo(c-e,i+l)),n.lineTo(d+o,i+l),n.arcTo(o,o,0,0,1,d,i+l-o),n.lineTo(d,i+o),n.arcTo(o,o,0,0,1,d+o,i),n.close(),m("path",{className:"tooltip--card",d:n.instructionToString()})},S=()=>{const a=t.useContext(A),c=t.useContext(O),p=t.useContext(_),h=t.useContext(R),s=t.useContext(v),T=t.useContext(b),x=t.useContext(z),u=t.useRef(null),[r,l]=t.useState(null);t.useEffect(()=>{if(!u.current||!("getBBox"in u.current))return;const H=u.current.getBBox();l(H)},[u,l]);const o=(r==null?void 0:r.width)??V,d=(r==null?void 0:r.height)??y,f=Math.round(o+g+g),i=Math.round(d+C+C),n=p-(f-e-e-e-e)*s-e,P=h>T/2,E=Math.floor(P?h-i-x-e:h+x+e);return m(I.Provider,{value:r,children:N("g",{className:"tooltip",children:[t.createElement(c),m(w,{}),m("g",{ref:u,transform:`translate(${n+g}, ${E+C})`,children:t.createElement(a)})]})})};try{w.displayName="ToolTipCard",w.__docgenInfo={description:`ToolTipCard is a component that is meant to draw the outline of a tooltip
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
pointing at.`,displayName:"SVGTooltip",props:{}}}catch{}export{$ as S,b as a,A as b,_ as c,R as d,v as e,S as f,O as g,F as u};
