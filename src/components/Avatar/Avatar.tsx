import React from 'react';
import { Box, Text } from 'grommet';
import { ImageStamp } from '../ImageStamp';
import { IAvatarProps } from './AvatarProps';

/**
* An image with some text, can be used as a user Avatar image<br/>
* `import { Avatar } from 'grommet-controls;'`<br/>
* `<Avatar image='...' />`<br/>
*/
const Avatar = ({
 image, title, subTitle, ...rest
}: IAvatarProps) => (
  <Box direction='row' align='center' gap='small'>
    <ImageStamp
      src={image}
      round='full'
      {...rest}
    />
    <Box justify='between'>
      <Text weight='bold' truncate={true}>{title}</Text>
      <Text size='small' truncate={true}>{subTitle}</Text>
    </Box>
  </Box>
);

export { Avatar };

try {
    // @ts-ignore
    Avatar.displayName = "Avatar";
    // @ts-ignore
    Avatar.__docgenInfo = { "description": "An image with some text, can be used as a user Avatar image<br/>\n`import { Avatar } from 'grommet-controls;'`<br/>\n`<Avatar image='...' />`<br/>", "displayName": "Avatar", "props": { "image": { "defaultValue": null, "description": "Image to be displayed", "name": "image", "required": false, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "Main title(name) for the Avatar", "name": "title", "required": false, "type": { "name": "string" } }, "subTitle": { "defaultValue": null, "description": "Secondary title for the Avatar", "name": "subTitle", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"] = { docgenInfo: Avatar.__docgenInfo, name: "Avatar", path: "src/components/Avatar/Avatar.tsx#Avatar" };
}
catch (__react_docgen_typescript_loader_error) { }
