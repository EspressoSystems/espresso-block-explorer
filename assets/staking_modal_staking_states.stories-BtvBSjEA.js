import{b as a,a as r}from"./provide_async_states-DmnEdIed.js";import{h as N}from"./array_buffer-DFcBajus.js";import"./blocks-6yclG0ka.js";import{n as _}from"./nodes-B70Gne2-.js";import{_ as P,P as D,a as T,b as E,c as R}from"./delegation_ui-Dfk8_Ja9.js";import{f as F,F as e,a as W,I as v}from"./example_data-C-tEbE_h.js";import{D as f}from"./validator_confirmed_example-DEWR7pXZ.js";import"./iframe-FW1O3eUf.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BbqeYGia.js";import"./loading_provider-B2nS0TYu.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-D0dGm0KW.js";import"./string-BCb2Pt7Y.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BB_FSuj1.js";import"./base64-CqV3gweX.js";import"./functional-DzI6oRAM.js";import"./monetary_value-DXbf4XhX.js";import"./bigint-DeSLcxHO.js";import"./data-D5p7UK42.js";import"./tagged_base64-B_lPSlUf.js";import"./espresso_logo_and_title-Cpk27zQ7.js";import"./higher_order-CZN8Z6mQ.js";import"./en_US-Y4ZOVFV4-D6l1wGt1.js";import"./index-BMEX-Xo9.js";import"./index-CHh1lDEX.js";import"./environment-BdOu7xIG.js";import"./environment_banner-B_DoCrpC.js";import"./text-CEhLEmI-.js";import"./explorer-gEBvlY49.js";import"./wallet_address_text-DHizsQFv.js";import"./url-CDyI1Tkc.js";import"./wallet_address-BnrZuCWl.js";import"./validator-C0io6BAI.js";import"./async_iterable_resolver-SpZR650Y.js";import"./circular_progress_indicator-CWpV8at4.js";import"./error_display-DUnWuHBo.js";import"./fetch_error-BobVF34n.js";import"./height_and_address-DcOJdVP6.js";import"./not_found_error-BA1XOWZ_.js";import"./promise_resolver-jv1lS6uM.js";import"./data_table-t1i8txp6.js";import"./chevron_up-B9MjSPlu.js";import"./svg_icon_base-4ERQ15ko.js";import"./cappuccino_hot_shot_query_service_api_context-B4Z1Zwnb.js";import"./text-CnkOFZTt.js";import"./money_text-ChWSLHbP.js";import"./number_formatters_provider-BUUmLBk_.js";import"./locale_provider-D1mYVGxJ.js";/* empty css               */import"./main-W2QTc1Kp.js";import"./now_provider-yzpWQ6ve.js";import"./transactions_per_second_text-B4PqBScI.js";import"./date_time_formatters_provider-CpNhPCjr.js";import"./esp_input-D3TxqRIe.js";import"./esp_symbol-BuaN8iyq.js";import"./byte_size_text-by3M3sfe.js";import"./date_time_text-CrmlPWV7.js";import"./full_hex_text-Dk7uaXQs.js";import"./hex_text-C4mrH0FW.js";import"./number_text-DgAnb3aC.js";import"./relative_time_since_date_text-Db7pPjvM.js";import"./tagged_base64_text-_xODqK5j.js";import"./time_text-66zGsxPx.js";import"./money_text_full-Ct4kOFxh.js";import"./container_loading-QQka1RHr.js";import"./loading_shimmer-OObC7tiF.js";import"./skeleton_content-C2ZsUKe2.js";import"./geo_json_view-BcXuOb8Q.js";import"./constants-BJTQG6zR.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-Dl76aqX5.js";import"./world_map_dots_full_resolution-CXKZKfWa.js";import"./world_map_grid-BAHY-Ov_.js";import"./svg_tool_tip-BCcLIcjj.js";import"./world_map_dots_population_resolver-9IogNjWI.js";import"./histogram_section_title-D8iKxG55.js";import"./typography-CO4RcCVs.js";import"./payments-CgkHCHnO.js";import"./arrow_left-BnOHUec_.js";import"./arrow_right-r8ZTvxc3.js";import"./check_circle_filled-CwHJEwU6.js";import"./twitter_icon-EweXPeDP.js";import"./close-1Fq5CU1-.js";import"./copy-CTHVe2vX.js";import"./medium_icon-btL0yDNE.js";import"./espresso_logo-BaPS_vjc.js";import"./menu-HXfQ_FDs.js";import"./search_glass-CEgjH1Ac.js";import"./x_icon--JfeSucJ.js";import"./pie_chart-BgOv_Tzd.js";import"./web_socket_status-CwS5GVCk.js";import"./web_socket_response_provider-BMiQ2cQw.js";import"./cappuccino_node_validator_service_api_context-C8OgXp00.js";import"./error_stream_consumer-Dti6mGsJ.js";import"./espresso-OnZrmjo8.js";import"./inscription-DlgZ6EW8.js";import"./fake_data-CCKsxY5F.js";const Ta={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
