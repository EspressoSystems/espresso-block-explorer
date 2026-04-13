import{b as r,a as t}from"./provide_async_states-jwCAOU-p.js";import{h as S}from"./array_buffer_hex-CckWFzk6.js";import"./blocks-BbFMk1LL.js";import{n as A}from"./nodes-DYObZsIN.js";import{a1 as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-uMliHmIP.js";import{f as y,F as p,a as w,d as c}from"./example_data-CD7BV8cR.js";import{D as d}from"./validator_confirmed_example-BcvC-uub.js";/* empty css                      */import"./iframe-C0Hnu7F5.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-Cti-MZ1B.js";import"./loading_provider-DMNdRHHl.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BN9f4kvo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-_6gYxibe.js";import"./en_US-Y4ZOVFV4-EmbOaFWf.js";import"./index-CSmO33r6.js";import"./index-DEeGj3Zr.js";import"./environment-BrP5Pm0N.js";import"./espresso-CByVUFzU.js";import"./explorer-DS3qhp3q.js";import"./byte_size_text-BSxBAPzi.js";import"./number_formatters_provider-Cxc9ljbf.js";import"./locale_provider-DiHDaUDA.js";import"./wallet_address_text-DncnO_z8.js";import"./date_time_formatters_provider-CfHgi1rZ.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-BYlmSoj7.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-Cz8JEBHx.js";import"./money_text-Sqeltofb.js";import"./money_text_full-xwpQIE19.js";import"./number_text-Cyj64pmv.js";import"./relative_time_since_date_text-5Vk5RJ1c.js";import"./tagged_base64_text-KFPcJOl9.js";import"./time_text-L0LlBiF3.js";import"./async_iterable_resolver-vSmql0JM.js";import"./promise_builder-COyjSFMy.js";import"./circular_progress_indicator-C7NtlUw_.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-CG3c4lkW.js";import"./data_table-Bc2Y3FO7.js";import"./chevron_up-DNzirS0I.js";import"./hot_shot_query_service_api_context-DdHHoYgU.js";import"./height_and_address-BSaR29fg.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-CS7UlZiC.js";import"./x_icon-f1IZuvpB.js";import"./twitter_icon-DOVsDg5z.js";import"./vertical_scroll-BD8vqH8Y.js";import"./contexts-BzJz33a1.js";import"./url-CHjl5yfO.js";import"./main-DqJLaoO8.js";import"./esp_input-Ce4dttbW.js";import"./text-BlR8fIK5.js";import"./fake_data-BsaAMii2.js";const Vr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new h)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new E(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
