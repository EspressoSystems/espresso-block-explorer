import{b as r,a as t}from"./provide_async_states-sOhoHCpB.js";import{h}from"./array_buffer-BrH4NOGl.js";import"./blocks-XwzhN47T.js";import{n as y}from"./nodes--GPtCQfL.js";import{$ as w,P as E,a as T,b as R,c as P}from"./delegation_ui-XSacIxUO.js";import{f as W,I as l,F as A,a as D}from"./example_data-7z8uHEF1.js";import{D as f}from"./validator_confirmed_example-CAUcm5yP.js";import"./iframe-lCBbYCEU.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-JNzMXrDd.js";import"./loading_provider-CfI_gzNc.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./base64-Cs6zZcIo.js";import"./functional-6Z2QHHX7.js";import"./monetary_value-BgU0H56Y.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-Beas1ikT.js";import"./espresso_logo_and_title-CklMs8FJ.js";import"./higher_order-B24NaQsc.js";import"./en_US-KAK2ZBDO-mJQ-HojI.js";import"./index-DmtrKp90.js";import"./index-D-VaSj31.js";import"./environment-DZe3_67o.js";import"./espresso-B-BPwrmx.js";import"./explorer-BW6Daj7l.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-DNN9W8xn.js";import"./url-dt6vXsS3.js";import"./wallet_address-DvLNDg5r.js";import"./async_iterable_resolver-B2OJUoTa.js";import"./circular_progress_indicator-ioUUu9qs.js";import"./error_display-BHP6EeVR.js";import"./fetch_error-Cj-x_lfT.js";import"./height_and_address-DEARJVGA.js";import"./not_found_error-C4PEbicn.js";import"./validator-D7TaBp9n.js";import"./promise_resolver-C35CelZq.js";import"./data_table-CkewT-se.js";import"./chevron_up-JQFOFxdg.js";import"./svg_icon_base-K_bknCBI.js";import"./cappuccino_hot_shot_query_service_api_context-DSO45wB8.js";import"./text-CS588L7o.js";import"./money_text-B449SFRa.js";import"./number_formatters_provider-n3Owoqke.js";import"./locale_provider-CivmyzXf.js";/* empty css               */import"./transactions_per_second_text-r_eDlOBe.js";import"./date_time_formatters_provider-D_P0LLFh.js";import"./number_text-C1feg6s_.js";import"./now_provider-BJlCMxdf.js";import"./main-D8afrBQv.js";import"./byte_size_text-DdskNyFJ.js";import"./date_time_text-PZluedtG.js";import"./full_hex_text-31tEMUpT.js";import"./hex_text-Dq7vbRlC.js";import"./relative_time_since_date_text-6snd4Hu9.js";import"./tagged_base64_text-DSPnvE07.js";import"./time_text-FZhLuGii.js";import"./close-CGH8eFnT.js";import"./esp_input-CbzsyxTg.js";import"./esp_symbol-B37gglXy.js";import"./geo_json_view-DxkkmS7K.js";import"./constants-D1tKKGWI.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-WKBG3RX_.js";import"./world_map_dots_full_resolution-As82hCZn.js";import"./world_map_grid-C0r-myDF.js";import"./svg_tool_tip-SOGiG2kC.js";import"./world_map_dots_population_resolver-DNdBf6ni.js";import"./histogram_section_title-D1yw9CdP.js";import"./skeleton_content-uXbBjkPV.js";import"./typography-C2G_oAYK.js";import"./payments-BwscrC9w.js";import"./arrow_left-DpL9fOqx.js";import"./arrow_right-CO3S4Bx1.js";import"./check_circle_filled-ClNr7Qgn.js";import"./twitter_icon-aIoJKWGe.js";import"./copy-K-9mLOCa.js";import"./medium_icon-BeKAbyQV.js";import"./espresso_logo-CbXS2B1E.js";import"./menu-CQ4fisuj.js";import"./search_glass-SundPE7M.js";import"./x_icon-QhAjrQN_.js";import"./pie_chart-DTSGSaR8.js";import"./web_socket_status-DfStaS8v.js";import"./web_socket_response_provider-Ci6TlpmF.js";import"./fake_data-ChW8HgPX.js";const dr={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},o={args:{amount:"0"}},a={args:{amount:"1250000000000000000000"}},e={args:{amount:"2500000000000000000000"}},n={args:{amount:"3750000000000000000000"}},s={args:{amount:"5000000000000000000000"}},i={args:{amount:"50000000000000000000000"}},m={args:{amount:"0"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new E)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new P(A,D))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000000'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '2500000000000000000000'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const gr=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{i as InsufficientStake,o as None,a as Option25Percent,e as Option50Percent,n as Option75Percent,s as OptionAll,g as ReceiptRetrieved,S as SubmissionError,u as Submitted,p as Submitting,m as SufficientStake,c as Waiting,d as WaitingForReceipt,gr as __namedExportsOrder,dr as default};
