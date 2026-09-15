import{b as r,a as t}from"./provide_async_states-C6SFb25l.js";import{h as S}from"./array_buffer_hex-B8TZXvFc.js";import"./blocks-BWloOeNV.js";import{n as A}from"./nodes-D7BPIfrv.js";import{a2 as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-BVcrT1m2.js";import{f as y,F as p,a as w,d as c}from"./example_data-DHk0Ny__.js";import{D as d}from"./validator_confirmed_example-DI9_wJTa.js";/* empty css                      */import"./iframe-B_3OiDsk.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BDAEVT2w.js";import"./loading_provider-Cv2RH8EN.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-DK5v8yH0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-B9fwTSHO.js";import"./en_US-Y4ZOVFV4-CFDtR7nJ.js";import"./index-RxVbZla7.js";import"./index-CHUaaKdi.js";import"./espresso-CN8xZWGr.js";import"./explorer-DLQ5VtVC.js";import"./byte_size_text-UC0Wy2aR.js";import"./number_formatters_provider-Bf6RYDCV.js";import"./locale_provider-Wz0dYruV.js";import"./wallet_address_text-BcDYCoX5.js";import"./date_time_formatters_provider-C50Z7dF0.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-DHS6FkeB.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-D1xIiaNE.js";import"./money_text-libprYpi.js";import"./money_text_full-Cq_7593R.js";import"./number_text-CfPJ3WYP.js";import"./percentage_text-DF3JRbdn.js";import"./relative_time_since_date_text-bBhZOZRw.js";import"./tagged_base64_text-Bmi60DJN.js";import"./time_text-B1STacQD.js";import"./async_iterable_resolver-C-5Cybef.js";import"./promise_builder-DW0rvj9M.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-DAUZdEEL.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-DX0fkpcZ.js";import"./circular_progress_indicator-DxjX0mXb.js";import"./promise_resolver-DhPVsjyV.js";import"./data_table-CvAS8R1m.js";import"./chevron_up-LOzUN1Z9.js";import"./espresso-C7I6MY_N.js";import"./x_icon-CKGNWKmU.js";import"./twitter_icon-jjkUJKcS.js";import"./vertical_scroll-D4DBQTBY.js";import"./contexts-fhVq_BV_.js";import"./main-BBCWHoyK.js";import"./esp_input-BIWAktzB.js";import"./text-D9YC4Av5.js";import"./fake_data-D12_gle_.js";const Cr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new h)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new E(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Hr as __namedExportsOrder,Cr as default};
