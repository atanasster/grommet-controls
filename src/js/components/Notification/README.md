## undefined
A Box to display notification messages.

## Usage

```javascript
$ npm install grommet-controls
 
    import { Notification } from 'grommet-controls';

    <Notification message={...} onClose={...} />
```

## Properties

**a11yTitle**

Custom title to be used by screen readers.

```
string
```

**status**

Status color.

```
ok
info
warning
error
unknown
disabled
```

**size**

The font size of the notification message.

```
small
medium
large
```

**state**

State label.

```
string
```

**strong**

Heading bold state.

```
boolean
```

**message**

Message to be displayed.

```
string
```

**icon**

Notification icon.

```
boolean
element
```

**closer**

Closer icon.

```
boolean
element
```

**onClose**

Function that will be called when the user closes the notification.

```
function
```

**percentComplete**

Percent complete Meter for task notifications.

```
number
```

**timestamp**

timestamp for the notification (Date).

```
object
```

**locale**

The locale to use for timestamp, if provided.

```
string
```

**reverse**

If true, reverse the order of the Notification elements.

```
boolean
```
  