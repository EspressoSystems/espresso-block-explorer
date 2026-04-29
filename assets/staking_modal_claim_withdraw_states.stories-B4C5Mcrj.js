import{b as r,a as t}from"./provide_async_states-1TRUhK3o.js";import{h as S}from"./array_buffer_hex-K4SX2B-7.js";import"./blocks-DUPxZJN1.js";import{n as l}from"./nodes-B9V7XXPx.js";import{O as h,P as A,a as g,b as w,c as u}from"./staking_modal_validator_confirmed_content-d0qk2cYn.js";import{f as W,F as p,a as y,c}from"./example_data-DHa27Wqs.js";import{D as d}from"./validator_confirmed_example-DljrGcTw.js";/* empty css                      */import"./iframe-Czs2L5m1.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-LHkS6gF_.js";import"./loading_provider-Cs7gPV-B.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-CFnOe1PN.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-Bg2qo-qh.js";import"./en_US-Y4ZOVFV4-DfZ5XP3H.js";import"./index-8XHMmjBr.js";import"./index-CVrR6RK1.js";import"./espresso-D-rFM7G1.js";import"./explorer-DVaq4vmH.js";import"./byte_size_text-LFOa9cPx.js";import"./number_formatters_provider-C7_WrEPu.js";import"./locale_provider-DjhHC7rP.js";import"./wallet_address_text-b1XU89BU.js";import"./date_time_formatters_provider-npYgPV9H.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-DTv9voBS.js";import"./full_hex_text-B9F7kEcQ.js";import"./hex_text-D4ncCmSo.js";import"./money_text-BJ-uCKea.js";import"./money_text_full-Cn1Suzc2.js";import"./number_text-NeBjfjp9.js";import"./percentage_text-DYq2RApP.js";import"./relative_time_since_date_text-DLaNVU8u.js";import"./tagged_base64_text-BpgIJSgf.js";import"./time_text-DXVJqvoG.js";import"./async_iterable_resolver-D4Yl8PjA.js";import"./promise_builder-xYc_xYm5.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-Cy_sXQzx.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-vtegmqEX.js";import"./circular_progress_indicator-DXYyTHHF.js";import"./promise_resolver-B8mqP0nf.js";import"./data_table-CIyHbrit.js";import"./chevron_up-CMrdurIq.js";import"./espresso-B2m2lRJ9.js";import"./x_icon-CQlz9M2A.js";import"./twitter_icon-CJ78b8RU.js";import"./vertical_scroll-BNXocixa.js";import"./contexts-BNPk_7IP.js";import"./main-BuA9Zb8c.js";import"./esp_input-BVb18h_j.js";import"./text-CsBKxlKv.js";import"./fake_data-DZZ5jPGj.js";const Ir={title:"Delegation UI/Staking Modal/States/Withdraw Claim",...d,args:{...d.args,selection:new h(S.encode(l[c].address)),validator:W.nodes[c]}},a={args:{}},i={args:{claimWithDrawalAsyncSnapshot:r.waiting()}},o={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new w)}},e={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new g(p))}},s={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimWithDrawalAsyncSnapshot:r.withData(t.done,new A(p,y))}},m={args:{claimWithDrawalAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Kr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Kr as __namedExportsOrder,Ir as default};
