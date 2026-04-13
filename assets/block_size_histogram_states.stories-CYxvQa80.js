import{j as r}from"./iframe-C0Hnu7F5.js";import{D as p}from"./data_provider-Cti-MZ1B.js";import{L as c,b as d}from"./loading_provider-DMNdRHHl.js";import{a as u,i as n}from"./functional-BN9f4kvo.js";import{B as g}from"./block_size_histogram-BDyWyAFO.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./card-B5nCup9I.js";import"./higher_order-_6gYxibe.js";import"./value_labeled-BhQGeXVH.js";import"./typography-DLq2B12-.js";import"./label-BCClzFsX.js";import"./circular_progress_indicator-C7NtlUw_.js";import"./container_loading-DfiAqqhd.js";import"./skeleton_content-BOn3R2xW.js";import"./byte_size_text-BSxBAPzi.js";import"./number_formatters_provider-Cxc9ljbf.js";import"./locale_provider-DiHDaUDA.js";import"./wallet_address_text-DncnO_z8.js";import"./date_time_formatters_provider-CfHgi1rZ.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-BYlmSoj7.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./hex_text-Cz8JEBHx.js";import"./money_text-Sqeltofb.js";import"./money_text_full-xwpQIE19.js";import"./number_text-Cyj64pmv.js";import"./relative_time_since_date_text-5Vk5RJ1c.js";import"./tagged_base64_text-KFPcJOl9.js";import"./time_text-L0LlBiF3.js";import"./histogram_section_title-BXKVMkhE.js";import"./svg_tool_tip-C1X1Ow3I.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
