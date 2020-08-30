import React from 'react';
import { Box, Text } from 'grommet';
import { Inbox, Send, Flag, Star, Document, Tag, Trash } from 'grommet-icons';
import { VerticalMenu } from './VerticalMenu';

export default {
  title: 'navigation/VerticalMenu',
  component: VerticalMenu,
};

export const main = () => (
  <VerticalMenu
    activeItem={{ id: 'c_drive' }}
    items={[
      {
        id: 'local',
        label: 'Local',
        items: [
          { id: 'c_drive', href: '/c_drive', label: 'C: drive' },
          {
            id: 'f_drive',
            onClick: () => console.log('onClick'),
            label: 'F: drive',
          },
        ],
      },
      {
        id: 'cloud',
        label: 'Cloud',
        items: [
          { id: 'drop_box', href: '/drop_box', label: 'DropBox' },
          {
            id: 'google_drive',
            onClick: () => console.log('onClick'),
            label: 'Google drive',
          },
        ],
      },
    ]}
  />
);

const Badge = ({ label, background = 'light-3' }) => (
  <Box
    background={background}
    pad={{ horizontal: 'small' }}
    border="all"
    style={{ borderRadius: '20%' }}
  >
    <Text size="small">{label}</Text>
  </Box>
);

export const items = () => (
  <VerticalMenu
    activeItem={{ id: 'all' }}
    items={[
      {
        id: 'inbox',
        label: 'Inbox',
        icon: <Inbox />,
        expanded: true,
        items: [
          {
            id: 'all',
            href: '/inbox/all',
            label: 'All',
            widget: <Badge label="10" />,
          },
          {
            id: 'gmail',
            href: '/inbox/gmail',
            label: 'GMail',
            widget: <Badge label="8" />,
          },
          {
            id: 'work',
            href: '/inbox/work',
            label: 'Work',
            widget: <Badge label="1" />,
          },
          {
            id: 'amazon',
            href: '/inbox/amazon',
            label: 'Amazon',
            widget: <Badge label="1" />,
          },
        ],
      },
      {
        id: 'sent',
        href: '/inbox/sent',
        label: 'Sent',
        icon: <Send />,
      },
      {
        id: 'flagged',
        href: '/inbox/flagged',
        label: 'Flagged',
        icon: <Flag />,
        widget: <Badge label="3" background="accent-1" />,
      },
      {
        id: 'starred',
        href: '/inbox/starred',
        label: 'Starred',
        icon: <Star />,
      },
      {
        id: 'drafts',
        href: '/inbox/drafts',
        label: 'Drafts',
        icon: <Document />,
      },
      {
        id: 'tagged',
        href: '/inbox/tagged',
        label: 'Tagged',
        icon: <Tag />,
      },
      {
        id: 'trash',
        href: '/inbox/trash',
        label: 'Trash',
        icon: <Trash />,
      },
    ]}
  />
);
