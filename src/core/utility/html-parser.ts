import { uid } from "./uid";

export function parseHTML(template: string): string {
  const componentTemplate: HTMLElement = document.createElement('div');
  componentTemplate.innerHTML = template.trim();
  processAllNodes(componentTemplate);
  return componentTemplate.innerHTML;
}

function processAllNodes(el: HTMLElement | Element) {
  processNode(el);
  if (el.children.length) {
    Array.from(el.children).forEach((childEl: Element) => {
      processAllNodes(childEl);
    });
  }
}

function processNode(el: HTMLElement | Element) {
  const regExp = /{{[^)]*}}/g;
  if (!el.children.length) {
    const newInnerHTML = el.innerHTML.trim().replace(regExp, (match: string) => {
      const propertyName: string = match.substring(2, match.length - 2).trim();
      return `<span data-bind data-id="${uid()}" data-value="${propertyName}"></span>`;
    });
    el.innerHTML = newInnerHTML;
  }
}

function processAttrNode(el: HTMLElement | Element) {
  const regExp = /[.*?]/g;
  const attributes = el.getAttributeNames;
  
}