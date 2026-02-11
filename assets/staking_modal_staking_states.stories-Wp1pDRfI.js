import{b as a,a as r}from"./provide_async_states-Bx0PaOH5.js";import{h as N}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as _}from"./nodes-DdUtUYCE.js";import{_ as P,P as D,a as T,b as E,c as R}from"./delegation_ui-B9zpvtyz.js";import{f as F,F as e,a as W,I as v}from"./example_data-CQeqV3nc.js";import{D as f}from"./validator_confirmed_example-CCMeb296.js";import"./iframe-0IiCprxV.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CWMfMatq.js";import"./loading_provider-B_udk3Q6.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-BCuT5AAH.js";import"./higher_order-TwrjIOhv.js";import"./en_US-Y4ZOVFV4-BDXlh8nK.js";import"./index-BeNat70R.js";import"./index-B092DBvd.js";import"./environment-EX6vy_uU.js";import"./environment_banner-DHnOBuWr.js";import"./text-CEhLEmI-.js";import"./explorer-D9A4HyMM.js";import"./wallet_address_text-CeRFTlpQ.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-BKdD5lFK.js";import"./circular_progress_indicator-lZ8U_Suc.js";import"./error_display-D2y4QP84.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-DqJd0Yqp.js";import"./data_table-Cn2tzd49.js";import"./chevron_up-BbyjN7ne.js";import"./svg_icon_base-BV-tSSkW.js";import"./cappuccino_hot_shot_query_service_api_context-BCKWPwN-.js";import"./text-D6jqzqnJ.js";import"./money_text-yQTM9vKI.js";import"./number_formatters_provider-CCuGt-nv.js";import"./locale_provider-D_MD1PN6.js";/* empty css               */import"./main-DEKBM713.js";import"./now_provider-B36jZJBE.js";import"./transactions_per_second_text-BQuns2eR.js";import"./date_time_formatters_provider-CuU_yvyW.js";import"./esp_input-BP-sKEYv.js";import"./esp_symbol-CVNcS8a8.js";import"./byte_size_text-DaJ0oTyz.js";import"./date_time_text-DQ2jkkh7.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-DyI8PbRG.js";import"./number_text-Dnw2NraI.js";import"./relative_time_since_date_text-D_hoHfac.js";import"./tagged_base64_text-DdFDFtZy.js";import"./time_text-62tLItm8.js";import"./money_text_full-BrXBGe65.js";import"./geo_json_view-B43zMwTk.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-WQQsSwbK.js";import"./world_map_dots_full_resolution-Cz5qrInK.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-J3fvCPIu.js";import"./world_map_dots_population_resolver-CNNRHsVe.js";import"./histogram_section_title-C1_qvqSC.js";import"./skeleton_content-B8Z0lfuZ.js";import"./typography-BsoJcRxV.js";import"./payments-B_uaH_ss.js";import"./arrow_left-C6tSNhLJ.js";import"./arrow_right-D9W7tYEd.js";import"./check_circle_filled-CzKT_QrB.js";import"./twitter_icon-BpI8kRMD.js";import"./close-DObQ1mTo.js";import"./copy-CsUs9R1p.js";import"./medium_icon-CGVpsLkO.js";import"./espresso_logo-C19n0o0c.js";import"./menu-oS69zOHe.js";import"./search_glass-DclL9WJO.js";import"./x_icon-ba5jTYcy.js";import"./pie_chart-DxGIXx3H.js";import"./web_socket_status-ClpPTqIl.js";import"./web_socket_response_provider-Dv9lMHWG.js";import"./container_loading-D4bLGMRc.js";import"./loading_shimmer-B57HJmkZ.js";import"./cappuccino_node_validator_service_api_context-D2YfRvo9.js";import"./error_stream_consumer-lUGZDI5a.js";import"./espresso-BrWMfKnl.js";import"./inscription-lyh_GhK4.js";import"./fake_data-CazQ_hA2.js";const Ta={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const Ea=["None","AmountTooLow","InsufficientBalance","SufficientBalance","ApproveSubmitting","ApproveWaiting","ApproveSubmitted","ApproveWaitingForReceipt","ApproveReceiptRetrieved","ApproveSubmissionError","NoApprovalNeeded","DelegateSubmitting","DelegateWaiting","DelegateSubmitted","DelegateWaitingForReceipt","DelegateReceiptRetrieved","DelegateSubmissionError"];export{o as AmountTooLow,d as ApproveReceiptRetrieved,l as ApproveSubmissionError,c as ApproveSubmitted,i as ApproveSubmitting,p as ApproveWaiting,m as ApproveWaitingForReceipt,h as DelegateReceiptRetrieved,y as DelegateSubmissionError,A as DelegateSubmitted,g as DelegateSubmitting,S as DelegateWaiting,w as DelegateWaitingForReceipt,n as InsufficientBalance,u as NoApprovalNeeded,t as None,s as SufficientBalance,Ea as __namedExportsOrder,Ta as default};
