import{j as r}from"./iframe-Cvx6RpPY.js";import{D as p}from"./data_provider-DuSHNFDm.js";import{L as c,b as d}from"./loading_provider-BVRuGC11.js";import{a as u,i as n}from"./functional-DzI6oRAM.js";import{B as g}from"./block_size_histogram-C1hNTR5B.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-D0dGm0KW.js";import"./string-BCb2Pt7Y.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BB_FSuj1.js";import"./card-CsSulh7F.js";import"./higher_order-CcpOgoeh.js";import"./value_labeled-BNXody9-.js";import"./typography-B40_qrOR.js";import"./label-DNkPgfEy.js";import"./loading_shimmer-DfYfcWJ-.js";import"./skeleton_content-DsbU2c_Z.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DIvVI0Zv.js";import"./number_formatters_provider-DSWMRQJW.js";import"./locale_provider-D5aNHbGy.js";import"./date_time_formatters_provider-DcUzUZDq.js";/* empty css               */import"./histogram_section_title-DpX7PZpr.js";import"./svg_tool_tip-YY6Ta1SX.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-6gO1h8MR.js";import"./byte_size_text-NLE3VhrF.js";import"./date_time_text-plZBolwB.js";import"./full_hex_text-Dk7uaXQs.js";import"./array_buffer-DFcBajus.js";import"./base64-CqV3gweX.js";import"./hex_text-ReM3eh9l.js";import"./money_text-DkZcradb.js";import"./relative_time_since_date_text-DcFvPw8b.js";import"./now_provider-C_TnA9uy.js";import"./tagged_base64_text-BiKx3vV-.js";import"./time_text-D040jtBw.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const tr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,tr as __namedExportsOrder,ar as default};
