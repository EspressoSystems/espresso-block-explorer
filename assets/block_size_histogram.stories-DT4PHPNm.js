import{j as m}from"./iframe-BnfkL8Kh.js";import{D as c}from"./data_provider-DR0SepNE.js";import{E as u}from"./explorer_api_contexts-Cg2c5Qbq.js";import{t as a,d as p,b as s}from"./functional-CFnOe1PN.js";import{S as g}from"./summary_histograms-CBvVkNXk.js";import{B as d}from"./block_size_histogram-DY4Ryd1O.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./card-D3z7ArwK.js";import"./higher_order-DQHFbP0d.js";import"./value_labeled-D1z_oOrK.js";import"./typography-B6LbXW63.js";import"./label-Dr6oLJ4a.js";import"./circular_progress_indicator-ASlMJQs_.js";import"./container_loading-CC5kCkQh.js";import"./skeleton_content-CMvu7TDW.js";import"./byte_size_text-B76LDok-.js";import"./number_formatters_provider-Bn0oY0TV.js";import"./locale_provider-CYJgRcn0.js";import"./wallet_address_text-6-IkVQhj.js";import"./date_time_formatters_provider-Ce8bEeDE.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-C0tSpfk5.js";import"./full_hex_text-B9F7kEcQ.js";import"./array_buffer_hex-K4SX2B-7.js";import"./hex_text-BF6HsMV1.js";import"./money_text-D7zHf1Cp.js";import"./money_text_full-D40dbKHR.js";import"./number_text-BnuGQVAX.js";import"./percentage_text-DqJBck8H.js";import"./relative_time_since_date_text-ZWzH2UAR.js";import"./tagged_base64_text-BEZsdLdo.js";import"./time_text-CTnIpnRY.js";import"./loading_provider-D7jVFZnN.js";import"./histogram_section_title-DVf2yach.js";import"./svg_tool_tip-lPbuggcv.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const k=({data:r,...l})=>{const e=new g(r.blockSize.map((n,i)=>i),r.blockSize,r.blockSize.map((n,i)=>i),r.blockHeights);return m.jsx(u.Provider,{value:e,children:m.jsx(c.Provider,{value:e,children:m.jsx(d,{...l})})})},er={title:"Block Explorer/Components/Page Sections/Histogram/Block Size",component:k},o={args:{data:{blockHeights:[...a(p(s(),1),10)],blockSize:[...a(p(s(),1),10)]}}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
