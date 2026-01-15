import{j as t,R as s}from"./iframe-ChMM8fie.js";import{a as K}from"./card-sFx9rmY6.js";import{V as E}from"./value_labeled-m0_-_cYZ.js";import{W as ot}from"./loading_shimmer--9TEp1Ur.js";import{S as Q}from"./skeleton_content-D_9h32no.js";import{D as at}from"./data_provider-DipucN8t.js";import{b as nt,L as it}from"./loading_provider-DLgXNpIx.js";import{T as d}from"./text-CEhLEmI-.js";import{V as Z}from"./transactions_per_second_text-Dq-dziEi.js";import{A as y}from"./affine_transform-UCCpzMIM.js";import{N}from"./number_text-CahUOGB6.js";import{u as tt,b as rt,g as ct,a as lt,c as mt,d as dt,e as ht,f as gt}from"./svg_tool_tip-CCW323fW.js";import"./byte_size_text-BCct5yUn.js";import"./date_time_text-CsqteGv_.js";import"./full_hex_text-wUTAmwfT.js";import"./hex_text-DiwkJ0fA.js";import"./money_text-Bga5xRSR.js";import"./relative_time_since_date_text-CpWnS_tf.js";import"./tagged_base64_text-DfwL_HLi.js";import"./time_text-CGiZUZ1Y.js";import{a as xt}from"./higher_order-BDzlKa4m.js";import{a as pt}from"./typography-CXTpHQ-1.js";class g{min;max;mean;total;count;length;get nullableMean(){return this.count===0?null:this.mean}constructor(o,a,n,i,r){this.min=o,this.max=a,this.total=n,this.count=i,this.length=r,this.mean=n/i}static compute(o){return ut(o)}static empty=new g(0,0,0,0,0)}function ut(e){const o=e.length;if(o===0)return new g(0,0,0,0,0);let a=null,n=null,i=0,r=0;for(let m=0;m<o;m++){const h=e[m];h!==null&&(r++,i+=h,(a===null||h<a)&&(a=h),(n===null||h>n)&&(n=h))}const l=a===n;return l&&a!==0&&(a=0),l&&n===0&&(n=1),new g(a??0,n??0,i??0,r,o)}const P=e=>t.jsx(N,{number:e.value});try{P.displayName="HistogramDefaultLabel",P.__docgenInfo={description:`HistogramDefaultLabel is a simple label for displaying a numeric value for
the histogram.  It is the default, which means it just renders the number
using the \`NumberText\` component.  If the axis needs to be labeled, then
the element should be specified.`,displayName:"HistogramDefaultLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const B=s.createContext(417),ft=s.createContext(152),p=s.createContext(360),x=s.createContext(152),C=s.createContext([]),D=s.createContext([]),f=s.createContext(g.empty),et=s.createContext(g.empty),k=s.createContext([]),z=s.createContext(0),st=s.createContext(0),Y=s.createContext({x:0,y:0,width:0,height:0}),M=s.createContext(null),v=s.createContext(y.identity),vt=s.createContext(y.identity),$=s.createContext(P),_t=16,q=24,O=417,Ht=176,S=e=>{const[o,a]=tt(),n=Math.floor(a?.width??O),i=Math.floor(n*(Ht/O));return t.jsx(B.Provider,{value:n,children:t.jsx(ft.Provider,{value:i,children:t.jsx(p.Provider,{value:n-_t,children:t.jsx(x.Provider,{value:i-q,children:t.jsx("svg",{ref:o,role:"graphics-datachart",viewBox:`0 0 ${n} ${i}`,children:t.jsx("g",{transform:`translate(0, ${q/2})`,children:e.children})})})})})})};try{S.displayName="HistogramBase",S.__docgenInfo={description:`HistogramBase is a component that provides the base SVG element for a
histogram.`,displayName:"HistogramBase",props:{}}}catch{}const T=({children:e})=>{const o=s.useContext(f),a=s.useContext(v),n=4,i=[],r=o.max/n;for(let l=0;l<=a.inputMax&&r>0;l+=r)i.push(l);return t.jsx(k.Provider,{value:i,children:e})},yt=60,A=()=>{const e=s.useContext(B),o=s.useContext(x),a=s.useContext(v),n=s.useContext(k),i=s.useContext(M);return t.jsx("g",{className:"histogram-y-guide-lines",children:n.map((r,l)=>t.jsx("line",{role:"graphics-tick",x1:i?.width??yt,y1:o-a.transform(r),x2:e,y2:o-a.transform(r)},l))})},R=e=>{const o=s.useContext(x),a=s.useContext(k),n=s.useContext(v),i=s.useContext($);return t.jsx("g",{ref:e.labelsRef,className:"histogram-y-axis-labels",role:"graphics-category",children:a.map((r,l)=>t.jsx("text",{x:0,y:o-n.transform(r),dominantBaseline:"middle",className:"histogram-y-axis-label",children:s.createElement(i,{value:r})},l))})};try{T.displayName="ProvideGuideLines",T.__docgenInfo={description:`ProvideGuideLines is a component that calculates the y axis data spacing for
the histogram and provides.

It provides the following contexts:
- HistogramYAxisGuideLines

While consuming the following contexts:
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"ProvideGuideLines",props:{}}}catch{}try{A.displayName="HistogramGuideLines",A.__docgenInfo={description:`HistogramGuidLines is a component that displays the guide lines for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramGraphWidth
- HistogramPlotHeight
- HistogramRangeAffineTransform
- HistogramYAxisGuideLines`,displayName:"HistogramGuideLines",props:{}}}catch{}try{R.displayName="HistogramYAxisLabels",R.__docgenInfo={description:`HistogramYAxisLabels is a component that displays the labels for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramPlotHeight
- HistogramYAxisGuideLines
- HistogramRangeAffineTransform
- HistogramYAxisLabelComponent`,displayName:"HistogramYAxisLabels",props:{labelsRef:{defaultValue:null,description:"",name:"labelsRef",required:!0,type:{name:"RefObject<SVGSVGElement | null> | undefined"}}}}}catch{}const U=10,jt=2,H=14,X=14,w=()=>{const e=s.useContext(C).length,o=s.useContext(Y),a=s.useContext(z),n=s.useContext(x),i=a/e,r=o.width/2;return t.jsx(rt.Provider,{value:bt,children:t.jsx(ct.Provider,{value:Ct,children:t.jsx(lt.Provider,{value:n,children:t.jsx(mt.Provider,{value:o.x+r,children:t.jsx(dt.Provider,{value:o.y,children:t.jsx(ht.Provider,{value:i,children:t.jsx(gt,{})})})})})})})},Ct=()=>{const e=s.useContext(Y),o=e.width/2;return t.jsxs(t.Fragment,{children:[t.jsx("circle",{className:"value-pointer--outer",cx:e.x+o,cy:e.y,r:U}),t.jsx("circle",{className:"value-pointer--inner",cx:e.x+o,cy:e.y,r:U-jt})]})},bt=()=>{const e=s.useContext(D),o=s.useContext($),a=s.useContext(z),n=s.useContext(st);return n===null?t.jsxs(t.Fragment,{children:[t.jsx("text",{className:"tooltip--value-label",x:0,y:H,textAnchor:"start",children:t.jsx(d,{text:"Missing Data"})}),t.jsxs("text",{className:"tooltip--value-label",x:0,y:H+X,textAnchor:"start",children:[t.jsx(d,{text:"Block "}),t.jsx(N,{number:Number(e[0])+a})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("text",{className:"tooltip--value-label",x:0,y:H,textAnchor:"start",children:s.createElement(o,{value:n})}),t.jsxs("text",{className:"tooltip--value-label",x:0,y:H+X,textAnchor:"start",children:[t.jsx(d,{text:"Block "}),t.jsx(N,{number:Number(e[a])})]})]})};try{w.displayName="HistogramTooltip",w.__docgenInfo={description:"",displayName:"HistogramTooltip",props:{}}}catch{}const b=16,G=()=>{const e=s.useContext(B),o=s.useContext(p),a=s.useContext(x),n=s.useContext(C),i=s.useContext(f),r=s.useContext(v);if(i.length===0)return t.jsx(t.Fragment,{});const l=(o-b-b)/i.length,m=Math.floor(l),h=m*i.length,_=n.map(u=>r.transform(Number(u))),F=e-h-b;return t.jsxs(t.Fragment,{children:[t.jsx("g",{className:"histogram-plot",transform:`translate(${F},0)`,role:"graphics-datagroup",children:n.map((u,c)=>u===null?t.jsx("rect",{role:"graphics-dataunit",className:"missing",x:c*m,y:0,width:m-1,height:a,"data-offset":c},`missing-${c}`):t.jsx("rect",{role:"graphics-dataunit",className:"bar",x:c*m,y:a-_[c],width:m-1,height:_[c],"data-offset":c},`bar-${c}`))}),t.jsx("g",{className:"histogram-plot",transform:`translate(${F},0)`,children:n.map((u,c)=>t.jsxs("g",{children:[t.jsx("rect",{className:"bbox",x:c*m,y:0,height:a,width:m}),t.jsx(st.Provider,{value:u,children:t.jsx(z.Provider,{value:c,children:t.jsx(Y.Provider,{value:{x:c*m,y:a-_[c],width:m,height:_[c]},children:t.jsx(w,{})})})})]},`tooltip-${c}`))})]})};try{G.displayName="HistogramPlot",G.__docgenInfo={description:`HistogramPlot is a component that takes the given data and creates
rectangles for it in relation to the statistics that it requires.
It is expected to have the following contexts set and provided for
it:

- HistogramGraphWidth
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramRange
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"HistogramPlot",props:{}}}catch{}const L=({children:e})=>{const o=s.useContext(p),a=s.useContext(x),n=s.useContext(et),i=s.useContext(f),r=new y(n.min,n.max,0,o),l=new y(0,i.max,0,a);return t.jsx(vt.Provider,{value:r,children:t.jsx(v.Provider,{value:l,children:e})})},I=({children:e})=>{const o=s.useContext(D),a=s.useContext(C),n=g.compute(o),i=g.compute(a);return t.jsx(et.Provider,{value:n,children:t.jsx(f.Provider,{value:i,children:e})})},V=()=>{const[e,o]=tt();return t.jsx(S,{children:t.jsx(M.Provider,{value:o,children:t.jsx(Nt,{children:t.jsx(L,{children:t.jsxs(T,{children:[t.jsxs("g",{role:"graphics-axis",children:[t.jsx(A,{}),t.jsx(R,{labelsRef:e})]}),t.jsx(G,{})]})})})})})},Nt=e=>{const o=s.useContext(p),a=s.useContext(M);return t.jsx(p.Provider,{value:Math.floor(o-(a?.width??0)),children:e.children})},W=()=>{const e=s.useContext(p),o=s.useContext(x),a=e/o;return t.jsx("div",{className:"histogram--placeholder",style:{paddingBottom:`${1/a*100}%`},children:t.jsx(Q,{})})};try{L.displayName="ProvideAffineTransforms",L.__docgenInfo={description:`ProvideAffineTransforms is a component that calculates the affineTransforms for
the domain and range of the histogram and provides them to its children.

It provides the following contexts:
- HistogramDomainAffineTransform
- HistogramRangeAffineTransform

It consumes the following contexts:
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramDomainStatistics
 - HistogramRangeStatistics`,displayName:"ProvideAffineTransforms",props:{}}}catch{}try{I.displayName="ProvideDataStatistics",I.__docgenInfo={description:`ProvideDataStatistics is a component that calculates the statistics for the
domain and range of the histogram and provides them to its children.

It provides the following contexts:
- HistogramDomainStatistics
- HistogramRangeStatistics`,displayName:"ProvideDataStatistics",props:{}}}catch{}try{V.displayName="SimpleHistogram",V.__docgenInfo={description:"",displayName:"SimpleHistogram",props:{}}}catch{}try{W.displayName="SimpleHistogramPlaceholder",W.__docgenInfo={description:`SimpleHistogramPlaceholder is a placeholder component that is displayed when
the histogram is loading.`,displayName:"SimpleHistogramPlaceholder",props:{}}}catch{}const Pt=pt("h2"),j=e=>t.jsxs("div",{className:xt(e.className,"histogram-section-title"),children:[t.jsx(Pt,{children:e.children[0]}),e.children[1]]});try{j.displayName="HistogramSectionTitle",j.__docgenInfo={description:`HistogramSectionTitle is a title element that is displayed above a histogram.
It is expected to label the histogram itself with a title, and have some data
next to it that shows some metric aggregation of the data from the histogram
itself.

Example:
+----------------------------------+
| Block time                 10.5s |
|                          Average |
+----------------------------------+`,displayName:"HistogramSectionTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const St=ot(K),Tt=()=>{const e=s.useContext(f);return Number.isNaN(e.mean)?t.jsx(d,{text:"-"}):t.jsx(Z,{bytes:e.mean})},At=e=>Number.isNaN(e.value)?t.jsx(d,{text:"-"}):t.jsx(Z,{bytes:e.value}),J=()=>{const e=s.useContext(nt),o=s.useContext(it),a=s.useContext(at);return o?t.jsxs(St,{className:"block-size-histogram",children:[t.jsxs(j,{children:[t.jsx(d,{text:"Block size"}),t.jsxs(E,{children:[t.jsx(Q,{}),t.jsx(d,{text:"Average"})]})]}),t.jsx(W,{})]}):e?t.jsx(t.Fragment,{}):t.jsx(K,{className:"block-size-histogram",children:t.jsx(C.Provider,{value:a.blockSize,children:t.jsx(D.Provider,{value:a.blocks,children:t.jsx($.Provider,{value:At,children:t.jsxs(I,{children:[t.jsxs(j,{children:[t.jsx(d,{text:"Block size"}),t.jsxs(E,{children:[t.jsx(Tt,{}),t.jsx(d,{text:"Average"})]})]}),t.jsx(V,{})]})})})})})};try{J.displayName="BlockSizeHistogram",J.__docgenInfo={description:"",displayName:"BlockSizeHistogram",props:{}}}catch{}export{J as B,g as D,j as H,I as P,W as S,C as a,D as b,$ as c,V as d,f as e};
