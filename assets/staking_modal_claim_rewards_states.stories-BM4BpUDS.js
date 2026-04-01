import{b as r,a as t}from"./provide_async_states-BXyETLp8.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./delegation_ui-DJPquWEO.js";import{f as v,F as l,a as S,I as b}from"./example_data-82uVIj-w.js";import{D as u}from"./validator_confirmed_example-DYDlliFU.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-CBEzFWUz.js";import"./iframe-BvJnvOK3.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-D1xrNIUw.js";import"./loading_provider-BgHImaQi.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./espresso_logo_and_title-4KqCt6Eu.js";import"./higher_order-CzhT3LZz.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-DaHb98wJ.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./functional-CHI4evRY.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_base64-Df7I341a.js";import"./monetary_value-BBaBP7s4.js";import"./validator-CeWWAq22.js";import"./tagged_base64-C1c0MovD.js";import"./cappuccino_node_validator_service_api_context-XRltxZoi.js";import"./height_and_address-bdNPMBCQ.js";import"./fetch_error-CpkjK4oN.js";import"./not_found_error-Dccy2lFm.js";import"./blocks-BEHlDsni.js";import"./data-D5p7UK42.js";import"./nodes-DZ7P8xPE.js";import"./constants-DK5GyL68.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-CdgBLZUc.js";import"./web_socket_response_provider-C_eb8fWp.js";import"./async_iterable_resolver-D5nBwWik.js";import"./view_change_evidence_v1-DN-jlMQt.js";import"./error_display-CT1g8BLS.js";import"./circular_progress_indicator-DU3olHLt.js";import"./promise_resolver-kWMCy_m1.js";import"./data_table-DXK7Inda.js";import"./chevron_up-D-AdgxfR.js";import"./svg_icon_base-CnwbtYtI.js";import"./explorer-BptZv2Lf.js";import"./cappuccino_hot_shot_query_service_api_context-BAvpYj8i.js";import"./text-C8RdqjB9.js";import"./money_text-DNXu9iqG.js";import"./number_formatters_provider-Cr-dALW7.js";import"./locale_provider-DLWcZiH3.js";/* empty css               */import"./main-CQQn1JdY.js";import"./now_provider-C3aSuMvV.js";import"./transactions_per_second_text-DiWDtUjN.js";import"./date_time_formatters_provider-DiFEct46.js";import"./esp_input-CfvpsJYp.js";import"./esp_symbol-NxS5sSFl.js";import"./byte_size_text-B7UTqo--.js";import"./date_time_text-DfM-PU1A.js";import"./full_hex_text-CpvnF-0m.js";import"./hex_text-Vn-94ioF.js";import"./number_text-B3D3piOk.js";import"./relative_time_since_date_text-CL62WKWF.js";import"./tagged_base64_text-BWi0_w0G.js";import"./time_text-3gr1ACW1.js";import"./money_text_full-DrynmSeg.js";import"./environment-DtX2yYD5.js";import"./environment_banner-BtVqrJYF.js";import"./container_loading-r-xrdAaF.js";import"./loading_shimmer-DQUrkx9q.js";import"./skeleton_content-CNMj2q17.js";import"./geo_json_view-CL7ruDN1.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-BrRTH67M.js";import"./world_map_dots_full_resolution-B3rd-hau.js";import"./svg_tool_tip-CHkyHo_q.js";import"./world_map_dots_population_resolver-C-kyNvs8.js";import"./histogram_section_title-BPtIxx5a.js";import"./typography-BvwdJNDp.js";import"./payments-8CC44FYd.js";import"./arrow_left-MD1lY4v1.js";import"./arrow_right-BocQNW8s.js";import"./check_circle_filled-D7G7QKj8.js";import"./twitter_icon-DQz2ndb2.js";import"./close-CvwCxBTs.js";import"./copy-CK2Tda-a.js";import"./medium_icon-DVlBsTHm.js";import"./espresso_logo-DEaQEpYQ.js";import"./menu-DiISqxDn.js";import"./search_glass-BJ0La6C3.js";import"./x_icon-BhKBjfyx.js";import"./pie_chart-BQaW6YFi.js";import"./web_socket_status-B-fZjFa7.js";import"./error_stream_consumer-CHG2UWom.js";import"./espresso-UXm19uZ_.js";import"./inscription-B9_WdN9M.js";import"./fake_data-D0k2X_4t.js";import"./index-BJtIBjVq.js";import"./index-BGnfEnc7.js";const gt={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},i={args:{}},s={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new C)}},m={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new f(l))}},c={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}},a={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new E({...S,status:"reverted"}))}},e={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Claim Rewards failed'))
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new TransactionReverted({
      ...FAKE_RECEIPT,
      status: 'reverted'
    }))
  }
}`,...a.parameters?.docs?.source},description:{story:`Regression: when a tx is mined but reverts on-chain (receipt.status ===
'reverted'), the UI should show an error -- not "Claim Successful".`,...a.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new FailedToPerformWriteToContract(new ContractFunctionExecutionError(new ContractFunctionRevertedError({
      abi: RewardClaimAbi,
      data: '0x646cf558',
      functionName: 'claimRewards'
    }), {
      abi: RewardClaimAbi,
      functionName: 'claimRewards',
      args: ['0x', '0x']
    })))
  }
}`,...e.parameters?.docs?.source},description:{story:`AlreadyClaimed revert means a previous tx already succeeded.
Show success-like UI with Close button instead of Retry.`,...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new FailedToPerformWriteToContract(new ContractFunctionExecutionError(new ContractFunctionRevertedError({
      abi: RewardClaimAbi,
      data: '0x328b8878',
      functionName: 'claimRewards'
    }), {
      abi: RewardClaimAbi,
      functionName: 'claimRewards',
      args: ['0x', '0x']
    })))
  }
}`,...o.parameters?.docs?.source},description:{story:`Regression: InvalidAuthRoot revert should show a specific message
encouraging the user to retry.`,...o.parameters?.docs?.description}}};const yt=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError","ReceiptReverted","AlreadyClaimedError","InvalidAuthRootError"];export{e as AlreadyClaimedError,o as InvalidAuthRootError,i as None,p as ReceiptRetrieved,a as ReceiptReverted,d as SubmissionError,m as Submitted,s as Submitting,n as Waiting,c as WaitingForReceipt,yt as __namedExportsOrder,gt as default};
