import{b as r,a as t}from"./provide_async_states-CvJ3FAPg.js";import{h as y}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as w}from"./nodes-DdUtUYCE.js";import{$ as E,a0 as T,P as R,a as P,b as W,c as C}from"./delegation_ui-Bw-SgzjJ.js";import{f as D,I as A,F as f,a as _}from"./example_data-CGkFicV3.js";import{D as h}from"./validator_confirmed_example-DwuIzLY4.js";import"./iframe-TrusCfP7.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-DhSR8fHD.js";import"./loading_provider-ByLGkB6h.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-DA0hry-f.js";import"./higher_order-BaXXaYUD.js";import"./en_US-Y4ZOVFV4-wcHViHys.js";import"./index-BLtf1UP9.js";import"./index-CmYdQwgm.js";import"./environment-BeLovIP0.js";import"./environment_banner-CbOZXb_Q.js";import"./text-CEhLEmI-.js";import"./explorer-Ba1tdTJF.js";import"./wallet_address_text-DI0zzslD.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-D27r_Ihu.js";import"./circular_progress_indicator-DgvcjS9-.js";import"./error_display-DhlsS865.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-B85PinYl.js";import"./data_table-kzgFRMNa.js";import"./chevron_up-ChAy-4n9.js";import"./svg_icon_base-CMA4dtm_.js";import"./cappuccino_hot_shot_query_service_api_context-DlFYV5TE.js";import"./text-qBIqAF1O.js";import"./money_text-CKp0PGoW.js";import"./number_formatters_provider-BjVNSDzq.js";import"./locale_provider-VmkWYhBv.js";/* empty css               */import"./main-RufZ2ih4.js";import"./now_provider-C1ZXEB30.js";import"./transactions_per_second_text-DZpKoe3B.js";import"./date_time_formatters_provider-18E19bYy.js";import"./esp_input-6HJx3fJ3.js";import"./esp_symbol-yrGplFWr.js";import"./byte_size_text-1bLtn3ax.js";import"./date_time_text-CeAneBD3.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-BuQjJNsp.js";import"./number_text-Dzzgw1-A.js";import"./relative_time_since_date_text-DbjRU1Iv.js";import"./tagged_base64_text-DRDUlYqA.js";import"./time_text-Cnhv5kw7.js";import"./money_text_full-DEOyG5rf.js";import"./container_loading-DLgLH6ck.js";import"./loading_shimmer-BhTUlLa6.js";import"./skeleton_content-DeKZZP6m.js";import"./geo_json_view-jDRIK5m1.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-_leb8iG_.js";import"./world_map_dots_full_resolution-BuWpAnGC.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-Bbzbwriw.js";import"./world_map_dots_population_resolver-DifRMp7V.js";import"./histogram_section_title-BuRQnrC0.js";import"./typography-BsBXTHPR.js";import"./payments-On-OjTPk.js";import"./arrow_left-BIRRFtTm.js";import"./arrow_right-DrRsfL2C.js";import"./check_circle_filled-BJ3ravcz.js";import"./twitter_icon-b17Oilm7.js";import"./close-j16X1Oqa.js";import"./copy-VY-zqqlc.js";import"./medium_icon-C0yAE-0x.js";import"./espresso_logo-COd0OqzR.js";import"./menu-BqMInTbv.js";import"./search_glass-BBm7sSEh.js";import"./x_icon-DHD7glSc.js";import"./pie_chart-DCNtLp7W.js";import"./web_socket_status-BSekIU7-.js";import"./web_socket_response_provider-C4poRd1C.js";import"./cappuccino_node_validator_service_api_context-Cf0ng6Mi.js";import"./error_stream_consumer-sCg7MWMO.js";import"./espresso-Bvz0ybyC.js";import"./inscription-lyh_GhK4.js";import"./fake_data-CwUmc6H8.js";const Er={title:"Delegation UI/Staking Modal/States/Unstaking",...h,args:{...h.args,selection:new T(y.encode(w[A].address)),validator:D.nodes[A]}},o={args:{amount:"0"}},e={args:{amount:"12500000000000000000"}},a={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},s={args:{amount:"50000000000000000000"}},i={args:{amount:"500000000000000000000"}},m={args:{amount:"10000000000000000000"}},p={args:{selection:new E(y.encode(w[A].address)),amount:"10000000000000000000"}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new W)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(f))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new C(f))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new R(f,_))}},l={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '12500000000000000000'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '25000000000000000000'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '37500000000000000000'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '50000000000000000000'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '500000000000000000000'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '10000000000000000000'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selection: new ValidatorConfirmedUndelegateConfirm(hexArrayBufferCodec.encode(nodeList[INDEX_STAKED].address)),
    amount: '10000000000000000000'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.waiting()
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionWaiting())
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH))
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.active, new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH))
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(AsyncState.done, new PerformWriteTransactionReceiptRetrieved(FAKE_TRANSACTION_HASH, FAKE_RECEIPT))
  }
}`,...S.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withError(AsyncState.done, new Error('Undelegation failed'))
  }
}`,...l.parameters?.docs?.source}}};const Tr=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Confirmation","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{p as Confirmation,i as InsufficientStake,o as None,e as Option25Percent,a as Option50Percent,n as Option75Percent,s as OptionAll,S as ReceiptRetrieved,l as SubmissionError,u as Submitted,c as Submitting,m as SufficientStake,d as Waiting,g as WaitingForReceipt,Tr as __namedExportsOrder,Er as default};
