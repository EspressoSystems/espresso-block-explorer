import{j as r}from"./iframe-BzM1REe5.js";import{D as u}from"./data_provider-UvOryvGc.js";import{L as g,E as k}from"./loading_provider-Cf6L2PDb.js";import{E as S}from"./explorer_api_contexts-BZNxgziD.js";import{a as b,i as l}from"./functional-DK5v8yH0.js";import{S as h}from"./summary_histograms-CBvVkNXk.js";import{B as x}from"./block_size_histogram-C_7NudxY.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./card-nv9dVqy5.js";import"./higher_order-RPDetbly.js";import"./value_labeled-CBzWFkcy.js";import"./typography-x0QpVsAI.js";import"./label-DbUh9m4B.js";import"./circular_progress_indicator-B9ilkt7L.js";import"./container_loading-AGhB90IF.js";import"./skeleton_content-CQpRi26N.js";import"./byte_size_text-BvBqpNSY.js";import"./number_formatters_provider-B55I5973.js";import"./locale_provider-CcmMVSKG.js";import"./wallet_address_text-DkuIDJMv.js";import"./date_time_formatters_provider-BQMjgMAw.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CkDQW_O2.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./hex_text-BX6Ncm6j.js";import"./money_text-CvmVZA_V.js";import"./money_text_full-DtYqNUaR.js";import"./number_text-CoNdK3e3.js";import"./percentage_text-DoqaZ5Li.js";import"./relative_time_since_date_text-CbvHaqJF.js";import"./tagged_base64_text-BxaxBsXv.js";import"./time_text-DWVaFWBe.js";import"./histogram_section_title-e9iVOyPd.js";import"./svg_tool_tip-C0Lh-T3P.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-CW2gj0SF.js";const f=({data:o,error:m,loading:p,...c})=>{const s=new h(o.blockSize.map((d,n)=>n),o.blockSize,o.blockSize.map((d,n)=>n),o.blockHeights);return r.jsx(g.Provider,{value:p,children:r.jsx(k.Provider,{value:m,children:r.jsx(S.Provider,{value:s,children:r.jsx(u.Provider,{value:s,children:r.jsx(x,{...c})})})})})},pr={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:f},a={args:{data:{blockHeights:[...l(10)],blockSize:[...b(l(10),()=>Math.random()*100)]},loading:!1,error:null}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},e={args:{data:{blockHeights:[],blockSize:[]},loading:!1,error:null}},i={args:{data:{blockHeights:[],blockSize:[]},loading:!0,error:null}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
