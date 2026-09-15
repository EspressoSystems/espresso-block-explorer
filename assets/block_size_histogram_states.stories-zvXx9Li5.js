import{j as r}from"./iframe-CLPnbpxV.js";import{D as u}from"./data_provider-DgjhqqNC.js";import{L as g,E as k}from"./loading_provider-paXcQWk1.js";import{E as S}from"./explorer_api_contexts-BpoDdc_Y.js";import{a as b,i as l}from"./functional-DK5v8yH0.js";import{S as h}from"./summary_histograms-CBvVkNXk.js";import{B as x}from"./block_size_histogram-BnF_DVKI.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./card-DEiQ9h5C.js";import"./higher_order-7cy5ynj_.js";import"./value_labeled-1neXfb_V.js";import"./typography-B35vkejZ.js";import"./label-DcUIOBt7.js";import"./circular_progress_indicator-c9XfkaIK.js";import"./container_loading-C7NKHBtL.js";import"./skeleton_content-CHVdEqRf.js";import"./byte_size_text-_ohqn1f_.js";import"./number_formatters_provider-GVH6Hwmx.js";import"./locale_provider-BN4HfGkg.js";import"./wallet_address_text-CMr7VMhM.js";import"./date_time_formatters_provider-CmqVjlvw.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-Vjl96l3q.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./hex_text-BsZ3Qfa8.js";import"./money_text-RleJYn5Z.js";import"./money_text_full-DQxVbaBP.js";import"./number_text-D9k67KIt.js";import"./percentage_text-BwRPUx72.js";import"./relative_time_since_date_text-DzcnoK0x.js";import"./tagged_base64_text-BmMKknzC.js";import"./time_text-DSSKbz_8.js";import"./histogram_section_title-CnyW1MGR.js";import"./svg_tool_tip-D30dHnub.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-CW2gj0SF.js";const f=({data:o,error:m,loading:p,...c})=>{const s=new h(o.blockSize.map((d,n)=>n),o.blockSize,o.blockSize.map((d,n)=>n),o.blockHeights);return r.jsx(g.Provider,{value:p,children:r.jsx(k.Provider,{value:m,children:r.jsx(S.Provider,{value:s,children:r.jsx(u.Provider,{value:s,children:r.jsx(x,{...c})})})})})},pr={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:f},a={args:{data:{blockHeights:[...l(10)],blockSize:[...b(l(10),()=>Math.random()*100)]},loading:!1,error:null}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},e={args:{data:{blockHeights:[],blockSize:[]},loading:!1,error:null}},i={args:{data:{blockHeights:[],blockSize:[]},loading:!0,error:null}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
