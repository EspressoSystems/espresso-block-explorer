import{j as r}from"./iframe-CUSUi-ol.js";import{L as p,E as c,D as d}from"./loading_provider-DxXUP5j3.js";import"./date_time_formatters_provider-VX2lHb9g.js";import"./locale_provider-BxbKA3wd.js";import"./page_path_provider-DlC5aC3g.js";import"./now_provider-DcSrXJuC.js";import"./number_formatters_provider-DmpWQro_.js";import"./path_resolver_provider-B1crnTdb.js";import{b as u,i as n}from"./functional-aFFbciHe.js";import{B as g}from"./block_size_histogram-DbkqqEY0.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-B2Dpd1qi.js";import"./higher_order-CE7HgP1S.js";import"./loading_shimmer-DZAIh87G.js";import"./skeleton_content-BzNMtOGK.js";import"./typography-1SaDHsys.js";import"./label-DdaI1Ijd.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DYxFz4dL.js";import"./base64-Pz9_wEqE.js";import"./copy_button-DSITBYtb.js";import"./check_circle_filled-CKsYdq35.js";import"./svg_icon_base-HWbYxe0V.js";import"./copy-CKUBvaav.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-YBM4-nOg.js";import"./circular_progress_indicator-DukX7415.js";import"./container_loading-BCKjgWDo.js";import"./svg_tool_tip-l4eSe5yS.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-cKObWzK_.js";import"./copy_hex-BPOODb6-.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-CeEXUMSd.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-k2vDmWmO.js";import"./money_text-DsU_8Lue.js";import"./relative_time_since_date_text-Du12YnoG.js";import"./tagged_base64_text-DEKslrSb.js";import"./time_text-ChfZ4CZp.js";import"./heading2-D9mM08DI.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
