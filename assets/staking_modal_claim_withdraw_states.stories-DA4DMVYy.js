import{b as r,a as t}from"./provide_async_states-CTW6PR9p.js";import{h as S}from"./array_buffer_hex-CckWFzk6.js";import"./blocks-BbFMk1LL.js";import{n as l}from"./nodes-DYObZsIN.js";import{M as h,P as A,a as g,b as w,c as u}from"./staking_modal_validator_confirmed_content-CCiZcFY-.js";import{f as W,F as p,a as y,c}from"./example_data-UbWSKDaA.js";import{D as d}from"./validator_confirmed_example--5htIsvu.js";/* empty css                      */import"./iframe-DaQbwpKg.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-Urjmc4oX.js";import"./loading_provider-BJp-g8St.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BN9f4kvo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-B-9I1gLU.js";import"./en_US-Y4ZOVFV4-DS5e0p-0.js";import"./index-Bzu4Q9_J.js";import"./index-BMvX1_G5.js";import"./environment-B9VwJPqh.js";import"./espresso-CyLc7AWz.js";import"./explorer-DNGGRQj6.js";import"./byte_size_text-ipFt3fsr.js";import"./number_formatters_provider-CcXSIvuI.js";import"./locale_provider-D3R0CJI7.js";import"./wallet_address_text-CqwLBR2A.js";import"./date_time_formatters_provider-CEA6JPej.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CiNBQC5Z.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-BAI0PzpF.js";import"./money_text-CNPln5bU.js";import"./money_text_full-fYF8MyIy.js";import"./number_text-BqIrmfNw.js";import"./relative_time_since_date_text-CWZP_ccf.js";import"./tagged_base64_text-Mmk-wGJg.js";import"./time_text-DmW55R4T.js";import"./async_iterable_resolver-DdkMX6wz.js";import"./promise_builder-BgAlAfP2.js";import"./circular_progress_indicator-DEGUc7sM.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-OIJdldK9.js";import"./data_table-CUbkKUvM.js";import"./chevron_up-C8VviZ1S.js";import"./hot_shot_query_service_api_context-Dhm2cPMp.js";import"./height_and_address-BK1YHBdR.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-8j5zM5mY.js";import"./x_icon-C35_i0U-.js";import"./twitter_icon-Dj6C_0cQ.js";import"./vertical_scroll-CEacRZkh.js";import"./contexts-DN1WVZuo.js";import"./url-CHjl5yfO.js";import"./main-CvhDR6dC.js";import"./esp_input-DFELv1QH.js";import"./text-wJrwa_h_.js";import"./fake_data-BJw6B7vs.js";const Vr={title:"Delegation UI/Staking Modal/States/Withdraw Claim",...d,args:{...d.args,selection:new h(S.encode(l[c].address)),validator:W.nodes[c]}},a={args:{}},i={args:{claimWithDrawalAsyncSnapshot:r.waiting()}},o={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new w)}},e={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new g(p))}},s={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimWithDrawalAsyncSnapshot:r.withData(t.done,new A(p,y))}},m={args:{claimWithDrawalAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Validator Exit failed'))
  }
}`,...m.parameters?.docs?.source}}};const Mr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Mr as __namedExportsOrder,Vr as default};
