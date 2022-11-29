export const isInputNode = (node: any) => {
  if(!node){
    return false;
  }
  switch (node.nodeName.toLowerCase()) {
    case "input":
    case "textarea":
    case "select":
    case "option":
    case "checkbox":
      return true;
      break;
    case "button":
      return typeof node.hasAttribute !== 'undefined' && node.hasAttribute('aria-label') && node.getAttribute('aria-label').toLowerCase() === 'open calendar';
      break;
    case 'span':
      return node.className && node.className.indexOf('select2-selection') !== -1;
      break;
    case 'div':
      if (node.className && (node.className.indexOf('mat-form-field-flex') !== -1 || node.className.indexOf('mat-select-trigger') !== -1)) {
        return true;
      } else {
        return false;
      }
      break;
    case 'ckeditor':
      return true;
      break;
    case 'ng-select':
      return true;
      break;
    default:
      return false;
      break;
  }
}