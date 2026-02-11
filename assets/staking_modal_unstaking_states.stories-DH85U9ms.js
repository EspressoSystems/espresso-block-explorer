import{b as r,a as t}from"./provide_async_states-D_2Jsqop.js";import{h}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as y}from"./nodes-DdUtUYCE.js";import{$ as w,P as E,a as T,b as R,c as P}from"./delegation_ui-DvN4XWGD.js";import{f as W,F as A,a as D,I as l}from"./example_data-CkK9xb1g.js";import{D as f}from"./validator_confirmed_example-AP7b7RAk.js";import"./iframe-B298lYzW.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-vKdZeY0D.js";import"./loading_provider-DErAdSbQ.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-BDqVxa1w.js";import"./higher_order-B_g3tT7H.js";import"./en_US-Y4ZOVFV4-C4jbCx7M.js";import"./index-CiS3ONPk.js";import"./index-S2HY-myl.js";import"./environment-8t9hd-gw.js";import"./environment_banner-Cz7mQuBO.js";import"./text-CEhLEmI-.js";import"./explorer-CB357lew.js";import"./wallet_address_text-CDMWFwda.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-1zEHABRM.js";import"./circular_progress_indicator-BcegOZb5.js";import"./error_display-QxWJF-2l.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-Dz8_NSzi.js";import"./data_table-BIdABvSr.js";import"./chevron_up-D6rlm-BP.js";import"./svg_icon_base-CuicflMO.js";import"./cappuccino_hot_shot_query_service_api_context-BO9nUHza.js";import"./text-npDxYPpO.js";import"./money_text-Bl6sGowM.js";import"./number_formatters_provider-CrNZeYmu.js";import"./locale_provider-COLCQzYC.js";/* empty css               */import"./main-DyuhkWMR.js";import"./now_provider-Bs88lXDN.js";import"./transactions_per_second_text-pCJ46vb8.js";import"./date_time_formatters_provider-4ga6Ydx1.js";import"./esp_input-DkRDdHUV.js";import"./esp_symbol-BarceQDM.js";import"./byte_size_text-De1A7VYh.js";import"./date_time_text-DosEKnJD.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-DRNv1pbD.js";import"./number_text-PJZIjD72.js";import"./relative_time_since_date_text-CHPupwUX.js";import"./tagged_base64_text-1th--7UD.js";import"./time_text-Dt_Gxp3D.js";import"./money_text_full-Cj-5DPT4.js";import"./geo_json_view-DEwT0vME.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-CWWVpZkU.js";import"./world_map_dots_full_resolution-D4l6Dmcp.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-DBt-FAXC.js";import"./world_map_dots_population_resolver-CpZUGpfQ.js";import"./histogram_section_title-D8AvHxbb.js";import"./skeleton_content-CnaMDnBS.js";import"./typography-DTOV1Dte.js";import"./payments-DUgA47In.js";import"./arrow_left-Ce44oSAj.js";import"./arrow_right-CfKtYYj-.js";import"./check_circle_filled-tuFE-8sK.js";import"./twitter_icon-C6NyDBUY.js";import"./close-76N1_308.js";import"./copy-QJqx3jJn.js";import"./medium_icon-CY2E49m9.js";import"./espresso_logo-C_pxVIEe.js";import"./menu-BroqKDSa.js";import"./search_glass-D3cVJw0i.js";import"./x_icon-DVr_VWAY.js";import"./pie_chart-B84s2YD7.js";import"./web_socket_status-CG8KRXmi.js";import"./web_socket_response_provider-D4My3i-l.js";import"./container_loading-B2VySsrv.js";import"./loading_shimmer-Bz4ZNFej.js";import"./cappuccino_node_validator_service_api_context-Cdtbx7ID.js";import"./error_stream_consumer-CqrAeNq4.js";import"./espresso-zEcLPcjJ.js";import"./inscription-lyh_GhK4.js";import"./fake_data-C-1cPKA5.js";const yr={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},o={args:{amount:"0"}},a={args:{amount:"12500000000000000000"}},e={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},i={args:{amount:"50000000000000000000"}},s={args:{amount:"500000000000000000000"}},m={args:{amount:"0"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new E(A,D))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '12500000000000000000'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '25000000000000000000'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '37500000000000000000'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '50000000000000000000'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '500000000000000000000'
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
