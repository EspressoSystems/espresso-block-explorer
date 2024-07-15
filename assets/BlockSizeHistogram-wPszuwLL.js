var le=Object.defineProperty;var ce=(e,o,n)=>o in e?le(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n;var p=(e,o,n)=>(ce(e,typeof o!="symbol"?o+"":o,n),n);import{a as d,j as t,F as u}from"./jsx-runtime-C8OW3RLV.js";import{L as de,D as me}from"./LoadingProvider-D-gSICWy.js";import{a as he}from"./higher_order-BhpYKJuV.js";import{j as M,l as ne}from"./typography-CBcnIq8a.js";import{T as y}from"./Text-BU7JBOLk.js";import{C as pe}from"./NumberFormattersProvider-B153Cyqz.js";import{r as ge,R as a}from"./index-BwDkhjyp.js";import{u as se,b as ue,g as fe,a as xe,c as ye,d as ve,e as _e,f as He}from"./SVGToolTip-DOfXbiYJ.js";import{A as T}from"./AffineTransform-Dl54L-L7.js";import{N as I}from"./NumberText-CEiknsW6.js";import{P as be}from"./index-Dk74W0Oi.js";import"./ByteSizeText-Dm-Xof9e.js";import"./DateTimeText-CbTfWNwF.js";import"./RelativeTimeText-CJcgDeEz.js";import"./TimeText-Bc4kADFb.js";import{H as Ce}from"./Heading2-Bs5hWmcH.js";const Te=M("label"),Ne=ne("div"),Pe=e=>t(Te,{children:e.children}),Se=e=>t(Ne,{className:"value",children:e.children}),V=({className:e,children:o,...n})=>d("div",{...n,className:he(e,"value-labeled"),children:[t(Se,{className:"value",children:o[0]},0),t(Pe,{className:"label",children:o[1]},1)]});try{V.displayName="ValueLabeled",V.__docgenInfo={description:`TabledLabeledValue is a component that is meant to display a label and
value pair of components, and lay them out depending on the screen size
of the device in question.

If on a sufficiently large device, they should appear side by side as
if in a full sized table element. Otherwise, they should appear as
a single element of sufficient size.`,displayName:"ValueLabeled",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const N=e=>ge.useContext(pe).variableBytes.format(e.bytes);try{N.displayName="VariableByteSizeText",N.__docgenInfo={description:"VariableByteSizeText is a simple Text element for rendering the bytes given\nin a localized format that can support variable notation for the bytes.\n\nIt achieves this by using the `variableBytes` formatter from the\n`CurrencyNumberFormatters` context.",displayName:"VariableByteSizeText",props:{bytes:{defaultValue:null,description:"",name:"bytes",required:!0,type:{name:"number"}}}}}catch{}const S=class S{constructor(o,n,s,i,r){p(this,"min");p(this,"max");p(this,"mean");p(this,"total");p(this,"count");p(this,"length");this.min=o,this.max=n,this.total=s,this.count=i,this.length=r,this.mean=s/i}static compute(o){return Ae(o)}};p(S,"empty",new S(0,0,0,0,0));let g=S;function Ae(e){const o=e.length;if(o===0)return new g(0,0,0,0,0);let n=null,s=null,i=0,r=0;for(let m=0;m<o;m++){const h=e[m];h!==null&&(r++,i+=h,(n===null||h<n)&&(n=h),(s===null||h>s)&&(s=h))}const c=n===s;return c&&n!==0&&(n=0),c&&s===0&&(s=1),new g(n??0,s??0,i??0,r,o)}const P=e=>t(I,{number:e.value});P.propTypes={value:be.number.isRequired};try{P.displayName="HistogramDefaultLabel",P.__docgenInfo={description:`HistogramDefaultLabel is a simple label for displaying a numeric value for
the histogram.  It is the default, which means it just renders the number
using the \`NumberText\` component.  If the axis needs to be labeled, then
the element should be specified.`,displayName:"HistogramDefaultLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const q=a.createContext(417),Le=a.createContext(152),v=a.createContext(360),f=a.createContext(152),A=a.createContext([]),j=a.createContext([]),_=a.createContext(g.empty),ie=a.createContext(g.empty),F=a.createContext([]),E=a.createContext(0),re=a.createContext(0),U=a.createContext({x:0,y:0,width:0,height:0}),O=a.createContext(null),H=a.createContext(T.identity),Ie=a.createContext(T.identity),X=a.createContext(P),Ve=16,K=24,Q=417,we=176,w=e=>{const[o,n]=se(),s=Math.floor((n==null?void 0:n.width)??Q),i=Math.floor(s*(we/Q));return t(q.Provider,{value:s,children:t(Le.Provider,{value:i,children:t(v.Provider,{value:s-Ve,children:t(f.Provider,{value:i-K,children:t("svg",{ref:o,role:"graphics-datachart",viewBox:`0 0 ${s} ${i}`,children:t("g",{transform:`translate(0, ${K/2})`,children:e.children})})})})})})};try{w.displayName="HistogramBase",w.__docgenInfo={description:`HistogramBase is a component that provides the base SVG element for a
histogram.`,displayName:"HistogramBase",props:{}}}catch{}const Ge=M("text"),G=({children:e})=>{const o=a.useContext(_),n=a.useContext(H),s=4,i=[],r=o.max/s;for(let c=0;c<=n.inputMax&&r>0;c+=r)i.push(c);return t(F.Provider,{value:i,children:e})},Re=60,R=()=>{const e=a.useContext(q),o=a.useContext(f),n=a.useContext(H),s=a.useContext(F),i=a.useContext(O);return t("g",{className:"histogram-y-guide-lines",children:s.map((r,c)=>t("line",{role:"graphics-tick",x1:(i==null?void 0:i.width)??Re,y1:o-n.transform(r),x2:e,y2:o-n.transform(r)},c))})},W=e=>{const o=a.useContext(f),n=a.useContext(F),s=a.useContext(H),i=a.useContext(X);return t("g",{ref:e.labelsRef,className:"histogram-y-axis-labels",role:"graphics-category",children:n.map((r,c)=>t(Ge,{x:0,y:o-s.transform(r),dominantBaseline:"middle",className:"histogram-y-axis-label",children:a.createElement(i,{value:r})},c))})};try{G.displayName="ProvideGuideLines",G.__docgenInfo={description:`ProvideGuideLines is a component that calculates the y axis data spacing for
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
- HistogramYAxisGuideLines`,displayName:"HistogramGuideLines",props:{}}}catch{}try{W.displayName="HistogramYAxisLabels",W.__docgenInfo={description:`HistogramYAxisLabels is a component that displays the labels for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramPlotHeight
- HistogramYAxisGuideLines
- HistogramRangeAffineTransform
- HistogramYAxisLabelComponent`,displayName:"HistogramYAxisLabels",props:{labelsRef:{defaultValue:null,description:"",name:"labelsRef",required:!0,type:{name:"RefObject<SVGGElement> | undefined"}}}}}catch{}const Z=ne("text"),ee=M("text"),te=10,We=2,C=14,ae=14,B=()=>{const e=a.useContext(A).length,o=a.useContext(U),n=a.useContext(E),s=a.useContext(f),i=n/e,r=o.width/2;return t(ue.Provider,{value:De,children:t(fe.Provider,{value:Be,children:t(xe.Provider,{value:s,children:t(ye.Provider,{value:o.x+r,children:t(ve.Provider,{value:o.y,children:t(_e.Provider,{value:i,children:t(He,{})})})})})})})},Be=()=>{const e=a.useContext(U),o=e.width/2;return d(u,{children:[t("circle",{className:"value-pointer--outer",cx:e.x+o,cy:e.y,r:te}),t("circle",{className:"value-pointer--inner",cx:e.x+o,cy:e.y,r:te-We})]})},De=()=>{const e=a.useContext(j),o=a.useContext(X),n=a.useContext(E),s=a.useContext(re);return s===null?d(u,{children:[t(Z,{className:"tooltip--value-label",x:0,y:C,textAnchor:"start",children:t(y,{text:"Missing Data"})}),d(ee,{className:"tooltip--value-label",x:0,y:C+ae,textAnchor:"start",children:[t(y,{text:"Block "}),t(I,{number:Number(e[0])+n})]})]}):d(u,{children:[t(Z,{className:"tooltip--value-label",x:0,y:C,textAnchor:"start",children:a.createElement(o,{value:s})}),d(ee,{className:"tooltip--value-label",x:0,y:C+ae,textAnchor:"start",children:[t(y,{text:"Block "}),t(I,{number:Number(e[n])})]})]})};try{B.displayName="HistogramTooltip",B.__docgenInfo={description:"",displayName:"HistogramTooltip",props:{}}}catch{}const L=16,D=()=>{const e=a.useContext(q),o=a.useContext(v),n=a.useContext(f),s=a.useContext(A),i=a.useContext(_),r=a.useContext(H);if(i.length===0)return t(u,{});const c=(o-L-L)/i.length,m=Math.floor(c),h=m*i.length,b=s.map(x=>r.transform(Number(x))),J=e-h-L;return d(u,{children:[t("g",{className:"histogram-plot",transform:`translate(${J},0)`,role:"graphics-datagroup",children:s.map((x,l)=>x===null?t("rect",{role:"graphics-dataunit",className:"missing",x:l*m,y:0,width:m-1,height:n,"data-offset":l},`missing-${l}`):t("rect",{role:"graphics-dataunit",className:"bar",x:l*m,y:n-b[l],width:m-1,height:b[l],"data-offset":l},`bar-${l}`))}),t("g",{className:"histogram-plot",transform:`translate(${J},0)`,children:s.map((x,l)=>d("g",{children:[t("rect",{className:"bbox",x:l*m,y:0,height:n,width:m}),t(re.Provider,{value:x,children:t(E.Provider,{value:l,children:t(U.Provider,{value:{x:l*m,y:n-b[l],width:m,height:b[l]},children:t(B,{})})})})]},`tooltip-${l}`))})]})};try{D.displayName="HistogramPlot",D.__docgenInfo={description:`HistogramPlot is a component that takes the given data and creates
rectangles for it in relation to the statistics that it requires.
It is expected to have the following contexts set and provided for
it:

- HistogramGraphWidth
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramRange
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"HistogramPlot",props:{}}}catch{}const z=({children:e})=>{const o=a.useContext(v),n=a.useContext(f),s=a.useContext(ie),i=a.useContext(_),r=new T(s.min,s.max,0,o),c=new T(0,i.max,0,n);return t(Ie.Provider,{value:r,children:t(H.Provider,{value:c,children:e})})},k=({children:e})=>{const o=a.useContext(j),n=a.useContext(A),s=g.compute(o),i=g.compute(n);return t(ie.Provider,{value:s,children:t(_.Provider,{value:i,children:e})})},Y=()=>{const[e,o]=se();return t(w,{children:t(O.Provider,{value:o,children:t(ze,{children:t(z,{children:d(G,{children:[d("g",{role:"graphics-axis",children:[t(R,{}),t(W,{labelsRef:e})]}),t(D,{})]})})})})})},ze=e=>{const o=a.useContext(v),n=a.useContext(O);return t(v.Provider,{value:Math.floor(o-((n==null?void 0:n.width)??0)),children:e.children})};try{z.displayName="ProvideAffineTransforms",z.__docgenInfo={description:`ProvideAffineTransforms is a component that calculates the affineTransforms for
the domain and range of the histogram and provides them to its children.

It provides the following contexts:
- HistogramDomainAffineTransform
- HistogramRangeAffineTransform

It consumes the following contexts:
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramDomainStatistics
 - HistogramRangeStatistics`,displayName:"ProvideAffineTransforms",props:{}}}catch{}try{k.displayName="ProvideDataStatistics",k.__docgenInfo={description:`ProvideDataStatistics is a component that calculates the statistics for the
domain and range of the histogram and provides them to its children.

It provides the following contexts:
- HistogramDomainStatistics
- HistogramRangeStatistics`,displayName:"ProvideDataStatistics",props:{}}}catch{}try{Y.displayName="SimpleHistogram",Y.__docgenInfo={description:"",displayName:"SimpleHistogram",props:{}}}catch{}const $=e=>d("div",{className:"histogram-section-title",children:[t(Ce,{children:e.children[0]}),e.children[1]]});try{$.displayName="HistogramSectionTitle",$.__docgenInfo={description:`HistogramSectionTitle is a title element that is displayed above a histogram.
It is expected to label the histogram itself with a title, and have some data
next to it that shows some metric aggregation of the data from the histogram
itself.

Example:
+----------------------------------+
| Block time                 10.5s |
|                          Average |
+----------------------------------+`,displayName:"HistogramSectionTitle",props:{}}}catch{}const ke=()=>{const e=a.useContext(_);return t(N,{bytes:e.mean})},Ye=e=>t(N,{bytes:e.value}),oe=()=>{const e=a.useContext(de),o=a.useContext(me);return e?t(u,{}):t(u,{children:t(A.Provider,{value:o.blockSize,children:t(j.Provider,{value:o.blocks,children:t(X.Provider,{value:Ye,children:d(k,{children:[d($,{children:[t(y,{text:"Block size"}),d(V,{children:[t(ke,{}),t(y,{text:"Average"})]})]}),t(Y,{})]})})})})})};try{oe.displayName="BlockSizeHistogram",oe.__docgenInfo={description:"",displayName:"BlockSizeHistogram",props:{}}}catch{}export{oe as B,A as H,k as P,Y as S,V,j as a,X as b,$ as c,_ as d};
