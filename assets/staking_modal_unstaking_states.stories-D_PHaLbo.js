import{b as r,a as t}from"./provide_async_states-Bx0PaOH5.js";import{h}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as y}from"./nodes-DdUtUYCE.js";import{$ as w,P as E,a as T,b as R,c as P}from"./delegation_ui-B9zpvtyz.js";import{f as W,F as A,a as D,I as l}from"./example_data-CQeqV3nc.js";import{D as f}from"./validator_confirmed_example-CCMeb296.js";import"./iframe-0IiCprxV.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CWMfMatq.js";import"./loading_provider-B_udk3Q6.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-BCuT5AAH.js";import"./higher_order-TwrjIOhv.js";import"./en_US-Y4ZOVFV4-BDXlh8nK.js";import"./index-BeNat70R.js";import"./index-B092DBvd.js";import"./environment-EX6vy_uU.js";import"./environment_banner-DHnOBuWr.js";import"./text-CEhLEmI-.js";import"./explorer-D9A4HyMM.js";import"./wallet_address_text-CeRFTlpQ.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-BKdD5lFK.js";import"./circular_progress_indicator-lZ8U_Suc.js";import"./error_display-D2y4QP84.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-DqJd0Yqp.js";import"./data_table-Cn2tzd49.js";import"./chevron_up-BbyjN7ne.js";import"./svg_icon_base-BV-tSSkW.js";import"./cappuccino_hot_shot_query_service_api_context-BCKWPwN-.js";import"./text-D6jqzqnJ.js";import"./money_text-yQTM9vKI.js";import"./number_formatters_provider-CCuGt-nv.js";import"./locale_provider-D_MD1PN6.js";/* empty css               */import"./main-DEKBM713.js";import"./now_provider-B36jZJBE.js";import"./transactions_per_second_text-BQuns2eR.js";import"./date_time_formatters_provider-CuU_yvyW.js";import"./esp_input-BP-sKEYv.js";import"./esp_symbol-CVNcS8a8.js";import"./byte_size_text-DaJ0oTyz.js";import"./date_time_text-DQ2jkkh7.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-DyI8PbRG.js";import"./number_text-Dnw2NraI.js";import"./relative_time_since_date_text-D_hoHfac.js";import"./tagged_base64_text-DdFDFtZy.js";import"./time_text-62tLItm8.js";import"./money_text_full-BrXBGe65.js";import"./geo_json_view-B43zMwTk.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-WQQsSwbK.js";import"./world_map_dots_full_resolution-Cz5qrInK.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-J3fvCPIu.js";import"./world_map_dots_population_resolver-CNNRHsVe.js";import"./histogram_section_title-C1_qvqSC.js";import"./skeleton_content-B8Z0lfuZ.js";import"./typography-BsoJcRxV.js";import"./payments-B_uaH_ss.js";import"./arrow_left-C6tSNhLJ.js";import"./arrow_right-D9W7tYEd.js";import"./check_circle_filled-CzKT_QrB.js";import"./twitter_icon-BpI8kRMD.js";import"./close-DObQ1mTo.js";import"./copy-CsUs9R1p.js";import"./medium_icon-CGVpsLkO.js";import"./espresso_logo-C19n0o0c.js";import"./menu-oS69zOHe.js";import"./search_glass-DclL9WJO.js";import"./x_icon-ba5jTYcy.js";import"./pie_chart-DxGIXx3H.js";import"./web_socket_status-ClpPTqIl.js";import"./web_socket_response_provider-Dv9lMHWG.js";import"./container_loading-D4bLGMRc.js";import"./loading_shimmer-B57HJmkZ.js";import"./cappuccino_node_validator_service_api_context-D2YfRvo9.js";import"./error_stream_consumer-lUGZDI5a.js";import"./espresso-BrWMfKnl.js";import"./inscription-lyh_GhK4.js";import"./fake_data-CazQ_hA2.js";const yr={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},o={args:{amount:"0"}},a={args:{amount:"1250000000000000000000"}},e={args:{amount:"2500000000000000000000"}},n={args:{amount:"3750000000000000000000"}},i={args:{amount:"5000000000000000000000"}},s={args:{amount:"50000000000000000000000"}},m={args:{amount:"0"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new E(A,D))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000000'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '2500000000000000000000'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '3750000000000000000000'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '5000000000000000000000'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '50000000000000000000000'
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Undelegation failed'))
  }
}`,...S.parameters?.docs?.source}}};const wr=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{s as InsufficientStake,o as None,a as Option25Percent,e as Option50Percent,n as Option75Percent,i as OptionAll,g as ReceiptRetrieved,S as SubmissionError,u as Submitted,p as Submitting,m as SufficientStake,c as Waiting,d as WaitingForReceipt,wr as __namedExportsOrder,yr as default};
