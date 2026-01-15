import{j as r}from"./iframe-tCHaFxbc.js";import{D as p}from"./data_provider-DMdJRqvD.js";import{L as c,b as d}from"./loading_provider-CZPO-_kN.js";import{a as u,i as n}from"./functional-DT4GooI6.js";import{B as g}from"./block_size_histogram-DObO2ru6.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./card-DvCX4YfC.js";import"./higher_order-DFvPhzqR.js";import"./value_labeled-B7vNsMXu.js";import"./typography-ByNahrJv.js";import"./label-DuLLKI7X.js";import"./loading_shimmer--34TiCD4.js";import"./skeleton_content-B2LbE2wz.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-ovamH_lA.js";import"./number_formatters_provider-BWiH38Om.js";import"./locale_provider-_bKYlsJ_.js";import"./date_time_formatters_provider-sufyA7A-.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text--8_8YX8A.js";import"./svg_tool_tip-C0xqwXIK.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DQ9E5zJV.js";import"./date_time_text-CKrQdG-h.js";import"./full_hex_text-wUTAmwfT.js";import"./array_buffer-BGAdkDgu.js";import"./base64-_rmSu-kQ.js";import"./hex_text-xpN-YlgA.js";import"./money_text-PofDrM4B.js";import"./relative_time_since_date_text-MVqD1i7i.js";import"./now_provider-CXG0hpMO.js";import"./tagged_base64_text-CAUH6KHu.js";import"./time_text-C3siLlpH.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),or={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [...iota(10)],
      blockSize: [...mapIterator(iota(10), () => Math.random() * 100)]
    },
    loading: false,
    error: null
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null]
    },
    loading: false,
    error: null
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [],
      blockSize: []
    },
    loading: false,
    error: null
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [],
      blockSize: []
    },
    loading: true,
    error: null
  }
}`,...e.parameters?.docs?.source}}};const ar=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,ar as __namedExportsOrder,or as default};
