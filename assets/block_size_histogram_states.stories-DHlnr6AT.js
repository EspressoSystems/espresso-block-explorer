import{j as r}from"./iframe-D38n0YpH.js";import{L as p,E as c,D as d}from"./loading_provider-CmIKNCgq.js";import"./date_time_formatters_provider-C_Xcb1Og.js";import"./locale_provider-DzT1QKu6.js";import"./page_path_provider-C5mOuAiV.js";import"./now_provider-DY018Nl3.js";import"./number_formatters_provider-ByDysz5-.js";import"./path_resolver_provider-DkcsmNfF.js";import{b as u,i as n}from"./functional-AkqJadlP.js";import{B as g}from"./block_size_histogram-B3301wph.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./card-Dj3LTq1C.js";import"./higher_order-xjg9P6xC.js";import"./loading_shimmer-BblTHptj.js";import"./skeleton_content-BFqgBQHP.js";import"./typography-91BC-7Aj.js";import"./label-zU4z8gpb.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-C7J0pzwe.js";import"./base64-CraqfgLB.js";import"./copy_button-DFqAvgi0.js";import"./check_circle_filled-CUn6gAdy.js";import"./svg_icon_base-DTyOsi0d.js";import"./copy-DSARhWHi.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-BXk_sP1g.js";import"./circular_progress_indicator-CPnHk2K0.js";import"./container_loading-BI_Xpd_7.js";import"./svg_tool_tip-BuN2EHCo.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-B_ZGQaYX.js";import"./copy_hex-Ci6gPGeT.js";import"./array_buffer-CQ8t_IxW.js";import"./date_time_text-BYKdFTsT.js";import"./full_hex_text-Cc1EJ3GT.js";import"./hex_text-DA_W3sj6.js";import"./money_text-DpZAFuDQ.js";import"./relative_time_since_date_text-BMr8JM1Q.js";import"./tagged_base64_text-DbKNcDnK.js";import"./time_text-D6wmN4a7.js";import"./heading2-CCYzvka5.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
