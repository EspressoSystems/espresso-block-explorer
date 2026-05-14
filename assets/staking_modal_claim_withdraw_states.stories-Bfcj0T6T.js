import{b as r,a as t}from"./provide_async_states-Cp22DcoR.js";import{h as S}from"./array_buffer_hex-B8TZXvFc.js";import"./blocks-BWloOeNV.js";import{n as l}from"./nodes-D7BPIfrv.js";import{O as h,P as A,a as g,b as w,c as u}from"./staking_modal_validator_confirmed_content-CQJNUvDA.js";import{f as W,F as p,a as y,c}from"./example_data-0DVuCHwk.js";import{D as d}from"./validator_confirmed_example-D2j_FMO7.js";/* empty css                      */import"./iframe-D2UHUSw1.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CqCkzHOO.js";import"./loading_provider-C-vOZWwa.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-DK5v8yH0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-Do31eXwD.js";import"./en_US-Y4ZOVFV4-D_PBb1Xt.js";import"./index-BTypf2jO.js";import"./index-DqaxvAnU.js";import"./espresso-UCXCFGID.js";import"./explorer-DxGWkdxX.js";import"./byte_size_text-B8LVqjcy.js";import"./number_formatters_provider-deQT8NaH.js";import"./locale_provider-CB6qzanm.js";import"./wallet_address_text-o_fKNCuy.js";import"./date_time_formatters_provider-C6LPHp4i.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-UFu38czj.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-qUJvM0mV.js";import"./money_text-D0xggOZ3.js";import"./money_text_full-c4Ixq9j3.js";import"./number_text-Dfa8DO6a.js";import"./percentage_text-3gwyuOf8.js";import"./relative_time_since_date_text-BlTkaE0N.js";import"./tagged_base64_text-D99lZCjx.js";import"./time_text-C0-uqWbV.js";import"./async_iterable_resolver-WvIA9bZo.js";import"./promise_builder-DjQ0KsnV.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-DAUZdEEL.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-DX0fkpcZ.js";import"./circular_progress_indicator-DSGwwahE.js";import"./promise_resolver-D_bSuBH8.js";import"./data_table-C2xtDrwY.js";import"./chevron_up-B23Gbjox.js";import"./espresso-CsIydQkP.js";import"./x_icon-DpyD5P6-.js";import"./twitter_icon-B12PiVe1.js";import"./vertical_scroll-CRFlcY6s.js";import"./contexts-RRW4TRjx.js";import"./main-CUbMU48Z.js";import"./esp_input-mrwWvlPb.js";import"./text-Eyiz9yN0.js";import"./fake_data-PZD_MAS4.js";const Ir={title:"Delegation UI/Staking Modal/States/Withdraw Claim",...d,args:{...d.args,selection:new h(S.encode(l[c].address)),validator:W.nodes[c]}},a={args:{}},i={args:{claimWithDrawalAsyncSnapshot:r.waiting()}},o={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new w)}},e={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new g(p))}},s={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimWithDrawalAsyncSnapshot:r.withData(t.done,new A(p,y))}},m={args:{claimWithDrawalAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
