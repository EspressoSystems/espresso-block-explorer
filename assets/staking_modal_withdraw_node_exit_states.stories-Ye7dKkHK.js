import{b as r,a as t}from"./provide_async_states-YzODn9jr.js";import{h as S}from"./array_buffer_hex-Bcc-7BbE.js";import"./blocks-36ZEPcvJ.js";import{n as A}from"./nodes-BsbvMhdT.js";import{a1 as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-stpqgLFV.js";import{f as y,F as p,a as w,d as c}from"./example_data-BJNFkt08.js";import{D as d}from"./validator_confirmed_example-DTgOyMmV.js";/* empty css                      */import"./iframe-Da-pRdj_.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DT5b-p5f.js";import"./loading_provider-CkZUfCHZ.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BY4LX4kJ.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-BliYGj6D.js";import"./en_US-Y4ZOVFV4-Cdb36BN4.js";import"./index-Csied5Tc.js";import"./index-CVsL8RUv.js";import"./environment-sX5KAMBM.js";import"./espresso-CjxsHeGk.js";import"./explorer-Bo9hx4zB.js";import"./byte_size_text-DzPI3Ku4.js";import"./number_formatters_provider-DIxko5iX.js";import"./locale_provider-Bv2GXKLp.js";import"./wallet_address_text-BXyJ1CeJ.js";import"./date_time_formatters_provider-Bq_dXrCb.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-B8ynrPRp.js";import"./full_hex_text-DhrOCfLO.js";import"./hex_text-b6On9MuH.js";import"./money_text-DVODtpBJ.js";import"./money_text_full-BBNORgie.js";import"./number_text-By_u4Wjn.js";import"./relative_time_since_date_text-dTJLjam_.js";import"./tagged_base64_text-B_jFbqJ5.js";import"./time_text-BfBn8ExL.js";import"./async_iterable_resolver-inPpVq-S.js";import"./promise_builder-DfN8Z1g7.js";import"./circular_progress_indicator-CmgbbPhU.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-BUp_5laA.js";import"./data_table-DNqZAqdt.js";import"./chevron_up-CA2lC1se.js";import"./hot_shot_query_service_api_context-DIU1mLot.js";import"./height_and_address-BwQvAxZt.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-3kO0efKM.js";import"./not_found_error-BdUVpmTw.js";import"./validator-BgZRo16z.js";import"./stake_table-Bbtpv34V.js";import"./stake_table_field-CIreD0Dp.js";import"./espresso-C6NGAUAg.js";import"./x_icon-DUOKCEyJ.js";import"./twitter_icon-DJH4hGMI.js";import"./vertical_scroll-NWp1kiUw.js";import"./contexts-Btckv8Vs.js";import"./url-CHjl5yfO.js";import"./main-C2WnSB89.js";import"./esp_input-B9KEi9oa.js";import"./esp_symbol-DTcCTVVh.js";import"./text-CFxWUlLd.js";import"./fake_data-CFHYjho9.js";const Mr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new h)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new E(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Xr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Xr as __namedExportsOrder,Mr as default};
