import{j as r}from"./iframe-B5yazBMa.js";import{D as p}from"./data_provider-CBESNSYd.js";import{L as c,b as d}from"./loading_provider-CAvkgHuW.js";import{a as u,i as n}from"./functional-DT4GooI6.js";import{B as g}from"./block_size_histogram-CtDfTwsF.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./card-DUxJ6uBK.js";import"./higher_order-BSTN8Q9z.js";import"./value_labeled-CB-Hjhcb.js";import"./typography-CME5Hn9t.js";import"./label-B0EvcHN7.js";import"./loading_shimmer-DPRBQ-Rh.js";import"./skeleton_content-Di70z-0k.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CGN5mNro.js";import"./number_formatters_provider-B-XsBDCo.js";import"./locale_provider-BWInepqb.js";import"./date_time_formatters_provider-BxCsegdJ.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-B0ClmNgK.js";import"./svg_tool_tip-BMxK8sw0.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DT6mR0is.js";import"./date_time_text-Dt7jas3i.js";import"./full_hex_text-wUTAmwfT.js";import"./array_buffer-BGAdkDgu.js";import"./base64-_rmSu-kQ.js";import"./hex_text-5RPqy6El.js";import"./money_text-C5WzVr3i.js";import"./relative_time_since_date_text-BTOzugKG.js";import"./now_provider-CKP5Onif.js";import"./tagged_base64_text-BHpURdDI.js";import"./time_text-CVj0Gvjl.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),or={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,ar as __namedExportsOrder,or as default};
