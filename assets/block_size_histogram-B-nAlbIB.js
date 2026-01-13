import{j as t,R as s}from"./iframe-BwY8Nc_o.js";import{a as Z}from"./card-ib7QqidU.js";import{V as E}from"./value_labeled-4OGkiiJD.js";import{D as nt}from"./data_provider-BIkZvgj5.js";import{b as rt,L as lt}from"./loading_provider--Fab2jEg.js";import{T as d}from"./text-CEhLEmI-.js";import{V as tt}from"./transactions_per_second_text-CvJU-ydw.js";import{A as y}from"./affine_transform-UCCpzMIM.js";import{N}from"./number_text-v_ckRp1n.js";import{S as et}from"./skeleton_content-2CbNU9lX.js";import{u as st,b as ct,g as mt,a as dt,c as ht,d as gt,e as xt,f as pt}from"./svg_tool_tip-CfY5wQC2.js";import{k as ot,i as ut}from"./typography-PELJ4Pi9.js";import"./byte_size_text-CzTF4zt-.js";import"./date_time_text-B7XZh9vE.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-SnO3_FxC.js";import"./money_text-BxDHRD8P.js";import"./relative_time_since_date_text-k8xSGfZM.js";import"./tagged_base64_text-C_twqSLi.js";import"./time_text-hYMI7GpY.js";import{a as ft}from"./higher_order-CDuDe3l-.js";import{H as vt}from"./heading2--_TAz6HX.js";import{W as _t}from"./loading_shimmer-CxxRa7n9.js";class g{min;max;mean;total;count;length;get nullableMean(){return this.count===0?null:this.mean}constructor(o,a,i,n,r){this.min=o,this.max=a,this.total=i,this.count=n,this.length=r,this.mean=i/n}static compute(o){return Ht(o)}static empty=new g(0,0,0,0,0)}function Ht(e){const o=e.length;if(o===0)return new g(0,0,0,0,0);let a=null,i=null,n=0,r=0;for(let m=0;m<o;m++){const h=e[m];h!==null&&(r++,n+=h,(a===null||h<a)&&(a=h),(i===null||h>i)&&(i=h))}const c=a===i;return c&&a!==0&&(a=0),c&&i===0&&(i=1),new g(a??0,i??0,n??0,r,o)}const S=e=>t.jsx(N,{number:e.value});try{S.displayName="HistogramDefaultLabel",S.__docgenInfo={description:`HistogramDefaultLabel is a simple label for displaying a numeric value for
the histogram.  It is the default, which means it just renders the number
using the \`NumberText\` component.  If the axis needs to be labeled, then
the element should be specified.`,displayName:"HistogramDefaultLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const B=s.createContext(417),yt=s.createContext(152),p=s.createContext(360),x=s.createContext(152),C=s.createContext([]),D=s.createContext([]),f=s.createContext(g.empty),at=s.createContext(g.empty),k=s.createContext([]),z=s.createContext(0),it=s.createContext(0),Y=s.createContext({x:0,y:0,width:0,height:0}),$=s.createContext(null),v=s.createContext(y.identity),jt=s.createContext(y.identity),M=s.createContext(S),Ct=16,U=24,q=417,bt=176,P=e=>{const[o,a]=st(),i=Math.floor(a?.width??q),n=Math.floor(i*(bt/q));return t.jsx(B.Provider,{value:i,children:t.jsx(yt.Provider,{value:n,children:t.jsx(p.Provider,{value:i-Ct,children:t.jsx(x.Provider,{value:n-U,children:t.jsx("svg",{ref:o,role:"graphics-datachart",viewBox:`0 0 ${i} ${n}`,children:t.jsx("g",{transform:`translate(0, ${U/2})`,children:e.children})})})})})})};try{P.displayName="HistogramBase",P.__docgenInfo={description:`HistogramBase is a component that provides the base SVG element for a
histogram.`,displayName:"HistogramBase",props:{}}}catch{}const Nt=ot("text"),T=({children:e})=>{const o=s.useContext(f),a=s.useContext(v),i=4,n=[],r=o.max/i;for(let c=0;c<=a.inputMax&&r>0;c+=r)n.push(c);return t.jsx(k.Provider,{value:n,children:e})},St=60,A=()=>{const e=s.useContext(B),o=s.useContext(x),a=s.useContext(v),i=s.useContext(k),n=s.useContext($);return t.jsx("g",{className:"histogram-y-guide-lines",children:i.map((r,c)=>t.jsx("line",{role:"graphics-tick",x1:n?.width??St,y1:o-a.transform(r),x2:e,y2:o-a.transform(r)},c))})},R=e=>{const o=s.useContext(x),a=s.useContext(k),i=s.useContext(v),n=s.useContext(M);return t.jsx("g",{ref:e.labelsRef,className:"histogram-y-axis-labels",role:"graphics-category",children:a.map((r,c)=>t.jsx(Nt,{x:0,y:o-i.transform(r),dominantBaseline:"middle",className:"histogram-y-axis-label",children:s.createElement(n,{value:r})},c))})};try{T.displayName="ProvideGuideLines",T.__docgenInfo={description:`ProvideGuideLines is a component that calculates the y axis data spacing for
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
- HistogramYAxisLabelComponent`,displayName:"HistogramYAxisLabels",props:{labelsRef:{defaultValue:null,description:"",name:"labelsRef",required:!0,type:{name:"RefObject<SVGSVGElement | null> | undefined"}}}}}catch{}const O=ut("text"),X=ot("text"),J=10,Pt=2,H=14,K=14,w=()=>{const e=s.useContext(C).length,o=s.useContext(Y),a=s.useContext(z),i=s.useContext(x),n=a/e,r=o.width/2;return t.jsx(ct.Provider,{value:At,children:t.jsx(mt.Provider,{value:Tt,children:t.jsx(dt.Provider,{value:i,children:t.jsx(ht.Provider,{value:o.x+r,children:t.jsx(gt.Provider,{value:o.y,children:t.jsx(xt.Provider,{value:n,children:t.jsx(pt,{})})})})})})})},Tt=()=>{const e=s.useContext(Y),o=e.width/2;return t.jsxs(t.Fragment,{children:[t.jsx("circle",{className:"value-pointer--outer",cx:e.x+o,cy:e.y,r:J}),t.jsx("circle",{className:"value-pointer--inner",cx:e.x+o,cy:e.y,r:J-Pt})]})},At=()=>{const e=s.useContext(D),o=s.useContext(M),a=s.useContext(z),i=s.useContext(it);return i===null?t.jsxs(t.Fragment,{children:[t.jsx(O,{className:"tooltip--value-label",x:0,y:H,textAnchor:"start",children:t.jsx(d,{text:"Missing Data"})}),t.jsxs(X,{className:"tooltip--value-label",x:0,y:H+K,textAnchor:"start",children:[t.jsx(d,{text:"Block "}),t.jsx(N,{number:Number(e[0])+a})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(O,{className:"tooltip--value-label",x:0,y:H,textAnchor:"start",children:s.createElement(o,{value:i})}),t.jsxs(X,{className:"tooltip--value-label",x:0,y:H+K,textAnchor:"start",children:[t.jsx(d,{text:"Block "}),t.jsx(N,{number:Number(e[a])})]})]})};try{w.displayName="HistogramTooltip",w.__docgenInfo={description:"",displayName:"HistogramTooltip",props:{}}}catch{}const b=16,G=()=>{const e=s.useContext(B),o=s.useContext(p),a=s.useContext(x),i=s.useContext(C),n=s.useContext(f),r=s.useContext(v);if(n.length===0)return t.jsx(t.Fragment,{});const c=(o-b-b)/n.length,m=Math.floor(c),h=m*n.length,_=i.map(u=>r.transform(Number(u))),F=e-h-b;return t.jsxs(t.Fragment,{children:[t.jsx("g",{className:"histogram-plot",transform:`translate(${F},0)`,role:"graphics-datagroup",children:i.map((u,l)=>u===null?t.jsx("rect",{role:"graphics-dataunit",className:"missing",x:l*m,y:0,width:m-1,height:a,"data-offset":l},`missing-${l}`):t.jsx("rect",{role:"graphics-dataunit",className:"bar",x:l*m,y:a-_[l],width:m-1,height:_[l],"data-offset":l},`bar-${l}`))}),t.jsx("g",{className:"histogram-plot",transform:`translate(${F},0)`,children:i.map((u,l)=>t.jsxs("g",{children:[t.jsx("rect",{className:"bbox",x:l*m,y:0,height:a,width:m}),t.jsx(it.Provider,{value:u,children:t.jsx(z.Provider,{value:l,children:t.jsx(Y.Provider,{value:{x:l*m,y:a-_[l],width:m,height:_[l]},children:t.jsx(w,{})})})})]},`tooltip-${l}`))})]})};try{G.displayName="HistogramPlot",G.__docgenInfo={description:`HistogramPlot is a component that takes the given data and creates
rectangles for it in relation to the statistics that it requires.
It is expected to have the following contexts set and provided for
it:

- HistogramGraphWidth
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramRange
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"HistogramPlot",props:{}}}catch{}const L=({children:e})=>{const o=s.useContext(p),a=s.useContext(x),i=s.useContext(at),n=s.useContext(f),r=new y(i.min,i.max,0,o),c=new y(0,n.max,0,a);return t.jsx(jt.Provider,{value:r,children:t.jsx(v.Provider,{value:c,children:e})})},I=({children:e})=>{const o=s.useContext(D),a=s.useContext(C),i=g.compute(o),n=g.compute(a);return t.jsx(at.Provider,{value:i,children:t.jsx(f.Provider,{value:n,children:e})})},V=()=>{const[e,o]=st();return t.jsx(P,{children:t.jsx($.Provider,{value:o,children:t.jsx(Rt,{children:t.jsx(L,{children:t.jsxs(T,{children:[t.jsxs("g",{role:"graphics-axis",children:[t.jsx(A,{}),t.jsx(R,{labelsRef:e})]}),t.jsx(G,{})]})})})})})},Rt=e=>{const o=s.useContext(p),a=s.useContext($);return t.jsx(p.Provider,{value:Math.floor(o-(a?.width??0)),children:e.children})},W=()=>{const e=s.useContext(p),o=s.useContext(x),a=e/o;return t.jsx("div",{className:"histogram--placeholder",style:{paddingBottom:`${1/a*100}%`},children:t.jsx(et,{})})};try{L.displayName="ProvideAffineTransforms",L.__docgenInfo={description:`ProvideAffineTransforms is a component that calculates the affineTransforms for
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
the histogram is loading.`,displayName:"SimpleHistogramPlaceholder",props:{}}}catch{}const j=e=>t.jsxs("div",{className:ft(e.className,"histogram-section-title"),children:[t.jsx(vt,{children:e.children[0]}),e.children[1]]});try{j.displayName="HistogramSectionTitle",j.__docgenInfo={description:`HistogramSectionTitle is a title element that is displayed above a histogram.
It is expected to label the histogram itself with a title, and have some data
next to it that shows some metric aggregation of the data from the histogram
itself.

Example:
+----------------------------------+
| Block time                 10.5s |
|                          Average |
+----------------------------------+`,displayName:"HistogramSectionTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const wt=_t(Z),Gt=()=>{const e=s.useContext(f);return Number.isNaN(e.mean)?t.jsx(d,{text:"-"}):t.jsx(tt,{bytes:e.mean})},Lt=e=>Number.isNaN(e.value)?t.jsx(d,{text:"-"}):t.jsx(tt,{bytes:e.value}),Q=()=>{const e=s.useContext(rt),o=s.useContext(lt),a=s.useContext(nt);return o?t.jsxs(wt,{className:"block-size-histogram",children:[t.jsxs(j,{children:[t.jsx(d,{text:"Block size"}),t.jsxs(E,{children:[t.jsx(et,{}),t.jsx(d,{text:"Average"})]})]}),t.jsx(W,{})]}):e?t.jsx(t.Fragment,{}):t.jsx(Z,{className:"block-size-histogram",children:t.jsx(C.Provider,{value:a.blockSize,children:t.jsx(D.Provider,{value:a.blocks,children:t.jsx(M.Provider,{value:Lt,children:t.jsxs(I,{children:[t.jsxs(j,{children:[t.jsx(d,{text:"Block size"}),t.jsxs(E,{children:[t.jsx(Gt,{}),t.jsx(d,{text:"Average"})]})]}),t.jsx(V,{})]})})})})})};try{Q.displayName="BlockSizeHistogram",Q.__docgenInfo={description:"",displayName:"BlockSizeHistogram",props:{}}}catch{}export{Q as B,g as D,j as H,I as P,W as S,C as a,D as b,M as c,V as d,f as e};
