# Grommet Controls: a pack of extensions for Grommet 2

Visit the [Grommet 2](https://v2.grommet.io) website if you are not familiar with Grommet.

### Documentation

Visit the [grommet-controls](https://grommet-controls.netlify.app) website for more information.

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

 * [PagingTable](https://grommet-controls.netlify.app/docs/controls-pagingtable--main) A Grommet 2 table component with pagination, filtering, footer, child rows and grouping.
 * [Card](https://grommet-controls.netlify.app/docs/controls-card--main) A Card-type container.
 * [Tag](https://grommet-controls.netlify.app/docs/controls-tag--main) A tag control with a label and icon.
 * [Tags](https://grommet-controls.netlify.app/docs/input-tags--main) A list of tags that can be removed.
 * [Notification](https://grommet-controls.netlify.app/docs/controls-notification--main) A Box to display notification messages.
 * [Colors](https://grommet-controls.netlify.app/docs/controls-colors--main) A color selection element, with custom color palettes.
 * [ImageStamp](https://grommet-controls.netlify.app/docs/controls-imagestamp--main) A small image stamp used for avatars or image thumbnails.
 * [DropInput](https://grommet-controls.netlify.app/docs/input-dropinput--main) An Input control with an optional drop button with the specified 'dropContent' or widgets.
 * [MaskedInput](https://grommet-controls.netlify.app/docs/input-maskedinput--main) A masked Input control with an optional drop button with the specified 'dropContent'.
 * [DateInput](https://grommet-controls.netlify.app/docs/input-dateinput--main) A masked date entry field with a drop down calendar.
 * [NumberInput](https://grommet-controls.netlify.app/docs/input-numberinput--main) A masked number input, with widgets to increment/decrement the value. Automatically converts the value to a numeric type, so you dont have to parse strings in your onChange event.
 * [PasswordInput](https://grommet-controls.netlify.app/docs/input-passwordinput--main) A password field with show/hide password toggle.
 * [EmailInput](https://grommet-controls.netlify.app/docs/input-emailinput--main) A masked input with a default mask for handling email addresses.
 * [ColorInput](https://grommet-controls.netlify.app/docs/input-colorinput--main) A masked color entry field, with a drop button to select a color.
 * [Form](https://grommet-controls.netlify.app/docs/validation-form--main) A Form with built-in validation.
 * [Spinning](https://grommet-controls.netlify.app/docs/controls-spinning--main) A spinning process indicator.
 * [Value](https://grommet-controls.netlify.app/docs/controls-value--main) A single value with a label.
 * [Sidebar](https://grommet-controls.netlify.app/docs/layout-sidebar--main) Collapsible side bar component.
 * [VerticalMenu](https://grommet-controls.netlify.app/docs/navigation-verticalmenu--main) Hierarchical collapsible menu.

### Charts ([chart.js](http://www.chartjs.org))
```
    $ npm install chart.js
    $ npm install react-chartjs-2
```

 * [BarChart](https://grommet-controls.netlify.app/docs/chartjs-barchart--main)
 * [DoughnutChart](https://grommet-controls.netlify.app/docs/chartjs-doughnutchart--main)
 * [HorizontalBarChart](https://grommet-controls.netlify.app/docs/chartjs-horizontalbarchart--main)
 * [LineChart](https://grommet-controls.netlify.app/docs/chartjs-linechart--main)
 * [PieChart](https://grommet-controls.netlify.app/docs/chartjs-piechart--main)
 * [PolarChart](https://grommet-controls.netlify.app/docs/chartjs-polarchart--main)
 * [RadarChart](https://grommet-controls.netlify.app/docs/chartjs-radarchart--main)
 * [ScatterChart](https://grommet-controls.netlify.app/docs/chartjs-scatterchart--main)
 

