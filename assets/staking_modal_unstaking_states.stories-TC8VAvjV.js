import{b as r,a as t}from"./provide_async_states-BPo97x0k.js";import{h}from"./array_buffer-OWUzmdpG.js";import"./blocks-Dw_RhIDq.js";import{n as y}from"./nodes-BcMKYiFz.js";import{Y as w,P as E,a as T,b as R,c as P}from"./staking_modal_validator_confirmed_content-CUa-HwK1.js";import{f as W,I as l,F as A,a as D}from"./example_data-BscMv3ie.js";import{D as f}from"./validator_confirmed_example-DPP6Z9wy.js";import"./staking_modal-Do4MHDeZ.js";import"./iframe-BwY8Nc_o.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BIkZvgj5.js";import"./loading_provider--Fab2jEg.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./base64-C9eISNYa.js";import"./functional-DsFqNm-o.js";import"./monetary_value-B8_AgdSi.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./promise_resolver-DxcIaC3u.js";import"./en_US-KAK2ZBDO-DxOIn0lN.js";import"./index-CFEphY2-.js";import"./index-CY-YAoDF.js";import"./environment-VSprtbEQ.js";import"./espresso-BTfRSNo8.js";import"./explorer-BCdhEcQN.js";import"./text-CEhLEmI-.js";import"./async_iterable_resolver-BJTnAEt4.js";import"./data_table-B2ZnAtti.js";import"./typography-PELJ4Pi9.js";import"./higher_order-CDuDe3l-.js";import"./chevron_up-BWu4GSwW.js";import"./svg_icon_base-C4H5d3RL.js";import"./height_and_address-BuKJdZLP.js";import"./url-D1AcOu20.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./cappuccino_hot_shot_query_service_api_context-nky5ymNO.js";import"./money_text-BxDHRD8P.js";import"./number_formatters_provider-DMP6I6Q-.js";import"./locale_provider-CuUrHs_V.js";/* empty css               */import"./circular_progress_indicator-PtqlFbdL.js";import"./error_display-BM0cm_q_.js";import"./close-w1l8Rw2p.js";import"./wallet_address_text-Ck-Pg-ra.js";import"./main-DlwbMfjP.js";import"./now_provider--GGOYw_8.js";import"./esp_input-Cua7oE_G.js";import"./text-CYiZ0tvy.js";import"./transactions_per_second_text-CvJU-ydw.js";import"./date_time_formatters_provider-DyEL5Gtx.js";import"./byte_size_text-CzTF4zt-.js";import"./date_time_text-B7XZh9vE.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-SnO3_FxC.js";import"./number_text-v_ckRp1n.js";import"./relative_time_since_date_text-k8xSGfZM.js";import"./tagged_base64_text-C_twqSLi.js";import"./time_text-hYMI7GpY.js";import"./fake_data-DTtCxhF0.js";const M0={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},a={args:{amount:"0"}},e={args:{amount:"1250000000000000000000"}},o={args:{amount:"2500000000000000000000"}},n={args:{amount:"3750000000000000000000"}},s={args:{amount:"5000000000000000000000"}},i={args:{amount:"50000000000000000000000"}},m={args:{amount:"0"}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new E)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new P(A,D))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000000'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '2500000000000000000000'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '3750000000000000000000'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '5000000000000000000000'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '50000000000000000000000'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Undelegation failed'))
  }
}`,...S.parameters?.docs?.source}}};const V0=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{i as InsufficientStake,a as None,e as Option25Percent,o as Option50Percent,n as Option75Percent,s as OptionAll,g as ReceiptRetrieved,S as SubmissionError,u as Submitted,c as Submitting,m as SufficientStake,p as Waiting,d as WaitingForReceipt,V0 as __namedExportsOrder,M0 as default};
