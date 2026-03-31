import{b as r,a as t}from"./provide_async_states-Cod3hjlK.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./delegation_ui-Cxq0g7xF.js";import{f as v,F as l,a as S,I as b}from"./example_data-B_-K26w4.js";import{D as u}from"./validator_confirmed_example-J9uMMZd6.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-BIFYSQtk.js";import"./iframe-BtlXJKZ1.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DZfionCo.js";import"./loading_provider-DTcNP4kZ.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./espresso_logo_and_title-Cvm7y2kN.js";import"./higher_order-DrPNsCRC.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-BojWsZ4Q.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./functional-CHI4evRY.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_base64-Df7I341a.js";import"./monetary_value-BBaBP7s4.js";import"./validator-CeWWAq22.js";import"./tagged_base64-C1c0MovD.js";import"./cappuccino_node_validator_service_api_context-BQHPWMpt.js";import"./height_and_address-bdNPMBCQ.js";import"./fetch_error-CpkjK4oN.js";import"./not_found_error-Dccy2lFm.js";import"./blocks-BEHlDsni.js";import"./data-D5p7UK42.js";import"./nodes-DZ7P8xPE.js";import"./constants-DK5GyL68.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-CdgBLZUc.js";import"./web_socket_response_provider-UrYbd7Ig.js";import"./async_iterable_resolver-wL4GN5Yu.js";import"./view_change_evidence_v1-DN-jlMQt.js";import"./error_display-D7V2pmDr.js";import"./circular_progress_indicator-CHjvvcxq.js";import"./promise_resolver-CIQ5PKYD.js";import"./data_table-DguU8lNy.js";import"./chevron_up-C63lzylG.js";import"./svg_icon_base-BHrQ2xhA.js";import"./explorer-vyYwTP8P.js";import"./cappuccino_hot_shot_query_service_api_context-DOCu4KEr.js";import"./text-aldKgTri.js";import"./money_text-NHSQ4ZXI.js";import"./number_formatters_provider-uduEK5FV.js";import"./locale_provider-Ghcznv9j.js";/* empty css               */import"./main-_SDW4JdH.js";import"./now_provider-D29HcoOP.js";import"./transactions_per_second_text-CqmAEdTZ.js";import"./date_time_formatters_provider-C0tfyVOJ.js";import"./esp_input-DOUmUYCk.js";import"./esp_symbol-CvqE3ZVm.js";import"./byte_size_text--8CaTQrj.js";import"./date_time_text-DirxX4OA.js";import"./full_hex_text-CpvnF-0m.js";import"./hex_text-Cija5FgV.js";import"./number_text-BdO7pZh2.js";import"./relative_time_since_date_text-D1s1kssZ.js";import"./tagged_base64_text-Clxk9y88.js";import"./time_text-Br-5qJEe.js";import"./money_text_full-BJiWhaEl.js";import"./environment-Diz87CJi.js";import"./environment_banner-BdcRPh3P.js";import"./container_loading-BlaS0Zki.js";import"./loading_shimmer-Bk-WwnRG.js";import"./skeleton_content-C3wfAwRT.js";import"./geo_json_view-ChCaZrek.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-CK7HXKOA.js";import"./world_map_dots_full_resolution-B96Hse77.js";import"./svg_tool_tip-CSikt_yn.js";import"./world_map_dots_population_resolver-Bqh6oG8a.js";import"./histogram_section_title-Bca6-4x1.js";import"./typography-D29HocqS.js";import"./payments-CiDGKKun.js";import"./arrow_left-DFw6nZtI.js";import"./arrow_right-BIWLvfvj.js";import"./check_circle_filled-xq0CVmDA.js";import"./twitter_icon-DjPrPPPA.js";import"./close-D3qLjdnP.js";import"./copy-B8AV97Y6.js";import"./medium_icon-BsTW1hl4.js";import"./espresso_logo-VJAzIWo1.js";import"./menu-CclYtIAe.js";import"./search_glass-CxOKug1N.js";import"./x_icon-BoTH_ycO.js";import"./pie_chart-CGdx0OOi.js";import"./web_socket_status-6-IwGIJ0.js";import"./error_stream_consumer-DbPiVAuk.js";import"./espresso-RSia6qf6.js";import"./inscription-B9_WdN9M.js";import"./fake_data-dul1ehjD.js";import"./index-DVf-yhbM.js";import"./index-CzfUxczt.js";const gt={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},i={args:{}},s={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new C)}},m={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new f(l))}},c={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}},a={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new E({...S,status:"reverted"}))}},e={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
