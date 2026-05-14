import{j as r}from"./iframe-D2UHUSw1.js";import{D as u}from"./data_provider-CqCkzHOO.js";import{L as g,E as k}from"./loading_provider-C-vOZWwa.js";import{E as S}from"./explorer_api_contexts-PgOtBkMv.js";import{a as b,i as l}from"./functional-DK5v8yH0.js";import{S as h}from"./summary_histograms-CBvVkNXk.js";import{B as x}from"./block_size_histogram-BpusS-IG.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./card-BZ_WH6Xl.js";import"./higher_order-Do31eXwD.js";import"./value_labeled-8GSCyMqQ.js";import"./typography-xRdc2P5A.js";import"./label-Ds3kgVYY.js";import"./circular_progress_indicator-DSGwwahE.js";import"./container_loading-Bh7kqIeW.js";import"./skeleton_content-PL2g6D7T.js";import"./byte_size_text-B8LVqjcy.js";import"./number_formatters_provider-deQT8NaH.js";import"./locale_provider-CB6qzanm.js";import"./wallet_address_text-o_fKNCuy.js";import"./date_time_formatters_provider-C6LPHp4i.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-UFu38czj.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./hex_text-qUJvM0mV.js";import"./money_text-D0xggOZ3.js";import"./money_text_full-c4Ixq9j3.js";import"./number_text-Dfa8DO6a.js";import"./percentage_text-3gwyuOf8.js";import"./relative_time_since_date_text-BlTkaE0N.js";import"./tagged_base64_text-D99lZCjx.js";import"./time_text-C0-uqWbV.js";import"./histogram_section_title-BVbh9n9C.js";import"./svg_tool_tip-C2bRf1IP.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-CW2gj0SF.js";const f=({data:o,error:m,loading:p,...c})=>{const s=new h(o.blockSize.map((d,n)=>n),o.blockSize,o.blockSize.map((d,n)=>n),o.blockHeights);return r.jsx(g.Provider,{value:p,children:r.jsx(k.Provider,{value:m,children:r.jsx(S.Provider,{value:s,children:r.jsx(u.Provider,{value:s,children:r.jsx(x,{...c})})})})})},pr={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:f},a={args:{data:{blockHeights:[...l(10)],blockSize:[...b(l(10),()=>Math.random()*100)]},loading:!1,error:null}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},e={args:{data:{blockHeights:[],blockSize:[]},loading:!1,error:null}},i={args:{data:{blockHeights:[],blockSize:[]},loading:!0,error:null}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
