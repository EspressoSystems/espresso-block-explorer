import{j as r}from"./iframe-CkJJG84G.js";import{D as p}from"./data_provider-BOXyJyDw.js";import{L as c,b as d}from"./loading_provider-B8jjyX_2.js";import{a as u,i as n}from"./functional-6Z2QHHX7.js";import{B as g}from"./block_size_histogram-BqeQSRE9.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./card-T22_PGXS.js";import"./higher_order-BCKgBdih.js";import"./value_labeled-Dbk9ZFo8.js";import"./typography-CKSUV6RN.js";import"./label-DZV8GqE5.js";import"./loading_shimmer-D46He8ot.js";import"./skeleton_content-CH2aYyTn.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BmUeW69w.js";import"./number_formatters_provider-Ch-9Dh1T.js";import"./locale_provider-D4HbO8u7.js";import"./date_time_formatters_provider-BiaU2KTa.js";/* empty css               */import"./histogram_section_title-DqVJD0A3.js";import"./svg_tool_tip-CXb8Ulac.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-B9hdqY8d.js";import"./byte_size_text-D3X2F5ka.js";import"./date_time_text-NIJnJKnu.js";import"./full_hex_text-31tEMUpT.js";import"./array_buffer-BrH4NOGl.js";import"./base64-Cs6zZcIo.js";import"./hex_text-CD2A5jHP.js";import"./money_text-BwA3EQJf.js";import"./relative_time_since_date_text-ejDFvF37.js";import"./now_provider-CzEuiO7J.js";import"./tagged_base64_text-CHiBLPbm.js";import"./time_text-D9xaGGX7.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
