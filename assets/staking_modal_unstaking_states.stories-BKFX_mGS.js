import{b as r,a as t}from"./provide_async_states-CgK8Y5uf.js";import{h}from"./array_buffer-D3ACJkCk.js";import"./blocks-DxW4BCgY.js";import{n as y}from"./nodes-DkqQpvmH.js";import{$ as w,P as E,a as T,b as R,c as P}from"./delegation_ui-Ccv8i3Kv.js";import{f as W,F as A,a as D,I as l}from"./example_data-9B--WKKy.js";import{D as f}from"./validator_confirmed_example-BwnpAdn7.js";import"./iframe-BmS3xRbu.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-Bc8LLRJq.js";import"./loading_provider-DEQVtaPX.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./base64-GdO7PHhr.js";import"./functional-6Z2QHHX7.js";import"./monetary_value-BgU0H56Y.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-ZlJISydJ.js";import"./espresso_logo_and_title-f5Z09bqy.js";import"./higher_order-BcBNDTSF.js";import"./en_US-Y4ZOVFV4-DY1zaUPt.js";import"./index-C7WTE1ec.js";import"./index-D9IcjNSq.js";import"./environment-DMkf8PBs.js";import"./espresso-BUI65Uy7.js";import"./explorer-DS7KDP3O.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-BMzoEseo.js";import"./url-dt6vXsS3.js";import"./wallet_address-DHR3FL3i.js";import"./async_iterable_resolver-Cemxn5Ze.js";import"./circular_progress_indicator-BzlwKDya.js";import"./error_display-DD4YB0tH.js";import"./fetch_error-Cj-x_lfT.js";import"./height_and_address-CYA_N0t6.js";import"./not_found_error-C4PEbicn.js";import"./validator-CdkOZxMl.js";import"./promise_resolver-CYBJKPrn.js";import"./data_table-DQ-k_VTm.js";import"./chevron_up-D0Pz47GW.js";import"./svg_icon_base-C9vCfi1H.js";import"./cappuccino_hot_shot_query_service_api_context-XNP7fUDq.js";import"./text-D42Mncsl.js";import"./money_text-E5QuoP91.js";import"./number_formatters_provider-BMOfqz6h.js";import"./locale_provider-DXJjPQek.js";/* empty css               */import"./transactions_per_second_text-BxWYGwIH.js";import"./date_time_formatters_provider-Bq_GZuKL.js";import"./number_text-3CvBpJ-A.js";import"./now_provider-N-vzDi1f.js";import"./main-BljDGzI0.js";import"./byte_size_text-PjHd0T68.js";import"./date_time_text-BBJvh5H4.js";import"./full_hex_text-d5cXjKw4.js";import"./hex_text-Ck3buGva.js";import"./relative_time_since_date_text-yVEMwZZM.js";import"./tagged_base64_text-BV90GCUN.js";import"./time_text-Dw6glsXQ.js";import"./close-B2lQCWSw.js";import"./esp_input-CDY181Za.js";import"./esp_symbol-D7xitzcP.js";import"./geo_json_view-DI6uMPnI.js";import"./constants-GWeUaa9_.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-BbR0HzA_.js";import"./world_map_dots_full_resolution-B74-b7as.js";import"./world_map_grid-DyzLSGRe.js";import"./svg_tool_tip-D5fxg0uT.js";import"./world_map_dots_population_resolver-QLXkjEd4.js";import"./histogram_section_title-BmfAZRTv.js";import"./skeleton_content-1t1_tVBp.js";import"./typography-Cewt00oL.js";import"./payments-CKgVzo9d.js";import"./arrow_left-5-Juw2fl.js";import"./arrow_right-Co3IvXSw.js";import"./check_circle_filled-DVm_fBge.js";import"./twitter_icon-CAvZK9af.js";import"./copy-CjmhtO6A.js";import"./medium_icon-DfGrnfuM.js";import"./espresso_logo-DTcMAend.js";import"./menu-BgCFn4jY.js";import"./search_glass-CP6u014y.js";import"./x_icon-Cqsm2NOx.js";import"./pie_chart-Cq4bAEqM.js";import"./web_socket_status-Dm-yeGwy.js";import"./web_socket_response_provider-DMT8AJWg.js";import"./fake_data-SrlFHGRM.js";const dr={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},o={args:{amount:"0"}},a={args:{amount:"1250000000000000000000"}},e={args:{amount:"2500000000000000000000"}},n={args:{amount:"3750000000000000000000"}},s={args:{amount:"5000000000000000000000"}},i={args:{amount:"50000000000000000000000"}},m={args:{amount:"0"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new E(A,D))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
