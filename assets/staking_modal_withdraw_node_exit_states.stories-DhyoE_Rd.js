import{b as r,a as t}from"./provide_async_states-C7YFZX1i.js";import{h as S}from"./array_buffer_hex-B8TZXvFc.js";import"./blocks-BWloOeNV.js";import{n as A}from"./nodes-D7BPIfrv.js";import{a2 as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-DhPzUJ8t.js";import{f as y,F as p,a as w,d as c}from"./example_data-D58FGtu4.js";import{D as d}from"./validator_confirmed_example-GzzpfXBF.js";/* empty css                      */import"./iframe-BzM1REe5.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-UvOryvGc.js";import"./loading_provider-Cf6L2PDb.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-DK5v8yH0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-RPDetbly.js";import"./en_US-Y4ZOVFV4-BZcURd1N.js";import"./index-Brvi13u4.js";import"./index-B6gwanc6.js";import"./espresso-IicI6aXT.js";import"./explorer-VPExH5Eh.js";import"./byte_size_text-BvBqpNSY.js";import"./number_formatters_provider-B55I5973.js";import"./locale_provider-CcmMVSKG.js";import"./wallet_address_text-DkuIDJMv.js";import"./date_time_formatters_provider-BQMjgMAw.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CkDQW_O2.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-BX6Ncm6j.js";import"./money_text-CvmVZA_V.js";import"./money_text_full-DtYqNUaR.js";import"./number_text-CoNdK3e3.js";import"./percentage_text-DoqaZ5Li.js";import"./relative_time_since_date_text-CbvHaqJF.js";import"./tagged_base64_text-BxaxBsXv.js";import"./time_text-DWVaFWBe.js";import"./async_iterable_resolver-D1lGKdFw.js";import"./promise_builder-IMV_mUhm.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-DAUZdEEL.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-DX0fkpcZ.js";import"./circular_progress_indicator-B9ilkt7L.js";import"./promise_resolver-DTeTxs6H.js";import"./data_table-Bl7t5neU.js";import"./chevron_up-BZB8tbSA.js";import"./espresso-D4gTP2xO.js";import"./x_icon-Cj5-XcrP.js";import"./twitter_icon-_zJMwtMj.js";import"./vertical_scroll-C_cix099.js";import"./contexts-mzGQmERM.js";import"./main-DRtibzmB.js";import"./esp_input-Dyj-qRzz.js";import"./text-BpI1j-rz.js";import"./fake_data-DqLoYRz6.js";const Cr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new h)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new E(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
