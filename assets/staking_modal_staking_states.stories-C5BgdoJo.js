import{b as a,a as e}from"./provide_async_states-BSHtUug_.js";import{h as N}from"./array_buffer-OWUzmdpG.js";import"./blocks-Dw_RhIDq.js";import{n as _}from"./nodes-BcMKYiFz.js";import{X as P,P as D,a as T,b as E,c as R}from"./staking_modal_validator_confirmed_content-D79bFd0O.js";import{f as F,I as v,F as r,a as W}from"./example_data-C6vgden4.js";import{D as f}from"./validator_confirmed_example-CLQhdSJ0.js";import"./staking_modal-Cd3E481C.js";import"./iframe-CCLKIoat.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BF5QLA6e.js";import"./loading_provider-DvG6A7dg.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./base64-C9eISNYa.js";import"./functional-DsFqNm-o.js";import"./monetary_value-B8_AgdSi.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./promise_resolver-DyTN7TrH.js";import"./en_US-KAK2ZBDO-C3-R_GrD.js";import"./index-D298oDv-.js";import"./index-BBD36RIg.js";import"./environment-C-jnjOAT.js";import"./espresso-BuY6XBXW.js";import"./explorer-XOHjuOmK.js";import"./text-CEhLEmI-.js";import"./async_iterable_resolver-cA1Jejru.js";import"./data_table-UR9ORkGf.js";import"./chevron_up-DUXgi73a.js";import"./svg_icon_base-BQe2kabo.js";import"./higher_order-DyFKxQfc.js";import"./height_and_address-BuKJdZLP.js";import"./url-D1AcOu20.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./cappuccino_hot_shot_query_service_api_context-Ccdk_dQ4.js";import"./money_text-BrKfhtWB.js";import"./number_formatters_provider-3ltM0G6e.js";import"./locale_provider-K_0BCaCZ.js";/* empty css               */import"./circular_progress_indicator-ChMMES4T.js";import"./error_display-B9hSkFhe.js";import"./close-534KE3UE.js";import"./wallet_address_text-B_Akpkqr.js";import"./main-mZJ0dpmR.js";import"./now_provider-B5osc7Mq.js";import"./esp_input-BIzZqTHb.js";import"./text-DvqP5Jiw.js";import"./transactions_per_second_text-DXQhBLh9.js";import"./date_time_formatters_provider-D0J5X-TW.js";import"./byte_size_text-We-dR8lu.js";import"./date_time_text-BkX9HxlE.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-CJmdEYz5.js";import"./number_text-BXbb_2Rl.js";import"./relative_time_since_date_text-B_x23ieN.js";import"./tagged_base64_text-CFQdB-Dk.js";import"./time_text-DOkBsfkL.js";import"./fake_data-BUTPv3x_.js";const X0={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(e.active,new D)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(e.active,new T(r))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(e.active,new E(r))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(e.done,new R(r,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(e.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(e.active,new D)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(e.active,new T(r))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(e.active,new E(r))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(e.done,new R(r,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(e.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const U0=["None","AmountTooLow","InsufficientBalance","SufficientBalance","ApproveSubmitting","ApproveWaiting","ApproveSubmitted","ApproveWaitingForReceipt","ApproveReceiptRetrieved","ApproveSubmissionError","NoApprovalNeeded","DelegateSubmitting","DelegateWaiting","DelegateSubmitted","DelegateWaitingForReceipt","DelegateReceiptRetrieved","DelegateSubmissionError"];export{o as AmountTooLow,d as ApproveReceiptRetrieved,l as ApproveSubmissionError,c as ApproveSubmitted,i as ApproveSubmitting,p as ApproveWaiting,m as ApproveWaitingForReceipt,h as DelegateReceiptRetrieved,y as DelegateSubmissionError,A as DelegateSubmitted,g as DelegateSubmitting,S as DelegateWaiting,w as DelegateWaitingForReceipt,n as InsufficientBalance,u as NoApprovalNeeded,t as None,s as SufficientBalance,U0 as __namedExportsOrder,X0 as default};
