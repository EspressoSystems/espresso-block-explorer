import{j as r}from"./iframe-BhfBVhTN.js";import{L as p,E as c,D as d}from"./loading_provider-DuSSXXi4.js";import"./date_time_formatters_provider-DE6pqwEE.js";import"./locale_provider-yL7RjglX.js";import"./page_path_provider-0leIx6sS.js";import"./now_provider-BZ0gf5-c.js";import"./number_formatters_provider-BXMu2AYo.js";import"./path_resolver_provider-B_VwRBzs.js";import{b as u,i as n}from"./functional-CSHHasco.js";import{B as g}from"./block_size_histogram-BkS5xMGz.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-Bbgs53pQ.js";import"./higher_order-D_YdbROE.js";import"./loading_shimmer-CpZ5586x.js";import"./skeleton_content-_MaUAuT1.js";import"./typography-ZJRa9Te0.js";import"./label-BuX9v5VO.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-Ckfd6E2-.js";import"./base64-Dpbg5EzT.js";import"./copy_button-Cg3_7pgA.js";import"./check_circle_filled-qylX-1Qt.js";import"./svg_icon_base-BmNIBSz5.js";import"./copy-DnRvsYB4.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-ClR_i9Ow.js";import"./circular_progress_indicator-CGpLlJlf.js";import"./container_loading-DDqXETwJ.js";import"./svg_tool_tip-BRZl4CjZ.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-B-w3Vx6j.js";import"./copy_hex-Byt9Vsvp.js";import"./array_buffer-CekOYGOQ.js";import"./date_time_text-39KZPkCE.js";import"./full_hex_text-BraGK7k3.js";import"./hex_text-BgbDwq-2.js";import"./money_text-C5q8QcQm.js";import"./relative_time_since_date_text-Cx9S2uF9.js";import"./tagged_base64_text-9vqYyYGM.js";import"./time_text-Dww6YPsN.js";import"./heading2-Dhv4ZOig.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
