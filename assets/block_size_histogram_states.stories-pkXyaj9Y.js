import{j as r}from"./iframe-CMnlNZVY.js";import{L as p,E as c,D as d}from"./loading_provider-CDQmatE4.js";import"./date_time_formatters_provider-DBEnsNUl.js";import"./locale_provider-BdMkMFD6.js";import"./page_path_provider-BBjnTzQ1.js";import"./now_provider-Bm-WfiXb.js";import"./number_formatters_provider-fXsUJ3gc.js";import"./path_resolver_provider-CM-lLLot.js";import{b as u,i as n}from"./functional-aFFbciHe.js";import{B as g}from"./block_size_histogram-ByVnCHoY.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-CNIZMnir.js";import"./higher_order-CwufDn_N.js";import"./loading_shimmer-CTjX7sWm.js";import"./skeleton_content-Dg5AgUY7.js";import"./typography-3_NTd_7n.js";import"./label-BnT7lPUH.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-C726dtJe.js";import"./base64-Pz9_wEqE.js";import"./copy_button-Dd-3RrP9.js";import"./check_circle_filled-CDHiQHIQ.js";import"./svg_icon_base-DLdqNfMl.js";import"./copy-Caz9CDxX.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-D6vdtiOW.js";import"./circular_progress_indicator-DBq3QExs.js";import"./container_loading-BKw9JUkj.js";import"./svg_tool_tip-DNx-VyL9.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CSuCV_Ai.js";import"./copy_hex-IVbeQ5-H.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-C9NyDmvI.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-DzgNJ5W5.js";import"./money_text-CBwOV_f2.js";import"./relative_time_since_date_text-BnIaZqMr.js";import"./tagged_base64_text-BwGkmkkE.js";import"./time_text-C9cG2zA9.js";import"./heading2-DigHULk-.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
