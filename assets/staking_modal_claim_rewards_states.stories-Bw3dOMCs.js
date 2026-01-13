import{b as r,a as t}from"./provide_async_states-BPo97x0k.js";import{C as d,P as S,a as A,b as w,c as g}from"./staking_modal_validator_confirmed_content-CUa-HwK1.js";import{f as l,I as R,F as p,a as u}from"./example_data-BscMv3ie.js";import{D as c}from"./validator_confirmed_example-DPP6Z9wy.js";import"./staking_modal-Do4MHDeZ.js";import"./iframe-BwY8Nc_o.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BIkZvgj5.js";import"./loading_provider--Fab2jEg.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./functional-DsFqNm-o.js";import"./promise_resolver-DxcIaC3u.js";import"./en_US-KAK2ZBDO-DxOIn0lN.js";import"./index-CFEphY2-.js";import"./index-CY-YAoDF.js";import"./environment-VSprtbEQ.js";import"./espresso-BTfRSNo8.js";import"./explorer-BCdhEcQN.js";import"./bigint-XOkPApkc.js";import"./base64-C9eISNYa.js";import"./text-CEhLEmI-.js";import"./array_buffer-OWUzmdpG.js";import"./async_iterable_resolver-BJTnAEt4.js";import"./data_table-B2ZnAtti.js";import"./typography-PELJ4Pi9.js";import"./higher_order-CDuDe3l-.js";import"./chevron_up-BWu4GSwW.js";import"./svg_icon_base-C4H5d3RL.js";import"./height_and_address-BuKJdZLP.js";import"./tagged_base64-OJExTSEK.js";import"./url-D1AcOu20.js";import"./monetary_value-B8_AgdSi.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./cappuccino_hot_shot_query_service_api_context-nky5ymNO.js";import"./blocks-Dw_RhIDq.js";import"./data-D5p7UK42.js";import"./nodes-BcMKYiFz.js";import"./money_text-BxDHRD8P.js";import"./number_formatters_provider-DMP6I6Q-.js";import"./locale_provider-CuUrHs_V.js";/* empty css               */import"./circular_progress_indicator-PtqlFbdL.js";import"./error_display-BM0cm_q_.js";import"./close-w1l8Rw2p.js";import"./wallet_address_text-Ck-Pg-ra.js";import"./main-DlwbMfjP.js";import"./now_provider--GGOYw_8.js";import"./esp_input-Cua7oE_G.js";import"./text-CYiZ0tvy.js";import"./transactions_per_second_text-CvJU-ydw.js";import"./date_time_formatters_provider-DyEL5Gtx.js";import"./byte_size_text-CzTF4zt-.js";import"./date_time_text-B7XZh9vE.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-SnO3_FxC.js";import"./number_text-v_ckRp1n.js";import"./relative_time_since_date_text-k8xSGfZM.js";import"./tagged_base64_text-C_twqSLi.js";import"./time_text-hYMI7GpY.js";import"./fake_data-DTtCxhF0.js";const Ir={title:"Delegation UI/Staking Modal/States/Claim Rewards",...c,args:{...c.args,selection:new d,validator:l.nodes[R]}},a={args:{}},e={args:{claimRewardsAsyncSnapshot:r.waiting()}},o={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new S)}},i={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new A(p))}},s={args:{claimRewardsAsyncSnapshot:r.withData(t.active,new w(p))}},n={args:{claimRewardsAsyncSnapshot:r.withData(t.done,new g(p,u))}},m={args:{claimRewardsAsyncSnapshot:r.withError(t.done,new Error("Claim Rewards failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const br=["None","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{a as None,n as ReceiptRetrieved,m as SubmissionError,i as Submitted,e as Submitting,o as Waiting,s as WaitingForReceipt,br as __namedExportsOrder,Ir as default};
