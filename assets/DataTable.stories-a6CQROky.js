import{j as e,a as D}from"./jsx-runtime-5BUNAZ9W.js";import{R as n}from"./index-4g5l5LRQ.js";import{N as S}from"./NumberText-8xcSHIjc.js";import{T as f}from"./Text-qj7igP2-.js";import{D as g,P}from"./PromiseResolver-3CMncE_b.js";import{h as y}from"./typography-_ddOfzBO.js";import{C as N}from"./ChevronUp-y87NTShX.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./NumberFormattersProvider-qGn07z_Y.js";import"./LocaleProvider-pqvxCw-R.js";import"./higher_order-VtSBvwoq.js";var d=(t=>(t[t.asc=0]="asc",t[t.desc=1]="desc",t))(d||{});function R(t){return(a,o)=>-t(a,o)}const I=y("thead"),h=y("tbody"),r=n.createContext({sortColumn:null,sortDir:d.asc,page:0}),i=n.createContext(()=>{}),w=n.createContext(()=>{}),l=n.createContext({}),v=n.createContext({label:"",columnType:null,buildCell:()=>e("div",{})}),m=n.createContext([]),E=()=>e(N,{className:"icon--sort"}),O=()=>{const t=n.useContext(w),a=n.useContext(v),o=n.useContext(r),s=o.sortColumn===a.columnType;return e("th",{"data-sort-column-active":s,"data-sort-column-dir":o.sortDir,onClick:()=>{t(a.columnType)},children:D("div",{children:[e(f,{text:a.label}),e(E,{})]})})},j=()=>{const t=n.useContext(m);return e("tr",{children:t.map((a,o)=>{const s=a.buildCell;return e("td",{children:e(s,{})},o)})})},k=()=>{const t=n.useContext(m);return e(I,{children:e("tr",{children:t.map((a,o)=>e(v.Provider,{value:a,children:e(O,{})},o))})})},A=()=>{const t=n.useContext(g);return t instanceof Array?e(h,{children:t.map((a,o)=>e(l.Provider,{value:a,children:e(j,{})},o))}):e(h,{})},u=({columns:t,...a})=>{const o=n.useContext(r),s=n.useContext(i),_=p=>{if(o.sortColumn===p){s({...o,sortDir:1-o.sortDir});return}s({...o,sortColumn:p})};return e(r.Provider,{value:o,children:e(w.Provider,{value:_,children:e(m.Provider,{value:t,children:D("table",{...a,className:"data-table",children:[e(k,{}),e(A,{})]})})})})};try{r.displayName="DataTableStateContext",r.__docgenInfo={description:"DataTableStateContext is a Context for passing the DataTableState.",displayName:"DataTableStateContext",props:{}}}catch{}try{i.displayName="DataTableSetStateContext",i.__docgenInfo={description:`DataTableSetStateContext is a Context that wraps a function for changing
the table state.`,displayName:"DataTableSetStateContext",props:{}}}catch{}try{l.displayName="DataTableRowContext",l.__docgenInfo={description:`DataTableRowContext is a Context that provides an individual row within
the DataTable.`,displayName:"DataTableRowContext",props:{}}}catch{}try{u.displayName="DataTable",u.__docgenInfo={description:`DataTable is a component that is meant to display data in a tabular form.
The data layout is dictated by the columns passed to the DataTable in it's
props.

The DataTable forwards this data to the Head element, and the body element
for display.  The DataTable is capable of handling sortable columns if
the need should arise.

It records the current page, sorted column and direction in it's local
state for quick reference.

The DataTable itself is not responsible for setting up it's own state,
but it does consume and attempt to modify the State. As such, in order
to effectively utilize the DataTable the DataTableStateContext.Provider,
and DataTableSetStateContext.Provider should be set as an ancestor above
the created DataTable.

The DataTable Body gets it's data from a DataContext.  That DataContext
is expected to be an Array of data, but no other restrictions are imposed.

The Cells that get rendered within the Body are provided via the data
passed into the column Props. These Cells are constructed with no props
being passed, instead a DataTableRowContext.Provider is created to wrap
every row. This should allow every cell to access any data they need for
that individual row.`,displayName:"DataTable",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnData<unknown>[]"}}}}}catch{}const B=[{one:1,two:"one"},{one:2,two:"two"},{one:3,two:"three"},{one:4,two:"four"},{one:5,two:"five"},{one:6,two:"six"},{one:7,two:"seven"},{one:8,two:"eight"},{one:9,two:"nine"},{one:10,two:"ten"}];function C(t,a){return t.one-a.one}function F(t,a){return t.two.localeCompare(a.two)}function H(t){switch(t.sortColumn){case"one":return C;case"two":return F}return C}function q(t){const a=H(t);switch(t.sortDir){case d.desc:return R(a)}return a}async function U(t){return B.slice().sort(q(t))}const z=()=>{const t=n.useContext(l);return e(S,{number:t.one})},L=()=>{const t=n.useContext(l);return e(f,{text:t.two})},V=t=>{const[a,o]=n.useState({sortColumn:"one",sortDir:d.asc,page:0});return e(r.Provider,{value:a,children:e(i.Provider,{value:o,children:e(W,{...t})})})},W=t=>{const a=n.useContext(r),o=U(a);return e(P,{promise:o,children:e($,{...t})})},$=t=>e(u,{...t,columns:[{label:"One",columnType:"one",buildCell:z},{label:"Two",columnType:"two",buildCell:L}]}),ot={title:"components/Data/Data Table",component:V},c={args:{}};var b,T,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const nt=["DataTable"];export{c as DataTable,nt as __namedExportsOrder,ot as default};
