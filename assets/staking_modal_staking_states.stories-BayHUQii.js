import{b as a,a as r}from"./provide_async_states-CDz20rjv.js";import{h as N}from"./array_buffer-DFcBajus.js";import"./blocks-6yclG0ka.js";import{n as _}from"./nodes-B70Gne2-.js";import{a0 as P,P as D,a as T,b as E,c as R}from"./delegation_ui-OeJzIxgH.js";import{f as F,F as e,a as W,I as v}from"./example_data-BWx5RIC7.js";import{D as f}from"./validator_confirmed_example-B0Pw38Ah.js";import"./iframe-Cvx6RpPY.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DuSHNFDm.js";import"./loading_provider-BVRuGC11.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-D0dGm0KW.js";import"./string-BCb2Pt7Y.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-BB_FSuj1.js";import"./base64-CqV3gweX.js";import"./functional-DzI6oRAM.js";import"./monetary_value-DXbf4XhX.js";import"./bigint-DeSLcxHO.js";import"./data-D5p7UK42.js";import"./tagged_base64-B_lPSlUf.js";import"./espresso_logo_and_title-eLIDDFqO.js";import"./higher_order-CcpOgoeh.js";import"./en_US-Y4ZOVFV4-2JVBEehU.js";import"./index-DV0fPn1x.js";import"./index-CF-oR5Dv.js";import"./environment-CucxJ3nv.js";import"./environment_banner-G5NC2_l1.js";import"./text-CEhLEmI-.js";import"./explorer-S4Yz8IV6.js";import"./wallet_address_text-CBt09lE1.js";import"./url-CDyI1Tkc.js";import"./wallet_address-BnrZuCWl.js";import"./validator-C0io6BAI.js";import"./async_iterable_resolver-CUN-UHo1.js";import"./circular_progress_indicator-BG7ryp-q.js";import"./error_display-CavvfYLv.js";import"./fetch_error-BobVF34n.js";import"./height_and_address-DcOJdVP6.js";import"./not_found_error-BA1XOWZ_.js";import"./promise_resolver-B3Bf1HFA.js";import"./data_table-CdvI3_gP.js";import"./chevron_up-bnQmtD7Q.js";import"./svg_icon_base-CJF1g_tc.js";import"./cappuccino_hot_shot_query_service_api_context-D7BJELZm.js";import"./text-CA9rPn0p.js";import"./money_text-DkZcradb.js";import"./number_formatters_provider-DSWMRQJW.js";import"./locale_provider-D5aNHbGy.js";/* empty css               */import"./main-DgtacgmD.js";import"./now_provider-C_TnA9uy.js";import"./transactions_per_second_text-DIvVI0Zv.js";import"./date_time_formatters_provider-DcUzUZDq.js";import"./esp_input-DsoEqUmz.js";import"./esp_symbol-Dv6JU26F.js";import"./byte_size_text-NLE3VhrF.js";import"./date_time_text-plZBolwB.js";import"./full_hex_text-Dk7uaXQs.js";import"./hex_text-ReM3eh9l.js";import"./number_text-6gO1h8MR.js";import"./relative_time_since_date_text-DcFvPw8b.js";import"./tagged_base64_text-BiKx3vV-.js";import"./time_text-D040jtBw.js";import"./money_text_full-BpgtwDjo.js";import"./container_loading-3YYrVjF0.js";import"./loading_shimmer-DfYfcWJ-.js";import"./skeleton_content-DsbU2c_Z.js";import"./geo_json_view-BoCpCRVQ.js";import"./constants-BJTQG6zR.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-Bc-Iym5z.js";import"./world_map_dots_full_resolution-Cf3TYfuc.js";import"./world_map_grid-BAHY-Ov_.js";import"./svg_tool_tip-YY6Ta1SX.js";import"./world_map_dots_population_resolver-A12LoaAT.js";import"./histogram_section_title-DpX7PZpr.js";import"./typography-B40_qrOR.js";import"./payments-xdGepafa.js";import"./arrow_left-CmGOnJdI.js";import"./arrow_right-Ms3c2eFC.js";import"./check_circle_filled-l-VtYo1v.js";import"./twitter_icon-BWWV6ALj.js";import"./close-DmDdD8l2.js";import"./copy-CUWUjZqu.js";import"./medium_icon-B7p6ho2u.js";import"./espresso_logo-DxQbk5YS.js";import"./menu-B1IFd90U.js";import"./search_glass-CCF_qhG6.js";import"./x_icon-BK1iCOfN.js";import"./pie_chart-BHily3Mq.js";import"./web_socket_status-CjXLCF2z.js";import"./web_socket_response_provider-DaB0ulvD.js";import"./cappuccino_node_validator_service_api_context-IWXFhumD.js";import"./error_stream_consumer-GJKCchvh.js";import"./espresso-stnEA2eC.js";import"./inscription-DlgZ6EW8.js";import"./fake_data-D6P17pw8.js";const Ta={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
