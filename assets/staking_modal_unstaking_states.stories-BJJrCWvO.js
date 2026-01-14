import{b as r,a as t}from"./provide_async_states-DlviSoxq.js";import{h}from"./array_buffer-OWUzmdpG.js";import"./blocks-Dw_RhIDq.js";import{n as y}from"./nodes-BcMKYiFz.js";import{Y as w,P as E,a as T,b as R,c as P}from"./staking_modal_validator_confirmed_content-DmWNTgiF.js";import{f as W,I as l,F as A,a as D}from"./example_data-DtmLO_fR.js";import{D as f}from"./validator_confirmed_example-bUjJH8au.js";import"./staking_modal-D6EDZXK5.js";import"./iframe-uLWYWIdy.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-wCUWR71U.js";import"./loading_provider-BM5-2tPO.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-B7nptaaw.js";import"./base64-C9eISNYa.js";import"./functional-DsFqNm-o.js";import"./monetary_value-B8_AgdSi.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./promise_resolver-BocC3IZa.js";import"./en_US-KAK2ZBDO-BGkHvYuf.js";import"./index-B2AoEzCK.js";import"./index-DmRnPi0A.js";import"./environment-Dcr2wKao.js";import"./espresso-Dk6FQ3-7.js";import"./explorer-ykrKhyuT.js";import"./text-CEhLEmI-.js";import"./async_iterable_resolver-KnDWoCAg.js";import"./data_table-CtQ5bjYG.js";import"./chevron_up-BlhLCVww.js";import"./svg_icon_base-kLW-7jgl.js";import"./higher_order-BV5WAo3w.js";import"./height_and_address-BuKJdZLP.js";import"./url-D1AcOu20.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./cappuccino_hot_shot_query_service_api_context-joxNeeWu.js";import"./money_text-8MdYa69j.js";import"./number_formatters_provider-BJawDDf5.js";import"./locale_provider-CWIPDalB.js";/* empty css               */import"./circular_progress_indicator-BhHLUWnl.js";import"./error_display-DcLgc2Yz.js";import"./close-oYUC2YLn.js";import"./wallet_address_text-C-xZCVSm.js";import"./main-zlQ4Gp--.js";import"./now_provider-b5eqaHEI.js";import"./esp_input-C8YML02c.js";import"./text-YLHjhMV3.js";import"./transactions_per_second_text-D9u07ye5.js";import"./date_time_formatters_provider-DTa7qZb-.js";import"./byte_size_text-CcmMYnIy.js";import"./date_time_text-BPg9gf0T.js";import"./full_hex_text-IJaD05bO.js";import"./hex_text-CyJ0gTKK.js";import"./number_text-DsiwwU3j.js";import"./relative_time_since_date_text-DZ8q2cCw.js";import"./tagged_base64_text-CI2MD-yf.js";import"./time_text-aTJSNRK6.js";import"./fake_data-B84GRuqr.js";const x0={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},a={args:{amount:"0"}},e={args:{amount:"1250000000000000000000"}},o={args:{amount:"2500000000000000000000"}},n={args:{amount:"3750000000000000000000"}},s={args:{amount:"5000000000000000000000"}},i={args:{amount:"50000000000000000000000"}},m={args:{amount:"0"}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new E)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new P(A,D))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const M0=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{i as InsufficientStake,a as None,e as Option25Percent,o as Option50Percent,n as Option75Percent,s as OptionAll,g as ReceiptRetrieved,S as SubmissionError,u as Submitted,c as Submitting,m as SufficientStake,p as Waiting,d as WaitingForReceipt,M0 as __namedExportsOrder,x0 as default};
