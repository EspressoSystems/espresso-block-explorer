import{j as r}from"./iframe-DxMCvlUh.js";import{L as p,E as c,D as d}from"./loading_provider-Df0mCD4_.js";import"./date_time_formatters_provider-DI9LZ6y4.js";import"./locale_provider-EJeatQlK.js";import"./page_path_provider-rK8gQ6lh.js";import"./now_provider-KL7TCSJM.js";import"./number_formatters_provider-DQjo9vlS.js";import"./path_resolver_provider-BxmbrlnP.js";import{b as u,i as n}from"./functional-CSHHasco.js";import{B as g}from"./block_size_histogram-BxmGZzIK.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-CJu4WajX.js";import"./higher_order-DagK1XCO.js";import"./loading_shimmer-ZXKOaaTl.js";import"./skeleton_content-BfZgbbNq.js";import"./typography-Cf3UQRAk.js";import"./label-BE1c8qNS.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BQi37mVu.js";import"./base64-Dpbg5EzT.js";import"./copy_button-CEfYl7CI.js";import"./check_circle_filled-COGkqefa.js";import"./svg_icon_base-BtviVFgm.js";import"./copy-sHvp9Qji.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-DQRO7zl6.js";import"./circular_progress_indicator-ddWFmKpG.js";import"./container_loading-DdVOj7gR.js";import"./svg_tool_tip-B3-n0KZC.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DeHJXIYi.js";import"./copy_hex-DDUL6eZz.js";import"./array_buffer-CekOYGOQ.js";import"./date_time_text-CCfbQ2QT.js";import"./full_hex_text-BraGK7k3.js";import"./hex_text-Cu8EIONB.js";import"./money_text-D1zNV8vY.js";import"./relative_time_since_date_text-CIVd6X04.js";import"./tagged_base64_text-YlTaibsx.js";import"./time_text-Dip8v4W1.js";import"./heading2-Ds_L6TFE.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
