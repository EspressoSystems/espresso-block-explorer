import{b as r,a as t}from"./provide_async_states-obss5LbS.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./delegation_ui-7HAOx-C3.js";import{f as v,F as l,a as S,I as b}from"./example_data-NwWuWYxk.js";import{D as u}from"./validator_confirmed_example-DQV-b4kr.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-m3aRHUC7.js";import"./iframe-RrH5notm.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CnI5ffrM.js";import"./loading_provider-Bb7kn8rC.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./espresso_logo_and_title-WNhbh1Ue.js";import"./higher_order-Bm-4pUU4.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-HsrvA9hh.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./functional-CHI4evRY.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_base64-Df7I341a.js";import"./monetary_value-BBaBP7s4.js";import"./validator-CeWWAq22.js";import"./tagged_base64-C1c0MovD.js";import"./cappuccino_node_validator_service_api_context-ChgO9xv6.js";import"./height_and_address-bdNPMBCQ.js";import"./fetch_error-CpkjK4oN.js";import"./not_found_error-Dccy2lFm.js";import"./blocks-BEHlDsni.js";import"./data-D5p7UK42.js";import"./nodes-DZ7P8xPE.js";import"./constants-DK5GyL68.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-CdgBLZUc.js";import"./web_socket_response_provider-CYl3QLLo.js";import"./async_iterable_resolver-Di4p2MC5.js";import"./view_change_evidence_v1-DN-jlMQt.js";import"./error_display-iT0uOz5A.js";import"./circular_progress_indicator-CHzbUH0t.js";import"./promise_resolver-hhRxIG1E.js";import"./data_table-CpwQJm7B.js";import"./chevron_up-DIltLCUC.js";import"./svg_icon_base-n5AH4Zhh.js";import"./explorer-dQeEcF6L.js";import"./cappuccino_hot_shot_query_service_api_context-plVtw0cT.js";import"./text-C5auL8pP.js";import"./money_text-BJP7MmBc.js";import"./number_formatters_provider-BWToNpc0.js";import"./locale_provider-Cyvsr7cz.js";/* empty css               */import"./main-BHP_euRg.js";import"./now_provider-DTqjxJ47.js";import"./transactions_per_second_text-BVSmLvMU.js";import"./date_time_formatters_provider-DapLe-dN.js";import"./esp_input-Dwiqy9gZ.js";import"./esp_symbol-Cvuub86E.js";import"./byte_size_text-CAONP42e.js";import"./date_time_text-C_CBnpzd.js";import"./full_hex_text-CpvnF-0m.js";import"./hex_text-DlaINR7Q.js";import"./number_text-BiMC9TJ3.js";import"./relative_time_since_date_text-C01uoyja.js";import"./tagged_base64_text-D8IOrji7.js";import"./time_text-D0AxGVfM.js";import"./money_text_full-zL5eg6lg.js";import"./environment-Dt2a31-A.js";import"./environment_banner-D9f1nQB4.js";import"./container_loading-6kKhp7gg.js";import"./loading_shimmer--WDeerTv.js";import"./skeleton_content-DmqNHUTV.js";import"./geo_json_view-BZ0hyabo.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-Ekhiwsff.js";import"./world_map_dots_full_resolution-Cu15UkM9.js";import"./svg_tool_tip-CY6ki9kT.js";import"./world_map_dots_population_resolver-BbBJEhfP.js";import"./histogram_section_title-D7RO4Mkp.js";import"./typography-DPHmMob2.js";import"./payments-BtWcJda0.js";import"./arrow_left-7AWIAnWR.js";import"./arrow_right-9kRqhYQX.js";import"./check_circle_filled-DPFde0XQ.js";import"./twitter_icon-eBpZn6CZ.js";import"./close-D7qkZZsB.js";import"./copy-xEs8E4tz.js";import"./medium_icon-DP9aBmfy.js";import"./espresso_logo-C91YyoF-.js";import"./menu-BadXhs4S.js";import"./search_glass-CR5PA-dS.js";import"./x_icon-BhneeG9t.js";import"./pie_chart-B-OMWc9w.js";import"./web_socket_status-C1r_nxu0.js";import"./error_stream_consumer-KWklo4B8.js";import"./espresso-DG00-6VA.js";import"./inscription-B9_WdN9M.js";import"./fake_data-C3nR6tlx.js";import"./index-DyPC3jWh.js";import"./index-B30HYQ58.js";const gt={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},i={args:{}},s={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new C)}},m={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new f(l))}},c={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}},a={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new E({...S,status:"reverted"}))}},e={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
