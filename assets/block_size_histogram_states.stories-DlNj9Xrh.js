import{j as r}from"./iframe-DIKNrIIb.js";import{L as p,E as c,D as d}from"./loading_provider-Dn9ytlaz.js";import"./date_time_formatters_provider-DhcWWpu8.js";import"./locale_provider-DYOAFLcG.js";import"./page_path_provider-B1N-ENWh.js";import"./now_provider-DNU3NT7E.js";import"./number_formatters_provider-CoB2HbbC.js";import"./path_resolver_provider-D_k7zmI5.js";import{b as u,i as n}from"./functional-DLuq-Zgx.js";import{B as g}from"./block_size_histogram-CQmXO6mn.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-DkiVkAU4.js";import"./higher_order-CERhs-Yx.js";import"./loading_shimmer-BevhGYCh.js";import"./skeleton_content-DoayltBs.js";import"./typography-C-u2xTwd.js";import"./label-BBqImYri.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CoujvQ_L.js";import"./base64-Dpbg5EzT.js";import"./copy_button-DrvH4bvD.js";import"./check_circle_filled-B7jxOVSh.js";import"./svg_icon_base-CJsibPKU.js";import"./copy-CnbsWkwa.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-C_D0_0Sh.js";import"./circular_progress_indicator-BwmKD8wi.js";import"./container_loading-D6SGm2EM.js";import"./svg_tool_tip-DWTJCm-L.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CVlm-gPG.js";import"./copy_hex-zR5ZV97x.js";import"./array_buffer-DYdk84gS.js";import"./date_time_text-Di9xHhdz.js";import"./full_hex_text-Cv2FWqgk.js";import"./hex_text-C5T8OYp6.js";import"./money_text-YqxDusDO.js";import"./relative_time_since_date_text-BLwzRj7T.js";import"./tagged_base64_text-DaoCGQRV.js";import"./time_text-DhxGW57C.js";import"./heading2-Boff_b8b.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
