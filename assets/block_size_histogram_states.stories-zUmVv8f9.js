import{j as r}from"./iframe-uLWYWIdy.js";import{D as p}from"./data_provider-wCUWR71U.js";import{L as c,b as d}from"./loading_provider-BM5-2tPO.js";import{a as u,i as n}from"./functional-DsFqNm-o.js";import{B as g}from"./block_size_histogram-Dlz29PX8.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./card-D29d4h2p.js";import"./higher_order-BV5WAo3w.js";import"./value_labeled-DnBhW8uh.js";import"./typography-D9YEMAu1.js";import"./label-CQ9FQXZM.js";import"./loading_shimmer-CBsceKJt.js";import"./skeleton_content-CXAzo2K4.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-D9u07ye5.js";import"./number_formatters_provider-BJawDDf5.js";import"./locale_provider-CWIPDalB.js";import"./date_time_formatters_provider-DTa7qZb-.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-DsiwwU3j.js";import"./svg_tool_tip-CPDws9sq.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CcmMYnIy.js";import"./date_time_text-BPg9gf0T.js";import"./full_hex_text-IJaD05bO.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./hex_text-CyJ0gTKK.js";import"./money_text-8MdYa69j.js";import"./relative_time_since_date_text-DZ8q2cCw.js";import"./now_provider-b5eqaHEI.js";import"./tagged_base64_text-CI2MD-yf.js";import"./time_text-aTJSNRK6.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),or={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
