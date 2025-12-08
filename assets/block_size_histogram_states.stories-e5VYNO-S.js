import{j as r}from"./iframe-BD1yaix1.js";import{L as p,E as c,D as d}from"./loading_provider-BbzSpk-c.js";import"./date_time_formatters_provider-D85-FJC7.js";import"./locale_provider-CMpeMO95.js";import"./page_path_provider-5HsnBsq2.js";import"./now_provider-BiYKTb9R.js";import"./number_formatters_provider-CYQ6aY_k.js";import"./path_resolver_provider-7jpIaJCk.js";import{b as u,i as n}from"./functional-DLuq-Zgx.js";import{B as g}from"./block_size_histogram-CuKTRGG4.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-Ce3zmVpn.js";import"./higher_order-T0GH9dDo.js";import"./loading_shimmer-DZUlX3Qg.js";import"./skeleton_content-D9B9Vsd-.js";import"./typography-r90yo729.js";import"./label-Dkp6u3Eq.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DeKQBrPK.js";import"./base64-Dpbg5EzT.js";import"./copy_button-yRgUblgX.js";import"./check_circle_filled-DJQh71hH.js";import"./svg_icon_base-COhmG2Uq.js";import"./copy-CRo-ZtnZ.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-hxKhlidF.js";import"./circular_progress_indicator-CWgqd9fq.js";import"./container_loading-gzhT654p.js";import"./svg_tool_tip-CnrXK4GU.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-Dq0iPJZS.js";import"./copy_hex-d0DTV1iG.js";import"./array_buffer-DYdk84gS.js";import"./date_time_text-DR_8S3xN.js";import"./full_hex_text-Cv2FWqgk.js";import"./hex_text-CH_nbHML.js";import"./money_text-9zzMFh-l.js";import"./relative_time_since_date_text-CRDYs83Q.js";import"./tagged_base64_text-BfGKDfT7.js";import"./time_text-DSkjDEJY.js";import"./heading2-CLmjJKmV.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
