import{j as r}from"./iframe-BxVd9QhJ.js";import{L as p,E as c,D as d}from"./loading_provider-CCQwrYtN.js";import"./date_time_formatters_provider-6IxjHYrQ.js";import"./locale_provider-A_jZKLiE.js";import"./page_path_provider-DZsBij4v.js";import"./now_provider-RSgZaDSQ.js";import"./number_formatters_provider-opkF2gH_.js";import"./path_resolver_provider-BhfCU0xQ.js";import{b as u,i as n}from"./functional-aFFbciHe.js";import{B as g}from"./block_size_histogram-Kjwm-_Rj.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-X2-GQdiU.js";import"./higher_order-DG5Lsi6K.js";import"./loading_shimmer-oyHcinoA.js";import"./skeleton_content-YVZISt7j.js";import"./typography-BUc9z9pd.js";import"./label-Kb1u-CHK.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-2rTylJMV.js";import"./base64-Pz9_wEqE.js";import"./copy_button-CSA9keM_.js";import"./check_circle_filled-DQNrAIZw.js";import"./svg_icon_base-C9Bpn8DM.js";import"./copy-ycI-DGxb.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-DKh0a-kQ.js";import"./circular_progress_indicator-_4_geMat.js";import"./container_loading-S_qDaE2u.js";import"./svg_tool_tip-m74wh4Xa.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-BltyVUzv.js";import"./copy_hex-CLegGNUN.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-DRIeULjZ.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-T7hpqTKJ.js";import"./money_text-DhM7RE4a.js";import"./relative_time_since_date_text-QvfOV_rC.js";import"./tagged_base64_text-J3XPJPKU.js";import"./time_text-C63xAxKz.js";import"./heading2-DA9s36lv.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
