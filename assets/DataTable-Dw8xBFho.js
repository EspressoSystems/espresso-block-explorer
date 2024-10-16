import{j as t}from"./jsx-runtime-BlAj40OV.js";import{D}from"./LoadingProvider-Cu0dkHek.js";import{T as y}from"./Text-BU7JBOLk.js";import{j as h}from"./typography-51eEIY7Y.js";import{C as _}from"./ChevronUp-DWAU1eS3.js";import{R as o}from"./index-Cs7sjTYM.js";var m=(e=>(e[e.asc=0]="asc",e[e.desc=1]="desc",e))(m||{});function B(e){return(n,a)=>-e(n,a)}const f=h("thead"),p=h("tbody"),s=o.createContext({sortColumn:null,sortDir:m.asc}),l=o.createContext(()=>{}),C=o.createContext(()=>{}),i=o.createContext({}),c=o.createContext(-1),b=o.createContext({label:"",columnType:null,buildCell:()=>t.jsx("div",{})}),d=o.createContext([]),v=()=>t.jsx(_,{className:"icon--sort"}),j=()=>{const e=o.useContext(C),n=o.useContext(b),a=o.useContext(s),r=a.sortColumn===n.columnType;return t.jsx("th",{"data-sort-column-active":r,"data-sort-column-dir":a.sortDir,onClick:()=>{e(n.columnType)},children:t.jsxs("div",{children:[t.jsx(y,{text:n.label}),t.jsx(v,{})]})})},S=()=>{const e=o.useContext(d);return t.jsx("tr",{children:e.map((n,a)=>{const r=n.buildCell;return t.jsx("td",{children:t.jsx(r,{})},a)})})},g=()=>{const e=o.useContext(d);return t.jsx(f,{children:t.jsx("tr",{children:e.map((n,a)=>t.jsx(b.Provider,{value:n,children:t.jsx(j,{})},a))})})},w=()=>{const e=o.useContext(D);return e instanceof Array?t.jsx(p,{children:e.map((n,a)=>t.jsx(i.Provider,{value:n,children:t.jsx(c.Provider,{value:a,children:t.jsx(S,{})})},a))}):t.jsx(p,{})},u=({columns:e,...n})=>{const a=o.useContext(s),r=o.useContext(l),T=x=>{if(a.sortColumn===x){r({...a,sortDir:1-a.sortDir});return}r({...a,sortColumn:x})};return t.jsx(s.Provider,{value:a,children:t.jsx(C.Provider,{value:T,children:t.jsx(d.Provider,{value:e,children:t.jsxs("table",{...n,className:"data-table",children:[t.jsx(g,{}),t.jsx(w,{})]})})})})};try{s.displayName="DataTableStateContext",s.__docgenInfo={description:"DataTableStateContext is a Context for passing the DataTableState.",displayName:"DataTableStateContext",props:{}}}catch{}try{l.displayName="DataTableSetStateContext",l.__docgenInfo={description:`DataTableSetStateContext is a Context that wraps a function for changing
the table state.`,displayName:"DataTableSetStateContext",props:{}}}catch{}try{i.displayName="DataTableRowContext",i.__docgenInfo={description:`DataTableRowContext is a Context that provides an individual row within
the DataTable.`,displayName:"DataTableRowContext",props:{}}}catch{}try{c.displayName="DataTableIndexContext",c.__docgenInfo={description:`DataTableIndexContext is a Context that provides the index of the current
row within the DataTable.`,displayName:"DataTableIndexContext",props:{}}}catch{}try{u.displayName="DataTable",u.__docgenInfo={description:`DataTable is a component that is meant to display data in a tabular form.
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
that individual row.`,displayName:"DataTable",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnData<unknown>[]"}}}}}catch{}export{s as D,m as S,l as a,u as b,i as c,B as r};
