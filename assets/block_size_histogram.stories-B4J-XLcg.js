import{j as m}from"./iframe-B_3OiDsk.js";import{D as c}from"./data_provider-BDAEVT2w.js";import{E as u}from"./explorer_api_contexts-DZpKzmnJ.js";import{t as a,d as p,b as s}from"./functional-DK5v8yH0.js";import{S as g}from"./summary_histograms-CBvVkNXk.js";import{B as d}from"./block_size_histogram-Dgt7088B.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./card-CjgCWRZr.js";import"./higher_order-B9fwTSHO.js";import"./value_labeled-DCY73MZ3.js";import"./typography-DzOUUUIH.js";import"./label-CHC2P8b5.js";import"./circular_progress_indicator-DxjX0mXb.js";import"./container_loading-TYCnRyE-.js";import"./skeleton_content-Tm-ZGR8J.js";import"./byte_size_text-UC0Wy2aR.js";import"./number_formatters_provider-Bf6RYDCV.js";import"./locale_provider-Wz0dYruV.js";import"./wallet_address_text-BcDYCoX5.js";import"./date_time_formatters_provider-C50Z7dF0.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-DHS6FkeB.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./hex_text-D1xIiaNE.js";import"./money_text-libprYpi.js";import"./money_text_full-Cq_7593R.js";import"./number_text-CfPJ3WYP.js";import"./percentage_text-DF3JRbdn.js";import"./relative_time_since_date_text-bBhZOZRw.js";import"./tagged_base64_text-Bmi60DJN.js";import"./time_text-B1STacQD.js";import"./loading_provider-Cv2RH8EN.js";import"./histogram_section_title-4NStI6Ir.js";import"./svg_tool_tip-S0AcDMpD.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-CW2gj0SF.js";const k=({data:r,...l})=>{const e=new g(r.blockSize.map((n,i)=>i),r.blockSize,r.blockSize.map((n,i)=>i),r.blockHeights);return m.jsx(u.Provider,{value:e,children:m.jsx(c.Provider,{value:e,children:m.jsx(d,{...l})})})},er={title:"Block Explorer/Components/Page Sections/Histogram/Block Size",component:k},o={args:{data:{blockHeights:[...a(p(s(),1),10)],blockSize:[...a(p(s(),1),10)]}}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
