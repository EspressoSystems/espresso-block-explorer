import{b as a,a as r}from"./provide_async_states-qfRrmFtc.js";import{h as N}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as _}from"./nodes-DdUtUYCE.js";import{_ as P,P as D,a as T,b as E,c as R}from"./delegation_ui-Cm2mcbH8.js";import{f as F,F as e,a as W,I as v}from"./example_data-RBJwLR1x.js";import{D as f}from"./validator_confirmed_example-C2xkFbW5.js";import"./iframe-DVElLztL.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-8bonweiP.js";import"./loading_provider-BwV9SyfY.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-D4BUimcr.js";import"./higher_order-D3ayJwRx.js";import"./en_US-Y4ZOVFV4-C-C-CP8V.js";import"./index-CBEmrpSc.js";import"./index-C0xT9PqR.js";import"./environment-Hs4rX9CU.js";import"./environment_banner-tYc_K9FB.js";import"./text-CEhLEmI-.js";import"./explorer-B7gEjuIh.js";import"./wallet_address_text-BIBCXawL.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-CNyUCkHP.js";import"./circular_progress_indicator-D7M0EbZA.js";import"./error_display-BHPmsRMs.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-B9QWxrrJ.js";import"./data_table-B4k9tCFn.js";import"./chevron_up-C0hUPjmj.js";import"./svg_icon_base-CkxnyFHT.js";import"./cappuccino_hot_shot_query_service_api_context-B4Hih9qf.js";import"./text--YrTfJE3.js";import"./money_text-BVEhEAn6.js";import"./number_formatters_provider-amKtj06S.js";import"./locale_provider-DQ-ADSEU.js";/* empty css               */import"./main-C8mtZeD2.js";import"./now_provider-CdcVy4pF.js";import"./transactions_per_second_text-CvB0_qmw.js";import"./date_time_formatters_provider-cwztD3ji.js";import"./esp_input-CnGELIQJ.js";import"./esp_symbol-1dEOAbUp.js";import"./byte_size_text-DZn34SsL.js";import"./date_time_text-CvS8iW3y.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-BhXF56pB.js";import"./number_text-Di5ybNHr.js";import"./relative_time_since_date_text-Cs2mwuoy.js";import"./tagged_base64_text-iWIJ9zak.js";import"./time_text-Dg4sjyKf.js";import"./money_text_full-CkWZE1jl.js";import"./container_loading-BxSoVJ6V.js";import"./loading_shimmer-DsmzrhKG.js";import"./skeleton_content-CFCEKyZq.js";import"./geo_json_view-C7mQ0BRv.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-BKIrAhvE.js";import"./world_map_dots_full_resolution-XLjJvxSP.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-C27axx6O.js";import"./world_map_dots_population_resolver-CDEwUrx2.js";import"./histogram_section_title-DCgC8vZd.js";import"./typography-GeXNTPHb.js";import"./payments-B0JQyv5J.js";import"./arrow_left-DBarFwgo.js";import"./arrow_right-mBOlkFJI.js";import"./check_circle_filled-BQXSmJgu.js";import"./twitter_icon-wvpjitRU.js";import"./close-Ax_pLvMG.js";import"./copy-DPJqZE1B.js";import"./medium_icon-DHMjGUFI.js";import"./espresso_logo-C5OThuFR.js";import"./menu-DoITa4oY.js";import"./search_glass-ozQP_SIm.js";import"./x_icon-B-5f3pdz.js";import"./pie_chart-CKqFsm4M.js";import"./web_socket_status-CYP1m0gv.js";import"./web_socket_response_provider-DDlaKvqS.js";import"./cappuccino_node_validator_service_api_context-BPhi0Nez.js";import"./error_stream_consumer-udfRohDz.js";import"./espresso-BfXbzjCW.js";import"./inscription-lyh_GhK4.js";import"./fake_data-CArPIdA2.js";const Ta={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    amount: ''
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '500000000000000000'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '500000000000000000000000000'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowance: '1250000000000000000',
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Approval failed'))
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowance: '1250000000000000000',
    amount: '1250000000000000000'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Delegation failed'))
  }
}`,...y.parameters?.docs?.source}}};const Ea=["None","AmountTooLow","InsufficientBalance","SufficientBalance","ApproveSubmitting","ApproveWaiting","ApproveSubmitted","ApproveWaitingForReceipt","ApproveReceiptRetrieved","ApproveSubmissionError","NoApprovalNeeded","DelegateSubmitting","DelegateWaiting","DelegateSubmitted","DelegateWaitingForReceipt","DelegateReceiptRetrieved","DelegateSubmissionError"];export{o as AmountTooLow,d as ApproveReceiptRetrieved,l as ApproveSubmissionError,c as ApproveSubmitted,i as ApproveSubmitting,p as ApproveWaiting,m as ApproveWaitingForReceipt,h as DelegateReceiptRetrieved,y as DelegateSubmissionError,A as DelegateSubmitted,g as DelegateSubmitting,S as DelegateWaiting,w as DelegateWaitingForReceipt,n as InsufficientBalance,u as NoApprovalNeeded,t as None,s as SufficientBalance,Ea as __namedExportsOrder,Ta as default};
