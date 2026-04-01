import{b as a,a as r}from"./provide_async_states-CmGmaDU8.js";import{h as N}from"./array_buffer_hex-2CxW6xhL.js";import"./blocks-BO0jjecB.js";import{n as _}from"./nodes-DZ7P8xPE.js";import{a0 as P,P as D,a as T,b as E,c as R}from"./delegation_ui-C17C77W_.js";import{f as F,F as e,a as W,I as v}from"./example_data-k8qOs9lj.js";import{D as f}from"./validator_confirmed_example-Qs94od5q.js";import"./iframe-ChCxfwos.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DFHjvLMD.js";import"./loading_provider-h8XLvBq1.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./base64-D2HwddJb.js";import"./functional-CHI4evRY.js";import"./monetary_value-BBaBP7s4.js";import"./data-D5p7UK42.js";import"./tagged_base64-C1c0MovD.js";import"./espresso_logo_and_title-Dd8xoczL.js";import"./higher_order-d4YXWLIv.js";import"./en_US-Y4ZOVFV4-DziQNnSL.js";import"./index-BgdMPv3v.js";import"./index-BfisTMic.js";import"./environment-CElIjh1w.js";import"./environment_banner-gJ_RDiYW.js";import"./text-CEhLEmI-.js";import"./explorer-m3f3WXcl.js";import"./wallet_address_text-oi7SJ8-7.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_base64-Df7I341a.js";import"./validator-CeWWAq22.js";import"./cappuccino_node_validator_service_api_context-D8HG5yxs.js";import"./height_and_address-CvkBIbKM.js";import"./fetch_error-CpkjK4oN.js";import"./not_found_error-Dccy2lFm.js";import"./constants-DK5GyL68.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-CdgBLZUc.js";import"./web_socket_response_provider-DtqBJ4lf.js";import"./async_iterable_resolver-DDv_ZBqF.js";import"./view_change_evidence_v1-BuDUUdOa.js";import"./error_display-Dc_EAcs9.js";import"./circular_progress_indicator-CMxZi97L.js";import"./promise_resolver-C0M6nZaG.js";import"./data_table-XgBx71M4.js";import"./chevron_up-BXN0Q57t.js";import"./svg_icon_base-BBi7gb5S.js";import"./cappuccino_hot_shot_query_service_api_context-V_jTY68u.js";import"./text-DPq9EfMX.js";import"./money_text-D44BgQF5.js";import"./number_formatters_provider-CYynOyj2.js";import"./locale_provider-5mesaRdn.js";/* empty css               */import"./main-DaHjELcp.js";import"./now_provider-BLPyobGt.js";import"./transactions_per_second_text-DBBnhoCB.js";import"./date_time_formatters_provider-BNFT2aGM.js";import"./esp_input-DTLNHIyo.js";import"./esp_symbol-BoZ5ZIIl.js";import"./byte_size_text-Cel5U2Hm.js";import"./date_time_text-FQcsgJ1N.js";import"./full_hex_text-CpvnF-0m.js";import"./hex_text-5HGnju8t.js";import"./number_text-VJGMQbGs.js";import"./relative_time_since_date_text-D5mbT1sB.js";import"./tagged_base64_text-CYORB88f.js";import"./time_text-CqRiY5Nf.js";import"./money_text_full-CpkHmeoO.js";import"./container_loading-O6HPY0Oy.js";import"./loading_shimmer-BZRl8PZE.js";import"./skeleton_content-BRFTzvsa.js";import"./geo_json_view-CdGDVxoN.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-DMmdFvRe.js";import"./world_map_dots_full_resolution-Dhb0hmqw.js";import"./svg_tool_tip-DRH8c1-0.js";import"./world_map_dots_population_resolver-P9dNxyQE.js";import"./histogram_section_title-BkUcmFjf.js";import"./typography-DVygnctX.js";import"./payments-ByJeTc1B.js";import"./arrow_left-C72XdTry.js";import"./arrow_right-CG_uexFb.js";import"./check_circle_filled-_3c2nQY8.js";import"./twitter_icon-CnPOYuum.js";import"./close-Dnxaj6Mz.js";import"./copy-CKsgcC37.js";import"./medium_icon-DNXQ1cIj.js";import"./espresso_logo-CW0FvKcw.js";import"./menu-ntSiNpxO.js";import"./search_glass-D9KC_J7l.js";import"./x_icon-BT8_cINb.js";import"./pie_chart-uPhNpL5D.js";import"./web_socket_status-XXGUvqJi.js";import"./error_stream_consumer-Do1jRVkO.js";import"./espresso-DlIYWwH8.js";import"./inscription-B9_WdN9M.js";import"./fake_data-CE1wUB6z.js";const Ta={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
