import{j as r}from"./iframe-DVElLztL.js";import{D as p}from"./data_provider-8bonweiP.js";import{L as c,b as d}from"./loading_provider-BwV9SyfY.js";import{a as u,i as n}from"./functional-Ci6o84Cp.js";import{B as g}from"./block_size_histogram-Db4KqdGZ.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./card-QtAxOx6p.js";import"./higher_order-D3ayJwRx.js";import"./value_labeled-mh4hZYBh.js";import"./typography-GeXNTPHb.js";import"./label-DvT2sGFh.js";import"./loading_shimmer-DsmzrhKG.js";import"./skeleton_content-CFCEKyZq.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CvB0_qmw.js";import"./number_formatters_provider-amKtj06S.js";import"./locale_provider-DQ-ADSEU.js";import"./date_time_formatters_provider-cwztD3ji.js";/* empty css               */import"./histogram_section_title-DCgC8vZd.js";import"./svg_tool_tip-C27axx6O.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-Di5ybNHr.js";import"./byte_size_text-DZn34SsL.js";import"./date_time_text-CvS8iW3y.js";import"./full_hex_text-ke0vBHh2.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./hex_text-BhXF56pB.js";import"./money_text-BVEhEAn6.js";import"./relative_time_since_date_text-Cs2mwuoy.js";import"./now_provider-CdcVy4pF.js";import"./tagged_base64_text-iWIJ9zak.js";import"./time_text-Dg4sjyKf.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
