import{R as o,j as e}from"./iframe-DIKNrIIb.js";import{D as T}from"./loading_provider-Dn9ytlaz.js";import{T as D}from"./text-CEhLEmI-.js";import{k as h}from"./typography-C-u2xTwd.js";import{C as y}from"./chevron_up-BShDt5bd.js";var m=(t=>(t[t.asc=0]="asc",t[t.desc=1]="desc",t))(m||{});function B(t){return(n,a)=>-t(n,a)}const _=h("thead"),p=h("tbody"),l=o.createContext({sortColumn:null,sortDir:m.asc}),i=o.createContext(()=>{}),C=o.createContext(()=>{}),c=o.createContext({}),d=o.createContext(-1);var f=(t=>(t.start="start",t.center="center",t.end="end",t))(f||{});const b=o.createContext({label:"",columnType:null,buildCell:()=>e.jsx("div",{})}),x=o.createContext([]),v=()=>e.jsx(y,{className:"icon--sort"}),g=()=>{const t=o.useContext(C),n=o.useContext(b),a=o.useContext(l),r=a.sortColumn===n.columnType,s=n.alignment??"start";return e.jsx("th",{"data-sort-column-active":r,"data-sort-column-dir":a.sortDir,"data-alignment":s,onClick:()=>{t(n.columnType)},children:e.jsxs("div",{children:[e.jsx(D,{text:n.label}),e.jsx(v,{})]})})},j=()=>{const t=o.useContext(x);return e.jsx("tr",{children:t.map((n,a)=>{const r=n.buildCell,s=n.alignment??"start";return e.jsx("td",{"data-alignment":s,children:e.jsx(r,{})},a)})})},S=()=>{const t=o.useContext(x);return e.jsx(_,{children:e.jsx("tr",{children:t.map((n,a)=>e.jsx(b.Provider,{value:n,children:e.jsx(g,{})},a))})})},w=()=>{const t=o.useContext(T);return t instanceof Array?e.jsx(p,{children:t.map((n,a)=>e.jsx(c.Provider,{value:n,children:e.jsx(d.Provider,{value:a,children:e.jsx(j,{})})},a))}):e.jsx(p,{})},H=({columns:t,...n})=>{const a=o.useContext(l),r=o.useContext(i),s=u=>{if(a.sortColumn===u){r({...a,sortDir:1-a.sortDir});return}r({...a,sortColumn:u})};return e.jsx(l.Provider,{value:a,children:e.jsx(C.Provider,{value:s,children:e.jsx(x.Provider,{value:t,children:e.jsxs("table",{...n,className:"data-table",children:[e.jsx(S,{}),e.jsx(w,{})]})})})})};try{l.displayName="DataTableStateContext",l.__docgenInfo={description:"DataTableStateContext is a Context for passing the DataTableState.",displayName:"DataTableStateContext",props:{}}}catch{}try{i.displayName="DataTableSetStateContext",i.__docgenInfo={description:`DataTableSetStateContext is a Context that wraps a function for changing
the table state.`,displayName:"DataTableSetStateContext",props:{}}}catch{}try{c.displayName="DataTableRowContext",c.__docgenInfo={description:`DataTableRowContext is a Context that provides an individual row within
the DataTable.`,displayName:"DataTableRowContext",props:{}}}catch{}try{d.displayName="DataTableIndexContext",d.__docgenInfo={description:`DataTableIndexContext is a Context that provides the index of the current
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
that individual row.`,displayName:"datatable",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnData<unknown>[]"}}}}}catch{}export{f as A,l as D,m as S,i as a,H as b,c,B as r};
