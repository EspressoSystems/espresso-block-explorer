import{j as r}from"./iframe-CRN6ir_k.js";import{D as p}from"./data_provider-BRUBq0Ii.js";import{L as c,b as d}from"./loading_provider-bJjs6rdx.js";import{a as u,i as n}from"./functional-BN9f4kvo.js";import{B as g}from"./block_size_histogram-C6R_ODXC.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./card-C-qeXBil.js";import"./higher_order-BJoFsnsT.js";import"./value_labeled-BNh1Kzyj.js";import"./typography-CuF_OJjv.js";import"./label-02TVAkTh.js";import"./circular_progress_indicator-D_atp0op.js";import"./container_loading-C9coGMSW.js";import"./skeleton_content-BqOji4jo.js";import"./byte_size_text-Ch1N4NZS.js";import"./number_formatters_provider-CV2JCVAy.js";import"./locale_provider-DitRBxok.js";import"./wallet_address_text-iOdgpcaz.js";import"./date_time_formatters_provider-CO-VImxK.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CO7oiG9G.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./hex_text-Dmo4jBH1.js";import"./money_text-Mf2-fP6d.js";import"./money_text_full-CyFzKqQ4.js";import"./number_text-i0V-NKlU.js";import"./relative_time_since_date_text-BvB0wkUr.js";import"./tagged_base64_text-C5VDRjcO.js";import"./time_text-CSZWe2p1.js";import"./histogram_section_title-B8JPG8bg.js";import"./svg_tool_tip-D9KIKZfF.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
