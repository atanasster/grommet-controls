# Grommet Controls: a pack of extensions for Grommet 2

Visit the [Grommet 2](https://v2.grommet.io) website if you are not familiar with Grommet.

### Documentation

Visit the [grommet-nextjs](https://grommet-nextjs.herokuapp.com/add-ons) website for more information.

### Support / Contributing

Before opening an issue or pull request, please read the [Contributing](https://github.com/atanasster/grommet-controls/blob/master/CONTRIBUTING.md) guide.

### Sample App

  The quickest way to get started is to clone the [Grommet Controls Sample](https://github.com/atanasster/grommet-controls-sample) page.

### Install

  To install Grommet Controls:

  ```
    $ npm install grommet-controls
  ```

### Configuration

  To avoid the entire library being pulled into your bundles when using member imports, you can use [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports)
  and configure your `.babelrc` file:
  ```
    $npm install -save-dev babel-plugin-transform-imports

    edit .babelrc:
      ...
      "plugins": [
        ["styled-components", { "ssr": true, "displayName": true, "preprocess": false }],
        ["transform-imports", {
          "grommet-controls": {
            "transform": "grommet-controls/es6/components/${member}",
            "preventFullImport": true,
            "skipDefaultConversion": true
          },
          "grommet-controls/themes": {
            "transform": "grommet-controls/es6/themes/${member}",
            "preventFullImport": true
          },
          "grommet": {
            "transform": "grommet/es6/components/${member}",
            "preventFullImport": true,
            "skipDefaultConversion": true
          },
          "grommet/contexts": {
            "transform": "grommet/es6/contexts/${member}",
            "preventFullImport": true,
            "skipDefaultConversion": true
          },
          "grommet/themes": {
            "transform": "grommet/es6/themes/${member}",
            "preventFullImport": true,
            "skipDefaultConversion": true
          },
          "grommet/components/hocs": {
            "transform": "grommet/es6/components/hocs",
            "preventFullImport": true,
            "skipDefaultConversion": true
          },
          "grommet-icons/contexts": {
            "transform": "grommet-icons/es6/contexts/${member}",
            "preventFullImport": true,
            "skipDefaultConversion": true
          },
          "grommet-icons": {
             "transform": "grommet-icons/es6/icons/${member}",
             "preventFullImport": false,
             "skipDefaultConversion": true
          }
        }]
      ],
      ...
  ```

### Components

 * [PagingTable](https://grommet-nextjs.herokuapp.com/documentation/PagingTable) A Grommet 2 table component with pagination, filtering, footer, child rows and grouping.
 * [Card](https://grommet-nextjs.herokuapp.com/documentation/Card) A Card-type container.
 * [Tag](https://grommet-nextjs.herokuapp.com/documentation/Tag) A tag control with a label and icon.
 * [Tags](https://grommet-nextjs.herokuapp.com/documentation/Tags) A list of tags that can be removed.
 * [Notification](https://grommet-nextjs.herokuapp.com/documentation/Notification) A Box to display notification messages.
 * [Colors](https://grommet-nextjs.herokuapp.com/documentation/Colors) A color selection element, with custom color palettes.
 * [ImageStamp](https://grommet-nextjs.herokuapp.com/documentation/ImageStamp) A small image stamp used for avatars or image thumbnails.
 * [DropInput](https://grommet-nextjs.herokuapp.com/documentation/DropInput) An Input control with an optional drop button with the specified 'dropContent' or widgets.
 * [MaskedInput](https://grommet-nextjs.herokuapp.com/documentation/MaskedInput) A masked Input control with an optional drop button with the specified 'dropContent'.
 * [DateInput](https://grommet-nextjs.herokuapp.com/documentation/DateInput) A masked date entry field with a drop down calendar.
 * [NumberInput](https://grommet-nextjs.herokuapp.com/documentation/NumberInput) A masked number input, with widgets to increment/decrement the value. Automatically converts the value to a numeric type, so you dont have to parse strings in your onChange event.
 * [PasswordInput](https://grommet-nextjs.herokuapp.com/documentation/PasswordInput) A password field with show/hide password toggle.
 * [EmailInput](https://grommet-nextjs.herokuapp.com/documentation/EmailInput) A masked input with a default mask for handling email addresses.
 * [ColorInput](https://grommet-nextjs.herokuapp.com/documentation/ColorInput) A masked color entry field, with a drop button to select a color.
 * [Form](https://grommet-nextjs.herokuapp.com/documentation/Form) A Form with built-in validation.
 * [Spinning](https://grommet-nextjs.herokuapp.com/documentation/Spinning) A spinning process indicator.
 * [Value](https://grommet-nextjs.herokuapp.com/documentation/Value) A single value with a label.
 * [Sidebar](https://grommet-nextjs.herokuapp.com/documentation/Sidebar) Collapsible side bar component.
 * [VerticalMenu](https://grommet-nextjs.herokuapp.com/documentation/VerticalMenu) Hierarchical collapsible menu.

### Charts ([chart.js](http://www.chartjs.org))
```
    $ npm install chart.js
    $ npm install react-chartjs-2
```

 * [BarChart](https://grommet-nextjs.herokuapp.com/add-ons/barchart)
 * [HorizontalBarChart](https://grommet-nextjs.herokuapp.com/add-ons/horizontalbarchart)
 * [LineChart](https://grommet-nextjs.herokuapp.com/add-ons/linechart)
 * [DoughnutChart](https://grommet-nextjs.herokuapp.com/add-ons/doughnutchart)
 * [PieChart](https://grommet-nextjs.herokuapp.com/add-ons/piechart)
 * [PolarChart](https://grommet-nextjs.herokuapp.com/add-ons/polarchart)
 * [RadarChart](https://grommet-nextjs.herokuapp.com/add-ons/radarchart)
 * [ScatterChart](https://grommet-nextjs.herokuapp.com/add-ons/scatterchart)
 
### Themes

 * [Black](https://grommet-nextjs.herokuapp.com/?theme=black)
 * [Material Light](https://grommet-nextjs.herokuapp.com/?theme=materiallight)
 * [Material Dark](https://grommet-nextjs.herokuapp.com/?theme=materialdark)
 * [Metro](https://grommet-nextjs.herokuapp.com/?theme=metro)
 * [Light](https://grommet-nextjs.herokuapp.com/?theme=light)


