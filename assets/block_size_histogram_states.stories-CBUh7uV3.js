import{j as r}from"./iframe-DERpcsaj.js";import{L as p,E as c,D as d}from"./loading_provider-DWAOa2Po.js";import"./date_time_formatters_provider-4OV54txv.js";import"./locale_provider-BSCycvT5.js";import"./page_path_provider-CdVsPBlv.js";import"./now_provider-Du-h2Rp4.js";import"./number_formatters_provider-CAdhGcCB.js";import"./path_resolver_provider-yTnYQJl0.js";import{b as u,i as n}from"./functional-AkqJadlP.js";import{B as g}from"./block_size_histogram-QFx698Mm.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./card-ZXCjX9KG.js";import"./higher_order-DzHtQVvV.js";import"./loading_shimmer-DI9iRwM5.js";import"./skeleton_content-D1PJ_eX5.js";import"./typography-Dj8C4yvB.js";import"./label-CLVfv72F.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-Ch3jAwxw.js";import"./base64-CraqfgLB.js";import"./copy_button-Bml6zmCr.js";import"./check_circle_filled-DonIuhOn.js";import"./svg_icon_base-BSoegY8q.js";import"./copy-G-i-gDej.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-CWqYRbqG.js";import"./circular_progress_indicator-Bbat2shA.js";import"./container_loading-CMhY7v53.js";import"./svg_tool_tip-CYVVv9U-.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DPMJnSh0.js";import"./copy_hex-RceDw8c8.js";import"./array_buffer-CQ8t_IxW.js";import"./date_time_text-xQ32h6XM.js";import"./full_hex_text-Cc1EJ3GT.js";import"./hex_text-DEE_C5oi.js";import"./money_text-B9Ui4At1.js";import"./relative_time_since_date_text-NZAFUh1C.js";import"./tagged_base64_text-BoQvMWTe.js";import"./time_text-Bgj0j3yQ.js";import"./heading2-B4ieKzDT.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
