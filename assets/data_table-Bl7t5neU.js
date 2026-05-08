import{R as o,j as t}from"./iframe-BzM1REe5.js";import{D as C}from"./data_provider-UvOryvGc.js";import{T as b}from"./text-CEhLEmI-.js";import{C as T}from"./chevron_up-BZB8tbSA.js";var p=(e=>(e[e.asc=0]="asc",e[e.desc=1]="desc",e))(p||{});function N(e){return(n,a)=>-e(n,a)}const l=o.createContext({sortColumn:null,sortDir:p.asc}),i=o.createContext(()=>{}),h=o.createContext(()=>{}),d=o.createContext({}),c=o.createContext(-1),m=o.createContext({label:"",columnType:null,buildCell:()=>t.jsx("div",{})}),x=o.createContext([]),D=()=>t.jsx(T,{className:"icon--sort"}),y=()=>{const e=o.useContext(h),n=o.useContext(m),a=o.useContext(l),r=a.sortColumn===n.columnType,s=n.alignment??"start";return t.jsx("th",{"data-sort-column-active":r,"data-sort-column-dir":a.sortDir,"data-alignment":s,onClick:()=>{e(n.columnType)},children:t.jsxs("div",{children:[t.jsx(b,{text:n.label}),t.jsx(D,{})]})})},_=()=>{const e=o.useContext(x);return t.jsx("tr",{children:e.map((n,a)=>{const r=n.buildCell,s=n.alignment??"start";return t.jsx("td",{"data-alignment":s,children:t.jsx(r,{})},a)})})},f=()=>{const e=o.useContext(x);return t.jsx("thead",{children:t.jsx("tr",{children:e.map((n,a)=>t.jsx(m.Provider,{value:n,children:t.jsx(y,{})},a))})})},v=()=>{const e=o.useContext(C);return e instanceof Array?t.jsx("tbody",{children:e.map((n,a)=>t.jsx(d.Provider,{value:n,children:t.jsx(c.Provider,{value:a,children:t.jsx(_,{})})},a))}):t.jsx("tbody",{})},I=({columns:e,...n})=>{const a=o.useContext(l),r=o.useContext(i),s=u=>{if(a.sortColumn===u){r({...a,sortDir:1-a.sortDir});return}r({...a,sortColumn:u})};return t.jsx(l.Provider,{value:a,children:t.jsx(h.Provider,{value:s,children:t.jsx(x.Provider,{value:e,children:t.jsxs("table",{...n,className:"data-table",children:[t.jsx(f,{}),t.jsx(v,{})]})})})})};try{l.displayName="DataTableStateContext",l.__docgenInfo={description:"DataTableStateContext is a Context for passing the DataTableState.",displayName:"DataTableStateContext",props:{}}}catch{}try{i.displayName="DataTableSetStateContext",i.__docgenInfo={description:`DataTableSetStateContext is a Context that wraps a function for changing
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
that individual row.`,displayName:"datatable",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnData<unknown>[]"}}}}}catch{}export{l as D,p as S,i as a,I as b,d as c,N as r};
