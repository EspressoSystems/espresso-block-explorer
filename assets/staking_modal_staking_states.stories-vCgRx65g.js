import{b as a,a as r}from"./provide_async_states-dcTrIMdG.js";import{h as N}from"./array_buffer-D3ACJkCk.js";import"./blocks-DxW4BCgY.js";import{n as _}from"./nodes-DkqQpvmH.js";import{_ as P,P as D,a as T,b as E,c as R}from"./delegation_ui-CfxYh7ap.js";import{f as F,F as e,a as W,I as v}from"./example_data-DCgHtT6g.js";import{D as f}from"./validator_confirmed_example-CDLNVeMN.js";import"./iframe-BisBQj4b.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DSZ9Vv_3.js";import"./loading_provider-BcyIpYE9.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./base64-GdO7PHhr.js";import"./functional-6Z2QHHX7.js";import"./monetary_value-BgU0H56Y.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-ZlJISydJ.js";import"./espresso_logo_and_title-DV9TXyiy.js";import"./higher_order-B_D7TFYJ.js";import"./en_US-Y4ZOVFV4-DmuOaRdp.js";import"./index-CqTTn5wO.js";import"./index-C-IjjtMy.js";import"./environment-C6uG8jmF.js";import"./espresso-6VGd3nI1.js";import"./explorer-DI76IWem.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-B2X7Qyn3.js";import"./url-dt6vXsS3.js";import"./wallet_address-DHR3FL3i.js";import"./async_iterable_resolver-CgeqSzQh.js";import"./circular_progress_indicator-BaG-OJ7g.js";import"./error_display-D-shLdDH.js";import"./fetch_error-Cj-x_lfT.js";import"./height_and_address-CYA_N0t6.js";import"./not_found_error-C4PEbicn.js";import"./validator-CdkOZxMl.js";import"./promise_resolver-D-e2p1re.js";import"./data_table-fwnGyCF7.js";import"./chevron_up-CC90xocc.js";import"./svg_icon_base-eIEhIJU_.js";import"./cappuccino_hot_shot_query_service_api_context-iVJ8Zytx.js";import"./text-rTMRkqgC.js";import"./money_text-CSyR9ORC.js";import"./number_formatters_provider-BbUevisL.js";import"./locale_provider-Cy9Qu1vd.js";/* empty css               */import"./transactions_per_second_text-CPHc-mtj.js";import"./date_time_formatters_provider-T4Gwii8n.js";import"./number_text-DzPmU_Wm.js";import"./now_provider-BADpF5pN.js";import"./main-D6tno2lh.js";import"./byte_size_text-D02xq_qj.js";import"./date_time_text-CWBRTMWe.js";import"./full_hex_text-d5cXjKw4.js";import"./hex_text-ioJdFCKB.js";import"./relative_time_since_date_text-BcKaKuH7.js";import"./tagged_base64_text-BsrZb43h.js";import"./time_text-CQFUX5ML.js";import"./close-C0WDzdSx.js";import"./esp_input-CSQjYbyR.js";import"./esp_symbol-BvOCauEG.js";import"./geo_json_view-C5V7Ov6Z.js";import"./constants-GWeUaa9_.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-DNtU-5aH.js";import"./world_map_dots_full_resolution-BXT8ZV1d.js";import"./world_map_grid-DyzLSGRe.js";import"./svg_tool_tip-mC0zgJg0.js";import"./world_map_dots_population_resolver-CkCknTT6.js";import"./histogram_section_title-BKLusPf4.js";import"./skeleton_content-BxEnkJYy.js";import"./typography-CoQDMpTx.js";import"./payments-D96Plld2.js";import"./arrow_left-D3Ewxax9.js";import"./arrow_right-rF8xD9hf.js";import"./check_circle_filled-DGfSNt1o.js";import"./twitter_icon-SEdV2p1P.js";import"./copy-B0isQiaQ.js";import"./medium_icon-BIaSRBKm.js";import"./espresso_logo-CqrIXm6U.js";import"./menu-D13axA7r.js";import"./search_glass-mM_LzLS4.js";import"./x_icon-C9aqYTeQ.js";import"./pie_chart-Cdkbpoel.js";import"./web_socket_status-D4D3gzFJ.js";import"./web_socket_response_provider-BXcCLmb7.js";import"./fake_data-Bj6lsFTF.js";const Aa={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const wa=["None","AmountTooLow","InsufficientBalance","SufficientBalance","ApproveSubmitting","ApproveWaiting","ApproveSubmitted","ApproveWaitingForReceipt","ApproveReceiptRetrieved","ApproveSubmissionError","NoApprovalNeeded","DelegateSubmitting","DelegateWaiting","DelegateSubmitted","DelegateWaitingForReceipt","DelegateReceiptRetrieved","DelegateSubmissionError"];export{o as AmountTooLow,d as ApproveReceiptRetrieved,l as ApproveSubmissionError,c as ApproveSubmitted,i as ApproveSubmitting,p as ApproveWaiting,m as ApproveWaitingForReceipt,h as DelegateReceiptRetrieved,y as DelegateSubmissionError,A as DelegateSubmitted,g as DelegateSubmitting,S as DelegateWaiting,w as DelegateWaitingForReceipt,n as InsufficientBalance,u as NoApprovalNeeded,t as None,s as SufficientBalance,wa as __namedExportsOrder,Aa as default};
