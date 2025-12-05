import{R as _,j as t}from"./iframe-DFfdKi-0.js";import{C as z}from"./locale_provider-BSfkAuIP.js";import{c as K,P as L}from"./number_formatters_provider-BFBcbrkA.js";import{M as V}from"./money_text_full-yY6U8Y9C.js";import"./blocks-2SbdhCgZ.js";import{P as H,a as J}from"./nodes-BtP9A9m5.js";import{M as U}from"./monetary_value-CGCIrnLJ.js";import{I as k}from"./container-CGFFOPi1.js";import{E as O}from"./esp_input--_F1zqic.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               */import"./loading_provider-da-Stdik.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./functional-DLuq-Zgx.js";import"./bigint-Rw5otYDY.js";import"./higher_order-CAFNA8md.js";import"./date_time_formatters_provider-D1KuHasK.js";import"./page_path_provider-BLpKX2CS.js";import"./now_provider-Bg99-F95.js";import"./path_resolver_provider-DZ-5eptY.js";import"./text-DykJbUJK.js";const{expect:l,findByRole:i,waitFor:N}=__STORYBOOK_MODULE_TEST__;async function X(a,r,o,s,n){await r("Wait for Input to be ready",async()=>{await N(async()=>{l(await i(a,"textbox")).toBeVisible()})}),await r("Focus the Input",async()=>{const e=await i(a,"textbox");await o.click(e),await N(async()=>{l(e).toHaveFocus()})}),await r(`Type value: "${s}"`,async()=>{const e=await i(a,"textbox");await o.type(e,s,{initialSelectionStart:e.value.length})}),await r("Verify formatted value matches expected value",async()=>{const e=await i(a,"textbox");await N(async()=>{l(e).toHaveValue(n)}),l(e).toHaveValue(n)})}const W=a=>{const{initialValue:r=null,locale:o}=a,[s,n]=_.useState(r);return t.jsx(z.Provider,{value:o,children:t.jsxs(L,{children:[t.jsx(k,{children:t.jsx(O,{id:"stake-amount",value:s,onChange:(e,c)=>{n(c)}})}),t.jsx("br",{}),t.jsx(V,{money:s??U.ESP(0n)})]})})},Y=["en-US","en-GB","en-CA","en-AU","es-ES","es-MX","es-AR","de-DE","de-AT","de-CH","ja-JP","fr-FR","fr-CA","pt-PT","pt-BR","ru-RU","it-IT","nl-NL","nl-BE","sv-SE","sv-FI","zh-CN","zh-TW","ko-KR"],we={title:"Components/HID/Inputs/ESPInput/Interactions/Typing",component:W,args:{locale:"en-US"},argTypes:{locale:{control:{type:"select"},options:Y}},async play({canvasElement:a,step:r,userEvent:o,args:s}){const e=new H(J()).nextRangeBigInt(10000000000000000n,123456789000000000000000000n),c=U.ESP(e),G=K(s.locale),b=G.ESPFull.format(c.toNumericLiteralString()).replace(/ESP/gi,"").replace(/\u00A0/gi,""),v=G.ESPFull.format(c.toNumericLiteralString()),j=G.ESPFull.formatToParts(c.toNumericLiteralString()),[M]=j,D=M.type==="currency"?0:4;await X(a,r,o,b,v,v.length-D)}},p={args:{locale:"en-US"}},m={args:{locale:"en-GB"}},u={args:{locale:"en-CA"}},d={args:{locale:"en-AU"}},g={args:{locale:"es-ES"}},S={args:{locale:"es-MX"}},h={args:{locale:"es-AR"}},x={args:{locale:"de-DE"}},y={args:{locale:"de-AT"}},E={args:{locale:"de-CH"}},C={args:{locale:"ja-JP"}},R={args:{locale:"fr-FR"}},f={args:{locale:"fr-CA"}},w={args:{locale:"pt-BR"}},A={args:{locale:"ru-RU"}},P={args:{locale:"it-IT"}},F={args:{locale:"nl-NL"}},B={args:{locale:"sv-SE"}},I={args:{locale:"zh-CN"}},T={args:{locale:"ko-KR"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-GB'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-CA'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-AU'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'es-ES'
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'es-MX'
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'es-AR'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'de-DE'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'de-AT'
  }
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'de-CH'
  }
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'ja-JP'
  }
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'fr-FR'
  }
}`,...R.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'fr-CA'
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'pt-BR'
  }
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'ru-RU'
  }
}`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'it-IT'
  }
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nl-NL'
  }
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'sv-SE'
  }
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'zh-CN'
  }
}`,...I.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'ko-KR'
  }
}`,...T.parameters?.docs?.source}}};const Ae=["EnglishUS","EnglishGreatBritain","EnglishCanada","EnglishAustralia","SpanishSpain","SpanishMexico","SpanishArgentina","GermanGermany","GermanAustria","GermanSwitzerland","JapaneseJapan","FrenchFrance","FrenchCanada","PortugueseBrazil","RussianRussia","ItalianItaly","DutchNetherlands","SwedishSweden","ChineseChina","KoreanSouthKorea"];export{I as ChineseChina,F as DutchNetherlands,d as EnglishAustralia,u as EnglishCanada,m as EnglishGreatBritain,p as EnglishUS,f as FrenchCanada,R as FrenchFrance,y as GermanAustria,x as GermanGermany,E as GermanSwitzerland,P as ItalianItaly,C as JapaneseJapan,T as KoreanSouthKorea,w as PortugueseBrazil,A as RussianRussia,h as SpanishArgentina,S as SpanishMexico,g as SpanishSpain,B as SwedishSweden,Ae as __namedExportsOrder,we as default};
