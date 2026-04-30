import{b as r,a as t}from"./provide_async_states-BOJbI_Cd.js";import{h as S}from"./array_buffer_hex-B8TZXvFc.js";import"./blocks-BWloOeNV.js";import{n as l}from"./nodes-D7BPIfrv.js";import{O as h,P as A,a as g,b as w,c as u}from"./staking_modal_validator_confirmed_content-C0cxaDD3.js";import{f as W,F as p,a as y,c}from"./example_data-D1G5ZFME.js";import{D as d}from"./validator_confirmed_example-DfwQSiAy.js";/* empty css                      */import"./iframe-ByirMSqC.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-uPErEsh-.js";import"./loading_provider-JQzlSpbY.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-DK5v8yH0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-B4s6DllY.js";import"./en_US-Y4ZOVFV4-_Nm-q12g.js";import"./index-Cs0G5zcJ.js";import"./index-4esRxYYd.js";import"./espresso-C1v8zFcn.js";import"./explorer-CrdMY4vr.js";import"./byte_size_text-rg32i4pu.js";import"./number_formatters_provider-BSxXP_Sb.js";import"./locale_provider-EAu4dooN.js";import"./wallet_address_text-pc0HgSn8.js";import"./date_time_formatters_provider-BDkg3xmd.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-Bkgrlfv9.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-Ds-pkMC3.js";import"./money_text-Pdt9ieyf.js";import"./money_text_full-B_yvHUNG.js";import"./number_text-BPE_jkSC.js";import"./percentage_text-j7czaObi.js";import"./relative_time_since_date_text-Z2A2B9ek.js";import"./tagged_base64_text-BmBn2DYq.js";import"./time_text-DzXzA355.js";import"./async_iterable_resolver-C0jMMB28.js";import"./promise_builder-muywECiG.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-DAUZdEEL.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-DX0fkpcZ.js";import"./circular_progress_indicator-DX47TK7n.js";import"./promise_resolver-BmTReJnd.js";import"./data_table-DL8e7W09.js";import"./chevron_up-S1JPAfJ6.js";import"./espresso-8aIkcUgD.js";import"./x_icon-CE7rSdDc.js";import"./twitter_icon-BVgDx6-6.js";import"./vertical_scroll-C-wAnSnI.js";import"./contexts-C6uEoPSs.js";import"./main-BNbqWkWj.js";import"./esp_input-37JmXIiR.js";import"./text-E6OxC4ho.js";import"./fake_data-B1JX6qlj.js";const Ir={title:"Delegation UI/Staking Modal/States/Withdraw Claim",...d,args:{...d.args,selection:new h(S.encode(l[c].address)),validator:W.nodes[c]}},a={args:{}},i={args:{claimWithDrawalAsyncSnapshot:r.waiting()}},o={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new w)}},e={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new g(p))}},s={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimWithDrawalAsyncSnapshot:r.withData(t.done,new A(p,y))}},m={args:{claimWithDrawalAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
