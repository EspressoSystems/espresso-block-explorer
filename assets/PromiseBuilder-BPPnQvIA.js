import{R as t,j as r}from"./iframe-B_UBkTbs.js";import{L as l,E as d}from"./LoadingProvider-DRkSo8Wr.js";import{C as p}from"./CircularProgressIndicator-D-iBNzph.js";import{T as a}from"./Text-BU7JBOLk.js";import{E as m}from"./ErrorDisplay-CIh5RCdh.js";import{A as u}from"./ProvideAsyncStates-Clw91Vmm.js";import{P as h}from"./PromiseResolver-Cvk1eyw8.js";const s=e=>{const o=t.useContext(l),n=t.useContext(d);return o?r.jsx(p,{}):n?r.jsxs(r.Fragment,{children:[r.jsx(a,{text:"Encountered Error"}),r.jsx("br",{}),r.jsx(a,{text:n.toString()})]}):r.jsx(r.Fragment,{children:e.children})};try{s.displayName="BasicAsyncDataHandler",s.__docgenInfo={description:`BasicAsyncDataHandler is a basic behavior handler for Async data provided
via the LoadingContext and ErrorContext.

This component acts as a guard for the actual children who will be expected
to consume a DataContext element.  However, if there is an error, or if the
async data is still loading, this component will display contents somewhat
appropriate to indicate each state.`,displayName:"BasicAsyncDataHandler",props:{}}}catch{}const i=e=>t.useContext(d)?r.jsx(m,{}):r.jsx(r.Fragment,{children:e.children});try{i.displayName="ErrorContextGuard",i.__docgenInfo={description:`ErrorContextGuard is a component that guards the rendering of children based
on the presence of an error in the ErrorContext.

If an error is present, the ErrorContextGuard will render an error message.`,displayName:"ErrorContextGuard",props:{}}}catch{}function x(e){return function(){const n=t.useContext(u);return t.createElement(e,{snapshot:n})}}const c=e=>r.jsx(h,{promise:e.promise,children:t.createElement(x(e.builder))});try{c.displayName="PromiseBuilder",c.__docgenInfo={description:`PromiseBuilder is a component that can resolve the Async nature of promise
for components.`,displayName:"PromiseBuilder",props:{promise:{defaultValue:null,description:"",name:"promise",required:!0,type:{name:"Promise<unknown>"}},builder:{defaultValue:null,description:"",name:"builder",required:!0,type:{name:"ComponentType<PromiseBuilderBuilderProps<unknown>>"}}}}}catch{}
