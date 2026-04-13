import{b as r,a as t}from"./provide_async_states-CvBr9k-N.js";import{h as S}from"./array_buffer_hex-Bcc-7BbE.js";import"./blocks-36ZEPcvJ.js";import{n as l}from"./nodes-BsbvMhdT.js";import{M as h,P as A,a as g,b as w,c as u}from"./staking_modal_validator_confirmed_content-Mmk42Y1B.js";import{f as W,F as p,a as y,c}from"./example_data-DsIHIzfx.js";import{D as d}from"./validator_confirmed_example-VJ62lsZh.js";/* empty css                      */import"./iframe-COKd2Os-.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-I8Cq7ni6.js";import"./loading_provider-CAiGDh4M.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BY4LX4kJ.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-t8f3m54J.js";import"./en_US-Y4ZOVFV4-NTqGcyym.js";import"./index-CLIMVHVb.js";import"./index-Dw0SlraX.js";import"./environment-4Hpi4MRm.js";import"./espresso-49O16mIn.js";import"./explorer-CSZf3dEM.js";import"./byte_size_text-B8oLdHc1.js";import"./number_formatters_provider-5P6oMbBj.js";import"./locale_provider-CRfUaY6B.js";import"./wallet_address_text-DCA28Uqg.js";import"./date_time_formatters_provider-KQLt3BJr.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CDMhlPwa.js";import"./full_hex_text-DhrOCfLO.js";import"./hex_text-DK79PIUk.js";import"./money_text-C-wrGRGL.js";import"./money_text_full-LCIKV8NP.js";import"./number_text-CAbUHr29.js";import"./relative_time_since_date_text-CnpaFYv_.js";import"./tagged_base64_text-VkJW1cYD.js";import"./time_text-hbHHO61s.js";import"./async_iterable_resolver-D6M1xbii.js";import"./promise_builder-DANtV8OO.js";import"./circular_progress_indicator-BaJ1dg1I.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-pqxv98-P.js";import"./data_table-CWGiaFxK.js";import"./chevron_up-0QfBWqbC.js";import"./hot_shot_query_service_api_context-T58k7YpJ.js";import"./height_and_address-CfMFdU6e.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-3kO0efKM.js";import"./not_found_error-BdUVpmTw.js";import"./validator-BgZRo16z.js";import"./stake_table-Bbtpv34V.js";import"./stake_table_field-CIreD0Dp.js";import"./espresso-BT1dUU-Q.js";import"./x_icon-BdiuL9tT.js";import"./twitter_icon-CDA43j3T.js";import"./vertical_scroll-e5WQDJ-j.js";import"./contexts-hMlxyYQ_.js";import"./url-CHjl5yfO.js";import"./main-DmmonIlr.js";import"./esp_input-DBtO5HVz.js";import"./esp_symbol-CQdKNGz_.js";import"./text-BqLc_lNB.js";import"./fake_data-qerbZ90X.js";const Mr={title:"Delegation UI/Staking Modal/States/Withdraw Claim",...d,args:{...d.args,selection:new h(S.encode(l[c].address)),validator:W.nodes[c]}},a={args:{}},i={args:{claimWithDrawalAsyncSnapshot:r.waiting()}},o={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new w)}},e={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new g(p))}},s={args:{claimWithDrawalAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimWithDrawalAsyncSnapshot:r.withData(t.done,new A(p,y))}},m={args:{claimWithDrawalAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ur=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Ur as __namedExportsOrder,Mr as default};
