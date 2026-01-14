import{b as r,a as t}from"./provide_async_states-DlviSoxq.js";import{h as S}from"./array_buffer-OWUzmdpG.js";import"./blocks-Dw_RhIDq.js";import{n as l}from"./nodes-BcMKYiFz.js";import{J as h,P as A,a as g,b as w,c as u}from"./staking_modal_validator_confirmed_content-DmWNTgiF.js";import{f as W,c,F as p,a as y}from"./example_data-DtmLO_fR.js";import{D as d}from"./validator_confirmed_example-bUjJH8au.js";import"./staking_modal-D6EDZXK5.js";import"./iframe-uLWYWIdy.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-wCUWR71U.js";import"./loading_provider-BM5-2tPO.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./base64-C9eISNYa.js";import"./functional-DsFqNm-o.js";import"./monetary_value-B8_AgdSi.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./promise_resolver-BocC3IZa.js";import"./en_US-KAK2ZBDO-BGkHvYuf.js";import"./index-B2AoEzCK.js";import"./index-DmRnPi0A.js";import"./environment-Dcr2wKao.js";import"./espresso-Dk6FQ3-7.js";import"./explorer-ykrKhyuT.js";import"./text-CEhLEmI-.js";import"./async_iterable_resolver-KnDWoCAg.js";import"./data_table-CtQ5bjYG.js";import"./chevron_up-BlhLCVww.js";import"./svg_icon_base-kLW-7jgl.js";import"./higher_order-BV5WAo3w.js";import"./height_and_address-BuKJdZLP.js";import"./url-D1AcOu20.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./cappuccino_hot_shot_query_service_api_context-joxNeeWu.js";import"./money_text-8MdYa69j.js";import"./number_formatters_provider-BJawDDf5.js";import"./locale_provider-CWIPDalB.js";/* empty css               */import"./circular_progress_indicator-BhHLUWnl.js";import"./error_display-DcLgc2Yz.js";import"./close-oYUC2YLn.js";import"./wallet_address_text-C-xZCVSm.js";import"./main-zlQ4Gp--.js";import"./now_provider-b5eqaHEI.js";import"./esp_input-C8YML02c.js";import"./text-YLHjhMV3.js";import"./transactions_per_second_text-D9u07ye5.js";import"./date_time_formatters_provider-DTa7qZb-.js";import"./byte_size_text-CcmMYnIy.js";import"./date_time_text-BPg9gf0T.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-CyJ0gTKK.js";import"./number_text-DsiwwU3j.js";import"./relative_time_since_date_text-DZ8q2cCw.js";import"./tagged_base64_text-CI2MD-yf.js";import"./time_text-aTJSNRK6.js";import"./fake_data-B84GRuqr.js";const Hr={title:"Delegation UI/Staking Modal/States/Withdraw Claim",...d,args:{...d.args,selection:new h(S.encode(l[c].address)),validator:W.nodes[c]}},a={args:{}},i={args:{claimWithDrawalAsyncSnapshot:r.waiting()}},o={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new A)}},e={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new g(p))}},s={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new w(p))}},n={args:{claimWithDrawalAsyncSnapshot:r.withData(t.done,new u(p,y))}},m={args:{claimWithDrawalAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Validator Exit failed'))
  }
}`,...m.parameters?.docs?.source}}};const Ir=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Ir as __namedExportsOrder,Hr as default};
