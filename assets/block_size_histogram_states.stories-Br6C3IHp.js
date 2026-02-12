import{j as r}from"./iframe-D4NG4Ygg.js";import{D as p}from"./data_provider-kgUlCSLb.js";import{L as c,b as d}from"./loading_provider-B7axcFy0.js";import{a as u,i as n}from"./functional-Ci6o84Cp.js";import{B as g}from"./block_size_histogram-DxsvK46m.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./card-DX01MHcn.js";import"./higher_order-BVplWATc.js";import"./value_labeled-BDWrRP22.js";import"./typography-B6ctLHzU.js";import"./label-D8dHc5tI.js";import"./loading_shimmer-BQy7T3CJ.js";import"./skeleton_content-Ot69JtSC.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DHh5fdnR.js";import"./number_formatters_provider-CV8eEq8L.js";import"./locale_provider-y_w6A6F5.js";import"./date_time_formatters_provider-D_NikJXM.js";/* empty css               */import"./histogram_section_title-D8cROGfX.js";import"./svg_tool_tip-DbyrSKj_.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-CGho1SjB.js";import"./byte_size_text-CEkXcn-C.js";import"./date_time_text-fOLyOuvc.js";import"./full_hex_text-ke0vBHh2.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./hex_text-D-eI2otM.js";import"./money_text-mTZS0F0I.js";import"./relative_time_since_date_text-Oku8-zsN.js";import"./now_provider-DEocB4vj.js";import"./tagged_base64_text-DCRL9Rv3.js";import"./time_text-cZm6g82q.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
