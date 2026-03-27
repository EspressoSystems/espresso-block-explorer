import{b as r,a as t}from"./provide_async_states-CDz20rjv.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./delegation_ui-OeJzIxgH.js";import{f as v,F as l,a as S,I as b}from"./example_data-BWx5RIC7.js";import{D as u}from"./validator_confirmed_example-B0Pw38Ah.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-2JVBEehU.js";import"./iframe-Cvx6RpPY.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DuSHNFDm.js";import"./loading_provider-BVRuGC11.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-D0dGm0KW.js";import"./string-BCb2Pt7Y.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BB_FSuj1.js";import"./espresso_logo_and_title-eLIDDFqO.js";import"./higher_order-CcpOgoeh.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-CBt09lE1.js";import"./array_buffer-DFcBajus.js";import"./base64-CqV3gweX.js";import"./functional-DzI6oRAM.js";import"./bigint-DeSLcxHO.js";import"./url-CDyI1Tkc.js";import"./wallet_address-BnrZuCWl.js";import"./validator-C0io6BAI.js";import"./tagged_base64-B_lPSlUf.js";import"./async_iterable_resolver-CUN-UHo1.js";import"./circular_progress_indicator-BG7ryp-q.js";import"./error_display-CavvfYLv.js";import"./fetch_error-BobVF34n.js";import"./height_and_address-DcOJdVP6.js";import"./monetary_value-DXbf4XhX.js";import"./not_found_error-BA1XOWZ_.js";import"./promise_resolver-B3Bf1HFA.js";import"./data_table-CdvI3_gP.js";import"./chevron_up-bnQmtD7Q.js";import"./svg_icon_base-CJF1g_tc.js";import"./explorer-S4Yz8IV6.js";import"./blocks-6yclG0ka.js";import"./data-D5p7UK42.js";import"./nodes-B70Gne2-.js";import"./cappuccino_hot_shot_query_service_api_context-D7BJELZm.js";import"./text-CA9rPn0p.js";import"./money_text-DkZcradb.js";import"./number_formatters_provider-DSWMRQJW.js";import"./locale_provider-D5aNHbGy.js";/* empty css               */import"./main-DgtacgmD.js";import"./now_provider-C_TnA9uy.js";import"./transactions_per_second_text-DIvVI0Zv.js";import"./date_time_formatters_provider-DcUzUZDq.js";import"./esp_input-DsoEqUmz.js";import"./esp_symbol-Dv6JU26F.js";import"./byte_size_text-NLE3VhrF.js";import"./date_time_text-plZBolwB.js";import"./full_hex_text-Dk7uaXQs.js";import"./hex_text-ReM3eh9l.js";import"./number_text-6gO1h8MR.js";import"./relative_time_since_date_text-DcFvPw8b.js";import"./tagged_base64_text-BiKx3vV-.js";import"./time_text-D040jtBw.js";import"./money_text_full-BpgtwDjo.js";import"./environment-CucxJ3nv.js";import"./environment_banner-G5NC2_l1.js";import"./container_loading-3YYrVjF0.js";import"./loading_shimmer-DfYfcWJ-.js";import"./skeleton_content-DsbU2c_Z.js";import"./geo_json_view-BoCpCRVQ.js";import"./constants-BJTQG6zR.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-Bc-Iym5z.js";import"./world_map_dots_full_resolution-Cf3TYfuc.js";import"./world_map_grid-BAHY-Ov_.js";import"./svg_tool_tip-YY6Ta1SX.js";import"./world_map_dots_population_resolver-A12LoaAT.js";import"./histogram_section_title-DpX7PZpr.js";import"./typography-B40_qrOR.js";import"./payments-xdGepafa.js";import"./arrow_left-CmGOnJdI.js";import"./arrow_right-Ms3c2eFC.js";import"./check_circle_filled-l-VtYo1v.js";import"./twitter_icon-BWWV6ALj.js";import"./close-DmDdD8l2.js";import"./copy-CUWUjZqu.js";import"./medium_icon-B7p6ho2u.js";import"./espresso_logo-DxQbk5YS.js";import"./menu-B1IFd90U.js";import"./search_glass-CCF_qhG6.js";import"./x_icon-BK1iCOfN.js";import"./pie_chart-BHily3Mq.js";import"./web_socket_status-CjXLCF2z.js";import"./web_socket_response_provider-DaB0ulvD.js";import"./cappuccino_node_validator_service_api_context-IWXFhumD.js";import"./error_stream_consumer-GJKCchvh.js";import"./espresso-stnEA2eC.js";import"./inscription-DlgZ6EW8.js";import"./fake_data-D6P17pw8.js";import"./index-DV0fPn1x.js";import"./index-CF-oR5Dv.js";const gt={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},i={args:{}},s={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new C)}},m={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new f(l))}},c={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}},a={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new E({...S,status:"reverted"}))}},e={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
