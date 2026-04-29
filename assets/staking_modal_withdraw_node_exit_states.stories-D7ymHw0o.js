import{b as r,a as t}from"./provide_async_states-CTTp0qtV.js";import{h as S}from"./array_buffer_hex-K4SX2B-7.js";import"./blocks-DUPxZJN1.js";import{n as A}from"./nodes-B9V7XXPx.js";import{a2 as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-BU91FA2a.js";import{f as y,F as p,a as w,d as c}from"./example_data-BI4jN1MY.js";import{D as d}from"./validator_confirmed_example-D2XrJpgw.js";/* empty css                      */import"./iframe-Blfbjlvh.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DgI1389i.js";import"./loading_provider-DXstYbvN.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-CFnOe1PN.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-DC1bhpzY.js";import"./en_US-Y4ZOVFV4-B8CBJIGs.js";import"./index-CzSOuN3p.js";import"./index-DRYxBKKB.js";import"./espresso-DQeFqdQ-.js";import"./explorer-_8qg-Rss.js";import"./byte_size_text-fYb6Ipih.js";import"./number_formatters_provider-CMgMBIb7.js";import"./locale_provider-2gwxwAQe.js";import"./wallet_address_text-Ce2BIBuE.js";import"./date_time_formatters_provider-CTRX1eWg.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-goFrQyOw.js";import"./full_hex_text-B9F7kEcQ.js";import"./hex_text-CMd0ughg.js";import"./money_text-BHu1NHy8.js";import"./money_text_full-Cij7145-.js";import"./number_text-B0fm5SWR.js";import"./percentage_text-Df9tDUxB.js";import"./relative_time_since_date_text-DON7xrTR.js";import"./tagged_base64_text-fqOOQXXq.js";import"./time_text-Bs6IzVdx.js";import"./async_iterable_resolver-BIiSjMUo.js";import"./promise_builder-0abF-NrO.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-Cy_sXQzx.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-vtegmqEX.js";import"./circular_progress_indicator-D9cGi28K.js";import"./promise_resolver-LFoVq2E7.js";import"./data_table-CFuuLcjz.js";import"./chevron_up-C0fCgRF-.js";import"./espresso-CrJAEDK6.js";import"./x_icon-9X5OLWoj.js";import"./twitter_icon-VX9yyVpv.js";import"./vertical_scroll-EuYZzzgE.js";import"./contexts-BJ6iRVn4.js";import"./main-C8VnFS05.js";import"./esp_input-BzvaUpIL.js";import"./text-DwpdSGvp.js";import"./fake_data-BWAwpyt7.js";const Cr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new h)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new E(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
