import{j as r}from"./iframe-B8eqWRN6.js";import{L as p,E as c,D as d}from"./loading_provider-UILi0oHh.js";import"./date_time_formatters_provider-CHxfXojh.js";import"./locale_provider-CkkM0mjB.js";import"./page_path_provider-XienNpqp.js";import"./now_provider-DFrPQ9fr.js";import"./number_formatters_provider-CulVFl8b.js";import"./path_resolver_provider-DdGZMLHv.js";import{b as u,i as n}from"./functional-CRC6BLve.js";import{B as g}from"./block_size_histogram-BIIXO_on.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./card-DmsRE8sn.js";import"./higher_order-r1uOk2qL.js";import"./loading_shimmer-BALkNca6.js";import"./skeleton_content-CuoHXIQj.js";import"./typography-DJsfTh_U.js";import"./label-DDPGJ8V_.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-3nwrJjHf.js";import"./base64-CraqfgLB.js";import"./copy_button-CcK8wkLR.js";import"./check_circle_filled-BVVX_n5V.js";import"./svg_icon_base-CoeGQ4lo.js";import"./copy-Bzf9GLJM.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-D4VvN4Vs.js";import"./circular_progress_indicator-Cmhjxm-4.js";import"./container_loading-BaAhSFV-.js";import"./svg_tool_tip-CktLEKUi.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-9rvg5Wz5.js";import"./copy_hex-BYTZithj.js";import"./array_buffer-T9JUf6pH.js";import"./date_time_text-BxVHbps2.js";import"./full_hex_text-9iPXpFzG.js";import"./hex_text-DIzizrVn.js";import"./money_text-kcNAJKnq.js";import"./relative_time_since_date_text-BdhaXA9S.js";import"./tagged_base64_text-CY4V2M5a.js";import"./time_text-ClO5Ps5t.js";import"./heading2-CIa6f3O6.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
