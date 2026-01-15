import{b as a,a as r}from"./provide_async_states-CKGzWnoG.js";import{h as N}from"./array_buffer-BGAdkDgu.js";import"./blocks-CTgVmMXl.js";import{n as _}from"./nodes-9I9c2iOF.js";import{Z as P,P as D,a as T,b as E,c as R}from"./delegation_ui-CI9ELwcb.js";import{f as F,I as v,F as e,a as W}from"./example_data-DfmhO04q.js";import{D as f}from"./validator_confirmed_example-tKcPoeVo.js";import"./iframe-ChMM8fie.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DipucN8t.js";import"./loading_provider-DLgXNpIx.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-_rmSu-kQ.js";import"./functional-DT4GooI6.js";import"./monetary_value-CL5YFX4A.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./tagged_base64-YfeKLRN5.js";import"./async_iterable_resolver-Clx53pFp.js";import"./circular_progress_indicator-DviuEGJj.js";import"./higher_order-BDzlKa4m.js";import"./text-CEhLEmI-.js";import"./error_display-BatT4qGA.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-ThaYTKrp.js";import"./url-fXESVLgZ.js";import"./not_found_error-DDa8r4Zj.js";import"./validator-nxDvP-Ih.js";import"./wallet_address-CE0HFCr5.js";import"./promise_resolver-YvW86r_O.js";import"./data_table-BhlvqEva.js";import"./chevron_up-4QltwyBf.js";import"./svg_icon_base-CS1Nu1nM.js";import"./en_US-KAK2ZBDO-B7Vdn-ew.js";import"./index-B53Fy-CQ.js";import"./index-Cv4Z6q07.js";import"./environment-C-GRiEhU.js";import"./environment_banner-2UahQs_R.js";import"./explorer-BbOChV9R.js";import"./cappuccino_hot_shot_query_service_api_context-lVXsrw-0.js";import"./espresso_logo_and_title-uH14OGTK.js";import"./wallet_address_text-lOU1Zxkw.js";import"./text-QrbuBXvR.js";import"./money_text-Bga5xRSR.js";import"./number_formatters_provider-CudGGieU.js";import"./locale_provider--Ln2ac7i.js";/* empty css               */import"./transactions_per_second_text-Dq-dziEi.js";import"./date_time_formatters_provider-BWsAdsOr.js";import"./number_text-CahUOGB6.js";import"./now_provider-CCB05c4h.js";import"./main-VIg0qpeX.js";import"./byte_size_text-BCct5yUn.js";import"./date_time_text-CsqteGv_.js";import"./full_hex_text-wUTAmwfT.js";import"./hex_text-DiwkJ0fA.js";import"./relative_time_since_date_text-CpWnS_tf.js";import"./tagged_base64_text-DfwL_HLi.js";import"./time_text-CGiZUZ1Y.js";import"./close-CqCrnWQG.js";import"./esp_input-Df_EIgHq.js";import"./payments-BZjd0XVB.js";import"./arrow_left-COxxN0XU.js";import"./arrow_right-DAqX41-b.js";import"./check_circle_filled-C0-R1RGO.js";import"./twitter_icon-BrQFkZJS.js";import"./copy-DOwzo494.js";import"./medium_icon-DFTazqSP.js";import"./espresso_logo-DVDi9sh1.js";import"./menu-DI9Mj2uU.js";import"./search_glass-BE45xqZB.js";import"./x_icon-NMj79Y0-.js";import"./web_socket_response_provider-BZ4Wvquq.js";import"./constants-CHXFL_FJ.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-DmSaFkJ0.js";import"./error_stream_consumer-CkqFpgCg.js";import"./espresso-CsXSlGY9.js";import"./inscription-rAIHyExI.js";import"./fake_data-DSmRBdpO.js";const ia={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new D)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new R(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new D)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new R(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const pa=["None","AmountTooLow","InsufficientBalance","SufficientBalance","ApproveSubmitting","ApproveWaiting","ApproveSubmitted","ApproveWaitingForReceipt","ApproveReceiptRetrieved","ApproveSubmissionError","NoApprovalNeeded","DelegateSubmitting","DelegateWaiting","DelegateSubmitted","DelegateWaitingForReceipt","DelegateReceiptRetrieved","DelegateSubmissionError"];export{o as AmountTooLow,d as ApproveReceiptRetrieved,l as ApproveSubmissionError,c as ApproveSubmitted,i as ApproveSubmitting,p as ApproveWaiting,m as ApproveWaitingForReceipt,h as DelegateReceiptRetrieved,y as DelegateSubmissionError,A as DelegateSubmitted,g as DelegateSubmitting,S as DelegateWaiting,w as DelegateWaitingForReceipt,n as InsufficientBalance,u as NoApprovalNeeded,t as None,s as SufficientBalance,pa as __namedExportsOrder,ia as default};
