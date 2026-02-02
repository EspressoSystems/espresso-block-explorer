import{R as o,j as e}from"./iframe-lCBbYCEU.js";import{D as C}from"./data_provider-JNzMXrDd.js";import{T as b}from"./text-CEhLEmI-.js";import{C as T}from"./chevron_up-JQFOFxdg.js";var p=(t=>(t[t.asc=0]="asc",t[t.desc=1]="desc",t))(p||{});function I(t){return(n,a)=>-t(n,a)}const l=o.createContext({sortColumn:null,sortDir:p.asc}),i=o.createContext(()=>{}),h=o.createContext(()=>{}),d=o.createContext({}),c=o.createContext(-1);var D=(t=>(t.start="start",t.center="center",t.end="end",t))(D||{});const m=o.createContext({label:"",columnType:null,buildCell:()=>e.jsx("div",{})}),u=o.createContext([]),y=()=>e.jsx(T,{className:"icon--sort"}),_=()=>{const t=o.useContext(h),n=o.useContext(m),a=o.useContext(l),r=a.sortColumn===n.columnType,s=n.alignment??"start";return e.jsx("th",{"data-sort-column-active":r,"data-sort-column-dir":a.sortDir,"data-alignment":s,onClick:()=>{t(n.columnType)},children:e.jsxs("div",{children:[e.jsx(b,{text:n.label}),e.jsx(y,{})]})})},f=()=>{const t=o.useContext(u);return e.jsx("tr",{children:t.map((n,a)=>{const r=n.buildCell,s=n.alignment??"start";return e.jsx("td",{"data-alignment":s,children:e.jsx(r,{})},a)})})},v=()=>{const t=o.useContext(u);return e.jsx("thead",{children:e.jsx("tr",{children:t.map((n,a)=>e.jsx(m.Provider,{value:n,children:e.jsx(_,{})},a))})})},g=()=>{const t=o.useContext(C);return t instanceof Array?e.jsx("tbody",{children:t.map((n,a)=>e.jsx(d.Provider,{value:n,children:e.jsx(c.Provider,{value:a,children:e.jsx(f,{})})},a))}):e.jsx("tbody",{})},P=({columns:t,...n})=>{const a=o.useContext(l),r=o.useContext(i),s=x=>{if(a.sortColumn===x){r({...a,sortDir:1-a.sortDir});return}r({...a,sortColumn:x})};return e.jsx(l.Provider,{value:a,children:e.jsx(h.Provider,{value:s,children:e.jsx(u.Provider,{value:t,children:e.jsxs("table",{...n,className:"data-table",children:[e.jsx(v,{}),e.jsx(g,{})]})})})})};try{l.displayName="DataTableStateContext",l.__docgenInfo={description:"DataTableStateContext is a Context for passing the DataTableState.",displayName:"DataTableStateContext",props:{}}}catch{}try{i.displayName="DataTableSetStateContext",i.__docgenInfo={description:`DataTableSetStateContext is a Context that wraps a function for changing
the table state.`,displayName:"DataTableSetStateContext",props:{}}}catch{}try{d.displayName="DataTableRowContext",d.__docgenInfo={description:`DataTableRowContext is a Context that provides an individual row within
the DataTable.`,displayName:"DataTableRowContext",props:{}}}catch{}try{c.displayName="DataTableIndexContext",c.__docgenInfo={description:`DataTableIndexContext is a Context that provides the index of the current
row within the DataTable.`,displayName:"DataTableIndexContext",props:{}}}catch{}try{datatable.displayName="datatable",datatable.__docgenInfo={description:`DataTable is a component that is meant to display data in a tabular form.
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
that individual row.`,displayName:"datatable",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnData<unknown>[]"}}}}}catch{}export{D as A,l as D,p as S,i as a,P as b,d as c,I as r};
