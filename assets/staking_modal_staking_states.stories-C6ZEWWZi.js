import{b as a,a as r}from"./provide_async_states-6UR2TAKW.js";import{h as N}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as _}from"./nodes-DdUtUYCE.js";import{_ as P,P as D,a as T,b as E,c as R}from"./delegation_ui-Ct2yNmLg.js";import{f as F,F as e,a as W,I as v}from"./example_data-B8YdGgx7.js";import{D as f}from"./validator_confirmed_example-DmrWaZ4f.js";import"./iframe-CVKXv-Cv.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DliWLU-N.js";import"./loading_provider-CoGm22bc.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-0Ply8rSW.js";import"./higher_order-CtQuyS7n.js";import"./en_US-Y4ZOVFV4-C2l3AAew.js";import"./index-XY6BT7cC.js";import"./index-Ct7XCo7m.js";import"./environment-BMs1Xr1l.js";import"./environment_banner-BTwEG4x-.js";import"./text-CEhLEmI-.js";import"./explorer-CznsQpCz.js";import"./wallet_address_text-B1r0M8X5.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-BcUdgJSW.js";import"./circular_progress_indicator-BAgd-pif.js";import"./error_display-27lTa3qm.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-CD2V0Avy.js";import"./data_table-CVBUwP1F.js";import"./chevron_up-DhBANYx5.js";import"./svg_icon_base-D4no40oI.js";import"./cappuccino_hot_shot_query_service_api_context-CfzkvR7p.js";import"./text-D268pW_K.js";import"./money_text-6R_jESug.js";import"./number_formatters_provider-BU8dGkN7.js";import"./locale_provider-Buk582ED.js";/* empty css               */import"./main-Brc7MvoS.js";import"./now_provider-CSo9VQ4G.js";import"./transactions_per_second_text-DecVenlm.js";import"./date_time_formatters_provider-63KZ-fVJ.js";import"./esp_input-l6Bn_nEl.js";import"./esp_symbol-xWEz_d9U.js";import"./byte_size_text-B0q3c5Ln.js";import"./date_time_text-9trY_1aa.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-BcW-MDwS.js";import"./number_text-BCP4vfA5.js";import"./relative_time_since_date_text-CrYDwsMg.js";import"./tagged_base64_text-DIda8KF0.js";import"./time_text-kYdcBXz2.js";import"./money_text_full-BDWCK0aZ.js";import"./container_loading-DQWNDgw9.js";import"./loading_shimmer-CkEANo8w.js";import"./skeleton_content-B49VI20d.js";import"./geo_json_view-COt47YpE.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-MwvhBjtB.js";import"./world_map_dots_full_resolution-CPK5oPZq.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-CoZE038R.js";import"./world_map_dots_population_resolver-CHivmc9p.js";import"./histogram_section_title-DMO1cb3y.js";import"./typography-_48nhcfr.js";import"./payments-Dj-AUR2h.js";import"./arrow_left-D_B-CSIj.js";import"./arrow_right-zL2Tu0aN.js";import"./check_circle_filled-C_5JJyvp.js";import"./twitter_icon-D1Djrwz9.js";import"./close-C5mwXViD.js";import"./copy-_svnnwkd.js";import"./medium_icon-DrGlLNX_.js";import"./espresso_logo-BfqW0ykW.js";import"./menu-KcvLyzeV.js";import"./search_glass-B33wI3nI.js";import"./x_icon-4Qwpl5ag.js";import"./pie_chart-BYnE1sLb.js";import"./web_socket_status-D__s18Wq.js";import"./web_socket_response_provider-HA3_WEcU.js";import"./cappuccino_node_validator_service_api_context-OgmWCIEr.js";import"./error_stream_consumer-BfN_AgUP.js";import"./espresso-D7hHCnFI.js";import"./inscription-lyh_GhK4.js";import"./fake_data-6Q6og7Gj.js";const Ta={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
