import{b as r,a as t}from"./provide_async_states-B6s17Xt-.js";import{h as S}from"./array_buffer_hex-K4SX2B-7.js";import"./blocks-DUPxZJN1.js";import{n as l}from"./nodes-B9V7XXPx.js";import{O as h,P as A,a as g,b as w,c as u}from"./staking_modal_validator_confirmed_content-BC69k9_D.js";import{f as W,F as p,a as y,c}from"./example_data-CWRmpzs7.js";import{D as d}from"./validator_confirmed_example-Dxln5BqI.js";/* empty css                      */import"./iframe-BnfkL8Kh.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DR0SepNE.js";import"./loading_provider-D7jVFZnN.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./unimplemented_error-CMF8SzXs.js";import"./base64-ClQJ-u6S.js";import"./functional-CFnOe1PN.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DN71IgaJ.js";import"./bigint-CufIvmoo.js";import"./data-Bx35I0WQ.js";import"./tagged_base64-R5asr4-X.js";import"./higher_order-DQHFbP0d.js";import"./en_US-Y4ZOVFV4-Bv8LW7As.js";import"./index-DexEU5NC.js";import"./index-BG56inAp.js";import"./espresso-DZCeyC8X.js";import"./explorer-B7y7w-nQ.js";import"./byte_size_text-B76LDok-.js";import"./number_formatters_provider-Bn0oY0TV.js";import"./locale_provider-CYJgRcn0.js";import"./wallet_address_text-6-IkVQhj.js";import"./date_time_formatters_provider-Ce8bEeDE.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-C0tSpfk5.js";import"./full_hex_text-B9F7kEcQ.js";import"./hex_text-BF6HsMV1.js";import"./money_text-D7zHf1Cp.js";import"./money_text_full-D40dbKHR.js";import"./number_text-BnuGQVAX.js";import"./percentage_text-DqJBck8H.js";import"./relative_time_since_date_text-ZWzH2UAR.js";import"./tagged_base64_text-BEZsdLdo.js";import"./time_text-CTnIpnRY.js";import"./async_iterable_resolver-Ddg_3UE-.js";import"./promise_builder-DBobNSv0.js";import"./array_buffer_base64-DkONyiFy.js";import"./wallet_address-Cy_sXQzx.js";import"./fetch_error-7gQ_WRN7.js";import"./not_found_error-l32Q-ON6.js";import"./summary_histograms-CBvVkNXk.js";import"./stake_table-vtegmqEX.js";import"./circular_progress_indicator-ASlMJQs_.js";import"./promise_resolver-meuzv9ZO.js";import"./data_table--Eyj7eBX.js";import"./chevron_up-De1rCEk7.js";import"./espresso-BHYjCLiG.js";import"./x_icon-CH2hZlfy.js";import"./twitter_icon-BG46ZLRr.js";import"./vertical_scroll-Dmhye8Fv.js";import"./contexts-u-CuQ2IN.js";import"./main-BT_9GOFP.js";import"./esp_input-O7TNES4x.js";import"./text-BvWMTP7G.js";import"./fake_data-CSksEl3l.js";const Ir={title:"Delegation UI/Staking Modal/States/Withdraw Claim",...d,args:{...d.args,selection:new h(S.encode(l[c].address)),validator:W.nodes[c]}},a={args:{}},i={args:{claimWithDrawalAsyncSnapshot:r.waiting()}},o={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new w)}},e={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new g(p))}},s={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimWithDrawalAsyncSnapshot:r.withData(t.done,new A(p,y))}},m={args:{claimWithDrawalAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Kr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Kr as __namedExportsOrder,Ir as default};
