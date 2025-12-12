import{j as r}from"./iframe-I4yCP4NU.js";import{L as p,E as c,D as d}from"./loading_provider-CstATCXD.js";import"./date_time_formatters_provider-DnsUBTX8.js";import"./locale_provider-CErGmAbV.js";import"./page_path_provider-FUPkNIoK.js";import"./now_provider-BJMkyC0g.js";import"./number_formatters_provider-B4pMjwPi.js";import"./path_resolver_provider-C7oDnXbF.js";import{b as u,i as n}from"./functional-CSbS9XJ4.js";import{B as g}from"./block_size_histogram-D0PnjOh9.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-0u90fmNw.js";import"./higher_order-mqQ14nIG.js";import"./loading_shimmer-DQrLDOla.js";import"./skeleton_content-D2wyeEsn.js";import"./typography-C6Hxzndb.js";import"./label-cxfzugeA.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-Du8DStDM.js";import"./base64-Pz9_wEqE.js";import"./copy_button-gUT264g6.js";import"./check_circle_filled-6vpUhM8E.js";import"./svg_icon_base-FiNyuFYc.js";import"./copy-CF7cLfNz.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-B5Ox6wzX.js";import"./circular_progress_indicator-Bv-brHP2.js";import"./container_loading-Inv-F5TL.js";import"./svg_tool_tip-YdJok5IB.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-efmudhUc.js";import"./copy_hex-CMDT5mVd.js";import"./array_buffer-C6cnUoAD.js";import"./date_time_text-CI8fzMqk.js";import"./full_hex_text-Ba5V_2tQ.js";import"./hex_text-B5moOUup.js";import"./money_text-PI52ak3v.js";import"./relative_time_since_date_text-BeKzofi1.js";import"./tagged_base64_text-CsiWtjb8.js";import"./time_text-rNJ1qrFO.js";import"./heading2-Bz9gMFdA.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
