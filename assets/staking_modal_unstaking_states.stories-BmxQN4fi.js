import{b as r,a as t}from"./provide_async_states-DtHeTXDx.js";import{h}from"./array_buffer-DMedzaQw.js";import"./blocks-BLRm0qbp.js";import{n as y}from"./nodes-DdUtUYCE.js";import{$ as w,P as E,a as T,b as R,c as P}from"./delegation_ui-Bv0eo_kj.js";import{f as W,F as A,a as D,I as l}from"./example_data-CJm4EqdH.js";import{D as f}from"./validator_confirmed_example-Bd2oBpH6.js";import"./iframe-xhuVH5Ih.js";import"./preload-helper-PPVm8Dsz.js";import"./data_provider-CQiJ9dZf.js";import"./loading_provider-DI5YbPXc.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-CUVVCP1k.js";import"./base64-Bp_idpg2.js";import"./functional-Ci6o84Cp.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./espresso_logo_and_title-DB-rR_hx.js";import"./higher_order-Bdg3O_St.js";import"./en_US-Y4ZOVFV4-CrGwgLf1.js";import"./index-RzCqieok.js";import"./index-CovybvIM.js";import"./environment-B-bS4dLG.js";import"./environment_banner-DpCCAOeX.js";import"./text-CEhLEmI-.js";import"./explorer-B7pHdcl_.js";import"./wallet_address_text-DJSeRLP8.js";import"./url-fXESVLgZ.js";import"./wallet_address-BEIvL2Xd.js";import"./validator-BLy62hcp.js";import"./async_iterable_resolver-BE36DTtu.js";import"./circular_progress_indicator-DvUVPJze.js";import"./error_display-xJhjjlmW.js";import"./fetch_error-g-VCQtdm.js";import"./height_and_address-Do-kAfmv.js";import"./not_found_error-DDa8r4Zj.js";import"./promise_resolver-Dzio9P2G.js";import"./data_table-DPP4kqIA.js";import"./chevron_up-4fkmWFKv.js";import"./svg_icon_base-BnZ40IBV.js";import"./cappuccino_hot_shot_query_service_api_context-8zV8VqWk.js";import"./text-S-DFT0aK.js";import"./money_text-Ci_j2jBt.js";import"./number_formatters_provider-BSQNp_UP.js";import"./locale_provider-CQ3v6PyC.js";/* empty css               */import"./main-BLOV6q8K.js";import"./now_provider-CmyY3F9O.js";import"./transactions_per_second_text-B7rxwI_V.js";import"./date_time_formatters_provider-C8B-TsDL.js";import"./esp_input-n6eFqiVP.js";import"./esp_symbol-yHok_0S4.js";import"./byte_size_text-CFZfsbZU.js";import"./date_time_text-DKBOj9dd.js";import"./full_hex_text-ke0vBHh2.js";import"./hex_text-6uQWwOe5.js";import"./number_text-YH5W9FSg.js";import"./relative_time_since_date_text-CoCUBHRG.js";import"./tagged_base64_text-D3X-Z1QX.js";import"./time_text-BM1O5CO3.js";import"./money_text_full-B-FYCquj.js";import"./container_loading-CXBK7nPc.js";import"./loading_shimmer-Bg2VLIS_.js";import"./skeleton_content-DZ7VSVjZ.js";import"./geo_json_view-CH-RF36B.js";import"./constants-DWX-v_jx.js";import"./affine_transform-UCCpzMIM.js";import"./svg_path_builder-4dyJLere.js";import"./world_map_dots_population_full_resolution-keQMtA-k.js";import"./world_map_dots_full_resolution-Bk8Pk3m6.js";import"./world_map_grid-DQWIItck.js";import"./svg_tool_tip-BkLhzYsk.js";import"./world_map_dots_population_resolver-Dmw54G2H.js";import"./histogram_section_title-BgJG4lTw.js";import"./typography-DFvrGmLt.js";import"./payments-CTk64F0b.js";import"./arrow_left-CGI7JE2X.js";import"./arrow_right-COqPpvCr.js";import"./check_circle_filled-p9-uDtAw.js";import"./twitter_icon-BiYFwSyZ.js";import"./close-CwdPU0Tx.js";import"./copy-DqcgTqb3.js";import"./medium_icon-S-xYN8L4.js";import"./espresso_logo-DoYVcUpU.js";import"./menu-DKcH_xX4.js";import"./search_glass-XByuB6z4.js";import"./x_icon-uLLG-TL6.js";import"./pie_chart-DmiyqvMJ.js";import"./web_socket_status-BjuI2oTG.js";import"./web_socket_response_provider-oYaoXfbU.js";import"./cappuccino_node_validator_service_api_context-ByTUUHGA.js";import"./error_stream_consumer-DJxqcPb8.js";import"./espresso-_f0I38LZ.js";import"./inscription-lyh_GhK4.js";import"./fake_data-CRdffKO2.js";const yr={title:"Delegation UI/Staking Modal/States/Unstaking",...f,args:{...f.args,selection:new w(h.encode(y[l].address)),validator:W.nodes[l]}},o={args:{amount:"0"}},a={args:{amount:"12500000000000000000"}},e={args:{amount:"25000000000000000000"}},n={args:{amount:"37500000000000000000"}},i={args:{amount:"50000000000000000000"}},s={args:{amount:"500000000000000000000"}},m={args:{amount:"0"}},p={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.waiting()}},c={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new R)}},u={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new T(A))}},d={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.active,new P(A))}},g={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withData(t.done,new E(A,D))}},S={args:{amount:"1250000000000000000",undelegationAsyncSnapshot:r.withError(t.done,new Error("Undelegation failed"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '0'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '12500000000000000000'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '25000000000000000000'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '37500000000000000000'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '50000000000000000000'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '500000000000000000000'
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const wr=["None","Option25Percent","Option50Percent","Option75Percent","OptionAll","InsufficientStake","SufficientStake","Submitting","Waiting","Submitted","WaitingForReceipt","ReceiptRetrieved","SubmissionError"];export{s as InsufficientStake,o as None,a as Option25Percent,e as Option50Percent,n as Option75Percent,i as OptionAll,g as ReceiptRetrieved,S as SubmissionError,u as Submitted,p as Submitting,m as SufficientStake,c as Waiting,d as WaitingForReceipt,wr as __namedExportsOrder,yr as default};
