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
          "grommet-controls/chartjs": {
            "transform": "grommet-controls/es6/chartjs/${member}",
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

 * [PagingTable](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/PagingTable) A Grommet 2 table component with pagination, filtering, footer, child rows and grouping.
 * [Card](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/Card) A Card-type container.
 * [Tag](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/Tag) A tag control with a label and icon.
 * [Tags](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/Tags) A list of tags that can be removed.
 * [Notification](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/Notification) A Box to display notification messages.
 * [Colors](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/Colors) A color selection element, with custom color palettes.
 * [ImageStamp](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/ImageStamp) A small image stamp used for avatars or image thumbnails.
 * [DropInput](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/DropInput) An Input control with an optional drop button with the specified 'dropContent' or widgets.
 * [MaskedInput](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/MaskedInput) A masked Input control with an optional drop button with the specified 'dropContent'.
 * [DateInput](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/DateInput) A masked date entry field with a drop down calendar.
 * [NumberInput](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/NumberInput) A masked number input, with widgets to increment/decrement the value. Automatically converts the value to a numeric type, so you dont have to parse strings in your onChange event.
 * [PasswordInput](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/PasswordInput) A password field with show/hide password toggle.
 * [EmailInput](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/EmailInput) A masked input with a default mask for handling email addresses.
 * [ColorInput](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/ColorInput) A masked color entry field, with a drop button to select a color.
 * [Form](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/Form) A Form with built-in validation.
 * [Spinning](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/Spinning) A spinning process indicator.
 * [Value](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/Value) A single value with a label.
 * [Sidebar](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/Sidebar) Collapsible side bar component.
 * [VerticalMenu](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/VerticalMenu) Hierarchical collapsible menu.

### Charts ([chart.js](http://www.chartjs.org))
```
    $ npm install chart.js
    $ npm install react-chartjs-2
```

 * [BarChart](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/BarChart)
 * [DoughnutChart](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/DoughnutChart)
 * [HorizontalBarChart](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/HorizontalBarChart)
 * [LineChart](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/LineChart)
 * [PieChart](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/PieChart)
 * [PolarChart](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/PolarChart)
 * [RadarChart](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/RadarChart)
 * [ScatterChart](https://grommet-nextjs.herokuapp.com/documentation/grommet-controls/ScatterChart)
 
### Themes

 * [Black](https://grommet-nextjs.herokuapp.com/?theme=black)
 * [Material Light](https://grommet-nextjs.herokuapp.com/?theme=materiallight)
 * [Material Dark](https://grommet-nextjs.herokuapp.com/?theme=materialdark)
 * [Metro](https://grommet-nextjs.herokuapp.com/?theme=metro)
 * [Light](https://grommet-nextjs.herokuapp.com/?theme=light)


