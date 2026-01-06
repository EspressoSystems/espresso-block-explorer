import{j as r}from"./iframe-B-iMvdD4.js";import{L as p,E as c,D as d}from"./loading_provider-DGgAz7Nh.js";import"./date_time_formatters_provider-DwQmISaS.js";import"./locale_provider-Bknh0OHR.js";import"./page_path_provider-DWGnqofr.js";import"./now_provider-D9QH_F6_.js";import"./number_formatters_provider-C7OuKrqX.js";import"./path_resolver_provider-DTKqJOJp.js";import{b as u,i as n}from"./functional-aFFbciHe.js";import{B as g}from"./block_size_histogram-CBaD8T5u.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-DysXuFl8.js";import"./higher_order-p8JWl9JO.js";import"./loading_shimmer-BAmtup37.js";import"./skeleton_content-v3SVavGm.js";import"./typography-12nFQ59z.js";import"./label-ycIGOt2h.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-xiGLa1J_.js";import"./base64-Pz9_wEqE.js";import"./copy_button-ByWeuO8A.js";import"./check_circle_filled-DPIQ4HbT.js";import"./svg_icon_base-BLNI1CYc.js";import"./copy-DlUw72_P.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-BjwVE4fU.js";import"./circular_progress_indicator-zVJv3sLl.js";import"./container_loading-JT-HF1IR.js";import"./svg_tool_tip-DaL9hdFL.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DfVp7OHb.js";import"./copy_hex-BDJCygmF.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-EU368kfm.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-Dh3oergr.js";import"./money_text-BypLSPg_.js";import"./relative_time_since_date_text-R2kEd-ey.js";import"./tagged_base64_text-DT1iuIo5.js";import"./time_text-COF6WMBW.js";import"./heading2-DnsU6o8f.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
