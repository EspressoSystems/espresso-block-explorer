import{b as a,a as r}from"./provide_async_states-Cod3hjlK.js";import{h as N}from"./array_buffer_hex-2CxW6xhL.js";import"./blocks-BEHlDsni.js";import{n as _}from"./nodes-DZ7P8xPE.js";import{a0 as P,P as D,a as T,b as E,c as R}from"./delegation_ui-Cxq0g7xF.js";import{f as F,F as e,a as W,I as v}from"./example_data-B_-K26w4.js";import{D as f}from"./validator_confirmed_example-J9uMMZd6.js";import"./iframe-BtlXJKZ1.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DZfionCo.js";import"./loading_provider-DTcNP4kZ.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./unimplemented_error-BDiuBEcJ.js";import"./base64-D2HwddJb.js";import"./functional-CHI4evRY.js";import"./monetary_value-BBaBP7s4.js";import"./data-D5p7UK42.js";import"./tagged_base64-C1c0MovD.js";import"./espresso_logo_and_title-Cvm7y2kN.js";import"./higher_order-DrPNsCRC.js";import"./en_US-Y4ZOVFV4-BIFYSQtk.js";import"./index-DVf-yhbM.js";import"./index-CzfUxczt.js";import"./environment-Diz87CJi.js";import"./environment_banner-BdcRPh3P.js";import"./text-CEhLEmI-.js";import"./explorer-vyYwTP8P.js";import"./wallet_address_text-BojWsZ4Q.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_base64-Df7I341a.js";import"./validator-CeWWAq22.js";import"./cappuccino_node_validator_service_api_context-BQHPWMpt.js";import"./height_and_address-bdNPMBCQ.js";import"./fetch_error-CpkjK4oN.js";import"./not_found_error-Dccy2lFm.js";import"./constants-DK5GyL68.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-CdgBLZUc.js";import"./web_socket_response_provider-UrYbd7Ig.js";import"./async_iterable_resolver-wL4GN5Yu.js";import"./view_change_evidence_v1-DN-jlMQt.js";import"./error_display-D7V2pmDr.js";import"./circular_progress_indicator-CHjvvcxq.js";import"./promise_resolver-CIQ5PKYD.js";import"./data_table-DguU8lNy.js";import"./chevron_up-C63lzylG.js";import"./svg_icon_base-BHrQ2xhA.js";import"./cappuccino_hot_shot_query_service_api_context-DOCu4KEr.js";import"./text-aldKgTri.js";import"./money_text-NHSQ4ZXI.js";import"./number_formatters_provider-uduEK5FV.js";import"./locale_provider-Ghcznv9j.js";/* empty css               */import"./main-_SDW4JdH.js";import"./now_provider-D29HcoOP.js";import"./transactions_per_second_text-CqmAEdTZ.js";import"./date_time_formatters_provider-C0tfyVOJ.js";import"./esp_input-DOUmUYCk.js";import"./esp_symbol-CvqE3ZVm.js";import"./byte_size_text--8CaTQrj.js";import"./date_time_text-DirxX4OA.js";import"./full_hex_text-CpvnF-0m.js";import"./hex_text-Cija5FgV.js";import"./number_text-BdO7pZh2.js";import"./relative_time_since_date_text-D1s1kssZ.js";import"./tagged_base64_text-Clxk9y88.js";import"./time_text-Br-5qJEe.js";import"./money_text_full-BJiWhaEl.js";import"./container_loading-BlaS0Zki.js";import"./loading_shimmer-Bk-WwnRG.js";import"./skeleton_content-C3wfAwRT.js";import"./geo_json_view-ChCaZrek.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-CK7HXKOA.js";import"./world_map_dots_full_resolution-B96Hse77.js";import"./svg_tool_tip-CSikt_yn.js";import"./world_map_dots_population_resolver-Bqh6oG8a.js";import"./histogram_section_title-Bca6-4x1.js";import"./typography-D29HocqS.js";import"./payments-CiDGKKun.js";import"./arrow_left-DFw6nZtI.js";import"./arrow_right-BIWLvfvj.js";import"./check_circle_filled-xq0CVmDA.js";import"./twitter_icon-DjPrPPPA.js";import"./close-D3qLjdnP.js";import"./copy-B8AV97Y6.js";import"./medium_icon-BsTW1hl4.js";import"./espresso_logo-VJAzIWo1.js";import"./menu-CclYtIAe.js";import"./search_glass-CxOKug1N.js";import"./x_icon-BoTH_ycO.js";import"./pie_chart-CGdx0OOi.js";import"./web_socket_status-6-IwGIJ0.js";import"./error_stream_consumer-DbPiVAuk.js";import"./espresso-RSia6qf6.js";import"./inscription-B9_WdN9M.js";import"./fake_data-dul1ehjD.js";const Ta={title:"Delegation UI/Staking Modal/States/Staking",...f,args:{...f.args,selection:new P(N.encode(_[v].address)),validator:F.nodes[v]}},t={args:{amount:""}},o={args:{amount:"500000000000000000"}},n={args:{amount:"500000000000000000000000000"}},s={args:{amount:"1250000000000000000"}},i={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.waiting()}},p={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new E)}},c={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new T(e))}},m={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.active,new R(e))}},d={args:{allowance:"1250000000000000000",amount:"1250000000000000000",approvalAsyncSnapshot:a.withData(r.done,new D(e,W))}},l={args:{amount:"1250000000000000000",approvalAsyncSnapshot:a.withError(r.done,new Error("Approval failed"))}},u={args:{allowance:"1250000000000000000",amount:"1250000000000000000"}},g={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.waiting()}},S={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new E)}},A={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new T(e))}},w={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.active,new R(e))}},h={args:{amount:"0",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withData(r.done,new D(e,W))}},y={args:{amount:"1250000000000000000",allowance:"1250000000000000000",delegationAsyncSnapshot:a.withError(r.done,new Error("Delegation failed"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
