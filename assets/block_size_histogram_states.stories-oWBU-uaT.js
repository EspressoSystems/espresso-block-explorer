import{j as r}from"./iframe-ClKDkTx9.js";import{L as p,E as c,D as d}from"./loading_provider-BA4zBxyH.js";import"./date_time_formatters_provider-Cf6wYALs.js";import"./locale_provider-DJPVjQlf.js";import"./page_path_provider-ZBtbZN9A.js";import"./now_provider-CbLkKTxk.js";import"./number_formatters_provider-Dzy7g4cY.js";import"./path_resolver_provider-DQmcKCeL.js";import{b as u,i as n}from"./functional-aFFbciHe.js";import{B as g}from"./block_size_histogram-Cnusebxr.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-6pMwU__V.js";import"./higher_order-DGDN5Dfc.js";import"./loading_shimmer-DTPhK2KI.js";import"./skeleton_content-kY3mGp8K.js";import"./typography-BXZmVxaS.js";import"./label-B3P8I4Su.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CH2bEJlt.js";import"./base64-Pz9_wEqE.js";import"./copy_button-DumrgIxC.js";import"./check_circle_filled-CuxB0CvJ.js";import"./svg_icon_base-Ik10Mkci.js";import"./copy-CB9E4g7X.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-CYRmJkvB.js";import"./circular_progress_indicator-amVCckxY.js";import"./container_loading-C3a7PW8E.js";import"./svg_tool_tip-D0xwzdvg.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CiN5bTtT.js";import"./copy_hex-BXRMrXt3.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-BzpapEyn.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-B_YXB2ec.js";import"./money_text-BxDRISn0.js";import"./relative_time_since_date_text-DvytMmFB.js";import"./tagged_base64_text-BoJwIYKK.js";import"./time_text-afbV6Zbr.js";import"./heading2-DOFOzc_J.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
