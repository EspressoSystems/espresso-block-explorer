import{j as r}from"./iframe-BvJnvOK3.js";import{D as p}from"./data_provider-D1xrNIUw.js";import{L as c,b as d}from"./loading_provider-BgHImaQi.js";import{a as u,i as n}from"./functional-CHI4evRY.js";import{B as g}from"./block_size_histogram-CZVwp-dI.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./card-DepqxSAB.js";import"./higher_order-CzhT3LZz.js";import"./value_labeled-JMbsry1f.js";import"./typography-BvwdJNDp.js";import"./label-9K-rLN01.js";import"./loading_shimmer-DQUrkx9q.js";import"./skeleton_content-CNMj2q17.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DiWDtUjN.js";import"./number_formatters_provider-Cr-dALW7.js";import"./locale_provider-DLWcZiH3.js";import"./date_time_formatters_provider-DiFEct46.js";/* empty css               */import"./histogram_section_title-BPtIxx5a.js";import"./svg_tool_tip-CHkyHo_q.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-B3D3piOk.js";import"./byte_size_text-B7UTqo--.js";import"./date_time_text-DfM-PU1A.js";import"./full_hex_text-CpvnF-0m.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./hex_text-Vn-94ioF.js";import"./money_text-DNXu9iqG.js";import"./relative_time_since_date_text-CL62WKWF.js";import"./now_provider-C3aSuMvV.js";import"./tagged_base64_text-BWi0_w0G.js";import"./time_text-3gr1ACW1.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
