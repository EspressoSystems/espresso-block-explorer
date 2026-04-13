import{j as r}from"./iframe-Da-pRdj_.js";import{D as p}from"./data_provider-DT5b-p5f.js";import{L as c,b as d}from"./loading_provider-CkZUfCHZ.js";import{a as u,i as n}from"./functional-BY4LX4kJ.js";import{B as g}from"./block_size_histogram-CKCgzdi7.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./card-CTYjD-eM.js";import"./higher_order-BliYGj6D.js";import"./value_labeled-COtg0GIc.js";import"./typography-CxAy-q2v.js";import"./label-EkcAtQoZ.js";import"./circular_progress_indicator-CmgbbPhU.js";import"./container_loading-Bs_nCWyM.js";import"./skeleton_content-B8Hxs29M.js";import"./byte_size_text-DzPI3Ku4.js";import"./number_formatters_provider-DIxko5iX.js";import"./locale_provider-Bv2GXKLp.js";import"./wallet_address_text-BXyJ1CeJ.js";import"./date_time_formatters_provider-Bq_dXrCb.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-B8ynrPRp.js";import"./full_hex_text-DhrOCfLO.js";import"./array_buffer_hex-Bcc-7BbE.js";import"./base64-CIn2pRZH.js";import"./hex_text-b6On9MuH.js";import"./money_text-DVODtpBJ.js";import"./money_text_full-BBNORgie.js";import"./number_text-By_u4Wjn.js";import"./relative_time_since_date_text-dTJLjam_.js";import"./tagged_base64_text-B_jFbqJ5.js";import"./time_text-BfBn8ExL.js";import"./histogram_section_title-BvCN0jIw.js";import"./svg_tool_tip-CF18Ply-.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const k=({data:i,error:s,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:s,children:r.jsx(p.Provider,{value:i,children:r.jsx(g,{...m})})})}),tr={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
