import{j as t,R as e}from"./iframe-CkJJG84G.js";import{S as Q}from"./skeleton_content-CH2aYyTn.js";import{u as O,b as Z,g as tt,a as et,c as st,d as ot,e as at,f as nt}from"./svg_tool_tip-CXb8Ulac.js";import{A as H}from"./affine_transform-UCCpzMIM.js";import{N as C}from"./number_text-B9hdqY8d.js";import"./byte_size_text-D3X2F5ka.js";import"./transactions_per_second_text-BmUeW69w.js";import"./date_time_text-NIJnJKnu.js";import"./full_hex_text-31tEMUpT.js";import"./hex_text-CD2A5jHP.js";import"./money_text-BwA3EQJf.js";import"./relative_time_since_date_text-ejDFvF37.js";import"./tagged_base64_text-CHiBLPbm.js";import{T as y}from"./text-CEhLEmI-.js";import"./time_text-D9xaGGX7.js";import{a as it}from"./higher_order-BCKgBdih.js";import{a as rt}from"./typography-CKSUV6RN.js";class h{min;max;mean;total;count;length;get nullableMean(){return this.count===0?null:this.mean}constructor(o,a,n,i,r){this.min=o,this.max=a,this.total=n,this.count=i,this.length=r,this.mean=n/i}static compute(o){return ct(o)}static empty=new h(0,0,0,0,0)}function ct(s){const o=s.length;if(o===0)return new h(0,0,0,0,0);let a=null,n=null,i=0,r=0;for(let d=0;d<o;d++){const m=s[d];m!==null&&(r++,i+=m,(a===null||m<a)&&(a=m),(n===null||m>n)&&(n=m))}const l=a===n;return l&&a!==0&&(a=0),l&&n===0&&(n=1),new h(a??0,n??0,i??0,r,o)}const b=s=>t.jsx(C,{number:s.value});try{b.displayName="HistogramDefaultLabel",b.__docgenInfo={description:`HistogramDefaultLabel is a simple label for displaying a numeric value for
the histogram.  It is the default, which means it just renders the number
using the \`NumberText\` component.  If the axis needs to be labeled, then
the element should be specified.`,displayName:"HistogramDefaultLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const G=e.createContext(417),lt=e.createContext(152),p=e.createContext(360),g=e.createContext(152),I=e.createContext([]),U=e.createContext([]),v=e.createContext(h.empty),X=e.createContext(h.empty),L=e.createContext([]),W=e.createContext(0),J=e.createContext(0),V=e.createContext({x:0,y:0,width:0,height:0}),D=e.createContext(null),u=e.createContext(H.identity),dt=e.createContext(H.identity),K=e.createContext(b),mt=16,Y=24,M=417,ht=176,P=s=>{const[o,a]=O(),n=Math.floor(a?.width??M),i=Math.floor(n*(ht/M));return t.jsx(G.Provider,{value:n,children:t.jsx(lt.Provider,{value:i,children:t.jsx(p.Provider,{value:n-mt,children:t.jsx(g.Provider,{value:i-Y,children:t.jsx("svg",{ref:o,role:"graphics-datachart",viewBox:`0 0 ${n} ${i}`,children:t.jsx("g",{transform:`translate(0, ${Y/2})`,children:s.children})})})})})})};try{P.displayName="HistogramBase",P.__docgenInfo={description:`HistogramBase is a component that provides the base SVG element for a
histogram.`,displayName:"HistogramBase",props:{}}}catch{}const N=({children:s})=>{const o=e.useContext(v),a=e.useContext(u),n=4,i=[],r=o.max/n;for(let l=0;l<=a.inputMax&&r>0;l+=r)i.push(l);return t.jsx(L.Provider,{value:i,children:s})},gt=60,T=()=>{const s=e.useContext(G),o=e.useContext(g),a=e.useContext(u),n=e.useContext(L),i=e.useContext(D);return t.jsx("g",{className:"histogram-y-guide-lines",children:n.map((r,l)=>t.jsx("line",{role:"graphics-tick",x1:i?.width??gt,y1:o-a.transform(r),x2:s,y2:o-a.transform(r)},l))})},S=s=>{const o=e.useContext(g),a=e.useContext(L),n=e.useContext(u),i=e.useContext(K);return t.jsx("g",{ref:s.labelsRef,className:"histogram-y-axis-labels",role:"graphics-category",children:a.map((r,l)=>t.jsx("text",{x:0,y:o-n.transform(r),dominantBaseline:"middle",className:"histogram-y-axis-label",children:e.createElement(i,{value:r})},l))})};try{N.displayName="ProvideGuideLines",N.__docgenInfo={description:`ProvideGuideLines is a component that calculates the y axis data spacing for
the histogram and provides.

It provides the following contexts:
- HistogramYAxisGuideLines

While consuming the following contexts:
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"ProvideGuideLines",props:{}}}catch{}try{T.displayName="HistogramGuideLines",T.__docgenInfo={description:`HistogramGuidLines is a component that displays the guide lines for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramGraphWidth
- HistogramPlotHeight
- HistogramRangeAffineTransform
- HistogramYAxisGuideLines`,displayName:"HistogramGuideLines",props:{}}}catch{}try{S.displayName="HistogramYAxisLabels",S.__docgenInfo={description:`HistogramYAxisLabels is a component that displays the labels for the y-axis
based on the sampling provided for the histogram.

It is expected to have the following contexts set and provided for it:
- HistogramPlotHeight
- HistogramYAxisGuideLines
- HistogramRangeAffineTransform
- HistogramYAxisLabelComponent`,displayName:"HistogramYAxisLabels",props:{labelsRef:{defaultValue:null,description:"",name:"labelsRef",required:!0,type:{name:"RefObject<SVGSVGElement | null> | undefined"}}}}}catch{}const $=10,pt=2,_=14,F=14,A=()=>{const s=e.useContext(I).length,o=e.useContext(V),a=e.useContext(W),n=e.useContext(g),i=a/s,r=o.width/2;return t.jsx(Z.Provider,{value:ut,children:t.jsx(tt.Provider,{value:xt,children:t.jsx(et.Provider,{value:n,children:t.jsx(st.Provider,{value:o.x+r,children:t.jsx(ot.Provider,{value:o.y,children:t.jsx(at.Provider,{value:i,children:t.jsx(nt,{})})})})})})})},xt=()=>{const s=e.useContext(V),o=s.width/2;return t.jsxs(t.Fragment,{children:[t.jsx("circle",{className:"value-pointer--outer",cx:s.x+o,cy:s.y,r:$}),t.jsx("circle",{className:"value-pointer--inner",cx:s.x+o,cy:s.y,r:$-pt})]})},ut=()=>{const s=e.useContext(U),o=e.useContext(K),a=e.useContext(W),n=e.useContext(J);return n===null?t.jsxs(t.Fragment,{children:[t.jsx("text",{className:"tooltip--value-label",x:0,y:_,textAnchor:"start",children:t.jsx(y,{text:"Missing Data"})}),t.jsxs("text",{className:"tooltip--value-label",x:0,y:_+F,textAnchor:"start",children:[t.jsx(y,{text:"Block "}),t.jsx(C,{number:Number(s[0])+a})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("text",{className:"tooltip--value-label",x:0,y:_,textAnchor:"start",children:e.createElement(o,{value:n})}),t.jsxs("text",{className:"tooltip--value-label",x:0,y:_+F,textAnchor:"start",children:[t.jsx(y,{text:"Block "}),t.jsx(C,{number:Number(s[a])})]})]})};try{A.displayName="HistogramTooltip",A.__docgenInfo={description:"",displayName:"HistogramTooltip",props:{}}}catch{}const j=16,R=()=>{const s=e.useContext(G),o=e.useContext(p),a=e.useContext(g),n=e.useContext(I),i=e.useContext(v),r=e.useContext(u);if(i.length===0)return t.jsx(t.Fragment,{});const l=(o-j-j)/i.length,d=Math.floor(l),m=d*i.length,f=n.map(x=>r.transform(Number(x))),B=s-m-j;return t.jsxs(t.Fragment,{children:[t.jsx("g",{className:"histogram-plot",transform:`translate(${B},0)`,role:"graphics-datagroup",children:n.map((x,c)=>x===null?t.jsx("rect",{role:"graphics-dataunit",className:"missing",x:c*d,y:0,width:d-1,height:a,"data-offset":c},`missing-${c}`):t.jsx("rect",{role:"graphics-dataunit",className:"bar",x:c*d,y:a-f[c],width:d-1,height:f[c],"data-offset":c},`bar-${c}`))}),t.jsx("g",{className:"histogram-plot",transform:`translate(${B},0)`,children:n.map((x,c)=>t.jsxs("g",{children:[t.jsx("rect",{className:"bbox",x:c*d,y:0,height:a,width:d}),t.jsx(J.Provider,{value:x,children:t.jsx(W.Provider,{value:c,children:t.jsx(V.Provider,{value:{x:c*d,y:a-f[c],width:d,height:f[c]},children:t.jsx(A,{})})})})]},`tooltip-${c}`))})]})};try{R.displayName="HistogramPlot",R.__docgenInfo={description:`HistogramPlot is a component that takes the given data and creates
rectangles for it in relation to the statistics that it requires.
It is expected to have the following contexts set and provided for
it:

- HistogramGraphWidth
- HistogramPlotWidth
- HistogramPlotHeight
- HistogramRange
- HistogramRangeStatistics
- HistogramRangeAffineTransform`,displayName:"HistogramPlot",props:{}}}catch{}const w=({children:s})=>{const o=e.useContext(p),a=e.useContext(g),n=e.useContext(X),i=e.useContext(v),r=new H(n.min,n.max,0,o),l=new H(0,i.max,0,a);return t.jsx(dt.Provider,{value:r,children:t.jsx(u.Provider,{value:l,children:s})})},k=({children:s})=>{const o=e.useContext(U),a=e.useContext(I),n=h.compute(o),i=h.compute(a);return t.jsx(X.Provider,{value:n,children:t.jsx(v.Provider,{value:i,children:s})})},z=()=>{const[s,o]=O();return t.jsx(P,{children:t.jsx(D.Provider,{value:o,children:t.jsx(ft,{children:t.jsx(w,{children:t.jsxs(N,{children:[t.jsxs("g",{role:"graphics-axis",children:[t.jsx(T,{}),t.jsx(S,{labelsRef:s})]}),t.jsx(R,{})]})})})})})},ft=s=>{const o=e.useContext(p),a=e.useContext(D);return t.jsx(p.Provider,{value:Math.floor(o-(a?.width??0)),children:s.children})},E=()=>{const s=e.useContext(p),o=e.useContext(g),a=s/o;return t.jsx("div",{className:"histogram--placeholder",style:{paddingBottom:`${1/a*100}%`},children:t.jsx(Q,{})})};try{w.displayName="ProvideAffineTransforms",w.__docgenInfo={description:`ProvideAffineTransforms is a component that calculates the affineTransforms for
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
the histogram is loading.`,displayName:"SimpleHistogramPlaceholder",props:{}}}catch{}const _t=rt("h2"),q=s=>t.jsxs("div",{className:it(s.className,"histogram-section-title"),children:[t.jsx(_t,{children:s.children[0]}),s.children[1]]});try{q.displayName="HistogramSectionTitle",q.__docgenInfo={description:`HistogramSectionTitle is a title element that is displayed above a histogram.
It is expected to label the histogram itself with a title, and have some data
next to it that shows some metric aggregation of the data from the histogram
itself.

Example:
+----------------------------------+
| Block time                 10.5s |
|                          Average |
+----------------------------------+`,displayName:"HistogramSectionTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{h as D,q as H,k as P,E as S,I as a,U as b,K as c,z as d,v as e};
