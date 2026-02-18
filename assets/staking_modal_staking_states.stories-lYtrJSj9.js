import{b as a,a as r}from"./provide_async_states-DP7fjSSr.js";import{h as N}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as _}from"./nodes-DdUtUYCE.js";import{_ as P,P as D,a as T,b as E,c as R}from"./delegation_ui-DGDtqnb6.js";import{f as F,F as e,a as W,I as v}from"./example_data-27OFvxC7.js";import{D as f}from"./validator_confirmed_example-CDIGgjCf.js";import"./iframe-DRi1LiY1.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-BEXgs6IU.js";import"./loading_provider-BBseR82o.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-DEjauoKg.js";import"./higher_order-DchKpsaa.js";import"./en_US-Y4ZOVFV4-BQnmfEbP.js";import"./index-C93YOJ5V.js";import"./index-CKqPkkhs.js";import"./environment-zO1gQvtM.js";import"./environment_banner-CtK1qHHA.js";import"./text-CEhLEmI-.js";import"./explorer-ClBSSuhP.js";import"./wallet_address_text-n70taxNj.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-CBPhqZxh.js";import"./circular_progress_indicator-CiqjCoit.js";import"./error_display-M0sL8h_r.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-DIvXO9ok.js";import"./data_table-DWXjJZWb.js";import"./chevron_up-CIM7Ene_.js";import"./svg_icon_base-DRus6yG1.js";import"./cappuccino_hot_shot_query_service_api_context-Chu08wXh.js";import"./text-TLxmkbG3.js";import"./money_text-F8SApLtV.js";import"./number_formatters_provider-DrWfDPcd.js";import"./locale_provider-CADKL3Zh.js";/* empty css               */import"./main-CocYVYaq.js";import"./now_provider-DEU80TI-.js";import"./transactions_per_second_text-BiMQPfvJ.js";import"./date_time_formatters_provider-DrMqCwD5.js";import"./esp_input-RvH-Glkp.js";import"./esp_symbol-CzauJQg9.js";import"./byte_size_text-lB2paboN.js";import"./date_time_text-Bg02kt8U.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-CnqaSLum.js";import"./number_text-ohwb6YDX.js";import"./relative_time_since_date_text-GxfeHY5z.js";import"./tagged_base64_text-DkwvBY5G.js";import"./time_text-Br-TFifp.js";import"./money_text_full-EOBcLZWG.js";import"./container_loading-BLRHP393.js";import"./loading_shimmer-Jrr2h5jq.js";import"./skeleton_content-D6bR3BKC.js";import"./geo_json_view-CN635uy4.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-RwICT5dW.js";import"./world_map_dots_full_resolution-lor5Nd3D.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-DdCMQ8RD.js";import"./world_map_dots_population_resolver-C1cjS6Et.js";import"./histogram_section_title-QrPTWkHi.js";import"./typography-Z9f5k3zd.js";import"./payments-CNtjsist.js";import"./arrow_left-BHC10NFU.js";import"./arrow_right-OOR4nQg4.js";import"./check_circle_filled-D3-wVSyf.js";import"./twitter_icon-C0QIFos3.js";import"./close-g9tpRFX0.js";import"./copy-BKDlVIrr.js";import"./medium_icon-JZDQAO3R.js";import"./espresso_logo-C191vZ3i.js";import"./menu-CMQzjzwX.js";import"./search_glass-Dw1V1Nzv.js";import"./x_icon-nDEfMvYe.js";import"./pie_chart-xcFOjOHA.js";import"./web_socket_status-DmrXY11a.js";import"./web_socket_response_provider-DOlHj0r1.js";import"./cappuccino_node_validator_service_api_context-BD0Its1d.js";import"./error_stream_consumer-CYbAudL7.js";import"./espresso-Bhre11Gm.js";import"./inscription-lyh_GhK4.js";import"./fake_data-uuiCtrVo.js";const Ta={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
