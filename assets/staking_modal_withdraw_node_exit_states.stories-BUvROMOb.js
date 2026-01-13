import{b as r,a as t}from"./provide_async_states-BPo97x0k.js";import{h as S}from"./array_buffer-OWUzmdpG.js";import"./blocks-Dw_RhIDq.js";import{n as A}from"./nodes-BcMKYiFz.js";import{Z as g,P as E,a as l,b as h,c as u}from"./staking_modal_validator_confirmed_content-CUa-HwK1.js";import{f as y,d as c,F as p,a as w}from"./example_data-BscMv3ie.js";import{D as d}from"./validator_confirmed_example-DPP6Z9wy.js";import"./staking_modal-Do4MHDeZ.js";import"./iframe-BwY8Nc_o.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BIkZvgj5.js";import"./loading_provider--Fab2jEg.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./base64-C9eISNYa.js";import"./functional-DsFqNm-o.js";import"./monetary_value-B8_AgdSi.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./promise_resolver-DxcIaC3u.js";import"./en_US-KAK2ZBDO-DxOIn0lN.js";import"./index-CFEphY2-.js";import"./index-CY-YAoDF.js";import"./environment-VSprtbEQ.js";import"./espresso-BTfRSNo8.js";import"./explorer-BCdhEcQN.js";import"./text-CEhLEmI-.js";import"./async_iterable_resolver-BJTnAEt4.js";import"./data_table-B2ZnAtti.js";import"./typography-PELJ4Pi9.js";import"./higher_order-CDuDe3l-.js";import"./chevron_up-BWu4GSwW.js";import"./svg_icon_base-C4H5d3RL.js";import"./height_and_address-BuKJdZLP.js";import"./url-D1AcOu20.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./cappuccino_hot_shot_query_service_api_context-nky5ymNO.js";import"./money_text-BxDHRD8P.js";import"./number_formatters_provider-DMP6I6Q-.js";import"./locale_provider-CuUrHs_V.js";/* empty css               */import"./circular_progress_indicator-PtqlFbdL.js";import"./error_display-BM0cm_q_.js";import"./close-w1l8Rw2p.js";import"./wallet_address_text-Ck-Pg-ra.js";import"./main-DlwbMfjP.js";import"./now_provider--GGOYw_8.js";import"./esp_input-Cua7oE_G.js";import"./text-CYiZ0tvy.js";import"./transactions_per_second_text-CvJU-ydw.js";import"./date_time_formatters_provider-DyEL5Gtx.js";import"./byte_size_text-CzTF4zt-.js";import"./date_time_text-B7XZh9vE.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-SnO3_FxC.js";import"./number_text-v_ckRp1n.js";import"./relative_time_since_date_text-k8xSGfZM.js";import"./tagged_base64_text-C_twqSLi.js";import"./time_text-hYMI7GpY.js";import"./fake_data-DTtCxhF0.js";const Cr={title:"Delegation UI/Staking Modal/States/Withdraw Exit",...d,args:{...d.args,selection:new g(S.encode(A[c].address)),validator:y.nodes[c]}},a={args:{}},i={args:{claimExitAsyncSnapshot:r.waiting()}},o={args:{claimExitAsyncSnapshot:r.withData(t.active,new E)}},e={args:{claimExitAsyncSnapshot:r.withData(t.active,new l(p))}},s={args:{claimExitAsyncSnapshot:r.withData(t.active,new h(p))}},n={args:{claimExitAsyncSnapshot:r.withData(t.done,new u(p,w))}},m={args:{claimExitAsyncSnapshot:r.withError(t.done,new Error("Validator Exit failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,e as Submitted,i as Submitting,o as Waiting,s as WaitingForReceipt,Hr as __namedExportsOrder,Cr as default};
