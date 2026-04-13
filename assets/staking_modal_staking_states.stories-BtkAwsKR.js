import{b as a,a as e}from"./provide_async_states-BKkQM2nw.js";import{h as N}from"./array_buffer_hex-CckWFzk6.js";import"./blocks-BbFMk1LL.js";import{n as _}from"./nodes-DYObZsIN.js";import{_ as P,P as D,a as T,b as E,c as R}from"./staking_modal_validator_confirmed_content-D-JO9s8c.js";import{f as F,F as r,a as W,I as v}from"./example_data-C_epSqWj.js";import{D as f}from"./validator_confirmed_example-C14lAV_x.js";/* empty css                      */import"./iframe-CRN6ir_k.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BRUBq0Ii.js";import"./loading_provider-bJjs6rdx.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BN9f4kvo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-BJoFsnsT.js";import"./en_US-Y4ZOVFV4-DcSbJ6-b.js";import"./index-D_J2JNbG.js";import"./index-DmZRm6GY.js";import"./environment-DnFZRPyA.js";import"./espresso-C-0bNmHL.js";import"./explorer-BGP7plBm.js";import"./byte_size_text-Ch1N4NZS.js";import"./number_formatters_provider-CV2JCVAy.js";import"./locale_provider-DitRBxok.js";import"./wallet_address_text-iOdgpcaz.js";import"./date_time_formatters_provider-CO-VImxK.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CO7oiG9G.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-Dmo4jBH1.js";import"./money_text-Mf2-fP6d.js";import"./money_text_full-CyFzKqQ4.js";import"./number_text-i0V-NKlU.js";import"./relative_time_since_date_text-BvB0wkUr.js";import"./tagged_base64_text-C5VDRjcO.js";import"./time_text-CSZWe2p1.js";import"./async_iterable_resolver-Cdg3RPf4.js";import"./promise_builder-DOu61EMF.js";import"./circular_progress_indicator-D_atp0op.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-CYiSp4i2.js";import"./data_table-Ckzo1iyL.js";import"./chevron_up-BIFMo3iJ.js";import"./hot_shot_query_service_api_context-DSWf7DF2.js";import"./height_and_address-DJ80vskF.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-B4ZxD2K0.js";import"./x_icon-CeOMdX2y.js";import"./twitter_icon-BMz0LQWW.js";import"./vertical_scroll-BFk-ygDy.js";import"./contexts-Dke4p018.js";import"./url-CHjl5yfO.js";import"./main-BH-2Fizx.js";import"./esp_input-6l1oEn3_.js";import"./text-D0Ym5v7i.js";import"./fake_data-DZJrOEiR.js";const G0={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(e.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(e.active,new T(r))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(e.active,new R(r))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(e.done,new D(r,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(e.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(e.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(e.active,new T(r))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(e.active,new R(r))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(e.done,new D(r,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(e.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    amount: ''
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '500000000000000000'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '500000000000000000000000000'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowance: '1250000000000000000',
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Approval failed'))
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowance: '1250000000000000000',
    amount: '1250000000000000000'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Delegation failed'))
  }
}`,...y.parameters?.docs?.source}}};const J0=["None","AmountTooLow","InsufficientBalance","SufficientBalance","ApproveSubmitting","ApproveWaiting","ApproveSubmitted","ApproveWaitingForReceipt","ApproveReceiptRetrieved","ApproveSubmissionError","NoApprovalNeeded","DelegateSubmitting","DelegateWaiting","DelegateSubmitted","DelegateWaitingForReceipt","DelegateReceiptRetrieved","DelegateSubmissionError"];export{o as AmountTooLow,d as ApproveReceiptRetrieved,l as ApproveSubmissionError,c as ApproveSubmitted,i as ApproveSubmitting,p as ApproveWaiting,m as ApproveWaitingForReceipt,h as DelegateReceiptRetrieved,y as DelegateSubmissionError,A as DelegateSubmitted,g as DelegateSubmitting,S as DelegateWaiting,w as DelegateWaitingForReceipt,n as InsufficientBalance,u as NoApprovalNeeded,t as None,s as SufficientBalance,J0 as __namedExportsOrder,G0 as default};
