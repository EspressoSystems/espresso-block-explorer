import{j as e,a as h}from"./jsx-runtime-5BUNAZ9W.js";import{R as o}from"./index-4g5l5LRQ.js";import{D}from"./PromiseResolver-a2Un7Taz.js";import{T as y}from"./Text-qj7igP2-.js";import{h as m}from"./typography-_ddOfzBO.js";import{C as f}from"./ChevronUp-NmEPZg9I.js";var C=(t=>(t[t.asc=0]="asc",t[t.desc=1]="desc",t))(C||{});function B(t){return(n,a)=>-t(n,a)}const _=m("thead"),u=m("tbody"),s=o.createContext({sortColumn:null,sortDir:C.asc}),l=o.createContext(()=>{}),b=o.createContext(()=>{}),i=o.createContext({}),T=o.createContext({label:"",columnType:null,buildCell:()=>e("div",{})}),c=o.createContext([]),v=()=>e(f,{className:"icon--sort"}),S=()=>{const t=o.useContext(b),n=o.useContext(T),a=o.useContext(s),r=a.sortColumn===n.columnType;return e("th",{"data-sort-column-active":r,"data-sort-column-dir":a.sortDir,onClick:()=>{t(n.columnType)},children:h("div",{children:[e(y,{text:n.label}),e(v,{})]})})},g=()=>{const t=o.useContext(c);return e("tr",{children:t.map((n,a)=>{const r=n.buildCell;return e("td",{children:e(r,{})},a)})})},w=()=>{const t=o.useContext(c);return e(_,{children:e("tr",{children:t.map((n,a)=>e(T.Provider,{value:n,children:e(S,{})},a))})})},N=()=>{const t=o.useContext(D);return t instanceof Array?e(u,{children:t.map((n,a)=>e(i.Provider,{value:n,children:e(g,{})},a))}):e(u,{})},p=({columns:t,...n})=>{const a=o.useContext(s),r=o.useContext(l),x=d=>{if(a.sortColumn===d){r({...a,sortDir:1-a.sortDir});return}r({...a,sortColumn:d})};return e(s.Provider,{value:a,children:e(b.Provider,{value:x,children:e(c.Provider,{value:t,children:h("table",{...n,className:"data-table",children:[e(w,{}),e(N,{})]})})})})};try{s.displayName="DataTableStateContext",s.__docgenInfo={description:"DataTableStateContext is a Context for passing the DataTableState.",displayName:"DataTableStateContext",props:{}}}catch{}try{l.displayName="DataTableSetStateContext",l.__docgenInfo={description:`DataTableSetStateContext is a Context that wraps a function for changing
the table state.`,displayName:"DataTableSetStateContext",props:{}}}catch{}try{i.displayName="DataTableRowContext",i.__docgenInfo={description:`DataTableRowContext is a Context that provides an individual row within
the DataTable.`,displayName:"DataTableRowContext",props:{}}}catch{}try{p.displayName="DataTable",p.__docgenInfo={description:`DataTable is a component that is meant to display data in a tabular form.
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
that individual row.`,displayName:"DataTable",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnData<unknown>[]"}}}}}catch{}export{s as D,C as S,l as a,p as b,i as c,B as r};
