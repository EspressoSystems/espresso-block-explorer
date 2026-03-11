import{j as r}from"./iframe-Cy4xjHUd.js";import{D as p}from"./data_provider-C2a9yIBm.js";import{L as c,b as d}from"./loading_provider-Cu3BxgBC.js";import{a as u,i as n}from"./functional-Ci6o84Cp.js";import{B as g}from"./block_size_histogram-BfpMTHSS.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./card-BcENDRO1.js";import"./higher_order-C1TCJwML.js";import"./value_labeled-oyZEmiUI.js";import"./typography-DSDO5-HQ.js";import"./label-Bas-NhNA.js";import"./loading_shimmer-1OukwHN-.js";import"./skeleton_content-D6wyLx9C.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-WaEYU1Es.js";import"./number_formatters_provider-BzZn-8Pb.js";import"./locale_provider-CMdojvOr.js";import"./date_time_formatters_provider-Cj5Fa5jE.js";/* empty css               */import"./histogram_section_title-u_FqURm5.js";import"./svg_tool_tip-CwsYqpIJ.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-9BSNavKf.js";import"./byte_size_text-OP0W9Ddj.js";import"./date_time_text-Dp6lUZ-6.js";import"./full_hex_text-ke0vBHh2.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./hex_text-Z8LWba2j.js";import"./money_text-CamHETMJ.js";import"./relative_time_since_date_text-joT83zjw.js";import"./now_provider-CHx9qqh5.js";import"./tagged_base64_text-Cgaol6v1.js";import"./time_text-CmEGKF7P.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
