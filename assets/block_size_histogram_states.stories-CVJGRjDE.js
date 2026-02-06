import{j as r}from"./iframe-B98JvFlS.js";import{D as p}from"./data_provider-3-u40w_S.js";import{L as c,b as d}from"./loading_provider-zBTOXaQp.js";import{a as u,i as n}from"./functional-6Z2QHHX7.js";import{B as g}from"./block_size_histogram-BaWBlx18.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./card-CLjaGY8b.js";import"./higher_order-DFW_Utmg.js";import"./value_labeled-CC_5Vs8i.js";import"./typography-CVl34GaZ.js";import"./label-D8XehUEI.js";import"./loading_shimmer-C8TM4iKy.js";import"./skeleton_content-CeIngfNJ.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DPJ1W9nL.js";import"./number_formatters_provider-eJntoBts.js";import"./locale_provider-YmKQyVQa.js";import"./date_time_formatters_provider-L5X9Fiw0.js";/* empty css               */import"./histogram_section_title-B2g2X65W.js";import"./svg_tool_tip-BRsee-7R.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-DXEYwiPL.js";import"./byte_size_text-DtgDpAum.js";import"./date_time_text-DxklR_a2.js";import"./full_hex_text-d5cXjKw4.js";import"./array_buffer-D3ACJkCk.js";import"./base64-GdO7PHhr.js";import"./hex_text-D4MsPMwE.js";import"./money_text-lwZ5zskg.js";import"./relative_time_since_date_text-C2BerGEa.js";import"./now_provider-BOX7yRpC.js";import"./tagged_base64_text-uunfgkXS.js";import"./time_text-CSpxpyZm.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
