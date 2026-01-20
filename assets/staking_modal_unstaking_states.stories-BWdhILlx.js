import{b as r,a as t}from"./provide_async_states-Je7NPg_i.js";import{h}from"./array_buffer-BGAdkDgu.js";import"./blocks-CTgVmMXl.js";import{n as y}from"./nodes-9I9c2iOF.js";import{_ as w,P as E,a as T,b as R,c as P}from"./delegation_ui-BmcLpFLL.js";import{f as W,I as l,F as A,a as _}from"./example_data-ChANhkAJ.js";import{D as f}from"./validator_confirmed_example-DANwTfwV.js";import"./iframe-B5yazBMa.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CBESNSYd.js";import"./loading_provider-CAvkgHuW.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-_rmSu-kQ.js";import"./functional-DT4GooI6.js";import"./monetary_value-CL5YFX4A.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./tagged_base64-YfeKLRN5.js";import"./async_iterable_resolver-DXSs9Oy4.js";import"./circular_progress_indicator-Bve_a1oJ.js";import"./higher_order-BSTN8Q9z.js";import"./text-CEhLEmI-.js";import"./error_display-BgiXH6hh.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-ThaYTKrp.js";import"./url-fXESVLgZ.js";import"./not_found_error-DDa8r4Zj.js";import"./validator-nxDvP-Ih.js";import"./wallet_address-CE0HFCr5.js";import"./promise_resolver-Dv356fsz.js";import"./data_table-TyxNtaAu.js";import"./chevron_up-BDq0EKiF.js";import"./svg_icon_base-Dpg1LSL1.js";import"./en_US-KAK2ZBDO-LFvrsoOc.js";import"./index-BxJ8R_BA.js";import"./index-BF6SAvto.js";import"./environment-BFKmAFCG.js";import"./environment_banner-CpTwMBu7.js";import"./explorer-e_4bHgf1.js";import"./cappuccino_hot_shot_query_service_api_context-UCVGnPFp.js";import"./espresso_logo_and_title-By89LaoU.js";import"./wallet_address_text-BATqSiK3.js";import"./text-B7QEiJ-w.js";import"./money_text-C5WzVr3i.js";import"./number_formatters_provider-B-XsBDCo.js";import"./locale_provider-BWInepqb.js";/* empty css               */import"./transactions_per_second_text-CGN5mNro.js";import"./date_time_formatters_provider-BxCsegdJ.js";import"./number_text-B0ClmNgK.js";import"./now_provider-CKP5Onif.js";import"./main-C18Ezr-Y.js";import"./byte_size_text-DT6mR0is.js";import"./date_time_text-Dt7jas3i.js";import"./full_hex_text-wUTAmwfT.js";import"./hex_text-5RPqy6El.js";import"./relative_time_since_date_text-BTOzugKG.js";import"./tagged_base64_text-BHpURdDI.js";import"./time_text-CVj0Gvjl.js";import"./close-LbS5X0di.js";import"./esp_input-CjFSzTdi.js";import"./payments-_HNaTcPH.js";import"./arrow_left-CVFxgT4X.js";import"./arrow_right-B5Ld8ci5.js";import"./check_circle_filled-Cf1muq7p.js";import"./twitter_icon-DlE8CA97.js";import"./copy-B-Iczg8i.js";import"./medium_icon-B9Vnbdsq.js";import"./espresso_logo-vUXwbkla.js";import"./menu-DJzO5MRo.js";import"./search_glass-fjtcSm7Q.js";import"./x_icon-WmDJqHJb.js";import"./web_socket_response_provider-D4AECtLV.js";import"./constants-CHXFL_FJ.js";import"./affine_transform-UCCpzMIM.js";import"./world_map_grid-DmSaFkJ0.js";import"./error_stream_consumer-D5mFoSJt.js";import"./espresso-B5gCFGuO.js";import"./inscription-rAIHyExI.js";import"./fake_data-ESmNiqd0.js";const ar={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},o={args:{amount:"0"}},a={args:{amount:"1250000000000000000000"}},e={args:{amount:"2500000000000000000000"}},n={args:{amount:"3750000000000000000000"}},s={args:{amount:"5000000000000000000000"}},i={args:{amount:"50000000000000000000000"}},m={args:{amount:"0"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new E)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new P(A,_))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
