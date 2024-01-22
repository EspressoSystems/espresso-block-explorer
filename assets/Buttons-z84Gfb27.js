import{j as t,a as e,F as a}from"./jsx-runtime-5BUNAZ9W.js";import{M as h,C as i}from"./index-KzBHTScL.js";import{B as c}from"./Buttons.stories-cNStATU4.js";import{Normal as d,WithLabel as s}from"./IconButton.stories-AyqaWIrk.js";import{WithHref as m}from"./IconAnchorButton.stories-dVbzXBFX.js";import{Normal as u}from"./LabeledButton.stories-4-g_I0iI.js";import{WithHref as p}from"./LabeledAnchorButton.stories-M75piJgs.js";import{useMDXComponents as l}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-CrZRyC2u.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./Text-qj7igP2-.js";import"./Button-I3bbD5ni.js";import"./higher_order-VtSBvwoq.js";import"./IconButton-7JNgBrhk.js";import"./ArrowLeft-kWkhbX4t.js";import"./SVGIconBase-1p394ezW.js";import"./ArrowRight-9gpb0-y0.js";import"./IconAnchorButton-HujeWbUs.js";import"./AnchorButton-nRlYYR1D.js";import"./LabeledButton-lVcWQ9Rx.js";import"./LabeledAnchorButton-vxbK3n4D.js";function r(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},l(),o.components);return e(a,{children:[t(n.h1,{id:"buttons",children:"Buttons"}),`
`,t(n.p,{children:`This section deals with basic Button styles and some simple Button variants for
interaction with web pages.`}),`
`,`
`,t(h,{of:c}),`
`,t(n.h2,{id:"icon-button",children:"Icon Button"}),`
`,t(n.p,{children:`An extension to the standard Button component that adds just the right amount
of padding for a single icon to be added to the contents of the button.`}),`
`,t(n.h3,{id:"example",children:"Example"}),`
`,t(i,{of:d}),`
`,t(n.p,{children:"or"}),`
`,t(i,{of:s}),`
`,t(n.h3,{id:"usage",children:"Usage"}),`
`,t(n.pre,{children:t(n.code,{className:"language-ts",children:`import { IconButton, ArrowLeft } from "uilib";

const Example = () => {
  return (
      <IconButton
        onClick={()=> console.log("Clicked")}
      >
        <ArrowLeft />
      </IconButton>
  );
};

export default Example;
`})}),`
`,t(n.h3,{id:"arguments",children:"Arguments"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[t(n.strong,{children:"onClick"})," - A function that is called when the button is clicked. It receives a MouseEventHandler for handling the click event on the button element."]}),`
`]}),`
`,t(n.h2,{id:"icon-anchor-button",children:"Icon Anchor Button"}),`
`,e(n.p,{children:["This is very similar to the ",t(n.strong,{children:"Icon Button"}),`, but it represents the button
semblance applied to an anchor tag instead. Anchor tags communicate
accessibility details on their own without having to perform extra steps. In
addition their links are readily able to be inspected in order to allow the
users to verify where the anchor link will take them before it does.`]}),`
`,t(n.h3,{id:"example-1",children:"Example"}),`
`,t(i,{of:m}),`
`,t(n.h3,{id:"usage-1",children:"Usage"}),`
`,t(n.pre,{children:t(n.code,{className:"language-ts",children:`import { IconAnchorButton, ArrowRight } from "uilib";

const Example = () => {
  return (
      <IconAnchorButton href="https://example.com/">
        <ArrowRight />
      </IconAnchorButton>
  );
};

export default Example;
`})}),`
`,t(n.h3,{id:"arguments-1",children:"Arguments"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[t(n.strong,{children:"href"})," - The string / URL to navigate to"]}),`
`]}),`
`,t(n.h2,{id:"labeled-button",children:"Labeled Button"}),`
`,t(n.p,{children:`A button with a simple text label within it. This extensions to the standard
button component automatically adds a useful amount of padding for displaying
text within the button.`}),`
`,t(n.h3,{id:"example-2",children:"Example"}),`
`,t(i,{of:u}),`
`,t(n.h3,{id:"usage-2",children:"Usage"}),`
`,t(n.pre,{children:t(n.code,{className:"language-ts",children:`import { LabeledButton, Text } from "uilib";

const Example = () => {
  return (
      <LabeledButton onClick={() => void 0}>
        <Text text="View All" />
      </LabeledButton>
  );
};

export default Example;
`})}),`
`,t(n.h3,{id:"arguments-2",children:"Arguments"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[t(n.strong,{children:"onClick"})," - A function that is called when the button is clicked. It receives a MouseEventHandler for handling the click event on the button element."]}),`
`]}),`
`,t(n.h2,{id:"labeled-anchor-button",children:"Labeled Anchor Button"}),`
`,t(n.p,{children:"A variant on the Anchored button for a Text Button but via an Anchor element."}),`
`,t(n.h3,{id:"example-3",children:"Example"}),`
`,t(i,{of:p}),`
`,t(n.h3,{id:"usage-3",children:"Usage"}),`
`,t(n.pre,{children:t(n.code,{className:"language-ts",children:`import { LabeledAnchorButton, Text } from "uilib";

const Example = () => {
  return (
      <LabeledAnchorButton hef="https://example.com/">
        <Text text="View All" />
      </LabeledAnchorButton>
  );
};

export default Example;
`})}),`
`,t(n.h3,{id:"arguments-3",children:"Arguments"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[t(n.strong,{children:"href"})," - The string / URL to navigate to"]}),`
`]})]})}function _(o={}){const{wrapper:n}=Object.assign({},l(),o.components);return n?t(n,Object.assign({},o,{children:t(r,o)})):r(o)}export{_ as default};
