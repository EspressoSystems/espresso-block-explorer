import{b as r,a as t}from"./provide_async_states-CJGZwmD9.js";import{h as y}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as w}from"./nodes-DdUtUYCE.js";import{$ as E,a0 as T,P as R,a as P,b as W,c as C}from"./delegation_ui-BMpl3dN0.js";import{f as D,I as A,F as f,a as _}from"./example_data-DzF5QVeV.js";import{D as h}from"./validator_confirmed_example-DhSdUi-g.js";import"./iframe-Cy4xjHUd.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-C2a9yIBm.js";import"./loading_provider-Cu3BxgBC.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-p6GRkoAO.js";import"./higher_order-C1TCJwML.js";import"./en_US-Y4ZOVFV4-Boo7kWzZ.js";import"./index-CNB9H_RB.js";import"./index-CVn5SYyK.js";import"./environment-D7muBZ1L.js";import"./environment_banner-DYMjW1_J.js";import"./text-CEhLEmI-.js";import"./explorer-DFSIDkXx.js";import"./wallet_address_text-DgelvIHw.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-BdXIrFxA.js";import"./circular_progress_indicator-1B8XY63O.js";import"./error_display-zxEInZVQ.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-C4yHKGB9.js";import"./data_table-yisRrbPa.js";import"./chevron_up-B-4vqEb2.js";import"./svg_icon_base-B8oaxq1w.js";import"./cappuccino_hot_shot_query_service_api_context-BRduUQNq.js";import"./text-ZyacHFgU.js";import"./money_text-CamHETMJ.js";import"./number_formatters_provider-BzZn-8Pb.js";import"./locale_provider-CMdojvOr.js";/* empty css               */import"./main-CNujWVid.js";import"./now_provider-CHx9qqh5.js";import"./transactions_per_second_text-WaEYU1Es.js";import"./date_time_formatters_provider-Cj5Fa5jE.js";import"./esp_input-B8qMFE1P.js";import"./esp_symbol-t6lQeyWX.js";import"./byte_size_text-OP0W9Ddj.js";import"./date_time_text-Dp6lUZ-6.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-Z8LWba2j.js";import"./number_text-9BSNavKf.js";import"./relative_time_since_date_text-joT83zjw.js";import"./tagged_base64_text-Cgaol6v1.js";import"./time_text-CmEGKF7P.js";import"./money_text_full-C0KKdt8U.js";import"./container_loading-aFJwZizW.js";import"./loading_shimmer-1OukwHN-.js";import"./skeleton_content-D6wyLx9C.js";import"./geo_json_view-Oeg0BH5U.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-Bbyj8smd.js";import"./world_map_dots_full_resolution-DGgz9fQp.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-CwsYqpIJ.js";import"./world_map_dots_population_resolver-DtoxiPRn.js";import"./histogram_section_title-u_FqURm5.js";import"./typography-DSDO5-HQ.js";import"./payments-CtpQIVA5.js";import"./arrow_left-CPZ9VHlY.js";import"./arrow_right-C-Vc-BVF.js";import"./check_circle_filled-ZiVLafnM.js";import"./twitter_icon-BDvTA1LC.js";import"./close-DDLChVPr.js";import"./copy-Dk9pXHjY.js";import"./medium_icon-LXtGevDM.js";import"./espresso_logo-BzPw5yex.js";import"./menu-DVR6Km4X.js";import"./search_glass-DrJ-Q51W.js";import"./x_icon-CeSyJvvO.js";import"./pie_chart-CK8YDY0h.js";import"./web_socket_status-CsYDeZDW.js";import"./web_socket_response_provider-uB2rg_Bd.js";import"./cappuccino_node_validator_service_api_context-DafvO4Uh.js";import"./error_stream_consumer-CZhyJHJR.js";import"./espresso-D1SbQFtr.js";import"./inscription-lyh_GhK4.js";import"./fake_data-BtHOGnel.js";const Er={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},o={args:{amount:"0"}},e={args:{amount:"12500000000000000000"}},a={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},p={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '12500000000000000000'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '25000000000000000000'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selection: new ValidatorConfirmedUndelegateConfirm(hexArrayBufferCodec.encode(nodeList[INDEX_STAKED].address)),
    amount: '10000000000000000000'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Tr=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Confirmation","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{p as Confirmation,i as InsufficientStake,o as None,e as Option25Percent,a as Option50Percent,n as Option75Percent,s as OptionAll,S as ReceiptRetrieved,l as SubmissionError,u as Submitted,c as Submitting,m as SufficientStake,d as Waiting,g as WaitingForReceipt,Tr as __namedExportsOrder,Er as default};
