import{j as r}from"./iframe-RrH5notm.js";import{D as p}from"./data_provider-CnI5ffrM.js";import{L as c,b as d}from"./loading_provider-Bb7kn8rC.js";import{a as u,i as n}from"./functional-CHI4evRY.js";import{B as g}from"./block_size_histogram-CcTbHiM3.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./card-BidjHxWN.js";import"./higher_order-Bm-4pUU4.js";import"./value_labeled-XF3Z9guT.js";import"./typography-DPHmMob2.js";import"./label-BhU-D_Fb.js";import"./loading_shimmer--WDeerTv.js";import"./skeleton_content-DmqNHUTV.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-BVSmLvMU.js";import"./number_formatters_provider-BWToNpc0.js";import"./locale_provider-Cyvsr7cz.js";import"./date_time_formatters_provider-DapLe-dN.js";/* empty css               */import"./histogram_section_title-D7RO4Mkp.js";import"./svg_tool_tip-CY6ki9kT.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-BiMC9TJ3.js";import"./byte_size_text-CAONP42e.js";import"./date_time_text-C_CBnpzd.js";import"./full_hex_text-CpvnF-0m.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./hex_text-DlaINR7Q.js";import"./money_text-BJP7MmBc.js";import"./relative_time_since_date_text-C01uoyja.js";import"./now_provider-DTqjxJ47.js";import"./tagged_base64_text-D8IOrji7.js";import"./time_text-D0AxGVfM.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
