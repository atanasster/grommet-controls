export const filterByFocusable = elements =>
  Array.prototype.filter.call(elements || [], element => {
    const currentTag = element.tagName.toLowerCase();
    const validTags = /(svg|a|area|input|select|textarea|button|iframe|div)$/;
    const isValidTag = currentTag.match(validTags) && element.focus;
    if (currentTag === 'a') {
      return (
        isValidTag &&
        element.childNodes.length > 0 &&
        element.getAttribute('href')
      );
    }
    if (currentTag === 'svg' || currentTag === 'div') {
      return (
        isValidTag &&
        element.hasAttribute('tabindex') &&
        element.getAttribute('tabindex') !== '-1'
      );
    }
    return isValidTag;
  });

export default filterByFocusable;
