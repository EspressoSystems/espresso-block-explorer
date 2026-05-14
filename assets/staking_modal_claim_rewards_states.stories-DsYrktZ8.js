import{b as r,a}from"./provide_async_states-Cp22DcoR.js";import{C as g,F as R,P as y,T as E,a as f,b as C,c as T}from"./staking_modal_validator_confirmed_content-CQJNUvDA.js";import{f as v,F as l,a as S,I as b}from"./example_data-0DVuCHwk.js";import{D as u}from"./validator_confirmed_example-D2j_FMO7.js";import{C as A,a as h,R as w}from"./en_US-Y4ZOVFV4-D_PBb1Xt.js";/* empty css                      */import"./iframe-D2UHUSw1.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CqCkzHOO.js";import"./loading_provider-C-vOZWwa.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./functional-DK5v8yH0.js";import"./higher_order-Do31eXwD.js";import"./byte_size_text-B8LVqjcy.js";import"./number_formatters_provider-deQT8NaH.js";import"./locale_provider-CB6qzanm.js";import"./wallet_address_text-o_fKNCuy.js";import"./date_time_formatters_provider-C6LPHp4i.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-UFu38czj.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./base64-ClQJ-u6S.js";import"./hex_text-qUJvM0mV.js";import"./money_text-D0xggOZ3.js";import"./money_text_full-c4Ixq9j3.js";import"./number_text-Dfa8DO6a.js";import"./percentage_text-3gwyuOf8.js";import"./relative_time_since_date_text-BlTkaE0N.js";import"./tagged_base64_text-D99lZCjx.js";import"./time_text-C0-uqWbV.js";import"./async_iterable_resolver-WvIA9bZo.js";import"./promise_builder-DjQ0KsnV.js";import"./explorer-DxGWkdxX.js";import"./blocks-BWloOeNV.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./nodes-D7BPIfrv.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-DAUZdEEL.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-DX0fkpcZ.js";import"./circular_progress_indicator-DSGwwahE.js";import"./promise_resolver-D_bSuBH8.js";import"./data_table-C2xtDrwY.js";import"./chevron_up-B23Gbjox.js";import"./espresso-CsIydQkP.js";import"./x_icon-DpyD5P6-.js";import"./twitter_icon-B12PiVe1.js";import"./vertical_scroll-CRFlcY6s.js";import"./contexts-RRW4TRjx.js";import"./main-CUbMU48Z.js";import"./esp_input-mrwWvlPb.js";import"./text-Eyiz9yN0.js";import"./fake_data-PZD_MAS4.js";import"./espresso-UCXCFGID.js";import"./index-BTypf2jO.js";import"./index-DqaxvAnU.js";const Mr={title:"Delegation UI/Staking Modal/States/Claim Rewards",...u,args:{...u.args,selection:new g,validator:v.nodes[b]}},s={args:{}},n={args:{claimRewardsAsyncSnapshot:r.waiting()}},i={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new C)}},c={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new f(l))}},m={args:{claimRewardsAsyncSnapshot:r.withData(a.active,new T(l))}},p={args:{claimRewardsAsyncSnapshot:r.withData(a.done,new y(l,S))}},d={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new Error("Claim Rewards failed"))}},e={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new E({...S,status:"reverted"}))}},t={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x646cf558",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}},o={args:{claimRewardsAsyncSnapshot:r.withError(a.done,new R(new A(new h({abi:w,data:"0x328b8878",functionName:"claimRewards"}),{abi:w,functionName:"claimRewards",args:["0x","0x"]})))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
encouraging the user to retry.`,...o.parameters?.docs?.description}}};const Vr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError","ReceiptReverted","AlreadyClaimedError","InvalidAuthRootError"];export{t as AlreadyClaimedError,o as InvalidAuthRootError,s as None,p as ReceiptRetrieved,e as ReceiptReverted,d as SubmissionError,c as Submitted,n as Submitting,i as Waiting,m as WaitingForReceipt,Vr as __namedExportsOrder,Mr as default};
