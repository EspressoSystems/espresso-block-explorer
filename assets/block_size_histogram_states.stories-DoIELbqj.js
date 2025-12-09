import{j as r}from"./iframe-BbF3Syj1.js";import{L as p,E as c,D as d}from"./loading_provider-DEd-giv5.js";import"./date_time_formatters_provider-BCl3flcb.js";import"./locale_provider-De2PuuUV.js";import"./page_path_provider-DFntaqal.js";import"./now_provider-B6bWrODL.js";import"./number_formatters_provider-DOen9m4S.js";import"./path_resolver_provider-rPfG7hHk.js";import{b as u,i as n}from"./functional-CRC6BLve.js";import{B as g}from"./block_size_histogram-Douks5_h.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./card-Drcx0POy.js";import"./higher_order-P_eSrgQE.js";import"./loading_shimmer-BihbGDgm.js";import"./skeleton_content-BRPUJFb-.js";import"./typography-B0b9ZxV3.js";import"./label-BDCEF55u.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-USvfzh87.js";import"./base64-CraqfgLB.js";import"./copy_button-XgccnUyj.js";import"./check_circle_filled-BWA5Es7Z.js";import"./svg_icon_base-BTNiSFJX.js";import"./copy-CKx4zh30.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-DFd3FJlE.js";import"./circular_progress_indicator-CMpg3_tY.js";import"./container_loading-Cc4c0X5F.js";import"./svg_tool_tip-DN23vI7l.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DZp8S5pw.js";import"./copy_hex-CIch3Fzf.js";import"./array_buffer-T9JUf6pH.js";import"./date_time_text-DzqzJcq0.js";import"./full_hex_text-9iPXpFzG.js";import"./hex_text-B6LXlTWD.js";import"./money_text-BDvXCdjF.js";import"./relative_time_since_date_text-Denl0BMc.js";import"./tagged_base64_text-C_GjGHtj.js";import"./time_text-DZgfq9z4.js";import"./heading2-nYiqSj_i.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
