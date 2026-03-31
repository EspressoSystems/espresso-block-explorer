import{j as r}from"./iframe-BtlXJKZ1.js";import{D as p}from"./data_provider-DZfionCo.js";import{L as c,b as d}from"./loading_provider-DTcNP4kZ.js";import{a as u,i as n}from"./functional-CHI4evRY.js";import{B as g}from"./block_size_histogram-DDEFJ5cA.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./card-hxCY_m-j.js";import"./higher_order-DrPNsCRC.js";import"./value_labeled-BkpneQ_b.js";import"./typography-D29HocqS.js";import"./label-CAsyFbxK.js";import"./loading_shimmer-Bk-WwnRG.js";import"./skeleton_content-C3wfAwRT.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CqmAEdTZ.js";import"./number_formatters_provider-uduEK5FV.js";import"./locale_provider-Ghcznv9j.js";import"./date_time_formatters_provider-C0tfyVOJ.js";/* empty css               */import"./histogram_section_title-Bca6-4x1.js";import"./svg_tool_tip-CSikt_yn.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-BdO7pZh2.js";import"./byte_size_text--8CaTQrj.js";import"./date_time_text-DirxX4OA.js";import"./full_hex_text-CpvnF-0m.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./hex_text-Cija5FgV.js";import"./money_text-NHSQ4ZXI.js";import"./relative_time_since_date_text-D1s1kssZ.js";import"./now_provider-D29HcoOP.js";import"./tagged_base64_text-Clxk9y88.js";import"./time_text-Br-5qJEe.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
