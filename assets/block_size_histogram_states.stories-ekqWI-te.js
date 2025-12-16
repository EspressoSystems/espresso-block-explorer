import{j as r}from"./iframe-C36uQjwe.js";import{L as p,E as c,D as d}from"./loading_provider-BllPH4wN.js";import"./date_time_formatters_provider-CAjNQyov.js";import"./locale_provider-wQt49r1W.js";import"./page_path_provider-C4TVebhC.js";import"./now_provider-D6WuJJod.js";import"./number_formatters_provider-DywPH02u.js";import"./path_resolver_provider-D1l7Ftg7.js";import{b as u,i as n}from"./functional-aFFbciHe.js";import{B as g}from"./block_size_histogram-CBmAQsRk.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-DU_RdzbY.js";import"./higher_order-CfyPS3zu.js";import"./loading_shimmer-DJZ_QB33.js";import"./skeleton_content-D1Jtp_i-.js";import"./typography-DJ4LlwQ2.js";import"./label-DjiaBedk.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-B42oMXnp.js";import"./base64-Pz9_wEqE.js";import"./copy_button-BiIYGymM.js";import"./check_circle_filled-DS2y5kq9.js";import"./svg_icon_base-CociR3Gf.js";import"./copy-DFD6qtai.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-CLzfObOD.js";import"./circular_progress_indicator-CbdAP0A9.js";import"./container_loading-BT9WwxGU.js";import"./svg_tool_tip-SAnc6R0I.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-B4Pvq_Gb.js";import"./copy_hex-GAVk31wC.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-C_B9GWia.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-BVK1cUlH.js";import"./money_text-d7EzokJA.js";import"./relative_time_since_date_text-BQfFGPgl.js";import"./tagged_base64_text-C7K2A3rC.js";import"./time_text-D-W2Vk_c.js";import"./heading2-C74CUe_P.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
