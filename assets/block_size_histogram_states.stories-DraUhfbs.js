import{j as r}from"./iframe-xhuVH5Ih.js";import{D as p}from"./data_provider-CQiJ9dZf.js";import{L as c,b as d}from"./loading_provider-DI5YbPXc.js";import{a as u,i as n}from"./functional-Ci6o84Cp.js";import{B as g}from"./block_size_histogram-CtmC_YPS.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./card-BbGCfup1.js";import"./higher_order-Bdg3O_St.js";import"./value_labeled-BjZbxZaF.js";import"./typography-DFvrGmLt.js";import"./label-DAne--_L.js";import"./loading_shimmer-Bg2VLIS_.js";import"./skeleton_content-DZ7VSVjZ.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-B7rxwI_V.js";import"./number_formatters_provider-BSQNp_UP.js";import"./locale_provider-CQ3v6PyC.js";import"./date_time_formatters_provider-C8B-TsDL.js";/* empty css               */import"./histogram_section_title-BgJG4lTw.js";import"./svg_tool_tip-BkLhzYsk.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-YH5W9FSg.js";import"./byte_size_text-CFZfsbZU.js";import"./date_time_text-DKBOj9dd.js";import"./full_hex_text-ke0vBHh2.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./hex_text-6uQWwOe5.js";import"./money_text-Ci_j2jBt.js";import"./relative_time_since_date_text-CoCUBHRG.js";import"./now_provider-CmyY3F9O.js";import"./tagged_base64_text-D3X-Z1QX.js";import"./time_text-BM1O5CO3.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
