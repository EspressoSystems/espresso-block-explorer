import{b as r,a}from"./provide_async_states-CvBr9k-N.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./staking_modal_validator_confirmed_content-Mmk42Y1B.js";import{f as v,F as l,a as S,I as b}from"./example_data-DsIHIzfx.js";import{D as u}from"./validator_confirmed_example-VJ62lsZh.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-NTqGcyym.js";/* empty css                      */import"./iframe-COKd2Os-.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-I8Cq7ni6.js";import"./loading_provider-CAiGDh4M.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./functional-BY4LX4kJ.js";import"./higher_order-t8f3m54J.js";import"./byte_size_text-B8oLdHc1.js";import"./number_formatters_provider-5P6oMbBj.js";import"./locale_provider-CRfUaY6B.js";import"./wallet_address_text-DCA28Uqg.js";import"./date_time_formatters_provider-KQLt3BJr.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CDMhlPwa.js";import"./full_hex_text-DhrOCfLO.js";import"./array_buffer_hex-Bcc-7BbE.js";import"./base64-CIn2pRZH.js";import"./hex_text-DK79PIUk.js";import"./money_text-C-wrGRGL.js";import"./money_text_full-LCIKV8NP.js";import"./number_text-CAbUHr29.js";import"./relative_time_since_date_text-CnpaFYv_.js";import"./tagged_base64_text-VkJW1cYD.js";import"./time_text-hbHHO61s.js";import"./async_iterable_resolver-D6M1xbii.js";import"./promise_builder-DANtV8OO.js";import"./circular_progress_indicator-BaJ1dg1I.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-pqxv98-P.js";import"./data_table-CWGiaFxK.js";import"./chevron_up-0QfBWqbC.js";import"./hot_shot_query_service_api_context-T58k7YpJ.js";import"./explorer-CSZf3dEM.js";import"./blocks-36ZEPcvJ.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./nodes-BsbvMhdT.js";import"./height_and_address-CfMFdU6e.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-3kO0efKM.js";import"./not_found_error-BdUVpmTw.js";import"./validator-BgZRo16z.js";import"./stake_table-Bbtpv34V.js";import"./stake_table_field-CIreD0Dp.js";import"./espresso-BT1dUU-Q.js";import"./x_icon-BdiuL9tT.js";import"./twitter_icon-CDA43j3T.js";import"./vertical_scroll-e5WQDJ-j.js";import"./contexts-hMlxyYQ_.js";import"./url-CHjl5yfO.js";import"./main-DmmonIlr.js";import"./esp_input-DBtO5HVz.js";import"./esp_symbol-CQdKNGz_.js";import"./text-BqLc_lNB.js";import"./fake_data-qerbZ90X.js";import"./environment-4Hpi4MRm.js";import"./espresso-49O16mIn.js";import"./index-CLIMVHVb.js";import"./index-Dw0SlraX.js";const zr={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},s={args:{}},i={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new C)}},c={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new f(l))}},m={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(a.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new Error("Claim Rewards failed"))}},e={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new E({...S,status:"reverted"}))}},t={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
encouraging the user to retry.`,...o.parameters?.docs?.description}}};const Br=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError","ReceiptReverted","AlreadyClaimedError","InvalidAuthRootError"];export{t as AlreadyClaimedError,o as InvalidAuthRootError,s as None,p as ReceiptRetrieved,e as ReceiptReverted,d as SubmissionError,c as Submitted,i as Submitting,n as Waiting,m as WaitingForReceipt,Br as __namedExportsOrder,zr as default};
