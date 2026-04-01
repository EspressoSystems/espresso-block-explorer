import{j as r}from"./iframe-ChCxfwos.js";import{D as p}from"./data_provider-DFHjvLMD.js";import{L as c,b as d}from"./loading_provider-h8XLvBq1.js";import{a as u,i as n}from"./functional-CHI4evRY.js";import{B as g}from"./block_size_histogram-BkWZ5L_j.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./card-DVyL_MFh.js";import"./higher_order-d4YXWLIv.js";import"./value_labeled-MRonwZSt.js";import"./typography-DVygnctX.js";import"./label-DSNuLFKk.js";import"./loading_shimmer-BZRl8PZE.js";import"./skeleton_content-BRFTzvsa.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DBBnhoCB.js";import"./number_formatters_provider-CYynOyj2.js";import"./locale_provider-5mesaRdn.js";import"./date_time_formatters_provider-BNFT2aGM.js";/* empty css               */import"./histogram_section_title-BkUcmFjf.js";import"./svg_tool_tip-DRH8c1-0.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-VJGMQbGs.js";import"./byte_size_text-Cel5U2Hm.js";import"./date_time_text-FQcsgJ1N.js";import"./full_hex_text-CpvnF-0m.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./hex_text-5HGnju8t.js";import"./money_text-D44BgQF5.js";import"./relative_time_since_date_text-D5mbT1sB.js";import"./now_provider-BLPyobGt.js";import"./tagged_base64_text-CYORB88f.js";import"./time_text-CqRiY5Nf.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
