import React from 'react';
import { ButtonProps } from 'grommet';

export interface IMenuItem {
  /** Unique id */
  id?: string,
  /** Label of the item */
  label?: React.ReactNode,
  /** Initial expanded state */
  expanded?: boolean,
  /** Icon in front of the label */
  icon?: React.ReactNode,
  /** Widget or icon to place at the end of the item */
  widget?: React.ReactNode,
  /** Array of child/sub-menu items */
  items?: IMenuItem[],
  /** href parameter for anchor type child elements */
  href?: string,
  /** event handler onClick */
  onClick?: (id: string) => void,
}

export interface IVerticalMenuProps {
  /** Array of menu items */
  items: IMenuItem[],
  /** Initially active menu item */
  activeItem?: {
    id?: string,
    label?: string,
  },
  /** Custom class to use for the button instead of RoutedButton */
  buttonClass?: React.ComponentClass<ButtonProps>,
  /** If specified, will expand all items with chidren */
  expandAll?: boolean,
  /** Function that will be called when the user selects a menu item */
  onSelect?: (item?: IMenuItem) => void,
  /** If specified, will filter the items by the search terms */
  search?: string,
}
