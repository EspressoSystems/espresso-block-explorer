import{j as m}from"./iframe-Czs2L5m1.js";import{D as c}from"./data_provider-LHkS6gF_.js";import{E as u}from"./explorer_api_contexts-DT-G89Jt.js";import{t as a,d as p,b as s}from"./functional-CFnOe1PN.js";import{S as g}from"./summary_histograms-CBvVkNXk.js";import{B as d}from"./block_size_histogram-CLVMZPBa.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./card-DtdWdVsu.js";import"./higher_order-Bg2qo-qh.js";import"./value_labeled-B_yMrVqA.js";import"./typography-CqA07OnF.js";import"./label-DoHYz8u4.js";import"./circular_progress_indicator-DXYyTHHF.js";import"./container_loading-CAON8yd-.js";import"./skeleton_content-CzbtXqMN.js";import"./byte_size_text-LFOa9cPx.js";import"./number_formatters_provider-C7_WrEPu.js";import"./locale_provider-DjhHC7rP.js";import"./wallet_address_text-b1XU89BU.js";import"./date_time_formatters_provider-npYgPV9H.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-DTv9voBS.js";import"./full_hex_text-B9F7kEcQ.js";import"./array_buffer_hex-K4SX2B-7.js";import"./hex_text-D4ncCmSo.js";import"./money_text-BJ-uCKea.js";import"./money_text_full-Cn1Suzc2.js";import"./number_text-NeBjfjp9.js";import"./percentage_text-DYq2RApP.js";import"./relative_time_since_date_text-DLaNVU8u.js";import"./tagged_base64_text-BpgIJSgf.js";import"./time_text-DXVJqvoG.js";import"./loading_provider-Cs7gPV-B.js";import"./histogram_section_title-99QteEYR.js";import"./svg_tool_tip-BecNETuX.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const k=({data:r,...l})=>{const e=new g(r.blockSize.map((n,i)=>i),r.blockSize,r.blockSize.map((n,i)=>i),r.blockHeights);return m.jsx(u.Provider,{value:e,children:m.jsx(c.Provider,{value:e,children:m.jsx(d,{...l})})})},er={title:"Block Explorer/Components/Page Sections/Histogram/Block Size",component:k},o={args:{data:{blockHeights:[...a(p(s(),1),10)],blockSize:[...a(p(s(),1),10)]}}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blockHeights: [...takeIterator(dropIterator(inf(), 1), 10)],
      blockSize: [...takeIterator(dropIterator(inf(), 1), 10)]
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blockHeights: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null]
    }
  }
}`,...t.parameters?.docs?.source}}};const ar=["Default","MissingData"];export{o as Default,t as MissingData,ar as __namedExportsOrder,er as default};
