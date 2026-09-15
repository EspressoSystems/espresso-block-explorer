import{j as r}from"./iframe-B_3OiDsk.js";import{D as u}from"./data_provider-BDAEVT2w.js";import{L as g,E as k}from"./loading_provider-Cv2RH8EN.js";import{E as S}from"./explorer_api_contexts-DZpKzmnJ.js";import{a as b,i as l}from"./functional-DK5v8yH0.js";import{S as h}from"./summary_histograms-CBvVkNXk.js";import{B as x}from"./block_size_histogram-Dgt7088B.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./card-CjgCWRZr.js";import"./higher_order-B9fwTSHO.js";import"./value_labeled-DCY73MZ3.js";import"./typography-DzOUUUIH.js";import"./label-CHC2P8b5.js";import"./circular_progress_indicator-DxjX0mXb.js";import"./container_loading-TYCnRyE-.js";import"./skeleton_content-Tm-ZGR8J.js";import"./byte_size_text-UC0Wy2aR.js";import"./number_formatters_provider-Bf6RYDCV.js";import"./locale_provider-Wz0dYruV.js";import"./wallet_address_text-BcDYCoX5.js";import"./date_time_formatters_provider-C50Z7dF0.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-DHS6FkeB.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./hex_text-D1xIiaNE.js";import"./money_text-libprYpi.js";import"./money_text_full-Cq_7593R.js";import"./number_text-CfPJ3WYP.js";import"./percentage_text-DF3JRbdn.js";import"./relative_time_since_date_text-bBhZOZRw.js";import"./tagged_base64_text-Bmi60DJN.js";import"./time_text-B1STacQD.js";import"./histogram_section_title-4NStI6Ir.js";import"./svg_tool_tip-S0AcDMpD.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-CW2gj0SF.js";const f=({data:o,error:m,loading:p,...c})=>{const s=new h(o.blockSize.map((d,n)=>n),o.blockSize,o.blockSize.map((d,n)=>n),o.blockHeights);return r.jsx(g.Provider,{value:p,children:r.jsx(k.Provider,{value:m,children:r.jsx(S.Provider,{value:s,children:r.jsx(u.Provider,{value:s,children:r.jsx(x,{...c})})})})})},pr={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:f},a={args:{data:{blockHeights:[...l(10)],blockSize:[...b(l(10),()=>Math.random()*100)]},loading:!1,error:null}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},e={args:{data:{blockHeights:[],blockSize:[]},loading:!1,error:null}},i={args:{data:{blockHeights:[],blockSize:[]},loading:!0,error:null}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
