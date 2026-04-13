import{b as r,a as t}from"./provide_async_states-YzODn9jr.js";import{h as y}from"./array_buffer_hex-Bcc-7BbE.js";import"./blocks-36ZEPcvJ.js";import{n as w}from"./nodes-BsbvMhdT.js";import{$ as E,a0 as T,P as R,a as P,b as W,c as C}from"./staking_modal_validator_confirmed_content-stpqgLFV.js";import{f as D,I as A,F as f,a as _}from"./example_data-BJNFkt08.js";import{D as h}from"./validator_confirmed_example-DTgOyMmV.js";/* empty css                      */import"./iframe-Da-pRdj_.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DT5b-p5f.js";import"./loading_provider-CkZUfCHZ.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BY4LX4kJ.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-BliYGj6D.js";import"./en_US-Y4ZOVFV4-Cdb36BN4.js";import"./index-Csied5Tc.js";import"./index-CVsL8RUv.js";import"./environment-sX5KAMBM.js";import"./espresso-CjxsHeGk.js";import"./explorer-Bo9hx4zB.js";import"./byte_size_text-DzPI3Ku4.js";import"./number_formatters_provider-DIxko5iX.js";import"./locale_provider-Bv2GXKLp.js";import"./wallet_address_text-BXyJ1CeJ.js";import"./date_time_formatters_provider-Bq_dXrCb.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-B8ynrPRp.js";import"./full_hex_text-DhrOCfLO.js";import"./hex_text-b6On9MuH.js";import"./money_text-DVODtpBJ.js";import"./money_text_full-BBNORgie.js";import"./number_text-By_u4Wjn.js";import"./relative_time_since_date_text-dTJLjam_.js";import"./tagged_base64_text-B_jFbqJ5.js";import"./time_text-BfBn8ExL.js";import"./async_iterable_resolver-inPpVq-S.js";import"./promise_builder-DfN8Z1g7.js";import"./circular_progress_indicator-CmgbbPhU.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-BUp_5laA.js";import"./data_table-DNqZAqdt.js";import"./chevron_up-CA2lC1se.js";import"./hot_shot_query_service_api_context-DIU1mLot.js";import"./height_and_address-BwQvAxZt.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-3kO0efKM.js";import"./not_found_error-BdUVpmTw.js";import"./validator-BgZRo16z.js";import"./stake_table-Bbtpv34V.js";import"./stake_table_field-CIreD0Dp.js";import"./espresso-C6NGAUAg.js";import"./x_icon-DUOKCEyJ.js";import"./twitter_icon-DJH4hGMI.js";import"./vertical_scroll-NWp1kiUw.js";import"./contexts-Btckv8Vs.js";import"./url-CHjl5yfO.js";import"./main-C2WnSB89.js";import"./esp_input-B9KEi9oa.js";import"./esp_symbol-DTcCTVVh.js";import"./text-CFxWUlLd.js";import"./fake_data-CFHYjho9.js";const q0={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},e={args:{amount:"0"}},a={args:{amount:"12500000000000000000"}},o={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},c={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const z0=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Confirmation","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{c as Confirmation,i as InsufficientStake,e as None,a as Option25Percent,o as Option50Percent,n as Option75Percent,s as OptionAll,S as ReceiptRetrieved,l as SubmissionError,u as Submitted,p as Submitting,m as SufficientStake,d as Waiting,g as WaitingForReceipt,z0 as __namedExportsOrder,q0 as default};
