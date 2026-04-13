import{b as r,a}from"./provide_async_states-BLc5bTZ0.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./staking_modal_validator_confirmed_content-t87xtcK9.js";import{f as v,F as l,a as S,I as b}from"./example_data-D1WAeZXq.js";import{D as u}from"./validator_confirmed_example-_KTZxM2F.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-C-OvKtvK.js";/* empty css                      */import"./iframe-hlwV_SLU.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BSV0zpAE.js";import"./loading_provider-CI0TwLTi.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./functional-BN9f4kvo.js";import"./higher_order-Bp4R-A8k.js";import"./byte_size_text-BgslcI2e.js";import"./number_formatters_provider-CEQBq_Hk.js";import"./locale_provider-CqJhpaHu.js";import"./wallet_address_text-BqWLkzAy.js";import"./date_time_formatters_provider-BxM1oZxM.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-BhhckyY6.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./hex_text-BSzh9nv8.js";import"./money_text-D0p8Y8LA.js";import"./money_text_full-mZgISvxt.js";import"./number_text-yX4kUbct.js";import"./relative_time_since_date_text-DQ4LaVpf.js";import"./tagged_base64_text-ClsJrra7.js";import"./time_text-CBcl6HLm.js";import"./async_iterable_resolver-C37PYTRa.js";import"./promise_builder-BbSOfBLU.js";import"./circular_progress_indicator-BYNpNd3l.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-Bp93tTVp.js";import"./data_table-CicpzNPW.js";import"./chevron_up-dgUFrBAe.js";import"./hot_shot_query_service_api_context-DajRkavg.js";import"./explorer-D38tx1PK.js";import"./blocks-BbFMk1LL.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./nodes-DYObZsIN.js";import"./height_and_address-CapDqxpf.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-BZJBsDaB.js";import"./x_icon-CJRFBdJv.js";import"./twitter_icon-oVpBjcyD.js";import"./vertical_scroll-FnAk83CC.js";import"./contexts-ybm56a8S.js";import"./url-CHjl5yfO.js";import"./main-WDcO2_Ep.js";import"./esp_input-Cuc0mbnl.js";import"./text-xcqior87.js";import"./fake_data-BHSHvHhw.js";import"./environment-Cv4naIGX.js";import"./espresso-DImMLWf1.js";import"./index-CGMwTfK0.js";import"./index-CYUkv1Xd.js";const qr={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},s={args:{}},i={args:{claimRewardsAsyncSnapshot:r.waiting()}},n={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new C)}},c={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new f(l))}},m={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(a.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new Error("Claim Rewards failed"))}},e={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new E({...S,status:"reverted"}))}},t={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
