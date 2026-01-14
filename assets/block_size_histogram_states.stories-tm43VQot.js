import{j as r}from"./iframe-CCLKIoat.js";import{D as p}from"./data_provider-BF5QLA6e.js";import{L as c,b as d}from"./loading_provider-DvG6A7dg.js";import{a as u,i as n}from"./functional-DsFqNm-o.js";import{B as g}from"./block_size_histogram-TmplcvYD.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./card-x0dgug2d.js";import"./higher_order-DyFKxQfc.js";import"./value_labeled-Ds_gpjgm.js";import"./typography-B2cxenSz.js";import"./label-R4nt8pcB.js";import"./loading_shimmer-spFarzAw.js";import"./skeleton_content-DNXiQAlC.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DXQhBLh9.js";import"./number_formatters_provider-3ltM0G6e.js";import"./locale_provider-K_0BCaCZ.js";import"./date_time_formatters_provider-D0J5X-TW.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-BXbb_2Rl.js";import"./svg_tool_tip-B9CByV5u.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-We-dR8lu.js";import"./date_time_text-BkX9HxlE.js";import"./full_hex_text-IJaD05bO.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./hex_text-CJmdEYz5.js";import"./money_text-BrKfhtWB.js";import"./relative_time_since_date_text-B_x23ieN.js";import"./now_provider-B5osc7Mq.js";import"./tagged_base64_text-CFQdB-Dk.js";import"./time_text-DOkBsfkL.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),or={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,ar as __namedExportsOrder,or as default};
