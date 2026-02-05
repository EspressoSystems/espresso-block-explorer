import{j as r}from"./iframe-BmS3xRbu.js";import{D as p}from"./data_provider-Bc8LLRJq.js";import{L as c,b as d}from"./loading_provider-DEQVtaPX.js";import{a as u,i as n}from"./functional-6Z2QHHX7.js";import{B as g}from"./block_size_histogram-Dm8at1ro.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./card-Cvs4vMJk.js";import"./higher_order-BcBNDTSF.js";import"./value_labeled-c7wkpmkM.js";import"./typography-Cewt00oL.js";import"./label-DWOJBOrD.js";import"./loading_shimmer-CD0lFX8V.js";import"./skeleton_content-1t1_tVBp.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BxWYGwIH.js";import"./number_formatters_provider-BMOfqz6h.js";import"./locale_provider-DXJjPQek.js";import"./date_time_formatters_provider-Bq_GZuKL.js";/* empty css               */import"./histogram_section_title-BmfAZRTv.js";import"./svg_tool_tip-D5fxg0uT.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-3CvBpJ-A.js";import"./byte_size_text-PjHd0T68.js";import"./date_time_text-BBJvh5H4.js";import"./full_hex_text-d5cXjKw4.js";import"./array_buffer-D3ACJkCk.js";import"./base64-GdO7PHhr.js";import"./hex_text-Ck3buGva.js";import"./money_text-E5QuoP91.js";import"./relative_time_since_date_text-yVEMwZZM.js";import"./now_provider-N-vzDi1f.js";import"./tagged_base64_text-BV90GCUN.js";import"./time_text-Dw6glsXQ.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
