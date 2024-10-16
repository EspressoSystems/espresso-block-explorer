var re=Object.defineProperty;var le=(t,a,o)=>a in t?re(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o;var h=(t,a,o)=>le(t,typeof a!="symbol"?a+"":a,o);import{j as e}from"./jsx-runtime-BlAj40OV.js";import{E as ce,L as de,D as me}from"./LoadingProvider-Cu0dkHek.js";import{a as te}from"./higher_order-DnPEgWEz.js";import{j as B,l as se}from"./typography-51eEIY7Y.js";import{T as u}from"./Text-BU7JBOLk.js";import{V as ae}from"./TransactionsPerSecondText-ujeSLfWn.js";import{R as s}from"./index-Cs7sjTYM.js";import{u as oe,b as he,g as ge,a as pe,c as xe,d as ue,e as fe,f as ve}from"./SVGToolTip-CFfuiKXH.js";import{A as j}from"./AffineTransform-DiV9SxhF.js";import{N as P}from"./NumberText-C4Z_0tU7.js";import{P as _e}from"./index-Dk74W0Oi.js";import"./ByteSizeText-Dv1cMyzR.js";import"./DateTimeText-H0_MZ3-7.js";import"./FullHexText--WRZGC5j.js";import"./HexText-C8fnDoIt.js";import"./MoneyText-C0mhNXDV.js";import"./RelativeTimeText-DCz-EhHt.js";import"./TaggedBase64Text-CGXJT8bt.js";import"./TimeText-iZ8ovT8K.js";import{H as ye}from"./Heading2-D8bshSXb.js";const He=B("label"),je=se("div"),be=t=>e.jsx(He,{children:t.children}),Ce=t=>e.jsx(je,{className:"value",children:t.children}),S=({className:t,children:a,...o})=>e.jsxs("div",{...o,className:te(t,"value-labeled"),children:[e.jsx(Ce,{className:"value",children:a[0]},0),e.jsx(be,{className:"label",children:a[1]},1)]});try{S.displayName="ValueLabeled",S.__docgenInfo={description:`TabledLabeledValue is a component that is meant to display a label and
value pair of components, and lay them out depending on the screen size
of the device in question.

If on a sufficiently large device, they should appear side by side as
if in a full sized table element. Otherwise, they should appear as
a single element of sufficient size.`,displayName:"ValueLabeled",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=class C{constructor(a,o,n,i,r){h(this,"min");h(this,"max");h(this,"mean");h(this,"total");h(this,"count");h(this,"length");this.min=a,this.max=o,this.total=n,this.count=i,this.length=r,this.mean=n/i}static compute(a){return Te(a)}};h(C,"empty",new C(0,0,0,0,0));let g=C;function Te(t){const a=t.length;if(a===0)return new g(0,0,0,0,0);let o=null,n=null,i=0,r=0;for(let d=0;d<a;d++){const m=t[d];m!==null&&(r++,i+=m,(o===null||m<o)&&(o=m),(n===null||m>n)&&(n=m))}const c=o===n;return c&&o!==0&&(o=0),c&&n===0&&(n=1),new g(o??0,n??0,i??0,r,a)}const b=t=>e.jsx(P,{number:t.value});b.propTypes={value:_e.number.isRequired};try{b.displayName="HistogramDefaultLabel",b.__docgenInfo={description:`HistogramDefaultLabel is a simple label for displaying a numeric value for
the histogram.  It is the default, which means it just renders the number
using the \`NumberText\` component.  If the axis needs to be labeled, then
the element should be specified.`,displayName:"HistogramDefaultLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const k=s.createContext(417),Ne=s.createContext(152),f=s.createContext(360),p=s.createContext(152),T=s.createContext([]),Y=s.createContext([]),v=s.createContext(g.empty),ne=s.createContext(g.empty),F=s.createContext([]),$=s.createContext(0),ie=s.createContext(0),M=s.createContext({x:0,y:0,width:0,height:0}),q=s.createContext(null),_=s.createContext(j.identity),Pe=s.createContext(j.identity),E=s.createContext(b),Se=16,O=24,X=417,Ae=176,A=t=>{const[a,o]=oe(),n=Math.floor((o==null?void 0:o.width)??X),i=Math.floor(n*(Ae/X));return e.jsx(k.Provider,{value:n,children:e.jsx(Ne.Provider,{value:i,children:e.jsx(f.Provider,{value:n-Se,children:e.jsx(p.Provider,{value:i-O,children:e.jsx("svg",{ref:a,role:"graphics-datachart",viewBox:`0 0 ${n} ${i}`,children:e.jsx("g",{transform:`translate(0, ${O/2})`,children:t.children})})})})})})};try{A.displayName="HistogramBase",A.__docgenInfo={description:`HistogramBase is a component that provides the base SVG element for a
histogram.`,displayName:"HistogramBase",props:{}}}catch{}const Le=B("text"),L=({children:t})=>{const a=s.useContext(v),o=s.useContext(_),n=4,i=[],r=a.max/n;for(let c=0;c<=o.inputMax&&r>0;c+=r)i.push(c);return e.jsx(F.Provider,{value:i,children:t})},we=60,w=()=>{const t=s.useContext(k),a=s.useContext(p),o=s.useContext(_),n=s.useContext(F),i=s.useContext(q);return e.jsx("g",{className:"histogram-y-guide-lines",children:n.map((r,c)=>e.jsx("line",{role:"graphics-tick",x1:(i==null?void 0:i.width)??we,y1:a-o.transform(r),x2:t,y2:a-o.transform(r)},c))})},G=t=>{const a=s.useContext(p),o=s.useContext(F),n=s.useContext(_),i=s.useContext(E);return e.jsx("g",{ref:t.labelsRef,className:"histogram-y-axis-labels",role:"graphics-category",children:o.map((r,c)=>e.jsx(Le,{x:0,y:a-n.transform(r),dominantBaseline:"middle",className:"histogram-y-axis-label",children:s.createElement(i,{value:r})},c))})};try{L.displayName="ProvideGuideLines",L.__docgenInfo={description:`ProvideGuideLines is a component that calculates the y axis data spacing for
the histogram and provides.

It provides the following contexts:
- HistogramYAxisGuideLines

While consuming the following contexts:
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"ProvideGuideLines",props:{}}}catch{}try{w.displayName="HistogramGuideLines",w.__docgenInfo={description:`HistogramGuidLines is a component that displays the guide lines for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramGraphWidth
- HistogramPlotHeight
- HistogramRangeAffineTransform
- HistogramYAxisGuideLines`,displayName:"HistogramGuideLines",props:{}}}catch{}try{G.displayName="HistogramYAxisLabels",G.__docgenInfo={description:`HistogramYAxisLabels is a component that displays the labels for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramPlotHeight
- HistogramYAxisGuideLines
- HistogramRangeAffineTransform
- HistogramYAxisLabelComponent`,displayName:"HistogramYAxisLabels",props:{labelsRef:{defaultValue:null,description:"",name:"labelsRef",required:!0,type:{name:"RefObject<SVGGElement> | undefined"}}}}}catch{}const J=se("text"),K=B("text"),Q=10,Ge=2,H=14,Z=14,R=()=>{const t=s.useContext(T).length,a=s.useContext(M),o=s.useContext($),n=s.useContext(p),i=o/t,r=a.width/2;return e.jsx(he.Provider,{value:Ie,children:e.jsx(ge.Provider,{value:Re,children:e.jsx(pe.Provider,{value:n,children:e.jsx(xe.Provider,{value:a.x+r,children:e.jsx(ue.Provider,{value:a.y,children:e.jsx(fe.Provider,{value:i,children:e.jsx(ve,{})})})})})})})},Re=()=>{const t=s.useContext(M),a=t.width/2;return e.jsxs(e.Fragment,{children:[e.jsx("circle",{className:"value-pointer--outer",cx:t.x+a,cy:t.y,r:Q}),e.jsx("circle",{className:"value-pointer--inner",cx:t.x+a,cy:t.y,r:Q-Ge})]})},Ie=()=>{const t=s.useContext(Y),a=s.useContext(E),o=s.useContext($),n=s.useContext(ie);return n===null?e.jsxs(e.Fragment,{children:[e.jsx(J,{className:"tooltip--value-label",x:0,y:H,textAnchor:"start",children:e.jsx(u,{text:"Missing Data"})}),e.jsxs(K,{className:"tooltip--value-label",x:0,y:H+Z,textAnchor:"start",children:[e.jsx(u,{text:"Block "}),e.jsx(P,{number:Number(t[0])+o})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(J,{className:"tooltip--value-label",x:0,y:H,textAnchor:"start",children:s.createElement(a,{value:n})}),e.jsxs(K,{className:"tooltip--value-label",x:0,y:H+Z,textAnchor:"start",children:[e.jsx(u,{text:"Block "}),e.jsx(P,{number:Number(t[o])})]})]})};try{R.displayName="HistogramTooltip",R.__docgenInfo={description:"",displayName:"HistogramTooltip",props:{}}}catch{}const N=16,I=()=>{const t=s.useContext(k),a=s.useContext(f),o=s.useContext(p),n=s.useContext(T),i=s.useContext(v),r=s.useContext(_);if(i.length===0)return e.jsx(e.Fragment,{});const c=(a-N-N)/i.length,d=Math.floor(c),m=d*i.length,y=n.map(x=>r.transform(Number(x))),U=t-m-N;return e.jsxs(e.Fragment,{children:[e.jsx("g",{className:"histogram-plot",transform:`translate(${U},0)`,role:"graphics-datagroup",children:n.map((x,l)=>x===null?e.jsx("rect",{role:"graphics-dataunit",className:"missing",x:l*d,y:0,width:d-1,height:o,"data-offset":l},`missing-${l}`):e.jsx("rect",{role:"graphics-dataunit",className:"bar",x:l*d,y:o-y[l],width:d-1,height:y[l],"data-offset":l},`bar-${l}`))}),e.jsx("g",{className:"histogram-plot",transform:`translate(${U},0)`,children:n.map((x,l)=>e.jsxs("g",{children:[e.jsx("rect",{className:"bbox",x:l*d,y:0,height:o,width:d}),e.jsx(ie.Provider,{value:x,children:e.jsx($.Provider,{value:l,children:e.jsx(M.Provider,{value:{x:l*d,y:o-y[l],width:d,height:y[l]},children:e.jsx(R,{})})})})]},`tooltip-${l}`))})]})};try{I.displayName="HistogramPlot",I.__docgenInfo={description:`HistogramPlot is a component that takes the given data and creates
rectangles for it in relation to the statistics that it requires.
It is expected to have the following contexts set and provided for
it:

- HistogramGraphWidth
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramRange
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"HistogramPlot",props:{}}}catch{}const V=({children:t})=>{const a=s.useContext(f),o=s.useContext(p),n=s.useContext(ne),i=s.useContext(v),r=new j(n.min,n.max,0,a),c=new j(0,i.max,0,o);return e.jsx(Pe.Provider,{value:r,children:e.jsx(_.Provider,{value:c,children:t})})},W=({children:t})=>{const a=s.useContext(Y),o=s.useContext(T),n=g.compute(a),i=g.compute(o);return e.jsx(ne.Provider,{value:n,children:e.jsx(v.Provider,{value:i,children:t})})},D=()=>{const[t,a]=oe();return e.jsx(A,{children:e.jsx(q.Provider,{value:a,children:e.jsx(Ve,{children:e.jsx(V,{children:e.jsxs(L,{children:[e.jsxs("g",{role:"graphics-axis",children:[e.jsx(w,{}),e.jsx(G,{labelsRef:t})]}),e.jsx(I,{})]})})})})})},Ve=t=>{const a=s.useContext(f),o=s.useContext(q);return e.jsx(f.Provider,{value:Math.floor(a-((o==null?void 0:o.width)??0)),children:t.children})};try{V.displayName="ProvideAffineTransforms",V.__docgenInfo={description:`ProvideAffineTransforms is a component that calculates the affineTransforms for
the domain and range of the histogram and provides them to its children.

It provides the following contexts:
- HistogramDomainAffineTransform
- HistogramRangeAffineTransform

It consumes the following contexts:
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramDomainStatistics
 - HistogramRangeStatistics`,displayName:"ProvideAffineTransforms",props:{}}}catch{}try{W.displayName="ProvideDataStatistics",W.__docgenInfo={description:`ProvideDataStatistics is a component that calculates the statistics for the
domain and range of the histogram and provides them to its children.

It provides the following contexts:
- HistogramDomainStatistics
- HistogramRangeStatistics`,displayName:"ProvideDataStatistics",props:{}}}catch{}try{D.displayName="SimpleHistogram",D.__docgenInfo={description:"",displayName:"SimpleHistogram",props:{}}}catch{}const z=t=>e.jsxs("div",{className:te(t.className,"histogram-section-title"),children:[e.jsx(ye,{children:t.children[0]}),t.children[1]]});try{z.displayName="HistogramSectionTitle",z.__docgenInfo={description:`HistogramSectionTitle is a title element that is displayed above a histogram.
It is expected to label the histogram itself with a title, and have some data
next to it that shows some metric aggregation of the data from the histogram
itself.

Example:
+----------------------------------+
| Block time                 10.5s |
|                          Average |
+----------------------------------+`,displayName:"HistogramSectionTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const We=()=>{const t=s.useContext(v);return e.jsx(ae,{bytes:t.mean})},De=t=>e.jsx(ae,{bytes:t.value}),ee=()=>{const t=s.useContext(ce),a=s.useContext(de),o=s.useContext(me);return a||t?e.jsx(e.Fragment,{}):e.jsx(e.Fragment,{children:e.jsx(T.Provider,{value:o.blockSize,children:e.jsx(Y.Provider,{value:o.blocks,children:e.jsx(E.Provider,{value:De,children:e.jsxs(W,{children:[e.jsxs(z,{children:[e.jsx(u,{text:"Block size"}),e.jsxs(S,{children:[e.jsx(We,{}),e.jsx(u,{text:"Average"})]})]}),e.jsx(D,{})]})})})})})};try{ee.displayName="BlockSizeHistogram",ee.__docgenInfo={description:"",displayName:"BlockSizeHistogram",props:{}}}catch{}export{ee as B,T as H,W as P,D as S,S as V,Y as a,E as b,z as c,v as d};
