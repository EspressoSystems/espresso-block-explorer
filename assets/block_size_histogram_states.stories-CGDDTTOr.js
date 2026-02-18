import{j as r}from"./iframe-DRi1LiY1.js";import{D as p}from"./data_provider-BEXgs6IU.js";import{L as c,b as d}from"./loading_provider-BBseR82o.js";import{a as u,i as n}from"./functional-Ci6o84Cp.js";import{B as g}from"./block_size_histogram-CS_sTRfo.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./card-BdmDXF4b.js";import"./higher_order-DchKpsaa.js";import"./value_labeled-BQyya6am.js";import"./typography-Z9f5k3zd.js";import"./label-DY5go4n1.js";import"./loading_shimmer-Jrr2h5jq.js";import"./skeleton_content-D6bR3BKC.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BiMQPfvJ.js";import"./number_formatters_provider-DrWfDPcd.js";import"./locale_provider-CADKL3Zh.js";import"./date_time_formatters_provider-DrMqCwD5.js";/* empty css               */import"./histogram_section_title-QrPTWkHi.js";import"./svg_tool_tip-DdCMQ8RD.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-ohwb6YDX.js";import"./byte_size_text-lB2paboN.js";import"./date_time_text-Bg02kt8U.js";import"./full_hex_text-ke0vBHh2.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./hex_text-CnqaSLum.js";import"./money_text-F8SApLtV.js";import"./relative_time_since_date_text-GxfeHY5z.js";import"./now_provider-DEU80TI-.js";import"./tagged_base64_text-DkwvBY5G.js";import"./time_text-Br-TFifp.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
