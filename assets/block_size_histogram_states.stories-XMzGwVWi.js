import{j as r}from"./iframe-lCBbYCEU.js";import{D as p}from"./data_provider-JNzMXrDd.js";import{L as c,b as d}from"./loading_provider-CfI_gzNc.js";import{a as u,i as n}from"./functional-6Z2QHHX7.js";import{B as g}from"./block_size_histogram-Bx9I3-Ys.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./card-bTL_EakN.js";import"./higher_order-B24NaQsc.js";import"./value_labeled-CYq3Snk9.js";import"./typography-C2G_oAYK.js";import"./label-nz9fsGgx.js";import"./loading_shimmer-_d-yto7M.js";import"./skeleton_content-uXbBjkPV.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-r_eDlOBe.js";import"./number_formatters_provider-n3Owoqke.js";import"./locale_provider-CivmyzXf.js";import"./date_time_formatters_provider-D_P0LLFh.js";/* empty css               */import"./histogram_section_title-D1yw9CdP.js";import"./svg_tool_tip-SOGiG2kC.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-C1feg6s_.js";import"./byte_size_text-DdskNyFJ.js";import"./date_time_text-PZluedtG.js";import"./full_hex_text-31tEMUpT.js";import"./array_buffer-BrH4NOGl.js";import"./base64-Cs6zZcIo.js";import"./hex_text-Dq7vbRlC.js";import"./money_text-B449SFRa.js";import"./relative_time_since_date_text-6snd4Hu9.js";import"./now_provider-BJlCMxdf.js";import"./tagged_base64_text-DSPnvE07.js";import"./time_text-FZhLuGii.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
