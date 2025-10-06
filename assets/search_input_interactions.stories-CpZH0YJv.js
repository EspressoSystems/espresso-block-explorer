import{j as w}from"./iframe-DygLW6I0.js";import{C as d,F as g}from"./CappuccinoHotShotQueryServiceAPIContext-B0abyRUY.js";import{S as R}from"./SearchInput-CqkzFLmV.js";import"./UnimplementedError-N0odIfDD.js";import"./string-BI8AIx1I.js";import"./array_buffer-CitSjtn6.js";import"./base64-r9vyOGQT.js";import"./functional-C2YPzjZP.js";import"./MissingElementError-BiJAxgGE.js";import"./url-BLYalvQP.js";import"./monetary_value-Dof17hnG.js";import"./TaggedBase64-D-xwfkqv.js";import"./generateFakeData-BXMpUtDN.js";import"./sleep-CW-vxfof.js";import"./data-CfBQlPrI.js";import"./LoadingProvider-Byfo0QzP.js";import"./FetchError-BkM_RKT_.js";import"./NotFoundError-D156Q_Lb.js";import"./PromiseResolver-ZjmnF0wX.js";import"./ProvideAsyncStates-B4f0kEob.js";import"./IconButton-CdAOT0Jt.js";import"./higher_order-BcLzZ7W3.js";import"./Button-BwF0iMhW.js";import"./label-BvScgLcI.js";import"./PathResolverProvider-DvoeaLUs.js";import"./Card-1sZgTX0b.js";import"./NumberText-Xd59w2dg.js";import"./NumberFormattersProvider-KKfvmIDJ.js";import"./LocaleProvider-BTog8Eg4.js";import"./RelativeTimeText-Dw-jd3cC.js";import"./DateTimeFormattersProvider-BiVnDCug.js";import"./NowProvider-DQJHzESf.js";import"./Text-BU7JBOLk.js";import"./typography-CE54FjU0.js";import"./SearchGlass-DYUY_TO9.js";import"./SVGIconBase-CwzDODLl.js";const{expect:a,userEvent:o,waitFor:S,within:u}=__STORYBOOK_MODULE_TEST__,B=async t=>{const e=await u(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},i=async t=>{const e=await B(t);return await o.setup().click(e),await a(e).toHaveFocus(),e},T=async(t,e)=>{await i(t),await o.keyboard(e)},D=async t=>{await T(t,"block~"),await S(async()=>{const r=await u(t).findByRole("search");a(r).toBeInTheDocument(),await h(t),a(r).toBeVisible()},{timeout:5e3});const e=await u(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},s=async t=>{const e=await u(t).findByRole("search");return a(e).toBeInTheDocument(),e},I=async t=>{const r=(await s(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},h=async t=>{const e=await s(t),r=await I(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},k=async t=>{await i(t);const e=await h(t),r=e.length;for(let n=0;n<r;n++){await o.keyboard("{ArrowDown}");const c=e[n].children[0];a(c).toBeInTheDocument(),a(c).toHaveAttribute("data-selected","true")}},A=async t=>{await i(t);const e=await s(t);await o.keyboard("{ArrowDown}"),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await i(t);const e=await h(t),r=e.length;for(let n=0;n<r;n++){await o.keyboard("{ArrowUp}");const c=e[r-1-n].children[0];a(c).toBeInTheDocument(),a(c).toHaveAttribute("data-selected","true")}},C=async t=>{await i(t);const e=await s(t);await o.keyboard("{ArrowUp}"),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},f=async t=>{await i(t);const e=await s(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o.keyboard("{Backspace>7/}"),await S(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},P=t=>w.jsx(d.Provider,{value:new g,children:w.jsx(R,{...t})}),wt={title:"Components/Page Sections/Search Input/Interactions",component:P},l={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await i(t)}),await e("Search for Blocks",async()=>{await D(t)}),await e("Navigate down through all search results",async()=>{await k(t)}),await e("Selecting down again should return to the original search term",async()=>{await A(t)}),await e("Navigate up through all search results",async()=>{await b(t)}),await e("Selecting up again should return to the original search term",async()=>{await C(t)}),await e("Clear Search Results",async()=>{await f(t)})}};var m,p,y;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    await step('Select the Search Bar', async () => {
      await interactionSelectSearchBar(canvasElement);
    });
    await step('Search for Blocks', async () => {
      await interactionKeyInBlocksForSearch(canvasElement);
    });
    await step('Navigate down through all search results', async () => {
      await interactionNavigateDownThroughAllSearchResults(canvasElement);
    });
    await step('Selecting down again should return to the original search term', async () => {
      await interactionEnteringKeyDownAgainShouldReturnToSearchTerm(canvasElement);
    });

    // Going the other direction should word as well
    await step('Navigate up through all search results', async () => {
      await interactionNavigateUpThroughAllSearchResults(canvasElement);
    });
    await step('Selecting up again should return to the original search term', async () => {
      await interactionEnteringKeyUpAgainShouldReturnToSearchTerm(canvasElement);
    });
    await step('Clear Search Results', async () => {
      await interactiveSelectAllDelete(canvasElement);
    });
  }
}`,...(y=(p=l.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const mt=["PerformSearch"];export{l as PerformSearch,mt as __namedExportsOrder,wt as default};
