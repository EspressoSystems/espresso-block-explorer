import{j as n}from"./iframe-xPpTS9dO.js";import"./AsyncIterableResolver-DYsGhtRJ.js";import{b as t,a}from"./ProvideAsyncStates-BIDV8GO7.js";import"./PromiseBuilder-Co2HF069.js";import"./PromiseResolver-BQgySzrc.js";import"./DataTable-OQRlJXH-.js";import{R,a as E}from"./contexts-6KUdmEAh.js";import{T as b}from"./Text-BU7JBOLk.js";import{W as e,a as H,b as f}from"./write_contract-BiV-QOVw.js";import"./preload-helper-PPVm8Dsz.js";import"./LoadingProvider-DEoBX8YF.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./CircularProgressIndicator-Bwt9laMC.js";import"./higher_order-cEYzRmR2.js";import"./ErrorDisplay-0ZoNU7bk.js";import"./FetchError-CshovAWm.js";import"./WebWorkerErrorResponse-DDmF8pSp.js";import"./typography-DOsyjWqi.js";import"./ChevronUp-BtVhpL9q.js";import"./SVGIconBase-DRQr1LH4.js";import"./sleep-CW-vxfof.js";import"./CopyHex-CCVeOuCP.js";import"./array_buffer-C2KvbgUx.js";import"./base64-C1KKyByM.js";import"./functional-CJQfVQrn.js";import"./CopyButton-DY0FR6xq.js";import"./NowProvider-Clo83YBl.js";import"./CheckCircleFilled-DFwBX1aX.js";import"./Copy-Bg1Dzap1.js";/* empty css               */import"./HexText-D16FECet.js";import"./NumberText-BI77pf0U.js";import"./NumberFormattersProvider-CR-f0u1P.js";import"./LocaleProvider-CEiL5IZ3.js";import"./url-Cp1wsmOC.js";const g="0x1234567890abcdef1234567890abcdef12345678",l="0xabcdef1234567890abcdef1234567890abcdef12",N="0x5e1b5f3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e",i="0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcd",A={chainId:31337,to:l,from:g,contractAddress:null,transactionIndex:0,gasUsed:21000n,logsBloom:"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",blockHash:"0x5e1b5f3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e",transactionHash:i,logs:[],blockNumber:123456n,cumulativeGasUsed:21000n,effectiveGasPrice:1000000000n,status:"success",type:"legacy"},_={type:"legacy",chainId:31337,blockHash:N,blockNumber:123456n,from:g,gas:21000n,hash:i,input:"0x",nonce:0,r:"0x",s:"0x",to:l,transactionIndex:1,typeHex:"0x0",v:1n,value:0n,gasPrice:1000000000n},x=u=>{const{initialState:T=e.withNothing(),account:y="0x1234567890abcdef1234567890abcdef12345678"}=u;return n.jsx(R.Provider,{value:!0,children:n.jsx(E.Provider,{value:y,children:n.jsx(H.Provider,{value:()=>n.jsx(b,{text:"Do you want something?"}),children:n.jsx(f,{initialState:T})})})})},mt={title:"Components/Page Sections/Write Contract Progress/States",component:x,argTypes:{initialState:{table:{disable:!0}}}},r={args:{initialState:e.withNothing()}},s={args:{initialState:e.withNothing().withTransactionHash(t.waiting())}},o={args:{initialState:e.withNothing().withTransactionHash(t.withError(a.done,new Error("Submission failed")))}},c={args:{initialState:e.withNothing().withTransactionHash(t.withData(a.done,i))}},h={args:{initialState:e.withNothing().withTransactionHash(t.withData(a.done,i)).withTransactionReceipt(t.waiting())}},p={args:{initialState:e.withNothing().withTransactionHash(t.withData(a.done,i)).withTransactionReceipt(t.withError(a.done,new Error("Receipt failed")))}},d={args:{initialState:e.withNothing().withTransactionHash(t.withData(a.done,i)).withTransactionReceipt(t.withData(a.done,A))}},S={args:{initialState:e.withNothing().withTransactionHash(t.withData(a.done,i)).withTransactionReceipt(t.withData(a.done,A)).withTransaction(t.waiting())}},m={args:{initialState:e.withNothing().withTransactionHash(t.withData(a.done,i)).withTransactionReceipt(t.withData(a.done,A)).withTransaction(t.withError(a.done,new Error("Transaction failed")))}},w={args:{initialState:e.withNothing().withTransactionHash(t.withData(a.done,i)).withTransactionReceipt(t.withData(a.done,A)).withTransaction(t.withData(a.done,_))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing()
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(AsyncSnapshot.waiting())
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(AsyncSnapshot.withError(AsyncState.done, new Error('Submission failed')))
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH))
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH)).withTransactionReceipt(AsyncSnapshot.waiting())
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH)).withTransactionReceipt(AsyncSnapshot.withError(AsyncState.done, new Error('Receipt failed')))
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH)).withTransactionReceipt(AsyncSnapshot.withData(AsyncState.done, FAKE_RECEIPT))
  }
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH)).withTransactionReceipt(AsyncSnapshot.withData(AsyncState.done, FAKE_RECEIPT)).withTransaction(AsyncSnapshot.waiting())
  }
}`,...S.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH)).withTransactionReceipt(AsyncSnapshot.withData(AsyncState.done, FAKE_RECEIPT)).withTransaction(AsyncSnapshot.withError(AsyncState.done, new Error('Transaction failed')))
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH)).withTransactionReceipt(AsyncSnapshot.withData(AsyncState.done, FAKE_RECEIPT)).withTransaction(AsyncSnapshot.withData(AsyncState.done, FAKE_TRANSACTION))
  }
}`,...w.parameters?.docs?.source}}};const wt=["Idle","Submitted","SubmissionFailure","SubmissionSuccess","RetrievingReceipt","RetrieveReceiptFailure","RetrieveReceiptSuccess","RetrievingTransaction","RetrieveTransactionFailure","RetrieveTransactionSuccess"];export{r as Idle,p as RetrieveReceiptFailure,d as RetrieveReceiptSuccess,m as RetrieveTransactionFailure,w as RetrieveTransactionSuccess,h as RetrievingReceipt,S as RetrievingTransaction,o as SubmissionFailure,c as SubmissionSuccess,s as Submitted,wt as __namedExportsOrder,mt as default};
