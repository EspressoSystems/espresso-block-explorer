import{j as r}from"./iframe-FW1O3eUf.js";import{D as p}from"./data_provider-BbqeYGia.js";import{L as c,b as d}from"./loading_provider-B2nS0TYu.js";import{a as u,i as n}from"./functional-DzI6oRAM.js";import{B as g}from"./block_size_histogram-Bcb2mdS4.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-D0dGm0KW.js";import"./string-BCb2Pt7Y.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BB_FSuj1.js";import"./card-Crf0WMMb.js";import"./higher_order-CZN8Z6mQ.js";import"./value_labeled-DWRsz4_f.js";import"./typography-CO4RcCVs.js";import"./label-uO7SM2IW.js";import"./loading_shimmer-OObC7tiF.js";import"./skeleton_content-C2ZsUKe2.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-B4PqBScI.js";import"./number_formatters_provider-BUUmLBk_.js";import"./locale_provider-D1mYVGxJ.js";import"./date_time_formatters_provider-CpNhPCjr.js";/* empty css               */import"./histogram_section_title-D8iKxG55.js";import"./svg_tool_tip-BCcLIcjj.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-DgAnb3aC.js";import"./byte_size_text-by3M3sfe.js";import"./date_time_text-CrmlPWV7.js";import"./full_hex_text-Dk7uaXQs.js";import"./array_buffer-DFcBajus.js";import"./base64-CqV3gweX.js";import"./hex_text-C4mrH0FW.js";import"./money_text-ChWSLHbP.js";import"./relative_time_since_date_text-Db7pPjvM.js";import"./now_provider-yzpWQ6ve.js";import"./tagged_base64_text-_xODqK5j.js";import"./time_text-66zGsxPx.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
