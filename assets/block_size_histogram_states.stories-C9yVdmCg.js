import{j as r}from"./iframe-ChMM8fie.js";import{D as p}from"./data_provider-DipucN8t.js";import{L as c,b as d}from"./loading_provider-DLgXNpIx.js";import{a as u,i as n}from"./functional-DT4GooI6.js";import{B as g}from"./block_size_histogram-Bxn010z4.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./card-sFx9rmY6.js";import"./higher_order-BDzlKa4m.js";import"./value_labeled-m0_-_cYZ.js";import"./typography-CXTpHQ-1.js";import"./label-DyjIPWVJ.js";import"./loading_shimmer--9TEp1Ur.js";import"./skeleton_content-D_9h32no.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-Dq-dziEi.js";import"./number_formatters_provider-CudGGieU.js";import"./locale_provider--Ln2ac7i.js";import"./date_time_formatters_provider-BWsAdsOr.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-CahUOGB6.js";import"./svg_tool_tip-CCW323fW.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-BCct5yUn.js";import"./date_time_text-CsqteGv_.js";import"./full_hex_text-wUTAmwfT.js";import"./array_buffer-BGAdkDgu.js";import"./base64-_rmSu-kQ.js";import"./hex_text-DiwkJ0fA.js";import"./money_text-Bga5xRSR.js";import"./relative_time_since_date_text-CpWnS_tf.js";import"./now_provider-CCB05c4h.js";import"./tagged_base64_text-DfwL_HLi.js";import"./time_text-CGiZUZ1Y.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),or={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
