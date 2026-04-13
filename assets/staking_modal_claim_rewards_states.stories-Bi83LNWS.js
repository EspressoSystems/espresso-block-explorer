import{b as r,a}from"./provide_async_states-CTW6PR9p.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./staking_modal_validator_confirmed_content-CCiZcFY-.js";import{f as v,F as l,a as S,I as b}from"./example_data-UbWSKDaA.js";import{D as u}from"./validator_confirmed_example--5htIsvu.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-DS5e0p-0.js";/* empty css                      */import"./iframe-DaQbwpKg.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-Urjmc4oX.js";import"./loading_provider-BJp-g8St.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./functional-BN9f4kvo.js";import"./higher_order-B-9I1gLU.js";import"./byte_size_text-ipFt3fsr.js";import"./number_formatters_provider-CcXSIvuI.js";import"./locale_provider-D3R0CJI7.js";import"./wallet_address_text-CqwLBR2A.js";import"./date_time_formatters_provider-CEA6JPej.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CiNBQC5Z.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./hex_text-BAI0PzpF.js";import"./money_text-CNPln5bU.js";import"./money_text_full-fYF8MyIy.js";import"./number_text-BqIrmfNw.js";import"./relative_time_since_date_text-CWZP_ccf.js";import"./tagged_base64_text-Mmk-wGJg.js";import"./time_text-DmW55R4T.js";import"./async_iterable_resolver-DdkMX6wz.js";import"./promise_builder-BgAlAfP2.js";import"./circular_progress_indicator-DEGUc7sM.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-OIJdldK9.js";import"./data_table-CUbkKUvM.js";import"./chevron_up-C8VviZ1S.js";import"./hot_shot_query_service_api_context-Dhm2cPMp.js";import"./explorer-DNGGRQj6.js";import"./blocks-BbFMk1LL.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./nodes-DYObZsIN.js";import"./height_and_address-BK1YHBdR.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-8j5zM5mY.js";import"./x_icon-C35_i0U-.js";import"./twitter_icon-Dj6C_0cQ.js";import"./vertical_scroll-CEacRZkh.js";import"./contexts-DN1WVZuo.js";import"./url-CHjl5yfO.js";import"./main-CvhDR6dC.js";import"./esp_input-DFELv1QH.js";import"./text-wJrwa_h_.js";import"./fake_data-BJw6B7vs.js";import"./environment-B9VwJPqh.js";import"./espresso-CyLc7AWz.js";import"./index-Bzu4Q9_J.js";import"./index-BMvX1_G5.js";const qr={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},s={args:{}},i={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new C)}},c={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new f(l))}},m={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(a.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new Error("Claim Rewards failed"))}},e={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new E({...S,status:"reverted"}))}},t={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Claim Rewards failed'))
  }
}`,...d.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new TransactionReverted({
      ...FAKE_RECEIPT,
      status: 'reverted'
    }))
  }
}`,...e.parameters?.docs?.source},description:{story:`Regression: when a tx is mined but reverts on-chain (receipt.status ===
'reverted'), the UI should show an error -- not "Claim Successful".`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:`AlreadyClaimed revert means a previous tx already succeeded.
Show success-like UI with Close button instead of Retry.`,...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
encouraging the user to retry.`,...o.parameters?.docs?.description}}};const zr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError","ReceiptReverted","AlreadyClaimedError","InvalidAuthRootError"];export{t as AlreadyClaimedError,o as InvalidAuthRootError,s as None,p as ReceiptRetrieved,e as ReceiptReverted,d as SubmissionError,c as Submitted,i as Submitting,n as Waiting,m as WaitingForReceipt,zr as __namedExportsOrder,qr as default};
