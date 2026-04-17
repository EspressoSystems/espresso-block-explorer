import{j as N}from"./iframe-CUplt-FF.js";import{C as L}from"./locale_provider-DmZD1wbO.js";import{c as M,P as V}from"./number_formatters_provider-K0qk2vlF.js";import"./blocks-DUPxZJN1.js";import{P as _,g as H}from"./nodes-B9V7XXPx.js";import{m as J,f as O}from"./functional-CFnOe1PN.js";import{M as k}from"./monetary_value-DN71IgaJ.js";import{E as X}from"./example-YNJJeb1B.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./string-DCKD4j-j.js";import"./unimplemented_error-CMF8SzXs.js";import"./missing_element_error-CMLVwjEG.js";import"./bigint-CufIvmoo.js";import"./byte_size_text-BJcG2Bdc.js";import"./wallet_address_text-BCyv1a24.js";import"./date_time_formatters_provider-CNtAdVHQ.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CTQBcN9w.js";import"./full_hex_text-B9F7kEcQ.js";import"./array_buffer_hex-K4SX2B-7.js";import"./hex_text-DbzBDiRA.js";import"./money_text-Bgb4wLSJ.js";import"./money_text_full-C0z5m69D.js";import"./number_text-_tp6nnNp.js";import"./relative_time_since_date_text-iMsVbehX.js";import"./tagged_base64_text-DquzWsrm.js";import"./time_text-Bl2PDbNx.js";import"./esp_input-DTwFiH7n.js";import"./text-B0O2OdYZ.js";const{expect:t,findByRole:n,waitFor:v}=__STORYBOOK_MODULE_TEST__;async function W(e,r,s,o,I){await r("Wait for Input to be ready",async()=>{await v(async()=>{t(await n(e,"textbox")).toBeVisible()})}),await r("Focus the Input",async()=>{const a=await n(e,"textbox");await s.click(a),await v(async()=>{t(a).toHaveFocus()})}),await r(`Type value: "${o}"`,async()=>{const a=await n(e,"textbox");await s.type(a,o,{initialSelectionStart:a.value.length})}),await r("Verify formatted value matches expected value",async()=>{const a=await n(e,"textbox");await v(async()=>{t(a).toHaveValue(I)}),t(a).toHaveValue(I)})}const $=e=>{const{locale:r}=e;return N.jsx(L.Provider,{value:r,children:N.jsx(V,{children:N.jsx(X,{initialValue:null})})})},Y=["en-US","en-GB","en-CA","en-AU","es-ES","es-MX","es-AR","de-DE","de-AT","de-CH","ja-JP","fr-FR","fr-CA","pt-PT","pt-BR","ru-RU","it-IT","nl-NL","nl-BE","sv-SE","sv-FI","zh-CN","zh-TW","ko-KR"],Na={title:"Components/HID/Inputs/ESPInput/Interactions/Typing",component:$,args:{locale:"en-US"},argTypes:{locale:{control:{type:"select"},options:Y}},async play({canvasElement:e,step:r,userEvent:s,args:o}){const a=new _(H()).nextRangeBigInt(10000000000000000n,123456789000000000000000000n),T=k.ESP(a),G=M(o.locale),j=G.ESPFull.format(T.toNumericLiteralString()).replace(/ESP/gi,"").replace(/\u00A0/gi,""),U=Array.from(J(O(G.defaultFinance.formatToParts(T.toNumericLiteralString()),b=>b.type!=="group"),b=>b.value)).join(""),D=G.ESPFull.formatToParts(T.toNumericLiteralString()),[z]=D,K=z.type==="currency"?0:4;await W(e,r,s,j,U,U.length-K)}},c={args:{locale:"en-US"}},i={args:{locale:"en-GB"}},l={args:{locale:"en-CA"}},p={args:{locale:"en-AU"}},m={args:{locale:"es-ES"}},u={args:{locale:"es-MX"}},d={args:{locale:"es-AR"}},g={args:{locale:"de-DE"}},S={args:{locale:"de-AT"}},h={args:{locale:"de-CH"}},y={args:{locale:"ja-JP"}},E={args:{locale:"fr-FR"}},f={args:{locale:"fr-CA"}},x={args:{locale:"pt-BR"}},A={args:{locale:"ru-RU"}},C={args:{locale:"it-IT"}},R={args:{locale:"nl-NL"}},w={args:{locale:"sv-SE"}},F={args:{locale:"zh-CN"}},P={args:{locale:"ko-KR"}},B={args:{locale:"ar-EG"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-GB'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-CA'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-AU'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'es-ES'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'es-MX'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'es-AR'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'de-DE'
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'de-AT'
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'de-CH'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'ja-JP'
  }
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'fr-FR'
  }
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'fr-CA'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'pt-BR'
  }
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'ru-RU'
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'it-IT'
  }
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nl-NL'
  }
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'sv-SE'
  }
}`,...w.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'zh-CN'
  }
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'ko-KR'
  }
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'ar-EG'
  }
}`,...B.parameters?.docs?.source}}};const va=["EnglishUS","EnglishGreatBritain","EnglishCanada","EnglishAustralia","SpanishSpain","SpanishMexico","SpanishArgentina","GermanGermany","GermanAustria","GermanSwitzerland","JapaneseJapan","FrenchFrance","FrenchCanada","PortugueseBrazil","RussianRussia","ItalianItaly","DutchNetherlands","SwedishSweden","ChineseChina","KoreanSouthKorea","ArabicEgypt"];export{B as ArabicEgypt,F as ChineseChina,R as DutchNetherlands,p as EnglishAustralia,l as EnglishCanada,i as EnglishGreatBritain,c as EnglishUS,f as FrenchCanada,E as FrenchFrance,S as GermanAustria,g as GermanGermany,h as GermanSwitzerland,C as ItalianItaly,y as JapaneseJapan,P as KoreanSouthKorea,x as PortugueseBrazil,A as RussianRussia,d as SpanishArgentina,u as SpanishMexico,m as SpanishSpain,w as SwedishSweden,va as __namedExportsOrder,Na as default};
