import{j as b}from"./jsx-runtime-C8OW3RLV.js";import{w as y,u as a,e,a as B}from"./index-q1sypPMF.js";import{S as k}from"./SearchInput-B4BW2srg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PromiseResolver-Bzan-m3_.js";import"./ProvideAsyncStates-cPWIR7SO.js";import"./LoadingProvider-D-gSICWy.js";import"./IconButton-D8uo0ZjI.js";import"./higher_order-BhpYKJuV.js";import"./Button-DxK-R5j9.js";import"./PathResolverProvider-Bt7H5csd.js";import"./Card-CUmdu2p1.js";import"./CircularBuffer-BRETtkFg.js";import"./string-X3Gg19gt.js";import"./array_buffer-73_ZskUD.js";import"./base64-sUJ5_M47.js";import"./functional-C-MJgtC4.js";import"./TaggedBase64-MUE_Sjuq.js";import"./monetary_value-DdH0GKvL.js";import"./FetchError-B3q-_EcF.js";import"./NotFoundError-D27_4bN0.js";import"./CappuccinoHotShotQueryServiceAPIContext-CeXTtBtb.js";import"./functional_async-0caEKL_O.js";import"./sleep-CW-vxfof.js";import"./data-BqGnzjPf.js";import"./NumberText-CEiknsW6.js";import"./NumberFormattersProvider-B153Cyqz.js";import"./LocaleProvider-BQ-iXQt3.js";import"./RelativeTimeText-CJcgDeEz.js";import"./DateTimeFormattersProvider-Br3pQ116.js";import"./NowProvider-DGXfqGr9.js";import"./Text-BU7JBOLk.js";import"./typography-CBcnIq8a.js";import"./SearchGlass-CgCHiqbn.js";import"./SVGIconBase-Dbx5nMUX.js";const S=s=>b(k,{...s}),re={title:"Components/Page Sections/Search Input/Interactions",component:S},o={play:async({canvasElement:s})=>{const c=y(s),w=()=>c.findByRole("searchbox"),R=a.setup(),l=await w();await e(l).toBeInTheDocument(),await R.click(l),await e(l).toHaveFocus(),await a.keyboard("block~"),await B(async()=>{const t=await c.findByRole("search");e(t).toBeInTheDocument();const n=t.querySelector('section[aria-label="block-results"]');e(n).toBeInTheDocument()},{timeout:5e3});const r=await c.findByRole("search");e(r).toBeInTheDocument();const i=r.querySelector('section[aria-label="block-results"]');if(e(i).toBeInTheDocument(),!i)return;const u=Array.from(i.querySelectorAll("a"));e(r.querySelector('[data-selected="true"]')).not.toBeInTheDocument();const h=u.length;for(let t=0;t<h;t++){await a.keyboard("{ArrowDown}");const n=u[t].children[0];e(n).toBeInTheDocument(),e(n).toHaveAttribute("data-selected","true")}await a.keyboard("{ArrowDown}"),e(r.querySelector('[data-selected="true"]')).not.toBeInTheDocument();for(let t=0;t<h;t++){await a.keyboard("{ArrowUp}");const n=u[h-1-t].children[0];e(n).toBeInTheDocument(),e(n).toHaveAttribute("data-selected","true")}await a.keyboard("{ArrowUp}"),e(r.querySelector('[data-selected="true"]')).not.toBeInTheDocument()}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const getSearchBar = () => canvas.findByRole('searchbox');
    const user = userEvent.setup();

    // Get the Taskbar
    const searchBar = await getSearchBar();
    await expect(searchBar).toBeInTheDocument();
    // Select the search bar
    await user.click(searchBar);
    // Check to make sure that the search bar is focused
    await expect(searchBar).toHaveFocus();

    // Alright, let's enter some text
    await userEvent.keyboard('block~');

    // We need to wait for the search results to load
    await waitFor(async () => {
      // We need to wait for a non-empty search result.
      const searchResultsContainer = await canvas.findByRole('search');
      expect(searchResultsContainer).toBeInTheDocument();
      const blockResultsElement = searchResultsContainer.querySelector('section[aria-label="block-results"]');
      expect(blockResultsElement).toBeInTheDocument();
    }, {
      timeout: 5000
    });
    const searchResultsParentContainer = await canvas.findByRole('search');
    expect(searchResultsParentContainer).toBeInTheDocument();
    const blockResultsElement = searchResultsParentContainer.querySelector('section[aria-label="block-results"]');
    expect(blockResultsElement).toBeInTheDocument();
    if (!blockResultsElement) {
      return;
    }
    const searchResultElements = Array.from(blockResultsElement.querySelectorAll('a'));
    expect(searchResultsParentContainer.querySelector('[data-selected="true"]')).not.toBeInTheDocument();
    const numSearchResults = searchResultElements.length;
    // Let's go through all of the elements.
    for (let i = 0; i < numSearchResults; i++) {
      await userEvent.keyboard('{ArrowDown}');
      // We should now have the ith element selected.
      // The first child should have the 'data-selected="true"' attribute.
      const dataRow = searchResultElements[i].children[0];
      expect(dataRow).toBeInTheDocument();
      expect(dataRow).toHaveAttribute('data-selected', 'true');
    }

    // Pressing Down again should have nothing selected (reset back to original search input entry).
    await userEvent.keyboard('{ArrowDown}');
    expect(searchResultsParentContainer.querySelector('[data-selected="true"]')).not.toBeInTheDocument();

    // Going the other direction should word as well

    for (let i = 0; i < numSearchResults; i++) {
      await userEvent.keyboard('{ArrowUp}');
      // We should now have the ith element selected.
      // The first child should have the 'data-selected="true"' attribute.
      const dataRow = searchResultElements[numSearchResults - 1 - i].children[0];
      expect(dataRow).toBeInTheDocument();
      expect(dataRow).toHaveAttribute('data-selected', 'true');
    }

    // Pressing Down again should have nothing selected (reset back to original search input entry).
    await userEvent.keyboard('{ArrowUp}');
    expect(searchResultsParentContainer.querySelector('[data-selected="true"]')).not.toBeInTheDocument();
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const oe=["PerformSearch"];export{o as PerformSearch,oe as __namedExportsOrder,re as default};
