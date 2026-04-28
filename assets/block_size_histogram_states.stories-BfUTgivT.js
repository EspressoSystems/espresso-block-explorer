import{j as r}from"./iframe-BnfkL8Kh.js";import{D as u}from"./data_provider-DR0SepNE.js";import{L as g,E as k}from"./loading_provider-D7jVFZnN.js";import{E as S}from"./explorer_api_contexts-Cg2c5Qbq.js";import{a as b,i as l}from"./functional-CFnOe1PN.js";import{S as h}from"./summary_histograms-CBvVkNXk.js";import{B as x}from"./block_size_histogram-DY4Ryd1O.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./card-D3z7ArwK.js";import"./higher_order-DQHFbP0d.js";import"./value_labeled-D1z_oOrK.js";import"./typography-B6LbXW63.js";import"./label-Dr6oLJ4a.js";import"./circular_progress_indicator-ASlMJQs_.js";import"./container_loading-CC5kCkQh.js";import"./skeleton_content-CMvu7TDW.js";import"./byte_size_text-B76LDok-.js";import"./number_formatters_provider-Bn0oY0TV.js";import"./locale_provider-CYJgRcn0.js";import"./wallet_address_text-6-IkVQhj.js";import"./date_time_formatters_provider-Ce8bEeDE.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-C0tSpfk5.js";import"./full_hex_text-B9F7kEcQ.js";import"./array_buffer_hex-K4SX2B-7.js";import"./hex_text-BF6HsMV1.js";import"./money_text-D7zHf1Cp.js";import"./money_text_full-D40dbKHR.js";import"./number_text-BnuGQVAX.js";import"./percentage_text-DqJBck8H.js";import"./relative_time_since_date_text-ZWzH2UAR.js";import"./tagged_base64_text-BEZsdLdo.js";import"./time_text-CTnIpnRY.js";import"./histogram_section_title-DVf2yach.js";import"./svg_tool_tip-lPbuggcv.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const f=({data:o,error:m,loading:p,...c})=>{const s=new h(o.blockSize.map((d,n)=>n),o.blockSize,o.blockSize.map((d,n)=>n),o.blockHeights);return r.jsx(g.Provider,{value:p,children:r.jsx(k.Provider,{value:m,children:r.jsx(S.Provider,{value:s,children:r.jsx(u.Provider,{value:s,children:r.jsx(x,{...c})})})})})},pr={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:f},a={args:{data:{blockHeights:[...l(10)],blockSize:[...b(l(10),()=>Math.random()*100)]},loading:!1,error:null}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},e={args:{data:{blockHeights:[],blockSize:[]},loading:!1,error:null}},i={args:{data:{blockHeights:[],blockSize:[]},loading:!0,error:null}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blockHeights: [...iota(10)],
      blockSize: [...mapIterator(iota(10), () => Math.random() * 100)]
    },
    loading: false,
    error: null
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blockHeights: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null]
    },
    loading: false,
    error: null
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blockHeights: [],
      blockSize: []
    },
    loading: false,
    error: null
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blockHeights: [],
      blockSize: []
    },
    loading: true,
    error: null
  }
}`,...i.parameters?.docs?.source}}};const cr=["RandomData","MissingData","EmptyData","LoadingData"];export{e as EmptyData,i as LoadingData,t as MissingData,a as RandomData,cr as __namedExportsOrder,pr as default};
