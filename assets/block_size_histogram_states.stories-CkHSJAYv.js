import{j as r}from"./iframe-mpHEnFNJ.js";import{D as p}from"./data_provider-CrCMtXFK.js";import{L as c,b as d}from"./loading_provider-INgTCiBb.js";import{a as u,i as n}from"./functional-BN9f4kvo.js";import{B as g}from"./block_size_histogram-DJ_-A0aI.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./card-Z0T3JNTj.js";import"./higher_order-BSlQmUED.js";import"./value_labeled-Bh9HRE6A.js";import"./typography-BNr6fxMy.js";import"./label-BQpJur-V.js";import"./circular_progress_indicator-DomheTJH.js";import"./container_loading-CX5jC8rD.js";import"./skeleton_content-DqloY_f-.js";import"./byte_size_text-Cv4QuSL9.js";import"./number_formatters_provider-OPX5cdf1.js";import"./locale_provider-CFUFv6Rr.js";import"./wallet_address_text-bqe02_aa.js";import"./date_time_formatters_provider-DzftIXyF.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-cRk5ucDj.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./hex_text-aVTQS5pR.js";import"./money_text-DAJraeQH.js";import"./money_text_full-D2eyImrj.js";import"./number_text-DGs2xjUf.js";import"./relative_time_since_date_text-uDiJnjBg.js";import"./tagged_base64_text-B2aws7WV.js";import"./time_text-C3n6I0QM.js";import"./histogram_section_title-B9R1q59c.js";import"./svg_tool_tip-BlmTNjjn.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
