import{R as s,j as e}from"./iframe-z4x_zXym.js";import{D as C}from"./data_provider-D5scWoRC.js";import{T}from"./text-CbLn7ebu.js";import{C as _}from"./chevron_up-D3KUNchR.js";var b=(t=>(t[t.asc=0]="asc",t[t.desc=1]="desc",t))(b||{});function P(t){return(o,a)=>-t(o,a)}const l=s.createContext({sortColumn:null,sortDir:b.asc}),c=s.createContext(()=>{}),h=s.createContext(()=>{}),d=s.createContext({}),i=s.createContext(-1),u=s.createContext({label:"",columnType:null,buildCell:()=>e.jsx("div",{})}),p=s.createContext([]),D=()=>e.jsx(_,{className:"icon--sort"}),y=()=>{const t=s.useContext(h),o=s.useContext(u),a=s.useContext(l),n=a.sortColumn===o.columnType,r=o.alignment??"start";return e.jsx("th",{"data-sort-column-active":n,"data-sort-column-dir":a.sortDir,"data-alignment":r,onClick:()=>{t(o.columnType)},children:e.jsxs("div",{children:[e.jsx(T,{text:o.label}),e.jsx(D,{})]})})},f=()=>{const t=s.useContext(p);return e.jsx("tr",{children:t.map((o,a)=>{const n=o.buildCell,r=o.alignment??"start";return e.jsx("td",{"data-alignment":r,children:e.jsx(n,{})},a)})})},g=()=>{const t=s.useContext(p);return e.jsx("thead",{children:e.jsx("tr",{children:t.map((o,a)=>e.jsx(u.Provider,{value:o,children:e.jsx(y,{})},a))})})},v=()=>{const t=s.useContext(C);return t instanceof Array?e.jsx("tbody",{children:t.map((o,a)=>e.jsx(d.Provider,{value:o,children:e.jsx(i.Provider,{value:a,children:e.jsx(f,{})})},a))}):e.jsx("tbody",{})},m=({columns:t,...o})=>{const a=s.useContext(l),n=s.useContext(c),r=x=>{if(a.sortColumn===x){n({...a,sortDir:1-a.sortDir});return}n({...a,sortColumn:x})};return e.jsx(l.Provider,{value:a,children:e.jsx(h.Provider,{value:r,children:e.jsx(p.Provider,{value:t,children:e.jsxs("table",{...o,className:"data-table",children:[e.jsx(g,{}),e.jsx(v,{})]})})})})};try{l.displayName="DataTableStateContext",l.__docgenInfo={description:"DataTableStateContext is a Context for passing the DataTableState.",displayName:"DataTableStateContext",filePath:"/home/runner/work/espresso-block-explorer/espresso-block-explorer/packages/espresso-block-explorer-components/src/components/data/data_table/data_table.tsx",methods:[],props:{},tags:{}}}catch{}try{c.displayName="DataTableSetStateContext",c.__docgenInfo={description:`DataTableSetStateContext is a Context that wraps a function for changing
the table state.`,displayName:"DataTableSetStateContext",filePath:"/home/runner/work/espresso-block-explorer/espresso-block-explorer/packages/espresso-block-explorer-components/src/components/data/data_table/data_table.tsx",methods:[],props:{},tags:{}}}catch{}try{d.displayName="DataTableRowContext",d.__docgenInfo={description:`DataTableRowContext is a Context that provides an individual row within
the DataTable.`,displayName:"DataTableRowContext",filePath:"/home/runner/work/espresso-block-explorer/espresso-block-explorer/packages/espresso-block-explorer-components/src/components/data/data_table/data_table.tsx",methods:[],props:{},tags:{}}}catch{}try{i.displayName="DataTableIndexContext",i.__docgenInfo={description:`DataTableIndexContext is a Context that provides the index of the current
row within the DataTable.`,displayName:"DataTableIndexContext",filePath:"/home/runner/work/espresso-block-explorer/espresso-block-explorer/packages/espresso-block-explorer-components/src/components/data/data_table/data_table.tsx",methods:[],props:{},tags:{}}}catch{}try{m.displayName="datatable",m.__docgenInfo={description:`DataTable is a component that is meant to display data in a tabular form.
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
that individual row.`,displayName:"datatable",filePath:"/home/runner/work/espresso-block-explorer/espresso-block-explorer/packages/espresso-block-explorer-components/src/components/data/data_table/data_table.tsx",methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:"espresso-block-explorer-components/src/components/data/data_table/data_table.tsx",name:"DataTableProps"}],description:"",name:"columns",parent:{fileName:"espresso-block-explorer-components/src/components/data/data_table/data_table.tsx",name:"DataTableProps"},required:!0,tags:{},type:{name:"ColumnData<unknown>[]"}}},tags:{}}}catch{}export{l as D,b as S,c as a,m as b,d as c,P as r};
