import{b as r,a as t}from"./provide_async_states-DGA_yGFK.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./delegation_ui-haMvsxek.js";import{f as v,F as l,a as S,I as b}from"./example_data-Dnm7Oyn_.js";import{D as u}from"./validator_confirmed_example-BWcK_Fef.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-BpzdNBYN.js";import"./iframe-hejhwxVl.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-oqf6yKht.js";import"./loading_provider-CPfGcHzH.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./espresso_logo_and_title-D3iFudKD.js";import"./higher_order-W9buzvfY.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-D5q5Y5XA.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./functional-CHI4evRY.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_base64-Df7I341a.js";import"./monetary_value-BBaBP7s4.js";import"./validator-CeWWAq22.js";import"./tagged_base64-C1c0MovD.js";import"./cappuccino_node_validator_service_api_context-CGPvlrzB.js";import"./height_and_address-CvkBIbKM.js";import"./fetch_error-CpkjK4oN.js";import"./not_found_error-Dccy2lFm.js";import"./blocks-BO0jjecB.js";import"./data-D5p7UK42.js";import"./nodes-DZ7P8xPE.js";import"./constants-DK5GyL68.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-CdgBLZUc.js";import"./web_socket_response_provider-BQsbWGsc.js";import"./async_iterable_resolver-BQp6CA1d.js";import"./view_change_evidence_v1-BuDUUdOa.js";import"./error_display-DXmsmvoS.js";import"./circular_progress_indicator-Djcl9poO.js";import"./promise_resolver-DBcAh5LT.js";import"./data_table-BaNa2ei5.js";import"./chevron_up-BIXFaApl.js";import"./svg_icon_base-C4F1Mj4O.js";import"./explorer-D_RQoZbW.js";import"./cappuccino_hot_shot_query_service_api_context-DiaeFuQS.js";import"./text-KnKWKYwF.js";import"./money_text-kodAkOQ8.js";import"./number_formatters_provider-DDCZmzjm.js";import"./locale_provider-B6ewQipp.js";/* empty css               */import"./main-Azwc9w4f.js";import"./now_provider-B6OQbAFu.js";import"./transactions_per_second_text-BPHEMjSh.js";import"./date_time_formatters_provider-BEpx9gnS.js";import"./esp_input-DkJuz77S.js";import"./esp_symbol-CKOEwyUN.js";import"./byte_size_text-C5Zd19FW.js";import"./date_time_text-CdO2TmCu.js";import"./full_hex_text-CpvnF-0m.js";import"./hex_text-DrxXu6v4.js";import"./number_text-BsE1LgbZ.js";import"./relative_time_since_date_text-CewqWWcH.js";import"./tagged_base64_text-DXcuYQmQ.js";import"./time_text-Dw-ZXccK.js";import"./money_text_full-CDeAnCy6.js";import"./environment-Cb8c1L3w.js";import"./environment_banner-68pzrBTe.js";import"./container_loading-tD1_2yUl.js";import"./loading_shimmer-BVEfS4Hw.js";import"./skeleton_content-DoOnEOVP.js";import"./geo_json_view-rD_6E1BZ.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-DX3_KKlq.js";import"./world_map_dots_full_resolution-CEok_K-h.js";import"./svg_tool_tip-BN7dBI4r.js";import"./world_map_dots_population_resolver-BrPLJnhB.js";import"./histogram_section_title-T1ffW5Zs.js";import"./typography-Bf4AbonD.js";import"./payments-bZOAd1Sa.js";import"./arrow_left-CCI8JYkl.js";import"./arrow_right-CR2lskCU.js";import"./check_circle_filled-5yGenlrM.js";import"./twitter_icon-bAe6zv5U.js";import"./close-qlCAU1b0.js";import"./copy-Bdipl4NL.js";import"./medium_icon-CgTV-PVF.js";import"./espresso_logo-CW96dy7s.js";import"./menu-C9c7BUgN.js";import"./search_glass-D_5JQm0z.js";import"./x_icon-bi4OtPhb.js";import"./pie_chart-CLYyWTlq.js";import"./web_socket_status-B5WrexTz.js";import"./error_stream_consumer-AFiB_hpJ.js";import"./espresso-BEdnAGQ0.js";import"./inscription-B9_WdN9M.js";import"./fake_data-C3v486Fz.js";import"./index-CrNDxhwo.js";import"./index-CogtgnYk.js";const gt={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},i={args:{}},s={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new C)}},m={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new f(l))}},c={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}},a={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new E({...S,status:"reverted"}))}},e={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
