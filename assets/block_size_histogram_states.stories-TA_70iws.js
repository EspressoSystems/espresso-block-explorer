import{j as r}from"./iframe-yFC_6Lkm.js";import{D as p}from"./data_provider-5GKNepRL.js";import{L as c,b as d}from"./loading_provider-BcOPdPnh.js";import{a as u,i as n}from"./functional-BN9f4kvo.js";import{B as g}from"./block_size_histogram-9tRzM_k1.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./card-BXmZ-D4n.js";import"./higher_order-CjJuNElG.js";import"./value_labeled-frYvV7Lv.js";import"./typography-BhzIADDi.js";import"./label-CHErshDC.js";import"./circular_progress_indicator-CXUQmMaZ.js";import"./container_loading-B8wF_9BZ.js";import"./skeleton_content-Cc8wo3D2.js";import"./byte_size_text-Nx3d5HCW.js";import"./number_formatters_provider-zsFhOobu.js";import"./locale_provider-vvwlyNor.js";import"./wallet_address_text-C8RpyldE.js";import"./date_time_formatters_provider-DcGFks32.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-B_kYN0i8.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./hex_text-BgMrU2_9.js";import"./money_text-H4KdIbGP.js";import"./money_text_full-lyD3UcMj.js";import"./number_text-CypWZRGu.js";import"./relative_time_since_date_text-B1-Y__aI.js";import"./tagged_base64_text-vj28S5uH.js";import"./time_text-DWAXCu0U.js";import"./histogram_section_title-BLkHPART.js";import"./svg_tool_tip-Ck_wTyi2.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
