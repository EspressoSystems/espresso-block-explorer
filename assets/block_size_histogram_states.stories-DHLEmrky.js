import{j as r}from"./iframe-NIO84YtG.js";import{L as p,E as c,D as d}from"./loading_provider-DKk4mEKX.js";import"./date_time_formatters_provider-DtoU_Lel.js";import"./locale_provider-BToOAThm.js";import"./page_path_provider-BsYrj1YB.js";import"./now_provider-DhUBwSdf.js";import"./number_formatters_provider-Cs1RR9ei.js";import"./path_resolver_provider-ozKsNWj3.js";import{b as u,i as n}from"./functional-aFFbciHe.js";import{B as g}from"./block_size_histogram-CErEt8kU.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-BlBqF2kw.js";import"./higher_order-D0pXbT2F.js";import"./loading_shimmer-aq-XMHlZ.js";import"./skeleton_content-B0jttthw.js";import"./typography-knZYGk3h.js";import"./label-CNpldOgN.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BIejpg1c.js";import"./base64-Pz9_wEqE.js";import"./copy_button-BTAuXDSY.js";import"./check_circle_filled-CLnTTrWr.js";import"./svg_icon_base-BtJbuG48.js";import"./copy-BUB2txhX.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-B6VPapgb.js";import"./circular_progress_indicator-DuPFwwcg.js";import"./container_loading-DzPw3yzi.js";import"./svg_tool_tip-DbVDI2ik.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DXlCrlVC.js";import"./copy_hex-DsZ6o7za.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-CJikdgtU.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-DvAz1t7V.js";import"./money_text-z4tt4Zy6.js";import"./relative_time_since_date_text-DwBuHXLj.js";import"./tagged_base64_text-DxRzi61x.js";import"./time_text-BgkysPRy.js";import"./heading2-C8S-u6gL.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
