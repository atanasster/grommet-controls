# Grommet Controls: a pack of extensions for Grommet 2

:warning: Early version subject to changes.

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
      ...
      "env": {
        ...
        "production": {
              "plugins": [
                ["grommet"],
                ["transform-imports", { "grommet-controls": {
                  "transform": "grommet-controls/components/${member}",
                  "preventFullImport": true }}]
              ]
            }
        ...
  ```

### Components

 * [PagingTable](https://grommet-nextjs.herokuapp.com/add-ons/paging-table) A Grommet 2 table component with pagination, filtering, footer, child rows and grouping.
 * [Card](https://grommet-nextjs.herokuapp.com/add-ons/card) A Card-type container.
 * [Tag](https://grommet-nextjs.herokuapp.com/add-ons/tag) A tag control with a label and icon.
 * [Tags](https://grommet-nextjs.herokuapp.com/add-ons/tags) A list of tags that can be removed.
 * [Notification](https://grommet-nextjs.herokuapp.com/add-ons/notification) A Box to display notification messages.
 * [Colors](https://grommet-nextjs.herokuapp.com/add-ons/colors) A color selection element, with custom color palettes.
 * [ImageStamp](https://grommet-nextjs.herokuapp.com/add-ons/imagestamp) A small image stamp used for avatars or image thumbnails.
 * [DropInput](https://grommet-nextjs.herokuapp.com/add-ons/dropinput) An Input control with an optional drop button with the specified 'dropContent' or widgets.
 * [MaskedInput](https://grommet-nextjs.herokuapp.com/add-ons/maskedinput) A masked Input control with an optional drop button with the specified 'dropContent'.
 * [DateInput](https://grommet-nextjs.herokuapp.com/add-ons/dateinput) A masked date entry field with a drop down calendar.
 * [NumberInput](https://grommet-nextjs.herokuapp.com/add-ons/numberinput) A masked number input, with widgets to increment/decrement the value. Automatically converts the value to a numeric type, so you dont have to parse strings in your onChange event.
 * [PasswordInput](https://grommet-nextjs.herokuapp.com/add-ons/passwordinput) A password field with show/hide password toggle.
 * [EmailInput](https://grommet-nextjs.herokuapp.com/add-ons/emailinput) A masked input with a default mask for handling email addresses.
 * [ColorInput](https://grommet-nextjs.herokuapp.com/add-ons/colorinput) A masked color entry field, with a drop button to select a color.
 * [Form](https://grommet-nextjs.herokuapp.com/add-ons/form) A Form with built-in validation.
 * [Spinning](https://grommet-nextjs.herokuapp.com/add-ons/spinning) A spinning process indicator.
 
### Themes

 * [Black](https://grommet-nextjs.herokuapp.com/?theme=black)
 * [Material Light](https://grommet-nextjs.herokuapp.com/?theme=materiallight)
 * [Material Dark](https://grommet-nextjs.herokuapp.com/?theme=materialdark)
 * [Metro](https://grommet-nextjs.herokuapp.com/?theme=metro)
  
 
