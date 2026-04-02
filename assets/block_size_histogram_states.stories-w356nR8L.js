import{j as r}from"./iframe-CmLG4Pok.js";import{D as p}from"./data_provider-dnPZr8Zm.js";import{L as c,b as d}from"./loading_provider-DftCHfKz.js";import{a as u,i as n}from"./functional-CHI4evRY.js";import{B as g}from"./block_size_histogram-RIDgHdfo.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./card-DG5CPgYo.js";import"./higher_order-aMxBsUlx.js";import"./value_labeled-DbctVWwJ.js";import"./typography-Do5b2gIO.js";import"./label-LgvsxZQF.js";import"./loading_shimmer-BOwBWuvx.js";import"./skeleton_content-CSUHDwQ0.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-C-bdL4Xj.js";import"./number_formatters_provider-CF2CsDka.js";import"./locale_provider-Be6w3M1T.js";import"./date_time_formatters_provider-DNydhZPZ.js";/* empty css               */import"./histogram_section_title-DKgPq2kr.js";import"./svg_tool_tip-DtJWyT-V.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-B1GPWJ_a.js";import"./byte_size_text-CJe08Mxa.js";import"./date_time_text-C2ElyEsL.js";import"./full_hex_text-CpvnF-0m.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./hex_text-MfxCCN-r.js";import"./money_text-Uf49ry7U.js";import"./relative_time_since_date_text-CT7qWg9a.js";import"./now_provider-BYmmDWBX.js";import"./tagged_base64_text-DA6oEnnC.js";import"./time_text-MHeYbV15.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
