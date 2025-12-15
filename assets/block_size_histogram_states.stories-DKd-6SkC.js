import{j as r}from"./iframe-BQJVLOru.js";import{L as p,E as c,D as d}from"./loading_provider-Ch6GRO2a.js";import"./date_time_formatters_provider-BY4kdJV8.js";import"./locale_provider-pDxAzo83.js";import"./page_path_provider-DhmC-klQ.js";import"./now_provider-40HeobFn.js";import"./number_formatters_provider-CsOclp8o.js";import"./path_resolver_provider-DQcp-a-t.js";import{b as u,i as n}from"./functional-CSbS9XJ4.js";import{B as g}from"./block_size_histogram-pYLM_MaG.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-_0eVytjL.js";import"./higher_order-CGGGWKBx.js";import"./loading_shimmer-BAy35VhU.js";import"./skeleton_content-Ql-lpo3S.js";import"./typography-BobbvlA3.js";import"./label-RkG_BUv9.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BH983WrU.js";import"./base64-Pz9_wEqE.js";import"./copy_button-DcUDNJt9.js";import"./check_circle_filled-BBNFWEKP.js";import"./svg_icon_base-ClkAJAYe.js";import"./copy-dqXCVCBe.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-B_bUxGq2.js";import"./circular_progress_indicator-B1pvAxn7.js";import"./container_loading-DD6Ae7RP.js";import"./svg_tool_tip-DpewfD3M.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-albCgYra.js";import"./copy_hex-CyRzHy0E.js";import"./array_buffer-C6cnUoAD.js";import"./date_time_text-DVcFOhyI.js";import"./full_hex_text-Ba5V_2tQ.js";import"./hex_text-BTLimRbA.js";import"./money_text-DNcR18Xh.js";import"./relative_time_since_date_text-DUaOIxEf.js";import"./tagged_base64_text-Bjj5jXV2.js";import"./time_text-0_-VJKin.js";import"./heading2-BXnvXErs.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
