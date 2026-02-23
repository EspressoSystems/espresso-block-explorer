import{b as r,a as t}from"./provide_async_states-6UR2TAKW.js";import{h as y}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as w}from"./nodes-DdUtUYCE.js";import{$ as E,a0 as T,P as R,a as P,b as W,c as C}from"./delegation_ui-Ct2yNmLg.js";import{f as D,I as A,F as f,a as _}from"./example_data-B8YdGgx7.js";import{D as h}from"./validator_confirmed_example-DmrWaZ4f.js";import"./iframe-CVKXv-Cv.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DliWLU-N.js";import"./loading_provider-CoGm22bc.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-0Ply8rSW.js";import"./higher_order-CtQuyS7n.js";import"./en_US-Y4ZOVFV4-C2l3AAew.js";import"./index-XY6BT7cC.js";import"./index-Ct7XCo7m.js";import"./environment-BMs1Xr1l.js";import"./environment_banner-BTwEG4x-.js";import"./text-CEhLEmI-.js";import"./explorer-CznsQpCz.js";import"./wallet_address_text-B1r0M8X5.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-BcUdgJSW.js";import"./circular_progress_indicator-BAgd-pif.js";import"./error_display-27lTa3qm.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-CD2V0Avy.js";import"./data_table-CVBUwP1F.js";import"./chevron_up-DhBANYx5.js";import"./svg_icon_base-D4no40oI.js";import"./cappuccino_hot_shot_query_service_api_context-CfzkvR7p.js";import"./text-D268pW_K.js";import"./money_text-6R_jESug.js";import"./number_formatters_provider-BU8dGkN7.js";import"./locale_provider-Buk582ED.js";/* empty css               */import"./main-Brc7MvoS.js";import"./now_provider-CSo9VQ4G.js";import"./transactions_per_second_text-DecVenlm.js";import"./date_time_formatters_provider-63KZ-fVJ.js";import"./esp_input-l6Bn_nEl.js";import"./esp_symbol-xWEz_d9U.js";import"./byte_size_text-B0q3c5Ln.js";import"./date_time_text-9trY_1aa.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-BcW-MDwS.js";import"./number_text-BCP4vfA5.js";import"./relative_time_since_date_text-CrYDwsMg.js";import"./tagged_base64_text-DIda8KF0.js";import"./time_text-kYdcBXz2.js";import"./money_text_full-BDWCK0aZ.js";import"./container_loading-DQWNDgw9.js";import"./loading_shimmer-CkEANo8w.js";import"./skeleton_content-B49VI20d.js";import"./geo_json_view-COt47YpE.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-MwvhBjtB.js";import"./world_map_dots_full_resolution-CPK5oPZq.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-CoZE038R.js";import"./world_map_dots_population_resolver-CHivmc9p.js";import"./histogram_section_title-DMO1cb3y.js";import"./typography-_48nhcfr.js";import"./payments-Dj-AUR2h.js";import"./arrow_left-D_B-CSIj.js";import"./arrow_right-zL2Tu0aN.js";import"./check_circle_filled-C_5JJyvp.js";import"./twitter_icon-D1Djrwz9.js";import"./close-C5mwXViD.js";import"./copy-_svnnwkd.js";import"./medium_icon-DrGlLNX_.js";import"./espresso_logo-BfqW0ykW.js";import"./menu-KcvLyzeV.js";import"./search_glass-B33wI3nI.js";import"./x_icon-4Qwpl5ag.js";import"./pie_chart-BYnE1sLb.js";import"./web_socket_status-D__s18Wq.js";import"./web_socket_response_provider-HA3_WEcU.js";import"./cappuccino_node_validator_service_api_context-OgmWCIEr.js";import"./error_stream_consumer-BfN_AgUP.js";import"./espresso-D7hHCnFI.js";import"./inscription-lyh_GhK4.js";import"./fake_data-6Q6og7Gj.js";const Er={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},o={args:{amount:"0"}},e={args:{amount:"12500000000000000000"}},a={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},p={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
