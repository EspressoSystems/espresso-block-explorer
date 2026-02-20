import{j as r}from"./iframe-TrusCfP7.js";import{D as p}from"./data_provider-DhSR8fHD.js";import{L as c,b as d}from"./loading_provider-ByLGkB6h.js";import{a as u,i as n}from"./functional-Ci6o84Cp.js";import{B as g}from"./block_size_histogram-DZ9DQWAQ.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./card-BSHTISpx.js";import"./higher_order-BaXXaYUD.js";import"./value_labeled-9TZH0i7O.js";import"./typography-BsBXTHPR.js";import"./label-C90lH7SN.js";import"./loading_shimmer-BhTUlLa6.js";import"./skeleton_content-DeKZZP6m.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DZpKoe3B.js";import"./number_formatters_provider-BjVNSDzq.js";import"./locale_provider-VmkWYhBv.js";import"./date_time_formatters_provider-18E19bYy.js";/* empty css               */import"./histogram_section_title-BuRQnrC0.js";import"./svg_tool_tip-Bbzbwriw.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-Dzzgw1-A.js";import"./byte_size_text-1bLtn3ax.js";import"./date_time_text-CeAneBD3.js";import"./full_hex_text-ke0vBHh2.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./hex_text-BuQjJNsp.js";import"./money_text-CKp0PGoW.js";import"./relative_time_since_date_text-DbjRU1Iv.js";import"./now_provider-C1ZXEB30.js";import"./tagged_base64_text-DRDUlYqA.js";import"./time_text-Cnhv5kw7.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const tr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,tr as __namedExportsOrder,ar as default};
