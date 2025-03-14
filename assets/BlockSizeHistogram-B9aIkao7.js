var de=Object.defineProperty;var me=(t,a,o)=>a in t?de(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o;var p=(t,a,o)=>me(t,typeof a!="symbol"?a+"":a,o);import{j as e}from"./jsx-runtime-BlAj40OV.js";import{E as he,L as pe,D as ge}from"./LoadingProvider-BbWjDjJb.js";import{a as se}from"./Card-RHc01-Zp.js";import{S as ae,W as xe}from"./SkeletonContent-CtSG0ZPy.js";import{a as oe}from"./higher_order-DnPEgWEz.js";import{j as k,l as ne}from"./typography-D2UEeKZ7.js";import{T as m}from"./Text-BU7JBOLk.js";import{V as ie}from"./TransactionsPerSecondText-C7pMj7u0.js";import"./CircularProgressIndicator-CCTWMgAg.js";import"./ContainerLoading-DxQsa2On.js";import{R as s}from"./index-Cs7sjTYM.js";import{u as re,b as ue,g as fe,a as ve,c as _e,d as ye,e as He,f as je}from"./SVGToolTip-PiyluX_7.js";import{A as j}from"./AffineTransform-DiV9SxhF.js";import{N as A}from"./NumberText-C4Z_0tU7.js";import{P as be}from"./index-Dk74W0Oi.js";import"./ByteSizeText-Dv1cMyzR.js";import"./CopyHex-I8U4Tz6Y.js";import"./DateTimeText-nfJttqAO.js";import"./FullHexText-CFJmCACv.js";import"./HexText-CKXPCoyq.js";import"./MoneyText-B78eRiA1.js";import"./RelativeTimeText-MUfD-2Qu.js";import"./TaggedBase64Text-0Q1D1i_-.js";import"./TimeText-D4oQFb1K.js";import{H as Ce}from"./Heading2-Dp8h0y0d.js";const Ne=k("label"),Te=ne("div"),Pe=t=>e.jsx(Ne,{children:t.children}),Se=t=>e.jsx(Te,{className:"value",children:t.children}),b=({className:t,children:a,...o})=>e.jsxs("div",{...o,className:oe(t,"value-labeled"),children:[e.jsx(Se,{className:"value",children:a[0]},0),e.jsx(Pe,{className:"label",children:a[1]},1)]});try{b.displayName="ValueLabeled",b.__docgenInfo={description:`TabledLabeledValue is a component that is meant to display a label and
value pair of components, and lay them out depending on the screen size
of the device in question.

If on a sufficiently large device, they should appear side by side as
if in a full sized table element. Otherwise, they should appear as
a single element of sufficient size.`,displayName:"ValueLabeled",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const T=class T{constructor(a,o,n,i,r){p(this,"min");p(this,"max");p(this,"mean");p(this,"total");p(this,"count");p(this,"length");this.min=a,this.max=o,this.total=n,this.count=i,this.length=r,this.mean=n/i}get nullableMean(){return this.count===0?null:this.mean}static compute(a){return Ae(a)}};p(T,"empty",new T(0,0,0,0,0));let g=T;function Ae(t){const a=t.length;if(a===0)return new g(0,0,0,0,0);let o=null,n=null,i=0,r=0;for(let d=0;d<a;d++){const h=t[d];h!==null&&(r++,i+=h,(o===null||h<o)&&(o=h),(n===null||h>n)&&(n=h))}const c=o===n;return c&&o!==0&&(o=0),c&&n===0&&(n=1),new g(o??0,n??0,i??0,r,a)}const C=t=>e.jsx(A,{number:t.value});C.propTypes={value:be.number.isRequired};try{C.displayName="HistogramDefaultLabel",C.__docgenInfo={description:`HistogramDefaultLabel is a simple label for displaying a numeric value for
the histogram.  It is the default, which means it just renders the number
using the \`NumberText\` component.  If the axis needs to be labeled, then
the element should be specified.`,displayName:"HistogramDefaultLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const Y=s.createContext(417),Le=s.createContext(152),u=s.createContext(360),x=s.createContext(152),P=s.createContext([]),$=s.createContext([]),v=s.createContext(g.empty),le=s.createContext(g.empty),M=s.createContext([]),F=s.createContext(0),ce=s.createContext(0),q=s.createContext({x:0,y:0,width:0,height:0}),E=s.createContext(null),_=s.createContext(j.identity),we=s.createContext(j.identity),U=s.createContext(C),Re=16,X=24,J=417,Ge=176,L=t=>{const[a,o]=re(),n=Math.floor((o==null?void 0:o.width)??J),i=Math.floor(n*(Ge/J));return e.jsx(Y.Provider,{value:n,children:e.jsx(Le.Provider,{value:i,children:e.jsx(u.Provider,{value:n-Re,children:e.jsx(x.Provider,{value:i-X,children:e.jsx("svg",{ref:a,role:"graphics-datachart",viewBox:`0 0 ${n} ${i}`,children:e.jsx("g",{transform:`translate(0, ${X/2})`,children:t.children})})})})})})};try{L.displayName="HistogramBase",L.__docgenInfo={description:`HistogramBase is a component that provides the base SVG element for a
histogram.`,displayName:"HistogramBase",props:{}}}catch{}const Ie=k("text"),w=({children:t})=>{const a=s.useContext(v),o=s.useContext(_),n=4,i=[],r=a.max/n;for(let c=0;c<=o.inputMax&&r>0;c+=r)i.push(c);return e.jsx(M.Provider,{value:i,children:t})},Ve=60,R=()=>{const t=s.useContext(Y),a=s.useContext(x),o=s.useContext(_),n=s.useContext(M),i=s.useContext(E);return e.jsx("g",{className:"histogram-y-guide-lines",children:n.map((r,c)=>e.jsx("line",{role:"graphics-tick",x1:(i==null?void 0:i.width)??Ve,y1:a-o.transform(r),x2:t,y2:a-o.transform(r)},c))})},G=t=>{const a=s.useContext(x),o=s.useContext(M),n=s.useContext(_),i=s.useContext(U);return e.jsx("g",{ref:t.labelsRef,className:"histogram-y-axis-labels",role:"graphics-category",children:o.map((r,c)=>e.jsx(Ie,{x:0,y:a-n.transform(r),dominantBaseline:"middle",className:"histogram-y-axis-label",children:s.createElement(i,{value:r})},c))})};try{w.displayName="ProvideGuideLines",w.__docgenInfo={description:`ProvideGuideLines is a component that calculates the y axis data spacing for
the histogram and provides.

It provides the following contexts:
- HistogramYAxisGuideLines

While consuming the following contexts:
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"ProvideGuideLines",props:{}}}catch{}try{R.displayName="HistogramGuideLines",R.__docgenInfo={description:`HistogramGuidLines is a component that displays the guide lines for the y-axis
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
- HistogramYAxisLabelComponent`,displayName:"HistogramYAxisLabels",props:{labelsRef:{defaultValue:null,description:"",name:"labelsRef",required:!0,type:{name:"RefObject<SVGGElement> | undefined"}}}}}catch{}const K=ne("text"),Q=k("text"),Z=10,We=2,H=14,ee=14,I=()=>{const t=s.useContext(P).length,a=s.useContext(q),o=s.useContext(F),n=s.useContext(x),i=o/t,r=a.width/2;return e.jsx(ue.Provider,{value:ze,children:e.jsx(fe.Provider,{value:De,children:e.jsx(ve.Provider,{value:n,children:e.jsx(_e.Provider,{value:a.x+r,children:e.jsx(ye.Provider,{value:a.y,children:e.jsx(He.Provider,{value:i,children:e.jsx(je,{})})})})})})})},De=()=>{const t=s.useContext(q),a=t.width/2;return e.jsxs(e.Fragment,{children:[e.jsx("circle",{className:"value-pointer--outer",cx:t.x+a,cy:t.y,r:Z}),e.jsx("circle",{className:"value-pointer--inner",cx:t.x+a,cy:t.y,r:Z-We})]})},ze=()=>{const t=s.useContext($),a=s.useContext(U),o=s.useContext(F),n=s.useContext(ce);return n===null?e.jsxs(e.Fragment,{children:[e.jsx(K,{className:"tooltip--value-label",x:0,y:H,textAnchor:"start",children:e.jsx(m,{text:"Missing Data"})}),e.jsxs(Q,{className:"tooltip--value-label",x:0,y:H+ee,textAnchor:"start",children:[e.jsx(m,{text:"Block "}),e.jsx(A,{number:Number(t[0])+o})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(K,{className:"tooltip--value-label",x:0,y:H,textAnchor:"start",children:s.createElement(a,{value:n})}),e.jsxs(Q,{className:"tooltip--value-label",x:0,y:H+ee,textAnchor:"start",children:[e.jsx(m,{text:"Block "}),e.jsx(A,{number:Number(t[o])})]})]})};try{I.displayName="HistogramTooltip",I.__docgenInfo={description:"",displayName:"HistogramTooltip",props:{}}}catch{}const S=16,V=()=>{const t=s.useContext(Y),a=s.useContext(u),o=s.useContext(x),n=s.useContext(P),i=s.useContext(v),r=s.useContext(_);if(i.length===0)return e.jsx(e.Fragment,{});const c=(a-S-S)/i.length,d=Math.floor(c),h=d*i.length,y=n.map(f=>r.transform(Number(f))),O=t-h-S;return e.jsxs(e.Fragment,{children:[e.jsx("g",{className:"histogram-plot",transform:`translate(${O},0)`,role:"graphics-datagroup",children:n.map((f,l)=>f===null?e.jsx("rect",{role:"graphics-dataunit",className:"missing",x:l*d,y:0,width:d-1,height:o,"data-offset":l},`missing-${l}`):e.jsx("rect",{role:"graphics-dataunit",className:"bar",x:l*d,y:o-y[l],width:d-1,height:y[l],"data-offset":l},`bar-${l}`))}),e.jsx("g",{className:"histogram-plot",transform:`translate(${O},0)`,children:n.map((f,l)=>e.jsxs("g",{children:[e.jsx("rect",{className:"bbox",x:l*d,y:0,height:o,width:d}),e.jsx(ce.Provider,{value:f,children:e.jsx(F.Provider,{value:l,children:e.jsx(q.Provider,{value:{x:l*d,y:o-y[l],width:d,height:y[l]},children:e.jsx(I,{})})})})]},`tooltip-${l}`))})]})};try{V.displayName="HistogramPlot",V.__docgenInfo={description:`HistogramPlot is a component that takes the given data and creates
rectangles for it in relation to the statistics that it requires.
It is expected to have the following contexts set and provided for
it:

- HistogramGraphWidth
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramRange
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"HistogramPlot",props:{}}}catch{}const W=({children:t})=>{const a=s.useContext(u),o=s.useContext(x),n=s.useContext(le),i=s.useContext(v),r=new j(n.min,n.max,0,a),c=new j(0,i.max,0,o);return e.jsx(we.Provider,{value:r,children:e.jsx(_.Provider,{value:c,children:t})})},D=({children:t})=>{const a=s.useContext($),o=s.useContext(P),n=g.compute(a),i=g.compute(o);return e.jsx(le.Provider,{value:n,children:e.jsx(v.Provider,{value:i,children:t})})},z=()=>{const[t,a]=re();return e.jsx(L,{children:e.jsx(E.Provider,{value:a,children:e.jsx(Be,{children:e.jsx(W,{children:e.jsxs(w,{children:[e.jsxs("g",{role:"graphics-axis",children:[e.jsx(R,{}),e.jsx(G,{labelsRef:t})]}),e.jsx(V,{})]})})})})})},Be=t=>{const a=s.useContext(u),o=s.useContext(E);return e.jsx(u.Provider,{value:Math.floor(a-((o==null?void 0:o.width)??0)),children:t.children})},B=()=>{const t=s.useContext(u),a=s.useContext(x),o=t/a;return e.jsx("div",{className:"histogram--placeholder",style:{paddingBottom:`${1/o*100}%`},children:e.jsx(ae,{})})};try{W.displayName="ProvideAffineTransforms",W.__docgenInfo={description:`ProvideAffineTransforms is a component that calculates the affineTransforms for
the domain and range of the histogram and provides them to its children.

It provides the following contexts:
- HistogramDomainAffineTransform
- HistogramRangeAffineTransform

It consumes the following contexts:
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramDomainStatistics
 - HistogramRangeStatistics`,displayName:"ProvideAffineTransforms",props:{}}}catch{}try{D.displayName="ProvideDataStatistics",D.__docgenInfo={description:`ProvideDataStatistics is a component that calculates the statistics for the
domain and range of the histogram and provides them to its children.

It provides the following contexts:
- HistogramDomainStatistics
- HistogramRangeStatistics`,displayName:"ProvideDataStatistics",props:{}}}catch{}try{z.displayName="SimpleHistogram",z.__docgenInfo={description:"",displayName:"SimpleHistogram",props:{}}}catch{}try{B.displayName="SimpleHistogramPlaceholder",B.__docgenInfo={description:`SimpleHistogramPlaceholder is a placeholder component that is displayed when
the histogram is loading.`,displayName:"SimpleHistogramPlaceholder",props:{}}}catch{}const N=t=>e.jsxs("div",{className:oe(t.className,"histogram-section-title"),children:[e.jsx(Ce,{children:t.children[0]}),t.children[1]]});try{N.displayName="HistogramSectionTitle",N.__docgenInfo={description:`HistogramSectionTitle is a title element that is displayed above a histogram.
It is expected to label the histogram itself with a title, and have some data
next to it that shows some metric aggregation of the data from the histogram
itself.

Example:
+----------------------------------+
| Block time                 10.5s |
|                          Average |
+----------------------------------+`,displayName:"HistogramSectionTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ke=xe(se),Ye=()=>{const t=s.useContext(v);return Number.isNaN(t.mean)?e.jsx(m,{text:"-"}):e.jsx(ie,{bytes:t.mean})},$e=t=>Number.isNaN(t.value)?e.jsx(m,{text:"-"}):e.jsx(ie,{bytes:t.value}),te=()=>{const t=s.useContext(he),a=s.useContext(pe),o=s.useContext(ge);return a?e.jsxs(ke,{className:"block-size-histogram",children:[e.jsxs(N,{children:[e.jsx(m,{text:"Block size"}),e.jsxs(b,{children:[e.jsx(ae,{}),e.jsx(m,{text:"Average"})]})]}),e.jsx(B,{})]}):t?e.jsx(e.Fragment,{}):e.jsx(se,{className:"block-size-histogram",children:e.jsx(P.Provider,{value:o.blockSize,children:e.jsx($.Provider,{value:o.blocks,children:e.jsx(U.Provider,{value:$e,children:e.jsxs(D,{children:[e.jsxs(N,{children:[e.jsx(m,{text:"Block size"}),e.jsxs(b,{children:[e.jsx(Ye,{}),e.jsx(m,{text:"Average"})]})]}),e.jsx(z,{})]})})})})})};try{te.displayName="BlockSizeHistogram",te.__docgenInfo={description:"",displayName:"BlockSizeHistogram",props:{}}}catch{}export{te as B,g as D,N as H,D as P,B as S,b as V,P as a,$ as b,U as c,z as d,v as e};
