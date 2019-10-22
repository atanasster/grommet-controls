import React, { Component } from 'react';
import {
 Box, Button, Keyboard, Text,
} from 'grommet';
import { FormDown } from 'grommet-icons/icons/FormDown';
import { FormNext } from 'grommet-icons/icons/FormNext';
import { IMenuItem, IVerticalMenuProps, ButtonClassType } from './VerticalMenuProps';


const isActive = (active: IMenuItem, item: IMenuItem): boolean => (
    item.id === active.id || item.label === active.label
);

const hasActiveChidlren = (active: IMenuItem, item: IMenuItem): boolean => {
  if (isActive(active, item)) {
    if (item.items && item.items.find(t => hasActiveChidlren(active, t))) {
      return true;
    }
  }
  return false;
};
const getExpandedItems = (children: IMenuItem[], active: IMenuItem): IMenuItem[] => children
    .reduce((expandedItems, item) => {
      const {
      items, expanded, id, label,
    } = item;
      if (expanded || (active && hasActiveChidlren(active, item))) {
        expandedItems.push(id || label);
      }
      let childrenExpandedItems = [];
      if (items) {
        childrenExpandedItems = getExpandedItems(items, active);
      }
      return expandedItems.concat(childrenExpandedItems);
    }, []);

const getCollapsibleItems = (children: IMenuItem[]): IMenuItem[] => children
    .reduce((collapsibleItems, { items, id, label }) => {
      let childrenCollapsibleItems = [];
      if (items) {
        collapsibleItems.push(id || label);

        childrenCollapsibleItems = getCollapsibleItems(items);
      }
      return collapsibleItems.concat(childrenCollapsibleItems);
    }, []);

const getFlatChildrenIds = (children: IMenuItem[]): IMenuItem[] => children
    .reduce((flatChildren, item) => {
      flatChildren.push(item.id || item.label);
      if (item.items) {
      // eslint-disable-next-line no-param-reassign
        flatChildren = flatChildren.concat(getFlatChildrenIds(item.items));
      }
      return flatChildren;
    }, []);

const getChildrenById = (children: IMenuItem[], id: string): IMenuItem[] => {
  let items;
  children.some((item) => {
    if (item.id === id || item.label === id) {
      ({ items } = item);
      return true;
    }
    if (item.items) {
      items = getChildrenById(item.items, id);

      if (items) {
        return true;
      }
    }
    return false;
  });
  return items;
};

const filterItems = (items: IMenuItem[], search: string): IMenuItem[] => {
  if (search && search.length) {
    const searchLC = search.toLowerCase();
    return items.map(item => Object.assign({}, item)).filter((item) => {
      const { items: children, label } = item;
      if (typeof label === 'string' && label.toLowerCase().indexOf(searchLC) >= 0) {
        return true;
      }
      if (children) {
        const childItems = filterItems(children, search);
        // eslint-disable-next-line no-param-reassign
        item.items = childItems;
        if (childItems.length) {
          return true;
        }
      }
      return false;
    });
  }
  return items;
};

interface IVerticalMenuState {
  expandedItems? : string[],
  originalExpandAll? : boolean,
  search?: string,
  items? : IMenuItem[],
  filteredItems?: IMenuItem[],
  collapsibleItems?: IMenuItem[],
  allExpanded? : boolean,
  expandAll?: boolean,
}
/** Hierarchical collapsible menu
* ```$ npm install grommet-controls\n
* import { VerticalMenu } from 'grommet-controls';\n
* <VerticalMenu items={...} onSelect={...} />
*```
*/
class VerticalMenu extends Component<IVerticalMenuProps, IVerticalMenuState> {
  state: IVerticalMenuState = { expandedItems: [] };

  static getDerivedStateFromProps(
      nextProps: IVerticalMenuProps,
      prevState: IVerticalMenuState = {}
      ): IVerticalMenuState {
    const {
 items, expandAll, activeItem, search,
} = nextProps;
    const { originalExpandAll, search: stateSearch, items: stateItems = [] } = prevState;

    if (
      items.toString() !== stateItems.toString()
      || expandAll !== originalExpandAll
      || search !== stateSearch
    ) {
      const filteredItems = filterItems(items, search);
      const collapsibleItems = getCollapsibleItems(filteredItems);
      let expandedItems;
      if (expandAll || (search && search.length)) {
        expandedItems = collapsibleItems;
      } else {
        expandedItems = getExpandedItems(filteredItems, activeItem);
      }

      const allExpanded = typeof expandAll !== 'undefined'
          ? expandAll
          : collapsibleItems.length === expandedItems.length;
      return {
        expandedItems,
        items,
        filteredItems,
        search,
        collapsibleItems,
        allExpanded,
        expandAll,
        originalExpandAll: expandAll,
      };
    }

    return null;
  }

  onMenuChange = (id: string, expanded: boolean) => {
    const { expandedItems, filteredItems } = this.state;

    let newExpandedItems = [...expandedItems];
    if (expanded) {
      const toBeCollapsed = [
        id,
        ...getFlatChildrenIds(getChildrenById(filteredItems, id)),
      ];
      newExpandedItems = newExpandedItems.filter(
        item => toBeCollapsed.indexOf(item) < 0
      );
    } else {
      newExpandedItems.push(id);
    }

    this.setState({
      expandedItems: newExpandedItems,
    });
  };

  renderItem = (item, level = 1) => {
    const { activeItem, onSelect, buttonClass } = this.props;
    const { expandedItems } = this.state;
    const {
      items, id, label, widget, icon, ...rest
    } = item;
    const itemId = id || label;
    const isExpanded = expandedItems.includes(itemId);
    const ButtonClass: ButtonClassType = (items ? Button : buttonClass) || Button;
    const itemKey = `item_${itemId}_${level}`;

    let background;
    if (activeItem && activeItem.id === id) {
      background = {
        color: 'active',
        opacity: 'strong',
      };
    }

    const content = (
      <Box
        background={background}
      >
        <ButtonClass
          onClick={(!rest.route && !rest.path) ? () => (
              items ? this.onMenuChange(itemId, isExpanded) : (onSelect && onSelect(item))
              ) : undefined
          }
          hoverIndicator={{ color: 'active' }}
          {...rest}
        >
          <Box
            direction='row'
            align='center'
            pad='small'
            style={{
              marginLeft: items ? `${12 * level}px` : `${16 * level}px`,
            }}
          >
            {items
              && (isExpanded ? <FormDown /> : <FormNext />)}
            <Box direction='row' justify='between' fill='horizontal' align='center'>
              <Box direction='row' align='center' gap='small'>
                {icon}
                {typeof label === 'string' ? (
                  <Text>
                    {items ? <strong>{label}</strong> : label}
                  </Text>
                  ) : label
                }
              </Box>
              {widget}
            </Box>
          </Box>
        </ButtonClass>
      </Box>
    );
    return (
      <Box key={itemKey}>
        {items ? (
          <Keyboard
            onDown={() => this.onMenuChange(itemId, false)}
            onRight={() => this.onMenuChange(itemId, false)}
            onUp={() => this.onMenuChange(itemId, true)}
            onLeft={() => this.onMenuChange(itemId, true)}
          >
            {content}
          </Keyboard>
        ) : (
          content
        )}
        {items
          && (isExpanded && items.map(child => this.renderItem(child, level + 1)))}
      </Box>
    );
  };

  render() {
    const { filteredItems } = this.state;
    return (
      <React.Fragment>
        {filteredItems && filteredItems.map(item => this.renderItem(item, 1))}
      </React.Fragment>
    );
  }
}

export { VerticalMenu };
