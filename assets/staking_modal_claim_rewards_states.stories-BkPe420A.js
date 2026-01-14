import{b as r,a as t}from"./provide_async_states-DlviSoxq.js";import{C as d,P as S,a as A,b as w,c as g}from"./staking_modal_validator_confirmed_content-DmWNTgiF.js";import{f as l,I as R,F as p,a as u}from"./example_data-DtmLO_fR.js";import{D as c}from"./validator_confirmed_example-bUjJH8au.js";import"./staking_modal-D6EDZXK5.js";import"./iframe-uLWYWIdy.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-wCUWR71U.js";import"./loading_provider-BM5-2tPO.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./functional-DsFqNm-o.js";import"./promise_resolver-BocC3IZa.js";import"./en_US-KAK2ZBDO-BGkHvYuf.js";import"./index-B2AoEzCK.js";import"./index-DmRnPi0A.js";import"./environment-Dcr2wKao.js";import"./espresso-Dk6FQ3-7.js";import"./explorer-ykrKhyuT.js";import"./bigint-XOkPApkc.js";import"./base64-C9eISNYa.js";import"./text-CEhLEmI-.js";import"./array_buffer-OWUzmdpG.js";import"./async_iterable_resolver-KnDWoCAg.js";import"./data_table-CtQ5bjYG.js";import"./chevron_up-BlhLCVww.js";import"./svg_icon_base-kLW-7jgl.js";import"./higher_order-BV5WAo3w.js";import"./height_and_address-BuKJdZLP.js";import"./tagged_base64-OJExTSEK.js";import"./url-D1AcOu20.js";import"./monetary_value-B8_AgdSi.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./cappuccino_hot_shot_query_service_api_context-joxNeeWu.js";import"./blocks-Dw_RhIDq.js";import"./data-D5p7UK42.js";import"./nodes-BcMKYiFz.js";import"./money_text-8MdYa69j.js";import"./number_formatters_provider-BJawDDf5.js";import"./locale_provider-CWIPDalB.js";/* empty css               */import"./circular_progress_indicator-BhHLUWnl.js";import"./error_display-DcLgc2Yz.js";import"./close-oYUC2YLn.js";import"./wallet_address_text-C-xZCVSm.js";import"./main-zlQ4Gp--.js";import"./now_provider-b5eqaHEI.js";import"./esp_input-C8YML02c.js";import"./text-YLHjhMV3.js";import"./transactions_per_second_text-D9u07ye5.js";import"./date_time_formatters_provider-DTa7qZb-.js";import"./byte_size_text-CcmMYnIy.js";import"./date_time_text-BPg9gf0T.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-CyJ0gTKK.js";import"./number_text-DsiwwU3j.js";import"./relative_time_since_date_text-DZ8q2cCw.js";import"./tagged_base64_text-CI2MD-yf.js";import"./time_text-aTJSNRK6.js";import"./fake_data-B84GRuqr.js";const Fr={title:"Delegation UI/Staking Modal/States/Claim Rewards",...c,args:{...c.args,selection:new d,validator:l.nodes[R]}},a={args:{}},e={args:{claimRewardsAsyncSnapshot:r.waiting()}},o={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new S)}},i={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new A(p))}},s={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new w(p))}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new g(p,u))}},m={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
