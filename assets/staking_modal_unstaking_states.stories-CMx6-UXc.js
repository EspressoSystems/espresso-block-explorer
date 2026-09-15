import{b as r,a as e}from"./provide_async_states-C6SFb25l.js";import{h as y}from"./array_buffer_hex-B8TZXvFc.js";import"./blocks-BWloOeNV.js";import{n as w}from"./nodes-D7BPIfrv.js";import{a0 as E,a1 as T,P as R,a as P,b as W,c as C}from"./staking_modal_validator_confirmed_content-BVcrT1m2.js";import{f as D,I as A,F as f,a as _}from"./example_data-DHk0Ny__.js";import{D as h}from"./validator_confirmed_example-DI9_wJTa.js";/* empty css                      */import"./iframe-B_3OiDsk.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BDAEVT2w.js";import"./loading_provider-Cv2RH8EN.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-DK5v8yH0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-B9fwTSHO.js";import"./en_US-Y4ZOVFV4-CFDtR7nJ.js";import"./index-RxVbZla7.js";import"./index-CHUaaKdi.js";import"./espresso-CN8xZWGr.js";import"./explorer-DLQ5VtVC.js";import"./byte_size_text-UC0Wy2aR.js";import"./number_formatters_provider-Bf6RYDCV.js";import"./locale_provider-Wz0dYruV.js";import"./wallet_address_text-BcDYCoX5.js";import"./date_time_formatters_provider-C50Z7dF0.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-DHS6FkeB.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-D1xIiaNE.js";import"./money_text-libprYpi.js";import"./money_text_full-Cq_7593R.js";import"./number_text-CfPJ3WYP.js";import"./percentage_text-DF3JRbdn.js";import"./relative_time_since_date_text-bBhZOZRw.js";import"./tagged_base64_text-Bmi60DJN.js";import"./time_text-B1STacQD.js";import"./async_iterable_resolver-C-5Cybef.js";import"./promise_builder-DW0rvj9M.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-DAUZdEEL.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-DX0fkpcZ.js";import"./circular_progress_indicator-DxjX0mXb.js";import"./promise_resolver-DhPVsjyV.js";import"./data_table-CvAS8R1m.js";import"./chevron_up-LOzUN1Z9.js";import"./espresso-C7I6MY_N.js";import"./x_icon-CKGNWKmU.js";import"./twitter_icon-jjkUJKcS.js";import"./vertical_scroll-D4DBQTBY.js";import"./contexts-fhVq_BV_.js";import"./main-BBCWHoyK.js";import"./esp_input-BIWAktzB.js";import"./text-D9YC4Av5.js";import"./fake_data-D12_gle_.js";const L0={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},t={args:{amount:"0"}},a={args:{amount:"12500000000000000000"}},o={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},c={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(e.done,new Error("Undelegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '12500000000000000000'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '25000000000000000000'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '37500000000000000000'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '50000000000000000000'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '500000000000000000000'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '10000000000000000000'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    selection: new ValidatorConfirmedUndelegateConfirm(hexArrayBufferCodec.encode(nodeList[INDEX_STAKED].address)),
    amount: '10000000000000000000'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...S.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Undelegation failed'))
  }
}`,...l.parameters?.docs?.source}}};const M0=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Confirmation","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{c as Confirmation,i as InsufficientStake,t as None,a as Option25Percent,o as Option50Percent,n as Option75Percent,s as OptionAll,S as ReceiptRetrieved,l as SubmissionError,u as Submitted,p as Submitting,m as SufficientStake,d as Waiting,g as WaitingForReceipt,M0 as __namedExportsOrder,L0 as default};
