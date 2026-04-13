import{b as r,a as t}from"./provide_async_states-BLc5bTZ0.js";import{h as S}from"./array_buffer_hex-CckWFzk6.js";import"./blocks-BbFMk1LL.js";import{n as A}from"./nodes-DYObZsIN.js";import{a1 as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-t87xtcK9.js";import{f as y,F as p,a as w,d as c}from"./example_data-D1WAeZXq.js";import{D as d}from"./validator_confirmed_example-_KTZxM2F.js";/* empty css                      */import"./iframe-hlwV_SLU.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BSV0zpAE.js";import"./loading_provider-CI0TwLTi.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BNblu8WE.js";import"./base64-CIn2pRZH.js";import"./functional-BN9f4kvo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./higher_order-Bp4R-A8k.js";import"./en_US-Y4ZOVFV4-C-OvKtvK.js";import"./index-CGMwTfK0.js";import"./index-CYUkv1Xd.js";import"./environment-Cv4naIGX.js";import"./espresso-DImMLWf1.js";import"./explorer-D38tx1PK.js";import"./byte_size_text-BgslcI2e.js";import"./number_formatters_provider-CEQBq_Hk.js";import"./locale_provider-CqJhpaHu.js";import"./wallet_address_text-BqWLkzAy.js";import"./date_time_formatters_provider-BxM1oZxM.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-BhhckyY6.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-BSzh9nv8.js";import"./money_text-D0p8Y8LA.js";import"./money_text_full-mZgISvxt.js";import"./number_text-yX4kUbct.js";import"./relative_time_since_date_text-DQ4LaVpf.js";import"./tagged_base64_text-ClsJrra7.js";import"./time_text-CBcl6HLm.js";import"./async_iterable_resolver-C37PYTRa.js";import"./promise_builder-BbSOfBLU.js";import"./circular_progress_indicator-BYNpNd3l.js";import"./fetch_error-D_X_Gp90.js";import"./promise_resolver-Bp93tTVp.js";import"./data_table-CicpzNPW.js";import"./chevron_up-dgUFrBAe.js";import"./hot_shot_query_service_api_context-DajRkavg.js";import"./height_and_address-CapDqxpf.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./wallet_address-BHYnm282.js";import"./not_found_error-BdUVpmTw.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./stake_table_field-C5Qabowc.js";import"./espresso-BZJBsDaB.js";import"./x_icon-CJRFBdJv.js";import"./twitter_icon-oVpBjcyD.js";import"./vertical_scroll-FnAk83CC.js";import"./contexts-ybm56a8S.js";import"./url-CHjl5yfO.js";import"./main-WDcO2_Ep.js";import"./esp_input-Cuc0mbnl.js";import"./text-xcqior87.js";import"./fake_data-BHSHvHhw.js";const Vr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new h)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new u(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new E(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Validator Exit failed'))
  }
}`,...m.parameters?.docs?.source}}};const Mr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Mr as __namedExportsOrder,Vr as default};
