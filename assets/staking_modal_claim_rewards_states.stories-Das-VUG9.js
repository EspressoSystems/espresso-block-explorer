import{b as r,a as t}from"./provide_async_states-DaGJFDkp.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./delegation_ui-CftB8LHw.js";import{f as v,F as l,a as S,I as b}from"./example_data-C2qmL1fr.js";import{D as u}from"./validator_confirmed_example-B2xnKmiu.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-D4VWswi2.js";import"./iframe-CmLG4Pok.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-dnPZr8Zm.js";import"./loading_provider-DftCHfKz.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./espresso_logo_and_title-Cpy_c-h9.js";import"./higher_order-aMxBsUlx.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-B_w53T3x.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./functional-CHI4evRY.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_base64-Df7I341a.js";import"./monetary_value-BBaBP7s4.js";import"./validator-CeWWAq22.js";import"./tagged_base64-C1c0MovD.js";import"./cappuccino_node_validator_service_api_context-Bun_-Rj0.js";import"./height_and_address-CvkBIbKM.js";import"./fetch_error-CpkjK4oN.js";import"./not_found_error-Dccy2lFm.js";import"./blocks-DE8KvbdO.js";import"./data-DkoEaPI0.js";import"./nodes-DZ7P8xPE.js";import"./constants-DK5GyL68.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-CdgBLZUc.js";import"./web_socket_response_provider-CqlFS2ov.js";import"./async_iterable_resolver-Dm85BkBH.js";import"./view_change_evidence_v1-BuDUUdOa.js";import"./error_display-BpHv7rRy.js";import"./circular_progress_indicator-B-wqNRZP.js";import"./promise_resolver-CjwNvRuE.js";import"./data_table-BhRISOED.js";import"./chevron_up-BztjpIQ4.js";import"./svg_icon_base-B57ylFbh.js";import"./explorer-1ji9kAvG.js";import"./cappuccino_hot_shot_query_service_api_context-CopxgVpX.js";import"./text-DVvQS9Yn.js";import"./money_text-Uf49ry7U.js";import"./number_formatters_provider-CF2CsDka.js";import"./locale_provider-Be6w3M1T.js";/* empty css               */import"./main-DXA2EK0i.js";import"./now_provider-BYmmDWBX.js";import"./transactions_per_second_text-C-bdL4Xj.js";import"./date_time_formatters_provider-DNydhZPZ.js";import"./esp_input-BQDTgtbG.js";import"./esp_symbol-Cm-LqEck.js";import"./byte_size_text-CJe08Mxa.js";import"./date_time_text-C2ElyEsL.js";import"./full_hex_text-CpvnF-0m.js";import"./hex_text-MfxCCN-r.js";import"./number_text-B1GPWJ_a.js";import"./relative_time_since_date_text-CT7qWg9a.js";import"./tagged_base64_text-DA6oEnnC.js";import"./time_text-MHeYbV15.js";import"./money_text_full-B_z1E165.js";import"./environment-D8id8rmG.js";import"./environment_banner-CoUYQAv7.js";import"./container_loading-DgU7RBr1.js";import"./loading_shimmer-BOwBWuvx.js";import"./skeleton_content-CSUHDwQ0.js";import"./geo_json_view-Bb4h91XU.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-BR2tvwh5.js";import"./world_map_dots_full_resolution-ciZx0_Yo.js";import"./svg_tool_tip-DtJWyT-V.js";import"./world_map_dots_population_resolver-DgsGiGoG.js";import"./histogram_section_title-DKgPq2kr.js";import"./typography-Do5b2gIO.js";import"./payments-B2clpOm4.js";import"./arrow_left-yFF0JkHo.js";import"./arrow_right-CNPFvVvI.js";import"./check_circle_filled-SoXbLKd4.js";import"./twitter_icon-BIkUrdJq.js";import"./close-DQ9KdHs_.js";import"./copy-CvSJbZKy.js";import"./medium_icon-CZsmygq6.js";import"./espresso_logo-Cv79EDYn.js";import"./menu-B0dYseVv.js";import"./search_glass-DslHpmxp.js";import"./x_icon-BE8FiWjP.js";import"./pie_chart-Bm0NoyIy.js";import"./web_socket_status-BLod-VW2.js";import"./error_stream_consumer-CV6lDvZV.js";import"./espresso-B78Cpgqq.js";import"./contexts-CDIl8RJr.js";import"./inscription-B9_WdN9M.js";import"./fake_data-CtzWp0JW.js";import"./index-BgBvZsR8.js";import"./index-CrMXpkeL.js";const yt={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},i={args:{}},s={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new C)}},m={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new f(l))}},c={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}},a={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new E({...S,status:"reverted"}))}},e={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
encouraging the user to retry.`,...o.parameters?.docs?.description}}};const Et=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError","ReceiptReverted","AlreadyClaimedError","InvalidAuthRootError"];export{e as AlreadyClaimedError,o as InvalidAuthRootError,i as None,p as ReceiptRetrieved,a as ReceiptReverted,d as SubmissionError,m as Submitted,s as Submitting,n as Waiting,c as WaitingForReceipt,Et as __namedExportsOrder,yt as default};
