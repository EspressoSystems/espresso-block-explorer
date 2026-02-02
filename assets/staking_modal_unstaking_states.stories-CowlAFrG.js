import{b as r,a as t}from"./provide_async_states-BVmaaWSV.js";import{h}from"./array_buffer-BrH4NOGl.js";import"./blocks-XwzhN47T.js";import{n as y}from"./nodes--GPtCQfL.js";import{$ as w,P as E,a as T,b as R,c as P}from"./delegation_ui-B1bkb-hz.js";import{f as W,I as l,F as A,a as D}from"./example_data-CZbpcYV3.js";import{D as f}from"./validator_confirmed_example-BYV8MlLy.js";import"./iframe-tJD8ctAX.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-C6PVTx9l.js";import"./loading_provider-BXtZHVAh.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./unimplemented_error--qiu5jWk.js";import"./base64-Cs6zZcIo.js";import"./functional-6Z2QHHX7.js";import"./monetary_value-BgU0H56Y.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-Beas1ikT.js";import"./espresso_logo_and_title-BScHFvB4.js";import"./higher_order-DMx3Maq3.js";import"./en_US-KAK2ZBDO-CweoMHzF.js";import"./index-D9AGz99-.js";import"./index-F4go5FlQ.js";import"./environment-Cs-R1VZ4.js";import"./espresso-D0a9JQcy.js";import"./explorer-Oixev6ip.js";import"./text-CEhLEmI-.js";import"./wallet_address_text-BF6QegzT.js";import"./url-dt6vXsS3.js";import"./wallet_address-DvLNDg5r.js";import"./async_iterable_resolver-CgLklrW7.js";import"./circular_progress_indicator-D02-INao.js";import"./error_display-DNjd1hhy.js";import"./fetch_error-Cj-x_lfT.js";import"./height_and_address-DEARJVGA.js";import"./not_found_error-C4PEbicn.js";import"./validator-D7TaBp9n.js";import"./promise_resolver-C9jAY7vU.js";import"./data_table-B7uqBxSZ.js";import"./chevron_up-dJKzCaOa.js";import"./svg_icon_base-BGhuzfHK.js";import"./cappuccino_hot_shot_query_service_api_context-B4z2DCaB.js";import"./text-DPEoCHJI.js";import"./money_text-BSJcMoDj.js";import"./number_formatters_provider-Dl9eEFvN.js";import"./locale_provider-BfT--jL0.js";/* empty css               */import"./transactions_per_second_text-COYS4Z-g.js";import"./date_time_formatters_provider-DUKMN7nU.js";import"./number_text-gCrqYneN.js";import"./now_provider-JQoYOvvm.js";import"./main-G6EcU73E.js";import"./byte_size_text-D7H_bnis.js";import"./date_time_text-ByvKo4c5.js";import"./full_hex_text-31tEMUpT.js";import"./hex_text-Yz6cU6AZ.js";import"./relative_time_since_date_text--dhXz_UU.js";import"./tagged_base64_text-BxX-aw0g.js";import"./time_text-vs4-doFY.js";import"./close-Dis11U_6.js";import"./esp_input-kB9hPdgN.js";import"./esp_symbol-CX8UHQ42.js";import"./geo_json_view-Bg1h4VlM.js";import"./constants-D1tKKGWI.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-BUfJFsHj.js";import"./world_map_dots_full_resolution-BHt81PKH.js";import"./world_map_grid-C0r-myDF.js";import"./svg_tool_tip-CycmjHU_.js";import"./world_map_dots_population_resolver-DWlZkChx.js";import"./histogram_section_title-DSFZkvBt.js";import"./skeleton_content-cNfy38NO.js";import"./typography-DN-MaNWq.js";import"./payments-p2uzjCti.js";import"./arrow_left-CVZZODUE.js";import"./arrow_right-zURY8Mzy.js";import"./check_circle_filled-Bw7if0sx.js";import"./twitter_icon-C06G7N2J.js";import"./copy-DrquMoLf.js";import"./medium_icon-CUbSZ3Le.js";import"./espresso_logo-BIgMo0UX.js";import"./menu-CTrI4ZKu.js";import"./search_glass-BRni-e1M.js";import"./x_icon-DA5w10ec.js";import"./pie_chart-CL0TSrxe.js";import"./web_socket_status-Bjo-RL3o.js";import"./web_socket_response_provider-CJF5j92Z.js";import"./fake_data-BgMjC-ku.js";const dr={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},o={args:{amount:"0"}},a={args:{amount:"1250000000000000000000"}},e={args:{amount:"2500000000000000000000"}},n={args:{amount:"3750000000000000000000"}},s={args:{amount:"5000000000000000000000"}},i={args:{amount:"50000000000000000000000"}},m={args:{amount:"0"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new E)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new P(A,D))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
