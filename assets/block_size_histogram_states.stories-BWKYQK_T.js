import{j as r}from"./iframe-BwY8Nc_o.js";import{D as p}from"./data_provider-BIkZvgj5.js";import{L as c,b as d}from"./loading_provider--Fab2jEg.js";import{a as u,i as n}from"./functional-DsFqNm-o.js";import{B as g}from"./block_size_histogram-B-nAlbIB.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./card-ib7QqidU.js";import"./higher_order-CDuDe3l-.js";import"./value_labeled-4OGkiiJD.js";import"./typography-PELJ4Pi9.js";import"./label-BqqvuJsR.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CvJU-ydw.js";import"./number_formatters_provider-DMP6I6Q-.js";import"./locale_provider-CuUrHs_V.js";import"./date_time_formatters_provider-DyEL5Gtx.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-v_ckRp1n.js";import"./skeleton_content-2CbNU9lX.js";import"./svg_tool_tip-CfY5wQC2.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CzTF4zt-.js";import"./date_time_text-B7XZh9vE.js";import"./full_hex_text-IJaD05bO.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./hex_text-SnO3_FxC.js";import"./money_text-BxDHRD8P.js";import"./relative_time_since_date_text-k8xSGfZM.js";import"./now_provider--GGOYw_8.js";import"./tagged_base64_text-C_twqSLi.js";import"./time_text-hYMI7GpY.js";import"./heading2--_TAz6HX.js";/* empty css                */import"./loading_shimmer-CxxRa7n9.js";const k=({data:i,error:s,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:s,children:r.jsx(p.Provider,{value:i,children:r.jsx(g,{...m})})})}),tr={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const er=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,er as __namedExportsOrder,tr as default};
