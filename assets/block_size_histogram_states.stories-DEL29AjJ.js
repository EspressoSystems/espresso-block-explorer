import{j as r}from"./iframe-COKd2Os-.js";import{D as p}from"./data_provider-I8Cq7ni6.js";import{L as c,b as d}from"./loading_provider-CAiGDh4M.js";import{a as u,i as n}from"./functional-BY4LX4kJ.js";import{B as g}from"./block_size_histogram-CtwAXQ9U.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./card-BY4-ajl1.js";import"./higher_order-t8f3m54J.js";import"./value_labeled-BvlOLwAH.js";import"./typography-DxbyuuNv.js";import"./label-CaZTa4Lb.js";import"./circular_progress_indicator-BaJ1dg1I.js";import"./container_loading-CS6S1NZO.js";import"./skeleton_content-DpknspYU.js";import"./byte_size_text-B8oLdHc1.js";import"./number_formatters_provider-5P6oMbBj.js";import"./locale_provider-CRfUaY6B.js";import"./wallet_address_text-DCA28Uqg.js";import"./date_time_formatters_provider-KQLt3BJr.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CDMhlPwa.js";import"./full_hex_text-DhrOCfLO.js";import"./array_buffer_hex-Bcc-7BbE.js";import"./base64-CIn2pRZH.js";import"./hex_text-DK79PIUk.js";import"./money_text-C-wrGRGL.js";import"./money_text_full-LCIKV8NP.js";import"./number_text-CAbUHr29.js";import"./relative_time_since_date_text-CnpaFYv_.js";import"./tagged_base64_text-VkJW1cYD.js";import"./time_text-hbHHO61s.js";import"./histogram_section_title-C6ydwO7E.js";import"./svg_tool_tip-CPmLiYro.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const k=({data:s,error:i,loading:l,...m})=>r.jsx(c.Provider,{value:l,children:r.jsx(d.Provider,{value:i,children:r.jsx(p.Provider,{value:s,children:r.jsx(g,{...m})})})}),ar={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
