import{j as m}from"./iframe-CLPnbpxV.js";import{D as c}from"./data_provider-DgjhqqNC.js";import{E as u}from"./explorer_api_contexts-BpoDdc_Y.js";import{t as a,d as p,b as s}from"./functional-DK5v8yH0.js";import{S as g}from"./summary_histograms-CBvVkNXk.js";import{B as d}from"./block_size_histogram-BnF_DVKI.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./card-DEiQ9h5C.js";import"./higher_order-7cy5ynj_.js";import"./value_labeled-1neXfb_V.js";import"./typography-B35vkejZ.js";import"./label-DcUIOBt7.js";import"./circular_progress_indicator-c9XfkaIK.js";import"./container_loading-C7NKHBtL.js";import"./skeleton_content-CHVdEqRf.js";import"./byte_size_text-_ohqn1f_.js";import"./number_formatters_provider-GVH6Hwmx.js";import"./locale_provider-BN4HfGkg.js";import"./wallet_address_text-CMr7VMhM.js";import"./date_time_formatters_provider-CmqVjlvw.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-Vjl96l3q.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./hex_text-BsZ3Qfa8.js";import"./money_text-RleJYn5Z.js";import"./money_text_full-DQxVbaBP.js";import"./number_text-D9k67KIt.js";import"./percentage_text-BwRPUx72.js";import"./relative_time_since_date_text-DzcnoK0x.js";import"./tagged_base64_text-BmMKknzC.js";import"./time_text-DSSKbz_8.js";import"./loading_provider-paXcQWk1.js";import"./histogram_section_title-CnyW1MGR.js";import"./svg_tool_tip-D30dHnub.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-CW2gj0SF.js";const k=({data:r,...l})=>{const e=new g(r.blockSize.map((n,i)=>i),r.blockSize,r.blockSize.map((n,i)=>i),r.blockHeights);return m.jsx(u.Provider,{value:e,children:m.jsx(c.Provider,{value:e,children:m.jsx(d,{...l})})})},er={title:"Block Explorer/Components/Page Sections/Histogram/Block Size",component:k},o={args:{data:{blockHeights:[...a(p(s(),1),10)],blockSize:[...a(p(s(),1),10)]}}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
