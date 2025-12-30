import{j as r}from"./iframe-_8SXQwLA.js";import{L as p,E as c,D as d}from"./loading_provider-coYNHPqW.js";import"./date_time_formatters_provider-BPVee3-W.js";import"./locale_provider-I9PT24Uq.js";import"./page_path_provider-ZcVCYOd8.js";import"./now_provider-DzZh0NgS.js";import"./number_formatters_provider-DMKj1Rdt.js";import"./path_resolver_provider-CwUpyokH.js";import{b as u,i as n}from"./functional-aFFbciHe.js";import{B as g}from"./block_size_histogram-CV44d-HP.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-BgYT-I7s.js";import"./higher_order-CRjCZC6M.js";import"./loading_shimmer-BF3vog0p.js";import"./skeleton_content-BF7nRVJr.js";import"./typography-75xCdHDu.js";import"./label-DV2LXI6X.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BWv74At5.js";import"./base64-Pz9_wEqE.js";import"./copy_button-DIdQvTB7.js";import"./check_circle_filled-BmH2gJ6J.js";import"./svg_icon_base-CyGEXINF.js";import"./copy-RJwhQmOl.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-CFU9rp03.js";import"./circular_progress_indicator-DCg228bT.js";import"./container_loading-BNYcFCl_.js";import"./svg_tool_tip-C5lyUU9z.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-BkODXE7C.js";import"./copy_hex-BO0Fj2eU.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-70JgumWw.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-BfVG584z.js";import"./money_text-CjhxP7g3.js";import"./relative_time_since_date_text-CvzE370w.js";import"./tagged_base64_text-bdnPhY8b.js";import"./time_text-Sjovm9WN.js";import"./heading2-BzYjFpCw.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
