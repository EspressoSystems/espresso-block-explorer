import{b as r,a as e}from"./provide_async_states-Ba2aywOc.js";import{h as y}from"./array_buffer_hex-K4SX2B-7.js";import"./blocks-DUPxZJN1.js";import{n as w}from"./nodes-B9V7XXPx.js";import{a0 as E,a1 as T,P as R,a as P,b as W,c as C}from"./staking_modal_validator_confirmed_content-DtXle-Ij.js";import{f as D,I as A,F as f,a as _}from"./example_data-DpI-2EaP.js";import{D as h}from"./validator_confirmed_example-C30uWwgR.js";/* empty css                      */import"./iframe-CUplt-FF.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CUqNqUZj.js";import"./loading_provider-BKy8tdgH.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-CFnOe1PN.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-DEmr4IMR.js";import"./en_US-Y4ZOVFV4-o8U3vFR1.js";import"./index-_mtXnqKx.js";import"./index-Cm6v-LFp.js";import"./espresso-vWrpKFZp.js";import"./explorer-BpFvRKyL.js";import"./byte_size_text-BJcG2Bdc.js";import"./number_formatters_provider-K0qk2vlF.js";import"./locale_provider-DmZD1wbO.js";import"./wallet_address_text-BCyv1a24.js";import"./date_time_formatters_provider-CNtAdVHQ.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CTQBcN9w.js";import"./full_hex_text-B9F7kEcQ.js";import"./hex_text-DbzBDiRA.js";import"./money_text-Bgb4wLSJ.js";import"./money_text_full-C0z5m69D.js";import"./number_text-_tp6nnNp.js";import"./relative_time_since_date_text-iMsVbehX.js";import"./tagged_base64_text-DquzWsrm.js";import"./time_text-Bl2PDbNx.js";import"./async_iterable_resolver-CxD8f6Wg.js";import"./promise_builder-DKxtyhJZ.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-Cy_sXQzx.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-vtegmqEX.js";import"./circular_progress_indicator-OGvGyeUN.js";import"./promise_resolver-Co1eVFKu.js";import"./data_table-CDU1Xfdb.js";import"./chevron_up-CEG6solM.js";import"./espresso-BtqYPSlj.js";import"./x_icon-jBGMhgaU.js";import"./twitter_icon-DU09kFcy.js";import"./vertical_scroll-BEp6qA3d.js";import"./contexts-BkIvw--J.js";import"./main-CFey4kNw.js";import"./esp_input-DTwFiH7n.js";import"./text-B0O2OdYZ.js";import"./fake_data-Cnf1fUci.js";const B0={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},t={args:{amount:"0"}},a={args:{amount:"12500000000000000000"}},o={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},c={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(e.done,new Error("Undelegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const L0=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Confirmation","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{c as Confirmation,i as InsufficientStake,t as None,a as Option25Percent,o as Option50Percent,n as Option75Percent,s as OptionAll,S as ReceiptRetrieved,l as SubmissionError,u as Submitted,p as Submitting,m as SufficientStake,d as Waiting,g as WaitingForReceipt,L0 as __namedExportsOrder,B0 as default};
