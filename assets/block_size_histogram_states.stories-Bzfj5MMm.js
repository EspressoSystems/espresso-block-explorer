import{j as r}from"./iframe-CA0H6dFm.js";import{L as p,E as c,D as d}from"./loading_provider-Bop1FT1r.js";import"./date_time_formatters_provider-iQnZ9iG6.js";import"./locale_provider-Do7FCuk7.js";import"./page_path_provider-DyEC-PMZ.js";import"./now_provider-yxwAovoR.js";import"./number_formatters_provider-Dn_m9GFj.js";import"./path_resolver_provider-k_ObrSQz.js";import{b as u,i as n}from"./functional-aFFbciHe.js";import{B as g}from"./block_size_histogram-DawSiIql.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-DdNfnvXc.js";import"./higher_order-dlQKFR8S.js";import"./loading_shimmer-DpxBUzqc.js";import"./skeleton_content-BYfFOyG1.js";import"./typography-BMAv5PTs.js";import"./label-4dTJfuiU.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BhnUAU4Z.js";import"./base64-Pz9_wEqE.js";import"./copy_button-CtPx2g5K.js";import"./check_circle_filled-D3H5up06.js";import"./svg_icon_base-CBYYQSYN.js";import"./copy-DDyiK6Oj.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-Bo37snxl.js";import"./circular_progress_indicator-Dn51WMa-.js";import"./container_loading-DkgoO4FU.js";import"./svg_tool_tip-CF6Sr2vJ.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DmLQdBSJ.js";import"./copy_hex-CnVSVPBK.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-BNAE24nJ.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-De2g7Dsj.js";import"./money_text-bPJacnFR.js";import"./relative_time_since_date_text-BQjOPwON.js";import"./tagged_base64_text-eYe5cH2c.js";import"./time_text-CUmpYuIs.js";import"./heading2-E6boxZtl.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
