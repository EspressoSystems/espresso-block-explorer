import{j as r}from"./iframe-3Z2fgCPY.js";import{L as p,E as c,D as d}from"./loading_provider-Ur2XoJ-b.js";import"./date_time_formatters_provider-Dd-pwKzP.js";import"./locale_provider-B-1mGrFX.js";import"./page_path_provider-B_tgBqRU.js";import"./now_provider-5ZcTXbz-.js";import"./number_formatters_provider-C17xfnZz.js";import"./path_resolver_provider-BSMezMxn.js";import{b as u,i as n}from"./functional-DLuq-Zgx.js";import{B as g}from"./block_size_histogram-CVlo8bmp.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-CjCkCJ1k.js";import"./higher_order-HipsDJR4.js";import"./loading_shimmer-C4-NTUK_.js";import"./skeleton_content-DOTDChQ8.js";import"./typography-CaQwexFI.js";import"./label-BjY6IUq1.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DQMKEZhY.js";import"./base64-Dpbg5EzT.js";import"./copy_button-Ba-sGIOk.js";import"./check_circle_filled-DDgAunYF.js";import"./svg_icon_base-VH6Zm-Te.js";import"./copy-BAAgR512.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-BJeOQPuJ.js";import"./circular_progress_indicator-Dmkm4_Q9.js";import"./container_loading-DiymhnLh.js";import"./svg_tool_tip-BiVCUuQ8.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CC4RIhaz.js";import"./copy_hex-BUJvkFZN.js";import"./array_buffer-DYdk84gS.js";import"./date_time_text-BcZpdQCq.js";import"./full_hex_text-Cv2FWqgk.js";import"./hex_text-UFGP4wTk.js";import"./money_text-DT6yzNOO.js";import"./relative_time_since_date_text-CL_lCgQD.js";import"./tagged_base64_text-H_LDDWet.js";import"./time_text-CKBRDaVa.js";import"./heading2-Ypq3XH3z.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
