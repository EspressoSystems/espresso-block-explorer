import{j as t,R as o}from"./iframe-Blfbjlvh.js";import{S as Q}from"./skeleton_content-BWYw2HBZ.js";import{u as O,b as Z,g as tt,a as et,c as st,d as ot,e as nt,f as at}from"./svg_tool_tip-DjkYpuJR.js";import{A as _}from"./affine_transform-CW2gj0SF.js";import{N as j}from"./number_text-B0fm5SWR.js";import"./byte_size_text-fYb6Ipih.js";import"./wallet_address_text-Ce2BIBuE.js";import"./date_time_text-goFrQyOw.js";import"./full_hex_text-B9F7kEcQ.js";import"./hex_text-CMd0ughg.js";import"./money_text-BHu1NHy8.js";import"./money_text_full-Cij7145-.js";import"./percentage_text-Df9tDUxB.js";import"./relative_time_since_date_text-DON7xrTR.js";import"./tagged_base64_text-fqOOQXXq.js";import{T as H}from"./text-CEhLEmI-.js";import"./time_text-Bs6IzVdx.js";import{a as it,b as rt}from"./higher_order-DC1bhpzY.js";class h{min;max;mean;total;count;length;get nullableMean(){return this.count===0?null:this.mean}constructor(e,n,a,i,r){this.min=e,this.max=n,this.total=a,this.count=i,this.length=r,this.mean=a/i}static compute(e){return ct(e)}static empty=new h(0,0,0,0,0)}function ct(s){const e=s.length;if(e===0)return new h(0,0,0,0,0);let n=null,a=null,i=0,r=0;for(let c=0;c<e;c++){const m=s[c];m!==null&&(r++,i+=m,(n===null||m<n)&&(n=m),(a===null||m>a)&&(a=m))}const d=n===a;return d&&n!==0&&(n=0),d&&a===0&&(a=1),new h(n??0,a??0,i??0,r,e)}const C=s=>t.jsx(j,{number:s.value});try{C.displayName="HistogramDefaultLabel",C.__docgenInfo={description:`HistogramDefaultLabel is a simple label for displaying a numeric value for
the histogram.  It is the default, which means it just renders the number
using the \`NumberText\` component.  If the axis needs to be labeled, then
the element should be specified.`,displayName:"HistogramDefaultLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const w=o.createContext(417),lt=o.createContext(152),x=o.createContext(360),g=o.createContext(152),R=o.createContext([]),X=o.createContext([]),I=o.createContext(h.empty),U=o.createContext(h.empty),L=o.createContext([]),M=o.createContext(0),J=o.createContext(0),W=o.createContext({x:0,y:0,width:0,height:0}),V=o.createContext(null),f=o.createContext(_.identity),dt=o.createContext(_.identity),K=o.createContext(C),mt=16,B=24,Y=417,ht=176,b=s=>{const[e,n]=O(),a=Math.floor(n?.width??Y),i=Math.floor(a*(ht/Y));return t.jsx(w.Provider,{value:a,children:t.jsx(lt.Provider,{value:i,children:t.jsx(x.Provider,{value:a-mt,children:t.jsx(g.Provider,{value:i-B,children:t.jsx("svg",{ref:e,role:"graphics-datachart",viewBox:`0 0 ${a} ${i}`,children:t.jsx("g",{transform:`translate(0, ${B/2})`,children:s.children})})})})})})};try{b.displayName="HistogramBase",b.__docgenInfo={description:`HistogramBase is a component that provides the base SVG element for a
histogram.`,displayName:"HistogramBase",props:{}}}catch{}const P=({children:s})=>{const a=o.useContext(f).evenlySpacedGuideLines(4);return t.jsx(L.Provider,{value:a,children:s})},gt=60,S=()=>{const s=o.useContext(w),e=o.useContext(g),n=o.useContext(f),a=o.useContext(L),i=o.useContext(V);return t.jsx("g",{className:"histogram-y-guide-lines",children:a.map((r,d)=>t.jsx("line",{role:"graphics-tick",x1:i?.width??gt,y1:e-n.transform(r),x2:s,y2:e-n.transform(r)},d))})},N=s=>{const e=o.useContext(g),n=o.useContext(L),a=o.useContext(f),i=o.useContext(K);return t.jsx("g",{ref:s.labelsRef,className:"histogram-y-axis-labels",role:"graphics-category",children:n.map((r,d)=>t.jsx("text",{x:0,y:e-a.transform(r),dominantBaseline:"middle",className:"histogram-y-axis-label",children:o.createElement(i,{value:r})},d))})};try{P.displayName="ProvideGuideLines",P.__docgenInfo={description:`ProvideGuideLines is a component that calculates the y axis data spacing for
the histogram and provides.

It provides the following contexts:
- HistogramYAxisGuideLines

While consuming the following contexts:
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"ProvideGuideLines",props:{}}}catch{}try{S.displayName="HistogramGuideLines",S.__docgenInfo={description:`HistogramGuidLines is a component that displays the guide lines for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramGraphWidth
- HistogramPlotHeight
- HistogramRangeAffineTransform
- HistogramYAxisGuideLines`,displayName:"HistogramGuideLines",props:{}}}catch{}try{N.displayName="HistogramYAxisLabels",N.__docgenInfo={description:`HistogramYAxisLabels is a component that displays the labels for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramPlotHeight
- HistogramYAxisGuideLines
- HistogramRangeAffineTransform
- HistogramYAxisLabelComponent`,displayName:"HistogramYAxisLabels",props:{labelsRef:{defaultValue:null,description:"",name:"labelsRef",required:!0,type:{name:"RefObject<SVGSVGElement | null> | undefined"}}}}}catch{}const $=10,pt=2,v=14,F=14,T=()=>{const s=o.useContext(R).length,e=o.useContext(W),n=o.useContext(M),a=o.useContext(g),i=n/s,r=e.width/2;return t.jsx(Z.Provider,{value:ut,children:t.jsx(tt.Provider,{value:xt,children:t.jsx(et.Provider,{value:a,children:t.jsx(st.Provider,{value:e.x+r,children:t.jsx(ot.Provider,{value:e.y,children:t.jsx(nt.Provider,{value:i,children:t.jsx(at,{})})})})})})})},xt=()=>{const s=o.useContext(W),e=s.width/2;return t.jsxs(t.Fragment,{children:[t.jsx("circle",{className:"value-pointer--outer",cx:s.x+e,cy:s.y,r:$}),t.jsx("circle",{className:"value-pointer--inner",cx:s.x+e,cy:s.y,r:$-pt})]})},ut=()=>{const s=o.useContext(X),e=o.useContext(K),n=o.useContext(M),a=o.useContext(J);return a===null?t.jsxs(t.Fragment,{children:[t.jsx("text",{className:"tooltip--value-label",x:0,y:v,textAnchor:"start",children:t.jsx(H,{text:"Missing Data"})}),t.jsxs("text",{className:"tooltip--value-label",x:0,y:v+F,textAnchor:"start",children:[t.jsx(H,{text:"Block "}),t.jsx(j,{number:Number(s[0])+n})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("text",{className:"tooltip--value-label",x:0,y:v,textAnchor:"start",children:o.createElement(e,{value:a})}),t.jsxs("text",{className:"tooltip--value-label",x:0,y:v+F,textAnchor:"start",children:[t.jsx(H,{text:"Block "}),t.jsx(j,{number:Number(s[n])})]})]})};try{T.displayName="HistogramTooltip",T.__docgenInfo={description:"",displayName:"HistogramTooltip",props:{}}}catch{}const y=16,A=()=>{const s=o.useContext(w),e=o.useContext(x),n=o.useContext(g),a=o.useContext(R),i=o.useContext(I),r=o.useContext(f);if(i.length===0)return t.jsx(t.Fragment,{});const d=(e-y-y)/i.length,c=Math.floor(d),m=c*i.length,p=a.map(u=>r.transform(Number(u))),D=s-m-y;return t.jsxs(t.Fragment,{children:[t.jsx("g",{className:"histogram-plot",transform:`translate(${D},0)`,role:"graphics-datagroup",children:a.map((u,l)=>u===null?t.jsx("rect",{role:"graphics-dataunit",className:"missing",x:l*c,y:0,width:c-1,height:n,"data-offset":l},`missing-${l}`):t.jsx("rect",{role:"graphics-dataunit",className:"bar",x:l*c,y:n-p[l],width:c-1,height:p[l],"data-offset":l},`bar-${l}`))}),t.jsx("g",{className:"histogram-plot",transform:`translate(${D},0)`,children:a.map((u,l)=>t.jsxs("g",{children:[t.jsx("rect",{className:"bbox",x:l*c,y:0,height:n,width:c}),t.jsx(J.Provider,{value:u,children:t.jsx(M.Provider,{value:l,children:t.jsx(W.Provider,{value:{x:l*c,y:n-p[l],width:c,height:p[l]},children:t.jsx(T,{})})})})]},`tooltip-${l}`))})]})};try{A.displayName="HistogramPlot",A.__docgenInfo={description:`HistogramPlot is a component that takes the given data and creates
rectangles for it in relation to the statistics that it requires.
It is expected to have the following contexts set and provided for
it:

- HistogramGraphWidth
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramRange
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"HistogramPlot",props:{}}}catch{}class ft{constructor(e){this.base=e,this.c=1/Math.log(e)}c;log(e){const n=e>=0?1:-1,a=Math.log(1+Math.abs(e/this.c))/Math.log(this.base);return n*a}exp(e){const n=e>=0?1:-1,i=(Math.pow(this.base,e)-1)*this.c;return n*i}}class vt extends _{constructor(e,n,a,i,r=new ft(2)){super(r.log(e),r.log(n),a,i),this.originalInputMin=e,this.originalInputMax=n,this.scaling=r}transform(e){return super.transform(this.scaling.log(e))}evenlySpacedGuideLines(e){const n=[],a=this.originalInputMax,i=this.originalInputMin,r=this.scaling.log(a),d=this.scaling.log(i),c=e>1?(r-d)/(e-1):0;for(let m=0;m<e;m++){const p=d+c*m;n.push(this.scaling.exp(p))}return n}}const G=({children:s})=>{const e=o.useContext(x),n=o.useContext(g),a=o.useContext(U),i=o.useContext(I),r=new _(a.min,a.max,0,e),d=new vt(0,i.max,0,n);return t.jsx(dt.Provider,{value:r,children:t.jsx(f.Provider,{value:d,children:s})})},k=({children:s})=>{const e=o.useContext(X),n=o.useContext(R),a=h.compute(e),i=h.compute(n);return t.jsx(U.Provider,{value:a,children:t.jsx(I.Provider,{value:i,children:s})})},z=()=>{const[s,e]=O();return t.jsx(b,{children:t.jsx(V.Provider,{value:e,children:t.jsx(_t,{children:t.jsx(G,{children:t.jsxs(P,{children:[t.jsxs("g",{role:"graphics-axis",children:[t.jsx(S,{}),t.jsx(N,{labelsRef:s})]}),t.jsx(A,{})]})})})})})},_t=s=>{const e=o.useContext(x),n=o.useContext(V);return t.jsx(x.Provider,{value:Math.floor(e-(n?.width??0)),children:s.children})},E=()=>{const s=o.useContext(x),e=o.useContext(g),n=s/e;return t.jsx("div",{className:"histogram--placeholder",style:{paddingBottom:`${1/n*100}%`},children:t.jsx(Q,{})})};try{G.displayName="ProvideAffineTransforms",G.__docgenInfo={description:`ProvideAffineTransforms is a component that calculates the affineTransforms for
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
- HistogramRangeStatistics`,displayName:"ProvideDataStatistics",props:{}}}catch{}try{z.displayName="SimpleHistogram",z.__docgenInfo={description:"",displayName:"SimpleHistogram",props:{}}}catch{}try{E.displayName="SimpleHistogramPlaceholder",E.__docgenInfo={description:`SimpleHistogramPlaceholder is a placeholder component that is displayed when
the histogram is loading.`,displayName:"SimpleHistogramPlaceholder",props:{}}}catch{}const Ht=rt("h2","type--ui--text-300"),q=s=>t.jsxs("div",{className:it(s.className,"histogram-section-title"),children:[t.jsx(Ht,{children:s.children[0]}),s.children[1]]});try{q.displayName="HistogramSectionTitle",q.__docgenInfo={description:`HistogramSectionTitle is a title element that is displayed above a histogram.
It is expected to label the histogram itself with a title, and have some data
next to it that shows some metric aggregation of the data from the histogram
itself.

Example:
+----------------------------------+
| Block time                 10.5s |
|                          Average |
+----------------------------------+`,displayName:"HistogramSectionTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{q as H,k as P,E as S,R as a,X as b,K as c,z as d,I as e};
