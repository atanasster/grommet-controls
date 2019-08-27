import React from 'react';

export interface ISidebarProps {
  /** Title string or any react node */
  title?: React.ReactNode,
  /** The width of the side bar */
  width?: string,
  /** Whether the sidebar can be collapsed */
  collapsible?: boolean,
  /** children content elements to be displayed in Sidebar */
  children: React.ReactNode,
}
