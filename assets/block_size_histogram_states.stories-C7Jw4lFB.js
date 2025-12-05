import{j as r}from"./iframe-DFfdKi-0.js";import{L as p,E as c,D as d}from"./loading_provider-da-Stdik.js";import"./date_time_formatters_provider-D1KuHasK.js";import"./locale_provider-BSfkAuIP.js";import"./page_path_provider-BLpKX2CS.js";import"./now_provider-Bg99-F95.js";import"./number_formatters_provider-BFBcbrkA.js";import"./path_resolver_provider-DZ-5eptY.js";import{b as u,i as n}from"./functional-DLuq-Zgx.js";import{B as g}from"./block_size_histogram-Bzo1DuKO.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-B_DGO8IT.js";import"./higher_order-CAFNA8md.js";import"./loading_shimmer-BmQWJNQg.js";import"./skeleton_content-CLW3IdlQ.js";import"./typography-M3pkdhb1.js";import"./label-C_7faWes.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CVlg39ir.js";import"./base64-Dpbg5EzT.js";import"./copy_button-CNhoUW5a.js";import"./check_circle_filled-C8KuScJK.js";import"./svg_icon_base-Bysx7lQ6.js";import"./copy-Yrm6dGhz.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-BThEIcq7.js";import"./circular_progress_indicator-CvHG1nqf.js";import"./container_loading-W_k3-qfn.js";import"./svg_tool_tip-DuC_nbES.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-D8sYOBly.js";import"./copy_hex-DAgaj9SU.js";import"./array_buffer-DYdk84gS.js";import"./date_time_text-Cno5hICi.js";import"./full_hex_text-Cv2FWqgk.js";import"./hex_text-vhhXAAGO.js";import"./money_text-BY6QHfpq.js";import"./relative_time_since_date_text-Ch8VK2RY.js";import"./tagged_base64_text-V3FlBX9h.js";import"./time_text-Dd-TCUHg.js";import"./heading2-DNajMEUY.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [...iota(10)],
      blockSize: [...mapIterator(iota(10), () => Math.random() * 100)]
    },
    loading: false,
    error: null
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null]
    },
    loading: false,
    error: null
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [],
      blockSize: []
    },
    loading: false,
    error: null
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [],
      blockSize: []
    },
    loading: true,
    error: null
  }
}`,...e.parameters?.docs?.source}}};const pr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,pr as __namedExportsOrder,mr as default};
