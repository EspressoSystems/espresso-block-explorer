import{b as r,a as t}from"./provide_async_states-BSHtUug_.js";import{C as d,P as S,a as A,b as w,c as g}from"./staking_modal_validator_confirmed_content-D79bFd0O.js";import{f as l,I as R,F as p,a as u}from"./example_data-C6vgden4.js";import{D as c}from"./validator_confirmed_example-CLQhdSJ0.js";import"./staking_modal-Cd3E481C.js";import"./iframe-CCLKIoat.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BF5QLA6e.js";import"./loading_provider-DvG6A7dg.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./functional-DsFqNm-o.js";import"./promise_resolver-DyTN7TrH.js";import"./en_US-KAK2ZBDO-C3-R_GrD.js";import"./index-D298oDv-.js";import"./index-BBD36RIg.js";import"./environment-C-jnjOAT.js";import"./espresso-BuY6XBXW.js";import"./explorer-XOHjuOmK.js";import"./bigint-XOkPApkc.js";import"./base64-C9eISNYa.js";import"./text-CEhLEmI-.js";import"./array_buffer-OWUzmdpG.js";import"./async_iterable_resolver-cA1Jejru.js";import"./data_table-UR9ORkGf.js";import"./chevron_up-DUXgi73a.js";import"./svg_icon_base-BQe2kabo.js";import"./higher_order-DyFKxQfc.js";import"./height_and_address-BuKJdZLP.js";import"./tagged_base64-OJExTSEK.js";import"./url-D1AcOu20.js";import"./monetary_value-B8_AgdSi.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./cappuccino_hot_shot_query_service_api_context-Ccdk_dQ4.js";import"./blocks-Dw_RhIDq.js";import"./data-D5p7UK42.js";import"./nodes-BcMKYiFz.js";import"./money_text-BrKfhtWB.js";import"./number_formatters_provider-3ltM0G6e.js";import"./locale_provider-K_0BCaCZ.js";/* empty css               */import"./circular_progress_indicator-ChMMES4T.js";import"./error_display-B9hSkFhe.js";import"./close-534KE3UE.js";import"./wallet_address_text-B_Akpkqr.js";import"./main-mZJ0dpmR.js";import"./now_provider-B5osc7Mq.js";import"./esp_input-BIzZqTHb.js";import"./text-DvqP5Jiw.js";import"./transactions_per_second_text-DXQhBLh9.js";import"./date_time_formatters_provider-D0J5X-TW.js";import"./byte_size_text-We-dR8lu.js";import"./date_time_text-BkX9HxlE.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-CJmdEYz5.js";import"./number_text-BXbb_2Rl.js";import"./relative_time_since_date_text-B_x23ieN.js";import"./tagged_base64_text-CFQdB-Dk.js";import"./time_text-DOkBsfkL.js";import"./fake_data-BUTPv3x_.js";const Fr={title:"Delegation UI/Staking Modal/States/Claim Rewards",...c,args:{...c.args,selection:new d,validator:l.nodes[R]}},a={args:{}},e={args:{claimRewardsAsyncSnapshot:r.waiting()}},o={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new S)}},i={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new A(p))}},s={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new w(p))}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new g(p,u))}},m={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
