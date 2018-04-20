## Card
A Card-type container, all props of Box apply.

## Usage

```javascript
$ npm install grommet-controls

    import { Card } from 'grommet-controls';

    import { CardTitle, CardSubTitle, CardContent } from 'grommet-controls/components/Card';

    <Card>
      <CardTitle>
        Title
      </CardTitle>
      <CardSubTitle>
        Sub title
      </CardSubTitle>
      <CardContent>
        card content goes here
      </CardContent>  
    </Card>  

```

## Properties

**animation**

Animation effect(s) to use. 'duration' and 'delay' should
        be in milliseconds. 'jiggle' and 'pulse' types are intended for
        small elements, like icons.

```
fadeIn
fadeOut
jiggle
pulse
slideUp
slideDown
slideLeft
slideRight
zoomIn
zoomOut
{
  type: 
    fadeIn
    fadeOut
    jiggle
    pulse
    slideUp
    slideDown
    slideLeft
    slideRight
    zoomIn
    zoomOut,
  delay: number,
  duration: number,
  size: 
    xsmall
    small
    medium
    large
    xlarge
}
[
  fadeIn
  fadeOut
  jiggle
  pulse
  slideUp
  slideDown
  slideLeft
  slideRight
  zoomIn
  zoomOut
  {
    type: 
      fadeIn
      fadeOut
      jiggle
      pulse
      slideUp
      slideDown
      slideLeft
      slideRight
      zoomIn
      zoomOut,
    delay: number,
    duration: number,
    size: 
      xsmall
      small
      medium
      large
      xlarge
  }
]
```

**backContent**

Content for the back side of the card, if not specified, the card will not be flippable.

```
node
```

**background**

Either a color identifier to use for the background
        color. For example: 'neutral-1'. Or, a 'url()' for an image. Dark
        is not needed if color is provided.

```
string
{
  color: string,
  dark: boolean,
  image: string,
  position: string,
  opacity: 
    weak
    medium
    strong
    boolean
}
```

**border**

Include a border. Defaults to `all`.

```
top
left
bottom
right
horizontal
vertical
all
{
  color: string,
  side: 
    top
    left
    bottom
    right
    horizontal
    vertical
    all,
  size: 
    small
    medium
    large
}
```

**elevation**

Elevated height above the underlying context, indicated
        via a drop shadow. Defaults to `small`.

```
none
xsmall
small
medium
large
xlarge
```

**flipped**

Whether the card should be flipped or not (backContent visible).

```
boolean
```

**flipOnHover**

Whether to automatically flip the card content on hover. Defaults to `true`.

```
boolean
```

**flipDuration**

Duration in seconds for the flip transition. Defaults to `0.3`.

```
number
```

**gap**

The amount of spacing between child elements (title, subtitle, content). Defaults to `small`.

```
xsmall
small
medium
large
xlarge
```

**margin**

The amount of margin around the card. An object can
        be specified to distinguish horizontal margin, vertical margin, and
        margin on a particular side of the card. Defaults to `small`.

```
none
xsmall
small
medium
large
{
  bottom: 
    xsmall
    small
    medium
    large,
  horizontal: 
    xsmall
    small
    medium
    large,
  left: 
    xsmall
    small
    medium
    large,
  right: 
    xsmall
    small
    medium
    large,
  top: 
    xsmall
    small
    medium
    large,
  vertical: 
    xsmall
    small
    medium
    large
}
```

**onFlip**

Callback for when the card is flipped.

```
function
```

**pad**

The amount of padding inside the card content. An
        object can be specified to distinguish horizontal padding, vertical
        padding, and padding on a particular side of the box Defaults to `small`.

```
none
xsmall
small
medium
large
{
  bottom: 
    xsmall
    small
    medium
    large,
  horizontal: 
    xsmall
    small
    medium
    large,
  left: 
    xsmall
    small
    medium
    large,
  right: 
    xsmall
    small
    medium
    large,
  top: 
    xsmall
    small
    medium
    large,
  vertical: 
    xsmall
    small
    medium
    large
}
```

**round**

How much to round the corners of the card. Defaults to `xsmall`.

```
xsmall
small
medium
large
full
```

**size**

The size of the Card. Defaults to `{
  "width": "large",
  "height": "medium"
}`.

```
xxsmall
xsmall
small
medium
large
xlarge
full
{
  height: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    full,
  width: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    full
}
```
  