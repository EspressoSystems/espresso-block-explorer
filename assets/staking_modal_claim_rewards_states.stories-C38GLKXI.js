import{b as r,a}from"./provide_async_states-jwCAOU-p.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./staking_modal_validator_confirmed_content-uMliHmIP.js";import{f as v,F as l,a as S,I as b}from"./example_data-CD7BV8cR.js";import{D as u}from"./validator_confirmed_example-BcvC-uub.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-EmbOaFWf.js";/* empty css                      */import"./iframe-C0Hnu7F5.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-Cti-MZ1B.js";import"./loading_provider-DMNdRHHl.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./functional-BN9f4kvo.js";import"./higher_order-_6gYxibe.js";import"./byte_size_text-BSxBAPzi.js";import"./number_formatters_provider-Cxc9ljbf.js";import"./locale_provider-DiHDaUDA.js";import"./wallet_address_text-DncnO_z8.js";import"./date_time_formatters_provider-CfHgi1rZ.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-BYlmSoj7.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./hex_text-Cz8JEBHx.js";import"./money_text-Sqeltofb.js";import"./money_text_full-xwpQIE19.js";import"./number_text-Cyj64pmv.js";import"./relative_time_since_date_text-5Vk5RJ1c.js";import"./tagged_base64_text-KFPcJOl9.js";import"./time_text-L0LlBiF3.js";import"./async_iterable_resolver-vSmql0JM.js";import"./promise_builder-COyjSFMy.js";import"./circular_progress_indicator-C7NtlUw_.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-CG3c4lkW.js";import"./data_table-Bc2Y3FO7.js";import"./chevron_up-DNzirS0I.js";import"./hot_shot_query_service_api_context-DdHHoYgU.js";import"./explorer-DS3qhp3q.js";import"./blocks-BbFMk1LL.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./nodes-DYObZsIN.js";import"./height_and_address-BSaR29fg.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-CS7UlZiC.js";import"./x_icon-f1IZuvpB.js";import"./twitter_icon-DOVsDg5z.js";import"./vertical_scroll-BD8vqH8Y.js";import"./contexts-BzJz33a1.js";import"./url-CHjl5yfO.js";import"./main-DqJLaoO8.js";import"./esp_input-Ce4dttbW.js";import"./text-BlR8fIK5.js";import"./fake_data-BsaAMii2.js";import"./environment-BrP5Pm0N.js";import"./espresso-CByVUFzU.js";import"./index-CSmO33r6.js";import"./index-DEeGj3Zr.js";const qr={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},s={args:{}},i={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new C)}},c={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new f(l))}},m={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(a.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new Error("Claim Rewards failed"))}},e={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new E({...S,status:"reverted"}))}},t={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
