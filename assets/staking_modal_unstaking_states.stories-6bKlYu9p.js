import{b as r,a as t}from"./provide_async_states-BnQtYmvM.js";import{h as y}from"./array_buffer_hex-CckWFzk6.js";import"./blocks-BbFMk1LL.js";import{n as w}from"./nodes-DYObZsIN.js";import{$ as E,a0 as T,P as R,a as P,b as W,c as C}from"./staking_modal_validator_confirmed_content-ZRpf-6uY.js";import{f as D,I as A,F as f,a as _}from"./example_data-XLRlw1-j.js";import{D as h}from"./validator_confirmed_example-CEghi45J.js";/* empty css                      */import"./iframe-BksmdVSd.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BRYRNXMl.js";import"./loading_provider-BrHA6SrO.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BN9f4kvo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-B_XZVdVh.js";import"./en_US-Y4ZOVFV4-COG_MStM.js";import"./index-CWxRi01P.js";import"./index-t0v7j-Gk.js";import"./environment-bG8Ema17.js";import"./espresso-BunL4yAE.js";import"./explorer-BnNMpqMh.js";import"./byte_size_text-Q_L4p0C8.js";import"./number_formatters_provider-D57eZ9qo.js";import"./locale_provider-BoPyfNaQ.js";import"./wallet_address_text-CwerMuLc.js";import"./date_time_formatters_provider-CUEYb_H3.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-wJX1NRRA.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-6nX_iKNt.js";import"./money_text-CIrPK4v4.js";import"./money_text_full-Dw3sYrPH.js";import"./number_text-COoe7N9r.js";import"./relative_time_since_date_text-BWEO7OuA.js";import"./tagged_base64_text-DzdGugy0.js";import"./time_text-DRBXWMgt.js";import"./async_iterable_resolver-DWMWIT6I.js";import"./promise_builder-CIOxras_.js";import"./circular_progress_indicator-DhXdZUen.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-B9MDeITa.js";import"./data_table-66TiUVy6.js";import"./chevron_up-CItFZDEJ.js";import"./hot_shot_query_service_api_context-ZWJY4y2J.js";import"./height_and_address-CwegfP1y.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-MSRlTHSk.js";import"./x_icon-Ckd5lxDK.js";import"./twitter_icon-CJDnwTSA.js";import"./vertical_scroll-C1pvaFMK.js";import"./contexts-_WKW1N9g.js";import"./url-CHjl5yfO.js";import"./main-B2sehHM7.js";import"./esp_input-R_Z3W4w2.js";import"./text-DNUWeBow.js";import"./fake_data-BPwdx7Qb.js";const j0={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},e={args:{amount:"0"}},a={args:{amount:"12500000000000000000"}},o={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},c={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const q0=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Confirmation","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{c as Confirmation,i as InsufficientStake,e as None,a as Option25Percent,o as Option50Percent,n as Option75Percent,s as OptionAll,S as ReceiptRetrieved,l as SubmissionError,u as Submitted,p as Submitting,m as SufficientStake,d as Waiting,g as WaitingForReceipt,q0 as __namedExportsOrder,j0 as default};
