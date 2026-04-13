import{b as r,a as t}from"./provide_async_states-CdxvwGgy.js";import{h as S}from"./array_buffer_hex-CckWFzk6.js";import"./blocks-BbFMk1LL.js";import{n as A}from"./nodes-DYObZsIN.js";import{a1 as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-CXLGfWwd.js";import{f as y,F as p,a as w,d as c}from"./example_data-DVHHiq-G.js";import{D as d}from"./validator_confirmed_example-BQIm5v8g.js";/* empty css                      */import"./iframe-yFC_6Lkm.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-5GKNepRL.js";import"./loading_provider-BcOPdPnh.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BN9f4kvo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-CjJuNElG.js";import"./en_US-Y4ZOVFV4-COxfEDc8.js";import"./index-BmV5BhIB.js";import"./index-CRsEpIOc.js";import"./environment-Cu_ct2SI.js";import"./espresso-DhYRLp1e.js";import"./explorer-B6X62ykO.js";import"./byte_size_text-Nx3d5HCW.js";import"./number_formatters_provider-zsFhOobu.js";import"./locale_provider-vvwlyNor.js";import"./wallet_address_text-C8RpyldE.js";import"./date_time_formatters_provider-DcGFks32.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-B_kYN0i8.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-BgMrU2_9.js";import"./money_text-H4KdIbGP.js";import"./money_text_full-lyD3UcMj.js";import"./number_text-CypWZRGu.js";import"./relative_time_since_date_text-B1-Y__aI.js";import"./tagged_base64_text-vj28S5uH.js";import"./time_text-DWAXCu0U.js";import"./async_iterable_resolver-DHVBK9PV.js";import"./promise_builder-MyoVUTu8.js";import"./circular_progress_indicator-CXUQmMaZ.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-czMCB7aT.js";import"./data_table-B_ldztdE.js";import"./chevron_up-DL-aSyib.js";import"./hot_shot_query_service_api_context-CS-0g1zv.js";import"./height_and_address-o6gd2Qhm.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-BaBYkiWZ.js";import"./x_icon-Cly8TORT.js";import"./twitter_icon-BSqXgZj9.js";import"./vertical_scroll-ABb2uixh.js";import"./contexts-BxlhHhJA.js";import"./url-CHjl5yfO.js";import"./main-D_lxM9ED.js";import"./esp_input-wJuC8QjA.js";import"./text-Cd3QPPw5.js";import"./fake_data-DNtLzPiA.js";const Vr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new h)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new E(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
