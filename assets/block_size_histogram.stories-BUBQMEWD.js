import{j as m}from"./iframe-Blfbjlvh.js";import{D as c}from"./data_provider-DgI1389i.js";import{E as u}from"./explorer_api_contexts-BZ9JFvqM.js";import{t as a,d as p,b as s}from"./functional-CFnOe1PN.js";import{S as g}from"./summary_histograms-CBvVkNXk.js";import{B as d}from"./block_size_histogram-DSr3247G.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./card-BX2I1LTH.js";import"./higher_order-DC1bhpzY.js";import"./value_labeled-B_SkvsAz.js";import"./typography-Bjr2JLHR.js";import"./label-COnSXR8t.js";import"./circular_progress_indicator-D9cGi28K.js";import"./container_loading-DWgpFffe.js";import"./skeleton_content-BWYw2HBZ.js";import"./byte_size_text-fYb6Ipih.js";import"./number_formatters_provider-CMgMBIb7.js";import"./locale_provider-2gwxwAQe.js";import"./wallet_address_text-Ce2BIBuE.js";import"./date_time_formatters_provider-CTRX1eWg.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-goFrQyOw.js";import"./full_hex_text-B9F7kEcQ.js";import"./array_buffer_hex-K4SX2B-7.js";import"./hex_text-CMd0ughg.js";import"./money_text-BHu1NHy8.js";import"./money_text_full-Cij7145-.js";import"./number_text-B0fm5SWR.js";import"./percentage_text-Df9tDUxB.js";import"./relative_time_since_date_text-DON7xrTR.js";import"./tagged_base64_text-fqOOQXXq.js";import"./time_text-Bs6IzVdx.js";import"./loading_provider-DXstYbvN.js";import"./histogram_section_title-AwvTBsyh.js";import"./svg_tool_tip-DjkYpuJR.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-CW2gj0SF.js";const k=({data:r,...l})=>{const e=new g(r.blockSize.map((n,i)=>i),r.blockSize,r.blockSize.map((n,i)=>i),r.blockHeights);return m.jsx(u.Provider,{value:e,children:m.jsx(c.Provider,{value:e,children:m.jsx(d,{...l})})})},er={title:"Block Explorer/Components/Page Sections/Histogram/Block Size",component:k},o={args:{data:{blockHeights:[...a(p(s(),1),10)],blockSize:[...a(p(s(),1),10)]}}},t={args:{data:{blockHeights:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
