import{j as b}from"./jsx-runtime-BlAj40OV.js";import{w as y,u as a,e,a as B}from"./index-1MAJgnAK.js";import{S as k}from"./SearchInput-CMmIREFK.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DZLKizrv.js";import"./PromiseResolver-CXCa4yLm.js";import"./ProvideAsyncStates-DyGIG4hw.js";import"./LoadingProvider-Cf52ybPZ.js";import"./IconButton-C8CRMxou.js";import"./higher_order-DnPEgWEz.js";import"./Button-Cc3XS5nv.js";import"./PathResolverProvider-Xv58eOQd.js";import"./Card-0izmXN96.js";import"./CircularBuffer-Dxw-FMcc.js";import"./string-BRHtp8nH.js";import"./array_buffer-R2gdYDdl.js";import"./base64-B9OJSIzr.js";import"./functional-CfXZTWhy.js";import"./TaggedBase64-kwVVsu1o.js";import"./url-YgTINc9c.js";import"./functional_async-y9fAbhVo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BoyvFl18.js";import"./data-CgOROfg9.js";import"./FetchError-nmVtBWex.js";import"./NotFoundError-CI-iUI-y.js";import"./CappuccinoHotShotQueryServiceAPIContext-B1Z7cExD.js";import"./NumberText-C4Z_0tU7.js";import"./NumberFormattersProvider-DANbX_lC.js";import"./LocaleProvider-B0_30C1H.js";import"./RelativeTimeText-DCz-EhHt.js";import"./DateTimeFormattersProvider-D6Gp1Kbv.js";import"./NowProvider-D4xjbY-7.js";import"./Text-BU7JBOLk.js";import"./typography-BIj1kvXp.js";import"./SearchGlass-REp8lC9G.js";import"./SVGIconBase-eCXHSPnQ.js";const S=n=>b.jsx(k,{...n}),ne={title:"Components/Page Sections/Search Input/Interactions",component:S},s={play:async({canvasElement:n})=>{const c=y(n),w=()=>c.findByRole("searchbox"),R=a.setup(),i=await w();await e(i).toBeInTheDocument(),await R.click(i),await e(i).toHaveFocus(),await a.keyboard("block~"),await B(async()=>{const t=await c.findByRole("search");e(t).toBeInTheDocument();const r=t.querySelector('section[aria-label="block-results"]');e(r).toBeInTheDocument()},{timeout:5e3});const o=await c.findByRole("search");e(o).toBeInTheDocument();const l=o.querySelector('section[aria-label="block-results"]');if(e(l).toBeInTheDocument(),!l)return;const u=Array.from(l.querySelectorAll("a"));e(o.querySelector('[data-selected="true"]')).not.toBeInTheDocument();const h=u.length;for(let t=0;t<h;t++){await a.keyboard("{ArrowDown}");const r=u[t].children[0];e(r).toBeInTheDocument(),e(r).toHaveAttribute("data-selected","true")}await a.keyboard("{ArrowDown}"),e(o.querySelector('[data-selected="true"]')).not.toBeInTheDocument();for(let t=0;t<h;t++){await a.keyboard("{ArrowUp}");const r=u[h-1-t].children[0];e(r).toBeInTheDocument(),e(r).toHaveAttribute("data-selected","true")}await a.keyboard("{ArrowUp}"),e(o.querySelector('[data-selected="true"]')).not.toBeInTheDocument()}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const ce=["PerformSearch"];export{s as PerformSearch,ce as __namedExportsOrder,ne as default};
