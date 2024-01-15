# Espresso Block Explorer Components

The Espresso Block Explorer Components contains the various building block
components for a React App utilizing the Espresso Design requirements. It
contains data stored for a style guide, as well as various component styles.

The component library is meant to be able to be tested and reviewed in a
stand-alone manner. This should allow for new components to be added with their
own tests and design functionality without needing to create them directly
within the block explorer itself.

As such this repository is primarily concerned with smaller reuseable components
that relate to different design / utilization requirements. We make a clear
distinction between components used primarily for Layout versus components that
are used for functionality and aesthetics. In order to achieve such a goal
we attempt to separate the concerns and take advantage of the cascading nature
of CSS to allow us to overwrite sub-tree component style inheritance.

## Running Storybook in Development Mode

In order to run the project and do development on the components library you
must execute the project using the appropriate workspace.

First ensure that the dependencies are installed / updated by running the
following command:

```sh
npm ci --workspaces
```

After completing this step successfully you should be able to run the Storybook
by running the following command:

```sh
npm run storybook --workspace=packages/espresso-block-explorer-components
```

## Building the Components Library

In order to build the library you should just need to run the following command:

```sh
npm run build --workspace=packages/espresso-block-explorer-components
```

## CSS Variables

This project makes heavy use of CSS Variables in order to allow us the maximum
flexibility of utilization and customization. In general, we will have CSS
variables whose purpose serves simply as a reference. This is great for static
values that can be latter referenced by other variables / CSS properties. A
great example of this are the colors and typography that have been defined at
the root level of the document for easy reference throughout the component
system.

The naming convention of these CSS variables attempts to adhere to a simple
convention in an attempt to make it easier to sus out what the name should /
would be without needing to lookup the variable. In general both CSS classes
and CSS variables names have their word groups separated by a single hyphen and
their conceptual group / category separated by two hyphens

Components themselves that need the customization of styles define their own
variables for customization. These variables can be added as needed otherwise
we'd have a lot of css variable bloat without any benefit.

### Examples

#### CSS Variable Names

- `--color--slate-950`
- `--text--color`
- `--card--background-color`

#### CSS Class Names

- `type--paragraph--text-100`
- `card`
- `card--padding`

## Colors

We define our Espresso colors for use in the root of the system for direct
reference. Not every aspect / value of color is available in order to limit
the amount of colors in use on the page.

For each color we create we also ensure that we make a corresponding on color
variable that will contrast well with the chosen color. This allows us to
have a corresponding text / icon color change whenever we change the background
color of a component's Element.

### Example of Naming Scheme

Consider our Color `Slate 950`. There is a CSS variable named
`--color--slate-950` that holds this value. In addition there is also a
CSS variable named `--on-color--slate-950` that holds the good contrast color
when pared with `--color--slate-950`.

### Example of Color use

### Names of colors

- Slate 950
- Slate 700
- Slate 500
- Slate 300
- Slate 200
- Slate 100
- Slate 50

- Green 800
- Green 700
- Green 600
- Green 100
- Green 50

- Amber 500
- Amber 300
- Amber 50

- Red 600
- Red 100

- Sky 700

- Coffee
- Chocolate
- Chili

- Caramel
- Cookie
- Vanilla
- Azure
- Blueberry

- Pistachio
- Herb
- Citrus
