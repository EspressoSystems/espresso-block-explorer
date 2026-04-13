import{b as r,a as t}from"./provide_async_states-BLc5bTZ0.js";import{h as y}from"./array_buffer_hex-CckWFzk6.js";import"./blocks-BbFMk1LL.js";import{n as w}from"./nodes-DYObZsIN.js";import{$ as E,a0 as T,P as R,a as P,b as W,c as C}from"./staking_modal_validator_confirmed_content-t87xtcK9.js";import{f as D,I as A,F as f,a as _}from"./example_data-D1WAeZXq.js";import{D as h}from"./validator_confirmed_example-_KTZxM2F.js";/* empty css                      */import"./iframe-hlwV_SLU.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BSV0zpAE.js";import"./loading_provider-CI0TwLTi.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BN9f4kvo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-Bp4R-A8k.js";import"./en_US-Y4ZOVFV4-C-OvKtvK.js";import"./index-CGMwTfK0.js";import"./index-CYUkv1Xd.js";import"./environment-Cv4naIGX.js";import"./espresso-DImMLWf1.js";import"./explorer-D38tx1PK.js";import"./byte_size_text-BgslcI2e.js";import"./number_formatters_provider-CEQBq_Hk.js";import"./locale_provider-CqJhpaHu.js";import"./wallet_address_text-BqWLkzAy.js";import"./date_time_formatters_provider-BxM1oZxM.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-BhhckyY6.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-BSzh9nv8.js";import"./money_text-D0p8Y8LA.js";import"./money_text_full-mZgISvxt.js";import"./number_text-yX4kUbct.js";import"./relative_time_since_date_text-DQ4LaVpf.js";import"./tagged_base64_text-ClsJrra7.js";import"./time_text-CBcl6HLm.js";import"./async_iterable_resolver-C37PYTRa.js";import"./promise_builder-BbSOfBLU.js";import"./circular_progress_indicator-BYNpNd3l.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-Bp93tTVp.js";import"./data_table-CicpzNPW.js";import"./chevron_up-dgUFrBAe.js";import"./hot_shot_query_service_api_context-DajRkavg.js";import"./height_and_address-CapDqxpf.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-BZJBsDaB.js";import"./x_icon-CJRFBdJv.js";import"./twitter_icon-oVpBjcyD.js";import"./vertical_scroll-FnAk83CC.js";import"./contexts-ybm56a8S.js";import"./url-CHjl5yfO.js";import"./main-WDcO2_Ep.js";import"./esp_input-Cuc0mbnl.js";import"./text-xcqior87.js";import"./fake_data-BHSHvHhw.js";const j0={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},e={args:{amount:"0"}},a={args:{amount:"12500000000000000000"}},o={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},c={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
