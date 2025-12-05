import{j as e,R as s}from"./iframe-DFfdKi-0.js";import{E as le,L as ce,D as de}from"./loading_provider-da-Stdik.js";import{a as Z}from"./card-B_DGO8IT.js";import{W as me}from"./loading_shimmer-BmQWJNQg.js";import{S as ee}from"./skeleton_content-CLW3IdlQ.js";import{a as te}from"./higher_order-CAFNA8md.js";import{i as se,k as ae}from"./typography-M3pkdhb1.js";import{L as he}from"./label-C_7faWes.js";import{T as m}from"./text-CEhLEmI-.js";import{V as oe}from"./transactions_per_second_text-CVlg39ir.js";import{A as H}from"./affine_transform-UCCpzMIM.js";import{N}from"./number_text-BThEIcq7.js";import"./circular_progress_indicator-CvHG1nqf.js";import"./container_loading-W_k3-qfn.js";import{u as ne,b as ge,g as pe,a as xe,c as ue,d as fe,e as ve,f as _e}from"./svg_tool_tip-DuC_nbES.js";import"./byte_size_text-D8sYOBly.js";import"./copy_hex-DAgaj9SU.js";import"./date_time_text-Cno5hICi.js";import"./full_hex_text-Cv2FWqgk.js";import"./hex_text-vhhXAAGO.js";import"./money_text-BY6QHfpq.js";import"./relative_time_since_date_text-Ch8VK2RY.js";import"./tagged_base64_text-V3FlBX9h.js";import"./time_text-Dd-TCUHg.js";import{H as ye}from"./heading2-DNajMEUY.js";const He=se("div"),je=t=>e.jsx(he,{children:t.children}),be=t=>e.jsx(He,{className:"value",children:t.children}),E=({className:t,children:a,...o})=>e.jsxs("div",{...o,className:te(t,"value-labeled"),children:[e.jsx(be,{className:"value",children:a[0]},0),e.jsx(je,{className:"label",children:a[1]},1)]});try{valuelabeled.displayName="valuelabeled",valuelabeled.__docgenInfo={description:`TabledLabeledValue is a component that is meant to display a label and
value pair of components, and lay them out depending on the screen size
of the device in question.

If on a sufficiently large device, they should appear side by side as
if in a full sized table element. Otherwise, they should appear as
a single element of sufficient size.`,displayName:"valuelabeled",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}class g{min;max;mean;total;count;length;get nullableMean(){return this.count===0?null:this.mean}constructor(a,o,n,i,r){this.min=a,this.max=o,this.total=n,this.count=i,this.length=r,this.mean=n/i}static compute(a){return Ce(a)}static empty=new g(0,0,0,0,0)}function Ce(t){const a=t.length;if(a===0)return new g(0,0,0,0,0);let o=null,n=null,i=0,r=0;for(let d=0;d<a;d++){const h=t[d];h!==null&&(r++,i+=h,(o===null||h<o)&&(o=h),(n===null||h>n)&&(n=h))}const c=o===n;return c&&o!==0&&(o=0),c&&n===0&&(n=1),new g(o??0,n??0,i??0,r,a)}const S=t=>e.jsx(N,{number:t.value});try{S.displayName="HistogramDefaultLabel",S.__docgenInfo={description:`HistogramDefaultLabel is a simple label for displaying a numeric value for
the histogram.  It is the default, which means it just renders the number
using the \`NumberText\` component.  If the axis needs to be labeled, then
the element should be specified.`,displayName:"HistogramDefaultLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const B=s.createContext(417),Ne=s.createContext(152),x=s.createContext(360),p=s.createContext(152),b=s.createContext([]),D=s.createContext([]),f=s.createContext(g.empty),ie=s.createContext(g.empty),z=s.createContext([]),k=s.createContext(0),re=s.createContext(0),Y=s.createContext({x:0,y:0,width:0,height:0}),$=s.createContext(null),v=s.createContext(H.identity),Se=s.createContext(H.identity),M=s.createContext(S),Te=16,q=24,U=417,Pe=176,T=t=>{const[a,o]=ne(),n=Math.floor(o?.width??U),i=Math.floor(n*(Pe/U));return e.jsx(B.Provider,{value:n,children:e.jsx(Ne.Provider,{value:i,children:e.jsx(x.Provider,{value:n-Te,children:e.jsx(p.Provider,{value:i-q,children:e.jsx("svg",{ref:a,role:"graphics-datachart",viewBox:`0 0 ${n} ${i}`,children:e.jsx("g",{transform:`translate(0, ${q/2})`,children:t.children})})})})})})};try{T.displayName="HistogramBase",T.__docgenInfo={description:`HistogramBase is a component that provides the base SVG element for a
histogram.`,displayName:"HistogramBase",props:{}}}catch{}const Ae=ae("text"),P=({children:t})=>{const a=s.useContext(f),o=s.useContext(v),n=4,i=[],r=a.max/n;for(let c=0;c<=o.inputMax&&r>0;c+=r)i.push(c);return e.jsx(z.Provider,{value:i,children:t})},Le=60,A=()=>{const t=s.useContext(B),a=s.useContext(p),o=s.useContext(v),n=s.useContext(z),i=s.useContext($);return e.jsx("g",{className:"histogram-y-guide-lines",children:n.map((r,c)=>e.jsx("line",{role:"graphics-tick",x1:i?.width??Le,y1:a-o.transform(r),x2:t,y2:a-o.transform(r)},c))})},L=t=>{const a=s.useContext(p),o=s.useContext(z),n=s.useContext(v),i=s.useContext(M);return e.jsx("g",{ref:t.labelsRef,className:"histogram-y-axis-labels",role:"graphics-category",children:o.map((r,c)=>e.jsx(Ae,{x:0,y:a-n.transform(r),dominantBaseline:"middle",className:"histogram-y-axis-label",children:s.createElement(i,{value:r})},c))})};try{P.displayName="ProvideGuideLines",P.__docgenInfo={description:`ProvideGuideLines is a component that calculates the y axis data spacing for
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
- HistogramYAxisGuideLines`,displayName:"HistogramGuideLines",props:{}}}catch{}try{L.displayName="HistogramYAxisLabels",L.__docgenInfo={description:`HistogramYAxisLabels is a component that displays the labels for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramPlotHeight
- HistogramYAxisGuideLines
- HistogramRangeAffineTransform
- HistogramYAxisLabelComponent`,displayName:"HistogramYAxisLabels",props:{labelsRef:{defaultValue:null,description:"",name:"labelsRef",required:!0,type:{name:"RefObject<SVGSVGElement | null> | undefined"}}}}}catch{}const O=se("text"),X=ae("text"),J=10,Re=2,y=14,K=14,R=()=>{const t=s.useContext(b).length,a=s.useContext(Y),o=s.useContext(k),n=s.useContext(p),i=o/t,r=a.width/2;return e.jsx(ge.Provider,{value:Ge,children:e.jsx(pe.Provider,{value:we,children:e.jsx(xe.Provider,{value:n,children:e.jsx(ue.Provider,{value:a.x+r,children:e.jsx(fe.Provider,{value:a.y,children:e.jsx(ve.Provider,{value:i,children:e.jsx(_e,{})})})})})})})},we=()=>{const t=s.useContext(Y),a=t.width/2;return e.jsxs(e.Fragment,{children:[e.jsx("circle",{className:"value-pointer--outer",cx:t.x+a,cy:t.y,r:J}),e.jsx("circle",{className:"value-pointer--inner",cx:t.x+a,cy:t.y,r:J-Re})]})},Ge=()=>{const t=s.useContext(D),a=s.useContext(M),o=s.useContext(k),n=s.useContext(re);return n===null?e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"tooltip--value-label",x:0,y,textAnchor:"start",children:e.jsx(m,{text:"Missing Data"})}),e.jsxs(X,{className:"tooltip--value-label",x:0,y:y+K,textAnchor:"start",children:[e.jsx(m,{text:"Block "}),e.jsx(N,{number:Number(t[0])+o})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"tooltip--value-label",x:0,y,textAnchor:"start",children:s.createElement(a,{value:n})}),e.jsxs(X,{className:"tooltip--value-label",x:0,y:y+K,textAnchor:"start",children:[e.jsx(m,{text:"Block "}),e.jsx(N,{number:Number(t[o])})]})]})};try{R.displayName="HistogramTooltip",R.__docgenInfo={description:"",displayName:"HistogramTooltip",props:{}}}catch{}const C=16,w=()=>{const t=s.useContext(B),a=s.useContext(x),o=s.useContext(p),n=s.useContext(b),i=s.useContext(f),r=s.useContext(v);if(i.length===0)return e.jsx(e.Fragment,{});const c=(a-C-C)/i.length,d=Math.floor(c),h=d*i.length,_=n.map(u=>r.transform(Number(u))),F=t-h-C;return e.jsxs(e.Fragment,{children:[e.jsx("g",{className:"histogram-plot",transform:`translate(${F},0)`,role:"graphics-datagroup",children:n.map((u,l)=>u===null?e.jsx("rect",{role:"graphics-dataunit",className:"missing",x:l*d,y:0,width:d-1,height:o,"data-offset":l},`missing-${l}`):e.jsx("rect",{role:"graphics-dataunit",className:"bar",x:l*d,y:o-_[l],width:d-1,height:_[l],"data-offset":l},`bar-${l}`))}),e.jsx("g",{className:"histogram-plot",transform:`translate(${F},0)`,children:n.map((u,l)=>e.jsxs("g",{children:[e.jsx("rect",{className:"bbox",x:l*d,y:0,height:o,width:d}),e.jsx(re.Provider,{value:u,children:e.jsx(k.Provider,{value:l,children:e.jsx(Y.Provider,{value:{x:l*d,y:o-_[l],width:d,height:_[l]},children:e.jsx(R,{})})})})]},`tooltip-${l}`))})]})};try{w.displayName="HistogramPlot",w.__docgenInfo={description:`HistogramPlot is a component that takes the given data and creates
rectangles for it in relation to the statistics that it requires.
It is expected to have the following contexts set and provided for
it:

- HistogramGraphWidth
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramRange
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"HistogramPlot",props:{}}}catch{}const G=({children:t})=>{const a=s.useContext(x),o=s.useContext(p),n=s.useContext(ie),i=s.useContext(f),r=new H(n.min,n.max,0,a),c=new H(0,i.max,0,o);return e.jsx(Se.Provider,{value:r,children:e.jsx(v.Provider,{value:c,children:t})})},I=({children:t})=>{const a=s.useContext(D),o=s.useContext(b),n=g.compute(a),i=g.compute(o);return e.jsx(ie.Provider,{value:n,children:e.jsx(f.Provider,{value:i,children:t})})},V=()=>{const[t,a]=ne();return e.jsx(T,{children:e.jsx($.Provider,{value:a,children:e.jsx(Ie,{children:e.jsx(G,{children:e.jsxs(P,{children:[e.jsxs("g",{role:"graphics-axis",children:[e.jsx(A,{}),e.jsx(L,{labelsRef:t})]}),e.jsx(w,{})]})})})})})},Ie=t=>{const a=s.useContext(x),o=s.useContext($);return e.jsx(x.Provider,{value:Math.floor(a-(o?.width??0)),children:t.children})},W=()=>{const t=s.useContext(x),a=s.useContext(p),o=t/a;return e.jsx("div",{className:"histogram--placeholder",style:{paddingBottom:`${1/o*100}%`},children:e.jsx(ee,{})})};try{G.displayName="ProvideAffineTransforms",G.__docgenInfo={description:`ProvideAffineTransforms is a component that calculates the affineTransforms for
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
the histogram is loading.`,displayName:"SimpleHistogramPlaceholder",props:{}}}catch{}const j=t=>e.jsxs("div",{className:te(t.className,"histogram-section-title"),children:[e.jsx(ye,{children:t.children[0]}),t.children[1]]});try{j.displayName="HistogramSectionTitle",j.__docgenInfo={description:`HistogramSectionTitle is a title element that is displayed above a histogram.
It is expected to label the histogram itself with a title, and have some data
next to it that shows some metric aggregation of the data from the histogram
itself.

Example:
+----------------------------------+
| Block time                 10.5s |
|                          Average |
+----------------------------------+`,displayName:"HistogramSectionTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ve=me(Z),We=()=>{const t=s.useContext(f);return Number.isNaN(t.mean)?e.jsx(m,{text:"-"}):e.jsx(oe,{bytes:t.mean})},Be=t=>Number.isNaN(t.value)?e.jsx(m,{text:"-"}):e.jsx(oe,{bytes:t.value}),Q=()=>{const t=s.useContext(le),a=s.useContext(ce),o=s.useContext(de);return a?e.jsxs(Ve,{className:"block-size-histogram",children:[e.jsxs(j,{children:[e.jsx(m,{text:"Block size"}),e.jsxs(E,{children:[e.jsx(ee,{}),e.jsx(m,{text:"Average"})]})]}),e.jsx(W,{})]}):t?e.jsx(e.Fragment,{}):e.jsx(Z,{className:"block-size-histogram",children:e.jsx(b.Provider,{value:o.blockSize,children:e.jsx(D.Provider,{value:o.blocks,children:e.jsx(M.Provider,{value:Be,children:e.jsxs(I,{children:[e.jsxs(j,{children:[e.jsx(m,{text:"Block size"}),e.jsxs(E,{children:[e.jsx(We,{}),e.jsx(m,{text:"Average"})]})]}),e.jsx(V,{})]})})})})})};try{Q.displayName="BlockSizeHistogram",Q.__docgenInfo={description:"",displayName:"BlockSizeHistogram",props:{}}}catch{}export{Q as B,g as D,j as H,I as P,W as S,E as V,b as a,D as b,M as c,V as d,f as e};
