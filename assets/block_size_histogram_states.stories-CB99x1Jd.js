import{j as r}from"./iframe-C-FY04Dt.js";import{L as p,E as c,D as d}from"./loading_provider-DnAejYMo.js";import"./date_time_formatters_provider-B-vZWfoJ.js";import"./locale_provider-BEfBJ-G2.js";import"./page_path_provider-BLt1qKxU.js";import"./now_provider-CdVpNbMd.js";import"./number_formatters_provider-Cj_9aXLE.js";import"./path_resolver_provider-DSNRN_OB.js";import{b as u,i as n}from"./functional-DLuq-Zgx.js";import{B as g}from"./block_size_histogram-CxrsDA8t.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-Cl3HySyG.js";import"./higher_order-BZ-GvUz5.js";import"./loading_shimmer-BG2e4BYY.js";import"./skeleton_content-BTav3GN9.js";import"./typography-DKmexolR.js";import"./label-ZdWe8UpN.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CyIeL150.js";import"./base64-Dpbg5EzT.js";import"./copy_button-OfjfjW38.js";import"./check_circle_filled-Dw0Z14xA.js";import"./svg_icon_base-CdfmCcAh.js";import"./copy-ClB3np3W.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-Dfg5k-Tp.js";import"./circular_progress_indicator-B__BXDbW.js";import"./container_loading-CBSuaMXj.js";import"./svg_tool_tip-B0K9eRG_.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DU7EZjAo.js";import"./copy_hex-CoDWbvjo.js";import"./array_buffer-DYdk84gS.js";import"./date_time_text-h7ay6K-e.js";import"./full_hex_text-Cv2FWqgk.js";import"./hex_text-U20HYgdn.js";import"./money_text-cSuhAUhC.js";import"./relative_time_since_date_text-CgyvGft7.js";import"./tagged_base64_text-C7-ll7v4.js";import"./time_text-DNe9RpcL.js";import"./heading2-C76PmG4N.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
