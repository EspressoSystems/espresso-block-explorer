import{b as r,a as t}from"./provide_async_states-Bx1oVvH5.js";import{h as S}from"./array_buffer_hex-B8TZXvFc.js";import"./blocks-BWloOeNV.js";import{n as A}from"./nodes-D7BPIfrv.js";import{a2 as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-BNonOW5h.js";import{f as y,F as p,a as w,d as c}from"./example_data-DJJ2Y5YB.js";import{D as d}from"./validator_confirmed_example-DI45fek8.js";/* empty css                      */import"./iframe-CLPnbpxV.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DgjhqqNC.js";import"./loading_provider-paXcQWk1.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-DK5v8yH0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-7cy5ynj_.js";import"./en_US-Y4ZOVFV4-DH1_h4v4.js";import"./index-Cyu_tdB6.js";import"./index-BDob3IAG.js";import"./espresso-ByBbRBeE.js";import"./explorer-LPg8CCaY.js";import"./byte_size_text-_ohqn1f_.js";import"./number_formatters_provider-GVH6Hwmx.js";import"./locale_provider-BN4HfGkg.js";import"./wallet_address_text-CMr7VMhM.js";import"./date_time_formatters_provider-CmqVjlvw.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-Vjl96l3q.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-BsZ3Qfa8.js";import"./money_text-RleJYn5Z.js";import"./money_text_full-DQxVbaBP.js";import"./number_text-D9k67KIt.js";import"./percentage_text-BwRPUx72.js";import"./relative_time_since_date_text-DzcnoK0x.js";import"./tagged_base64_text-BmMKknzC.js";import"./time_text-DSSKbz_8.js";import"./async_iterable_resolver-DtDr8S0I.js";import"./promise_builder-D4A8enwA.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-DAUZdEEL.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-DX0fkpcZ.js";import"./circular_progress_indicator-c9XfkaIK.js";import"./promise_resolver-DGDLAEu6.js";import"./data_table-b-74HB3k.js";import"./chevron_up-BrJm_Csg.js";import"./espresso-D4l0gTsg.js";import"./x_icon-rfrqIKaF.js";import"./twitter_icon-DnMoPF-q.js";import"./vertical_scroll-SCOcfRfI.js";import"./contexts-CTYFLzK6.js";import"./main-ui_b2npk.js";import"./esp_input-wBdDEvtJ.js";import"./text-BaACNDiO.js";import"./fake_data-B0tgBcqS.js";const Cr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new h)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new E(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
