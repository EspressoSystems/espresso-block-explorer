import{b as r,a as t}from"./provide_async_states-Bm1IC8S6.js";import{h}from"./array_buffer-BGAdkDgu.js";import"./blocks-CTgVmMXl.js";import{n as y}from"./nodes-9I9c2iOF.js";import{_ as w,P as E,a as T,b as R,c as P}from"./delegation_ui-BgJUh5Jo.js";import{f as W,I as l,F as A,a as _}from"./example_data-BP5N-QsV.js";import{D as f}from"./validator_confirmed_example-DseR908s.js";import"./iframe-tCHaFxbc.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DMdJRqvD.js";import"./loading_provider-CZPO-_kN.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-_rmSu-kQ.js";import"./functional-DT4GooI6.js";import"./monetary_value-CL5YFX4A.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./tagged_base64-YfeKLRN5.js";import"./async_iterable_resolver-ClLpCr0c.js";import"./circular_progress_indicator-CeK7byqt.js";import"./higher_order-DFvPhzqR.js";import"./text-CEhLEmI-.js";import"./error_display-l4pb-k-N.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-ThaYTKrp.js";import"./url-fXESVLgZ.js";import"./not_found_error-DDa8r4Zj.js";import"./validator-nxDvP-Ih.js";import"./wallet_address-CE0HFCr5.js";import"./promise_resolver-C5XCkIqx.js";import"./data_table-Dq9o6xGN.js";import"./chevron_up-CTacPNtY.js";import"./svg_icon_base-DPHHXJOQ.js";import"./en_US-KAK2ZBDO-BU9kk2mJ.js";import"./index-BZbs2elc.js";import"./index-Cuxb-LnB.js";import"./environment-B4NXYizC.js";import"./environment_banner-DrMod85-.js";import"./explorer-kooH_yOv.js";import"./cappuccino_hot_shot_query_service_api_context-BSqoK--o.js";import"./espresso_logo_and_title-cpTV8IYU.js";import"./wallet_address_text-CFQtoFoq.js";import"./text-BgA8zonF.js";import"./money_text-PofDrM4B.js";import"./number_formatters_provider-BWiH38Om.js";import"./locale_provider-_bKYlsJ_.js";/* empty css               */import"./transactions_per_second_text-ovamH_lA.js";import"./date_time_formatters_provider-sufyA7A-.js";import"./number_text--8_8YX8A.js";import"./now_provider-CXG0hpMO.js";import"./main-B0TxACnf.js";import"./byte_size_text-DQ9E5zJV.js";import"./date_time_text-CKrQdG-h.js";import"./full_hex_text-wUTAmwfT.js";import"./hex_text-xpN-YlgA.js";import"./relative_time_since_date_text-MVqD1i7i.js";import"./tagged_base64_text-CAUH6KHu.js";import"./time_text-C3siLlpH.js";import"./close-CGbvAjcr.js";import"./esp_input-CVYNF0FD.js";import"./payments-2-2iAMy8.js";import"./arrow_left-8jQhx9tJ.js";import"./arrow_right-Cdu6KBPp.js";import"./check_circle_filled-Ca5DCuxR.js";import"./twitter_icon-CWXodQX6.js";import"./copy-DlwEnnyc.js";import"./medium_icon-UNVrH5eV.js";import"./espresso_logo-DrrSZ2bC.js";import"./menu-Bk8L76pz.js";import"./search_glass-CfuOyXoR.js";import"./x_icon-B0vjZxRp.js";import"./web_socket_response_provider-DwxDkmC6.js";import"./constants-CHXFL_FJ.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-DmSaFkJ0.js";import"./error_stream_consumer-C_QW7h4T.js";import"./espresso-CRLpOLt6.js";import"./inscription-rAIHyExI.js";import"./fake_data-Dqs6pmxJ.js";const ar={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},o={args:{amount:"0"}},a={args:{amount:"1250000000000000000000"}},e={args:{amount:"2500000000000000000000"}},n={args:{amount:"3750000000000000000000"}},s={args:{amount:"5000000000000000000000"}},i={args:{amount:"50000000000000000000000"}},m={args:{amount:"0"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new E)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new P(A,_))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const er=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{i as InsufficientStake,o as None,a as Option25Percent,e as Option50Percent,n as Option75Percent,s as OptionAll,g as ReceiptRetrieved,S as SubmissionError,u as Submitted,p as Submitting,m as SufficientStake,c as Waiting,d as WaitingForReceipt,er as __namedExportsOrder,ar as default};
