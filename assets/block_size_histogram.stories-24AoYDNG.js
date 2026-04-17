import{j as m}from"./iframe-CUplt-FF.js";import{D as c}from"./data_provider-CUqNqUZj.js";import{E as u}from"./explorer_api_contexts-UzQVJ61W.js";import{t as a,d as p,b as s}from"./functional-CFnOe1PN.js";import{S as g}from"./summary_histograms-CBvVkNXk.js";import{B as d}from"./block_size_histogram-BsRsWWCS.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./card-Bpw-Mzzt.js";import"./higher_order-DEmr4IMR.js";import"./value_labeled-DH9k_wBc.js";import"./typography-QgnP2YK8.js";import"./label-CEExT-SU.js";import"./circular_progress_indicator-OGvGyeUN.js";import"./container_loading-s2lGMUEi.js";import"./skeleton_content-CKngjzZ5.js";import"./byte_size_text-BJcG2Bdc.js";import"./number_formatters_provider-K0qk2vlF.js";import"./locale_provider-DmZD1wbO.js";import"./wallet_address_text-BCyv1a24.js";import"./date_time_formatters_provider-CNtAdVHQ.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CTQBcN9w.js";import"./full_hex_text-B9F7kEcQ.js";import"./array_buffer_hex-K4SX2B-7.js";import"./hex_text-DbzBDiRA.js";import"./money_text-Bgb4wLSJ.js";import"./money_text_full-C0z5m69D.js";import"./number_text-_tp6nnNp.js";import"./relative_time_since_date_text-iMsVbehX.js";import"./tagged_base64_text-DquzWsrm.js";import"./time_text-Bl2PDbNx.js";import"./loading_provider-BKy8tdgH.js";import"./histogram_section_title-IaGz7hqw.js";import"./svg_tool_tip-_z7aznzR.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const k=({data:r,...l})=>{const e=new g(r.blockSize.map((n,i)=>i),r.blockSize,r.blockSize.map((n,i)=>i),r.blockHeights);return m.jsx(u.Provider,{value:e,children:m.jsx(c.Provider,{value:e,children:m.jsx(d,{...l})})})},mr={title:"Block Explorer/Components/Page Sections/Histogram/Block Size",component:k},o={args:{data:{blockHeights:[...a(p(s(),1),10)],blockSize:[...a(p(s(),1),10)]}}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const er=["Default","MissingData"];export{o as Default,t as MissingData,er as __namedExportsOrder,mr as default};
