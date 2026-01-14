import{b as r,a as t}from"./provide_async_states-BwqjoJC6.js";import{C as d,P as S,a as A,b as w,c as g}from"./staking_modal_validator_confirmed_content-zsuhZ7Q5.js";import{f as l,I as R,F as p,a as u}from"./example_data-DNkax7Pt.js";import{D as c}from"./validator_confirmed_example-BIvWX4JN.js";import"./staking_modal-9wH4XAyM.js";import"./iframe-DI-11s_X.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DGnnlGIN.js";import"./loading_provider-DZ2hJPrr.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./functional-DsFqNm-o.js";import"./promise_resolver-BCWrA9yj.js";import"./en_US-KAK2ZBDO-DIIxmiOi.js";import"./index-D4jg92GM.js";import"./index-2Qr5b_Ix.js";import"./environment-BJkgZREb.js";import"./espresso-BhU0l0Xi.js";import"./explorer-_i49b8JK.js";import"./bigint-XOkPApkc.js";import"./base64-C9eISNYa.js";import"./text-CEhLEmI-.js";import"./array_buffer-OWUzmdpG.js";import"./async_iterable_resolver-Bioc24yz.js";import"./data_table-BRCUuqRG.js";import"./chevron_up-vZR5oH8e.js";import"./svg_icon_base-D-9LFK2Z.js";import"./higher_order-CE6OGbq-.js";import"./height_and_address-BuKJdZLP.js";import"./tagged_base64-OJExTSEK.js";import"./url-D1AcOu20.js";import"./monetary_value-B8_AgdSi.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./cappuccino_hot_shot_query_service_api_context-BL6mdpCl.js";import"./blocks-Dw_RhIDq.js";import"./data-D5p7UK42.js";import"./nodes-BcMKYiFz.js";import"./money_text-DWVpZrzw.js";import"./number_formatters_provider-KddJYOdi.js";import"./locale_provider-C8e6pJUg.js";/* empty css               */import"./circular_progress_indicator-CB3MQFjM.js";import"./error_display-Dy2m92AA.js";import"./close-fwlxuKkt.js";import"./wallet_address_text-BtExZcvT.js";import"./main-ClghIN1Q.js";import"./now_provider-Cyuty8k3.js";import"./esp_input-vjHNp_SC.js";import"./text-Drtl07bn.js";import"./transactions_per_second_text-BfX5u5Mj.js";import"./date_time_formatters_provider-M9CCk0Jh.js";import"./byte_size_text-DEFkBL8V.js";import"./date_time_text-DPkozv3x.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-CNA63x8l.js";import"./number_text-BtfPTykZ.js";import"./relative_time_since_date_text-CL2VL2Wf.js";import"./tagged_base64_text-CvsXgAKe.js";import"./time_text-B0jFtZmy.js";import"./fake_data-BCYXive0.js";const Fr={title:"Delegation UI/Staking Modal/States/Claim Rewards",...c,args:{...c.args,selection:new d,validator:l.nodes[R]}},a={args:{}},e={args:{claimRewardsAsyncSnapshot:r.waiting()}},o={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new S)}},i={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new A(p))}},s={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new w(p))}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new g(p,u))}},m={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Claim Rewards failed'))
  }
}`,...m.parameters?.docs?.source}}};const Ir=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,i as Submitted,e as Submitting,o as Waiting,s as WaitingForReceipt,Ir as __namedExportsOrder,Fr as default};
