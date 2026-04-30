import{j as m}from"./iframe-ByirMSqC.js";import{D as c}from"./data_provider-uPErEsh-.js";import{E as u}from"./explorer_api_contexts-CyGseM5h.js";import{t as a,d as p,b as s}from"./functional-DK5v8yH0.js";import{S as g}from"./summary_histograms-CBvVkNXk.js";import{B as d}from"./block_size_histogram-w88CLcYU.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./card-DmuDK-sr.js";import"./higher_order-B4s6DllY.js";import"./value_labeled-Bq4o86o1.js";import"./typography-DrYgbUpu.js";import"./label-Dv8k1Ut_.js";import"./circular_progress_indicator-DX47TK7n.js";import"./container_loading-CCFXUz7D.js";import"./skeleton_content-BG6LpR7n.js";import"./byte_size_text-rg32i4pu.js";import"./number_formatters_provider-BSxXP_Sb.js";import"./locale_provider-EAu4dooN.js";import"./wallet_address_text-pc0HgSn8.js";import"./date_time_formatters_provider-BDkg3xmd.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-Bkgrlfv9.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./hex_text-Ds-pkMC3.js";import"./money_text-Pdt9ieyf.js";import"./money_text_full-B_yvHUNG.js";import"./number_text-BPE_jkSC.js";import"./percentage_text-j7czaObi.js";import"./relative_time_since_date_text-Z2A2B9ek.js";import"./tagged_base64_text-BmBn2DYq.js";import"./time_text-DzXzA355.js";import"./loading_provider-JQzlSpbY.js";import"./histogram_section_title-aX_Hjpgs.js";import"./svg_tool_tip-K6gMTIVY.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-CW2gj0SF.js";const k=({data:r,...l})=>{const e=new g(r.blockSize.map((n,i)=>i),r.blockSize,r.blockSize.map((n,i)=>i),r.blockHeights);return m.jsx(u.Provider,{value:e,children:m.jsx(c.Provider,{value:e,children:m.jsx(d,{...l})})})},er={title:"Block Explorer/Components/Page Sections/Histogram/Block Size",component:k},o={args:{data:{blockHeights:[...a(p(s(),1),10)],blockSize:[...a(p(s(),1),10)]}}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
