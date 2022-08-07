import { ComponentInstance } from "../models/component-instance.model";
import { parseHTML } from "./html-parser";

export class Render {
  private readonly appElement: Element;

  constructor() {
    this.appElement = document.body.getElementsByTagName('app')[0];
  };

  public renderPage(component: ComponentInstance): void {
    if (component.template) {
      this.appElement.innerHTML = parseHTML(component.template);
      component.init();
    }
  }
}