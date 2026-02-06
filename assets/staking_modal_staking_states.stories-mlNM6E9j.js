import{b as a,a as r}from"./provide_async_states-Bwfh_5FH.js";import{h as N}from"./array_buffer-D3ACJkCk.js";import"./blocks-DxW4BCgY.js";import{n as _}from"./nodes-DkqQpvmH.js";import{_ as P,P as D,a as T,b as E,c as R}from"./delegation_ui-BZFDVRl9.js";import{f as F,F as e,a as W,I as v}from"./example_data-KDx_k7hE.js";import{D as f}from"./validator_confirmed_example-BNbYMqKe.js";import"./iframe-B98JvFlS.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-3-u40w_S.js";import"./loading_provider-zBTOXaQp.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./base64-GdO7PHhr.js";import"./functional-6Z2QHHX7.js";import"./monetary_value-BgU0H56Y.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-ZlJISydJ.js";import"./espresso_logo_and_title-DWB5a08h.js";import"./higher_order-DFW_Utmg.js";import"./en_US-Y4ZOVFV4-CaPK3XE7.js";import"./index-DzVgPpp9.js";import"./index-Def8Sx_B.js";import"./environment-BmQHJLaX.js";import"./espresso-CRFU_KeG.js";import"./explorer-jKBlYs3R.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-DSCTksPY.js";import"./url-dt6vXsS3.js";import"./wallet_address-DHR3FL3i.js";import"./async_iterable_resolver-D0ndxVJQ.js";import"./circular_progress_indicator-DkHLo9ev.js";import"./error_display-Dd7WERhr.js";import"./fetch_error-Cj-x_lfT.js";import"./height_and_address-CYA_N0t6.js";import"./not_found_error-C4PEbicn.js";import"./validator-CdkOZxMl.js";import"./promise_resolver-CzWEUcH3.js";import"./data_table-BX5e_VEt.js";import"./chevron_up-DqwUH8EF.js";import"./svg_icon_base-CJ0J5j9p.js";import"./cappuccino_hot_shot_query_service_api_context-B6BfZ2A2.js";import"./text-1P0g7b-n.js";import"./money_text-lwZ5zskg.js";import"./number_formatters_provider-eJntoBts.js";import"./locale_provider-YmKQyVQa.js";/* empty css               */import"./main-BNnN_R2b.js";import"./now_provider-BOX7yRpC.js";import"./close-BwZZv5DH.js";import"./esp_input-CJO8TKM6.js";import"./esp_symbol-BqZ9VZ9S.js";import"./transactions_per_second_text-DPJ1W9nL.js";import"./date_time_formatters_provider-L5X9Fiw0.js";import"./byte_size_text-DtgDpAum.js";import"./date_time_text-DxklR_a2.js";import"./full_hex_text-d5cXjKw4.js";import"./hex_text-D4MsPMwE.js";import"./number_text-DXEYwiPL.js";import"./relative_time_since_date_text-C2BerGEa.js";import"./tagged_base64_text-uunfgkXS.js";import"./time_text-CSpxpyZm.js";import"./geo_json_view-CidIaaJP.js";import"./constants-GWeUaa9_.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-Bsqw5YZ8.js";import"./world_map_dots_full_resolution-ClgEAftr.js";import"./world_map_grid-DyzLSGRe.js";import"./svg_tool_tip-BRsee-7R.js";import"./world_map_dots_population_resolver-z81ZFvoy.js";import"./histogram_section_title-B2g2X65W.js";import"./skeleton_content-CeIngfNJ.js";import"./typography-CVl34GaZ.js";import"./payments-CDCk3bBJ.js";import"./arrow_left-C25grNHQ.js";import"./arrow_right-4CUOCuJz.js";import"./check_circle_filled-BGn-E9bU.js";import"./twitter_icon-ft2EkMs4.js";import"./copy-Chp_emH-.js";import"./medium_icon-BGBnhlgU.js";import"./espresso_logo-BuA0cE0P.js";import"./menu-CgpoP38u.js";import"./search_glass-6wi7vqfE.js";import"./x_icon-DMeyGF9J.js";import"./pie_chart-DBFqKsgU.js";import"./web_socket_status-j0c2yG9U.js";import"./web_socket_response_provider-B5xV1Cma.js";import"./fake_data-D_5phEpV.js";const Aa={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
