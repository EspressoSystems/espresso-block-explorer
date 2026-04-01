import{b as r,a as t}from"./provide_async_states-CmGmaDU8.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./delegation_ui-C17C77W_.js";import{f as v,F as l,a as S,I as b}from"./example_data-k8qOs9lj.js";import{D as u}from"./validator_confirmed_example-Qs94od5q.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-DziQNnSL.js";import"./iframe-ChCxfwos.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DFHjvLMD.js";import"./loading_provider-h8XLvBq1.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./espresso_logo_and_title-Dd8xoczL.js";import"./higher_order-d4YXWLIv.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-oi7SJ8-7.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./functional-CHI4evRY.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_base64-Df7I341a.js";import"./monetary_value-BBaBP7s4.js";import"./validator-CeWWAq22.js";import"./tagged_base64-C1c0MovD.js";import"./cappuccino_node_validator_service_api_context-D8HG5yxs.js";import"./height_and_address-CvkBIbKM.js";import"./fetch_error-CpkjK4oN.js";import"./not_found_error-Dccy2lFm.js";import"./blocks-BO0jjecB.js";import"./data-D5p7UK42.js";import"./nodes-DZ7P8xPE.js";import"./constants-DK5GyL68.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-CdgBLZUc.js";import"./web_socket_response_provider-DtqBJ4lf.js";import"./async_iterable_resolver-DDv_ZBqF.js";import"./view_change_evidence_v1-BuDUUdOa.js";import"./error_display-Dc_EAcs9.js";import"./circular_progress_indicator-CMxZi97L.js";import"./promise_resolver-C0M6nZaG.js";import"./data_table-XgBx71M4.js";import"./chevron_up-BXN0Q57t.js";import"./svg_icon_base-BBi7gb5S.js";import"./explorer-m3f3WXcl.js";import"./cappuccino_hot_shot_query_service_api_context-V_jTY68u.js";import"./text-DPq9EfMX.js";import"./money_text-D44BgQF5.js";import"./number_formatters_provider-CYynOyj2.js";import"./locale_provider-5mesaRdn.js";/* empty css               */import"./main-DaHjELcp.js";import"./now_provider-BLPyobGt.js";import"./transactions_per_second_text-DBBnhoCB.js";import"./date_time_formatters_provider-BNFT2aGM.js";import"./esp_input-DTLNHIyo.js";import"./esp_symbol-BoZ5ZIIl.js";import"./byte_size_text-Cel5U2Hm.js";import"./date_time_text-FQcsgJ1N.js";import"./full_hex_text-CpvnF-0m.js";import"./hex_text-5HGnju8t.js";import"./number_text-VJGMQbGs.js";import"./relative_time_since_date_text-D5mbT1sB.js";import"./tagged_base64_text-CYORB88f.js";import"./time_text-CqRiY5Nf.js";import"./money_text_full-CpkHmeoO.js";import"./environment-CElIjh1w.js";import"./environment_banner-gJ_RDiYW.js";import"./container_loading-O6HPY0Oy.js";import"./loading_shimmer-BZRl8PZE.js";import"./skeleton_content-BRFTzvsa.js";import"./geo_json_view-CdGDVxoN.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-DMmdFvRe.js";import"./world_map_dots_full_resolution-Dhb0hmqw.js";import"./svg_tool_tip-DRH8c1-0.js";import"./world_map_dots_population_resolver-P9dNxyQE.js";import"./histogram_section_title-BkUcmFjf.js";import"./typography-DVygnctX.js";import"./payments-ByJeTc1B.js";import"./arrow_left-C72XdTry.js";import"./arrow_right-CG_uexFb.js";import"./check_circle_filled-_3c2nQY8.js";import"./twitter_icon-CnPOYuum.js";import"./close-Dnxaj6Mz.js";import"./copy-CKsgcC37.js";import"./medium_icon-DNXQ1cIj.js";import"./espresso_logo-CW0FvKcw.js";import"./menu-ntSiNpxO.js";import"./search_glass-D9KC_J7l.js";import"./x_icon-BT8_cINb.js";import"./pie_chart-uPhNpL5D.js";import"./web_socket_status-XXGUvqJi.js";import"./error_stream_consumer-Do1jRVkO.js";import"./espresso-DlIYWwH8.js";import"./inscription-B9_WdN9M.js";import"./fake_data-CE1wUB6z.js";import"./index-BgdMPv3v.js";import"./index-BfisTMic.js";const gt={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},i={args:{}},s={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new C)}},m={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new f(l))}},c={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}},a={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new E({...S,status:"reverted"}))}},e={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
