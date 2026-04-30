import{b as r,a as e}from"./provide_async_states-BOJbI_Cd.js";import{h as y}from"./array_buffer_hex-B8TZXvFc.js";import"./blocks-BWloOeNV.js";import{n as w}from"./nodes-D7BPIfrv.js";import{a0 as E,a1 as T,P as R,a as P,b as W,c as C}from"./staking_modal_validator_confirmed_content-C0cxaDD3.js";import{f as D,I as A,F as f,a as _}from"./example_data-D1G5ZFME.js";import{D as h}from"./validator_confirmed_example-DfwQSiAy.js";/* empty css                      */import"./iframe-ByirMSqC.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-uPErEsh-.js";import"./loading_provider-JQzlSpbY.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-DK5v8yH0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-B4s6DllY.js";import"./en_US-Y4ZOVFV4-_Nm-q12g.js";import"./index-Cs0G5zcJ.js";import"./index-4esRxYYd.js";import"./espresso-C1v8zFcn.js";import"./explorer-CrdMY4vr.js";import"./byte_size_text-rg32i4pu.js";import"./number_formatters_provider-BSxXP_Sb.js";import"./locale_provider-EAu4dooN.js";import"./wallet_address_text-pc0HgSn8.js";import"./date_time_formatters_provider-BDkg3xmd.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-Bkgrlfv9.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-Ds-pkMC3.js";import"./money_text-Pdt9ieyf.js";import"./money_text_full-B_yvHUNG.js";import"./number_text-BPE_jkSC.js";import"./percentage_text-j7czaObi.js";import"./relative_time_since_date_text-Z2A2B9ek.js";import"./tagged_base64_text-BmBn2DYq.js";import"./time_text-DzXzA355.js";import"./async_iterable_resolver-C0jMMB28.js";import"./promise_builder-muywECiG.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-DAUZdEEL.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-DX0fkpcZ.js";import"./circular_progress_indicator-DX47TK7n.js";import"./promise_resolver-BmTReJnd.js";import"./data_table-DL8e7W09.js";import"./chevron_up-S1JPAfJ6.js";import"./espresso-8aIkcUgD.js";import"./x_icon-CE7rSdDc.js";import"./twitter_icon-BVgDx6-6.js";import"./vertical_scroll-C-wAnSnI.js";import"./contexts-C6uEoPSs.js";import"./main-BNbqWkWj.js";import"./esp_input-37JmXIiR.js";import"./text-E6OxC4ho.js";import"./fake_data-B1JX6qlj.js";const L0={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},t={args:{amount:"0"}},a={args:{amount:"12500000000000000000"}},o={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},c={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(e.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(e.done,new Error("Undelegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
