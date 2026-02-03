import{j as r}from"./iframe-BisBQj4b.js";import{D as p}from"./data_provider-DSZ9Vv_3.js";import{L as c,b as d}from"./loading_provider-BcyIpYE9.js";import{a as u,i as n}from"./functional-6Z2QHHX7.js";import{B as g}from"./block_size_histogram-DF2a82Yi.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./card-D0UOX6M7.js";import"./higher_order-B_D7TFYJ.js";import"./value_labeled-U1o_9Gv3.js";import"./typography-CoQDMpTx.js";import"./label-CGwj4aky.js";import"./loading_shimmer-JrIzsEB2.js";import"./skeleton_content-BxEnkJYy.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CPHc-mtj.js";import"./number_formatters_provider-BbUevisL.js";import"./locale_provider-Cy9Qu1vd.js";import"./date_time_formatters_provider-T4Gwii8n.js";/* empty css               */import"./histogram_section_title-BKLusPf4.js";import"./svg_tool_tip-mC0zgJg0.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-DzPmU_Wm.js";import"./byte_size_text-D02xq_qj.js";import"./date_time_text-CWBRTMWe.js";import"./full_hex_text-d5cXjKw4.js";import"./array_buffer-D3ACJkCk.js";import"./base64-GdO7PHhr.js";import"./hex_text-ioJdFCKB.js";import"./money_text-CSyR9ORC.js";import"./relative_time_since_date_text-BcKaKuH7.js";import"./now_provider-BADpF5pN.js";import"./tagged_base64_text-BsrZb43h.js";import"./time_text-CQFUX5ML.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
