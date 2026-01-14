import{j as r}from"./iframe-DI-11s_X.js";import{D as p}from"./data_provider-DGnnlGIN.js";import{L as c,b as d}from"./loading_provider-DZ2hJPrr.js";import{a as u,i as n}from"./functional-DsFqNm-o.js";import{B as g}from"./block_size_histogram-Bv0HXSff.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./card-D3FygXcU.js";import"./higher_order-CE6OGbq-.js";import"./value_labeled-9ZyU3RsZ.js";import"./typography-DVGLpPO5.js";import"./label-BXf5muVR.js";import"./loading_shimmer-PSqwM2hU.js";import"./skeleton_content-BJBzdtyc.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BfX5u5Mj.js";import"./number_formatters_provider-KddJYOdi.js";import"./locale_provider-C8e6pJUg.js";import"./date_time_formatters_provider-M9CCk0Jh.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-BtfPTykZ.js";import"./svg_tool_tip-B-Mv_OtH.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DEFkBL8V.js";import"./date_time_text-DPkozv3x.js";import"./full_hex_text-IJaD05bO.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./hex_text-CNA63x8l.js";import"./money_text-DWVpZrzw.js";import"./relative_time_since_date_text-CL2VL2Wf.js";import"./now_provider-Cyuty8k3.js";import"./tagged_base64_text-CvsXgAKe.js";import"./time_text-B0jFtZmy.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),or={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,ar as __namedExportsOrder,or as default};
