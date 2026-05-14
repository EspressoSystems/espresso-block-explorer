import{b as r,a as e}from"./provide_async_states-Cp22DcoR.js";import{h as y}from"./array_buffer_hex-B8TZXvFc.js";import"./blocks-BWloOeNV.js";import{n as w}from"./nodes-D7BPIfrv.js";import{a0 as E,a1 as T,P as R,a as P,b as W,c as C}from"./staking_modal_validator_confirmed_content-CQJNUvDA.js";import{f as D,I as A,F as f,a as _}from"./example_data-0DVuCHwk.js";import{D as h}from"./validator_confirmed_example-D2j_FMO7.js";/* empty css                      */import"./iframe-D2UHUSw1.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CqCkzHOO.js";import"./loading_provider-C-vOZWwa.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-DK5v8yH0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-Do31eXwD.js";import"./en_US-Y4ZOVFV4-D_PBb1Xt.js";import"./index-BTypf2jO.js";import"./index-DqaxvAnU.js";import"./espresso-UCXCFGID.js";import"./explorer-DxGWkdxX.js";import"./byte_size_text-B8LVqjcy.js";import"./number_formatters_provider-deQT8NaH.js";import"./locale_provider-CB6qzanm.js";import"./wallet_address_text-o_fKNCuy.js";import"./date_time_formatters_provider-C6LPHp4i.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-UFu38czj.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-qUJvM0mV.js";import"./money_text-D0xggOZ3.js";import"./money_text_full-c4Ixq9j3.js";import"./number_text-Dfa8DO6a.js";import"./percentage_text-3gwyuOf8.js";import"./relative_time_since_date_text-BlTkaE0N.js";import"./tagged_base64_text-D99lZCjx.js";import"./time_text-C0-uqWbV.js";import"./async_iterable_resolver-WvIA9bZo.js";import"./promise_builder-DjQ0KsnV.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-DAUZdEEL.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-DX0fkpcZ.js";import"./circular_progress_indicator-DSGwwahE.js";import"./promise_resolver-D_bSuBH8.js";import"./data_table-C2xtDrwY.js";import"./chevron_up-B23Gbjox.js";import"./espresso-CsIydQkP.js";import"./x_icon-DpyD5P6-.js";import"./twitter_icon-B12PiVe1.js";import"./vertical_scroll-CRFlcY6s.js";import"./contexts-RRW4TRjx.js";import"./main-CUbMU48Z.js";import"./esp_input-mrwWvlPb.js";import"./text-Eyiz9yN0.js";import"./fake_data-PZD_MAS4.js";const L0={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},t={args:{amount:"0"}},a={args:{amount:"12500000000000000000"}},o={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},c={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(e.done,new Error("Undelegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
