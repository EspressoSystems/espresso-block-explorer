import{j as p}from"./iframe-CUplt-FF.js";import{D as m}from"./data_provider-CUqNqUZj.js";import{a as i,i as l}from"./functional-CFnOe1PN.js";import{P as d}from"./pie_chart-CeB-oHJQ.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./byte_size_text-BJcG2Bdc.js";import"./number_formatters_provider-K0qk2vlF.js";import"./locale_provider-DmZD1wbO.js";import"./wallet_address_text-BCyv1a24.js";import"./date_time_formatters_provider-CNtAdVHQ.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CTQBcN9w.js";import"./full_hex_text-B9F7kEcQ.js";import"./array_buffer_hex-K4SX2B-7.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./hex_text-DbzBDiRA.js";import"./money_text-Bgb4wLSJ.js";import"./money_text_full-C0z5m69D.js";import"./number_text-_tp6nnNp.js";import"./relative_time_since_date_text-iMsVbehX.js";import"./tagged_base64_text-DquzWsrm.js";import"./time_text-Bl2PDbNx.js";import"./svg_tool_tip-_z7aznzR.js";import"./svg_path_builder-4dyJLere.js";const u=e=>p.jsx(m.Provider,{value:e.data,children:p.jsx(d,{})}),G={title:"Block Explorer/Components/Page Sections/Pie Chart/States",component:u},r={parameters:{viewport:{defaultViewport:"mobile1"}},args:{data:[{label:"Fifty",value:50},{label:"Twenty",value:20},{label:"Thirty",value:30}]}},a={parameters:{viewport:{defaultViewport:"mobile1"}},args:{data:[{label:"Seventy",value:70},{label:"Thirty",value:30}]}},t={parameters:{viewport:{defaultViewport:"mobile1"}},args:{data:[{label:"Hundred",value:100}]}},o={parameters:{viewport:{defaultViewport:"mobile1"}},args:{data:[]}},n={parameters:{viewport:{defaultViewport:"mobile1"}},args:{data:[...i(l(11),e=>({label:`Entry ${e}`,value:1}))]}},s={parameters:{viewport:{defaultViewport:"mobile1"}},args:{data:[...i(l(22),e=>({label:`Entry ${e}`,value:1}))]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    data: [{
      label: 'Fifty',
      value: 50
    }, {
      label: 'Twenty',
      value: 20
    }, {
      label: 'Thirty',
      value: 30
    }]
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    data: [{
      label: 'Seventy',
      value: 70
    }, {
      label: 'Thirty',
      value: 30
    }]
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    data: [{
      label: 'Hundred',
      value: 100
    }]
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    data: []
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    data: [...mapIterator(iota(11), i => ({
      label: \`Entry \${i}\`,
      value: 1
    }))]
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    data: [...mapIterator(iota(22), i => ({
      label: \`Entry \${i}\`,
      value: 1
    }))]
  }
}`,...s.parameters?.docs?.source}}};const J=["Default","OverHalfOfPieChart","OneDataElement","Empty","AllColors","RepeatedColors"];export{n as AllColors,r as Default,o as Empty,t as OneDataElement,a as OverHalfOfPieChart,s as RepeatedColors,J as __namedExportsOrder,G as default};
