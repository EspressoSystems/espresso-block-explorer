import{b as r,a as t}from"./provide_async_states-BKkQM2nw.js";import{h as S}from"./array_buffer_hex-CckWFzk6.js";import"./blocks-BbFMk1LL.js";import{n as A}from"./nodes-DYObZsIN.js";import{a1 as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-D-JO9s8c.js";import{f as y,F as p,a as w,d as c}from"./example_data-C_epSqWj.js";import{D as d}from"./validator_confirmed_example-C14lAV_x.js";/* empty css                      */import"./iframe-CRN6ir_k.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BRUBq0Ii.js";import"./loading_provider-bJjs6rdx.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BN9f4kvo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-BJoFsnsT.js";import"./en_US-Y4ZOVFV4-DcSbJ6-b.js";import"./index-D_J2JNbG.js";import"./index-DmZRm6GY.js";import"./environment-DnFZRPyA.js";import"./espresso-C-0bNmHL.js";import"./explorer-BGP7plBm.js";import"./byte_size_text-Ch1N4NZS.js";import"./number_formatters_provider-CV2JCVAy.js";import"./locale_provider-DitRBxok.js";import"./wallet_address_text-iOdgpcaz.js";import"./date_time_formatters_provider-CO-VImxK.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CO7oiG9G.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-Dmo4jBH1.js";import"./money_text-Mf2-fP6d.js";import"./money_text_full-CyFzKqQ4.js";import"./number_text-i0V-NKlU.js";import"./relative_time_since_date_text-BvB0wkUr.js";import"./tagged_base64_text-C5VDRjcO.js";import"./time_text-CSZWe2p1.js";import"./async_iterable_resolver-Cdg3RPf4.js";import"./promise_builder-DOu61EMF.js";import"./circular_progress_indicator-D_atp0op.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-CYiSp4i2.js";import"./data_table-Ckzo1iyL.js";import"./chevron_up-BIFMo3iJ.js";import"./hot_shot_query_service_api_context-DSWf7DF2.js";import"./height_and_address-DJ80vskF.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-B4ZxD2K0.js";import"./x_icon-CeOMdX2y.js";import"./twitter_icon-BMz0LQWW.js";import"./vertical_scroll-BFk-ygDy.js";import"./contexts-Dke4p018.js";import"./url-CHjl5yfO.js";import"./main-BH-2Fizx.js";import"./esp_input-6l1oEn3_.js";import"./text-D0Ym5v7i.js";import"./fake_data-DZJrOEiR.js";const Vr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new h)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new E(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Validator Exit failed'))
  }
}`,...m.parameters?.docs?.source}}};const Mr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Mr as __namedExportsOrder,Vr as default};
