import{b as r,a as t}from"./provide_async_states-Ba2aywOc.js";import{h as S}from"./array_buffer_hex-K4SX2B-7.js";import"./blocks-DUPxZJN1.js";import{n as l}from"./nodes-B9V7XXPx.js";import{O as h,P as A,a as g,b as w,c as u}from"./staking_modal_validator_confirmed_content-DtXle-Ij.js";import{f as W,F as p,a as y,c}from"./example_data-DpI-2EaP.js";import{D as d}from"./validator_confirmed_example-C30uWwgR.js";/* empty css                      */import"./iframe-CUplt-FF.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CUqNqUZj.js";import"./loading_provider-BKy8tdgH.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-CFnOe1PN.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-DEmr4IMR.js";import"./en_US-Y4ZOVFV4-o8U3vFR1.js";import"./index-_mtXnqKx.js";import"./index-Cm6v-LFp.js";import"./espresso-vWrpKFZp.js";import"./explorer-BpFvRKyL.js";import"./byte_size_text-BJcG2Bdc.js";import"./number_formatters_provider-K0qk2vlF.js";import"./locale_provider-DmZD1wbO.js";import"./wallet_address_text-BCyv1a24.js";import"./date_time_formatters_provider-CNtAdVHQ.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CTQBcN9w.js";import"./full_hex_text-B9F7kEcQ.js";import"./hex_text-DbzBDiRA.js";import"./money_text-Bgb4wLSJ.js";import"./money_text_full-C0z5m69D.js";import"./number_text-_tp6nnNp.js";import"./relative_time_since_date_text-iMsVbehX.js";import"./tagged_base64_text-DquzWsrm.js";import"./time_text-Bl2PDbNx.js";import"./async_iterable_resolver-CxD8f6Wg.js";import"./promise_builder-DKxtyhJZ.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-Cy_sXQzx.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-vtegmqEX.js";import"./circular_progress_indicator-OGvGyeUN.js";import"./promise_resolver-Co1eVFKu.js";import"./data_table-CDU1Xfdb.js";import"./chevron_up-CEG6solM.js";import"./espresso-BtqYPSlj.js";import"./x_icon-jBGMhgaU.js";import"./twitter_icon-DU09kFcy.js";import"./vertical_scroll-BEp6qA3d.js";import"./contexts-BkIvw--J.js";import"./main-CFey4kNw.js";import"./esp_input-DTwFiH7n.js";import"./text-B0O2OdYZ.js";import"./fake_data-Cnf1fUci.js";const Hr={title:"Delegation UI/Staking Modal/States/Withdraw Claim",...d,args:{...d.args,selection:new h(S.encode(l[c].address)),validator:W.nodes[c]}},a={args:{}},i={args:{claimWithDrawalAsyncSnapshot:r.waiting()}},o={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new w)}},e={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new g(p))}},s={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimWithDrawalAsyncSnapshot:r.withData(t.done,new A(p,y))}},m={args:{claimWithDrawalAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ir=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Ir as __namedExportsOrder,Hr as default};
