import{j as b}from"./jsx-runtime-BlAj40OV.js";import{w as y,u as a,e,a as B}from"./index-CTBcttME.js";import{S as k}from"./SearchInput-C16vYlKT.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PromiseResolver-PcuSBQi4.js";import"./ProvideAsyncStates-BPH3AZwf.js";import"./LoadingProvider-DpAvs9pm.js";import"./functional-BRpe52oq.js";import"./string-CcoL8872.js";import"./IconButton-DmUE976j.js";import"./higher_order-DnPEgWEz.js";import"./Button-BeoLCdzA.js";import"./PathResolverProvider-Xv58eOQd.js";import"./Card-RHc01-Zp.js";import"./CircularBuffer-DTeJHj1X.js";import"./array_buffer-DEYyeAm6.js";import"./base64-pX9cPfQ1.js";import"./TaggedBase64-D45f0-Ll.js";import"./url-D2X_Lhsq.js";import"./monetary_value-B2EGCn_o.js";import"./FetchError-C1VXamgN.js";import"./NotFoundError-C6Rvypd-.js";import"./CappuccinoHotShotQueryServiceAPIContext-DtXbM9Zs.js";import"./boolean-G714bpgs.js";import"./generateFakeData-QgWdnlRT.js";import"./sleep-CW-vxfof.js";import"./data-CgOROfg9.js";import"./NumberText-C4Z_0tU7.js";import"./NumberFormattersProvider-DANbX_lC.js";import"./LocaleProvider-B0_30C1H.js";import"./RelativeTimeText-MUfD-2Qu.js";import"./DateTimeFormattersProvider-UwNlAqY8.js";import"./NowProvider-D4xjbY-7.js";import"./Text-BU7JBOLk.js";import"./typography-D2UEeKZ7.js";import"./SearchGlass-BTYiCYPh.js";import"./SVGIconBase-BLfr-WpK.js";const S=n=>b.jsx(k,{...n}),ne={title:"Components/Page Sections/Search Input/Interactions",component:S},s={play:async({canvasElement:n})=>{const c=y(n),w=()=>c.findByRole("searchbox"),R=a.setup(),i=await w();await e(i).toBeInTheDocument(),await R.click(i),await e(i).toHaveFocus(),await a.keyboard("block~"),await B(async()=>{const t=await c.findByRole("search");e(t).toBeInTheDocument();const r=t.querySelector('section[aria-label="block-results"]');e(r).toBeInTheDocument()},{timeout:5e3});const o=await c.findByRole("search");e(o).toBeInTheDocument();const l=o.querySelector('section[aria-label="block-results"]');if(e(l).toBeInTheDocument(),!l)return;const u=Array.from(l.querySelectorAll("a"));e(o.querySelector('[data-selected="true"]')).not.toBeInTheDocument();const h=u.length;for(let t=0;t<h;t++){await a.keyboard("{ArrowDown}");const r=u[t].children[0];e(r).toBeInTheDocument(),e(r).toHaveAttribute("data-selected","true")}await a.keyboard("{ArrowDown}"),e(o.querySelector('[data-selected="true"]')).not.toBeInTheDocument();for(let t=0;t<h;t++){await a.keyboard("{ArrowUp}");const r=u[h-1-t].children[0];e(r).toBeInTheDocument(),e(r).toHaveAttribute("data-selected","true")}await a.keyboard("{ArrowUp}"),e(o.querySelector('[data-selected="true"]')).not.toBeInTheDocument()}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
