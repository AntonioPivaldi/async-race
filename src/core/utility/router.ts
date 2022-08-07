import { ModuleRoute } from "../models/module-route.model";
import { Render } from "./render";
import { ComponentInstance } from "../models/component-instance.model";

export class Router {
  public routes: ModuleRoute[] = [];

  private _activeRoute: string = '';
  private render: Render;
  private component: ComponentInstance | undefined;

  constructor(routes: ModuleRoute[], render: Render) {
    this.routes = routes;
    this.render = render;
    this.setFirstPath();
  }

  public getAllLinks(): void {
    Array.from(document.querySelectorAll('route')).forEach(el => {
        el.addEventListener('click', () => {
            const path = el.getAttribute('path');
            if (path) {
                this.setNewPath(path);
            }
        });
    });
  };

  public get activeRoute(): string {
    return this._activeRoute;
  };

  public set activeRoute(val: string) {
    this._activeRoute = val;
    this.setNewPath(val);
  };

  private setRoute(path: string): void {
    const component = this.routes.find((route: ModuleRoute) => path.includes(route.path))?.component;
    if (component) {
      if (this.component) {
        this.component.destroy();
      }
      this.component = new component();
      if (this.component) {
        this.render.renderPage(this.component);
        this.getAllLinks();
      }
    } else {
      throw new Error('Incorrect path');
    }
  };

  private setFirstPath(): void {
    this.setRoute('garage');
  };

  private setNewPath(path: string): void {
    this.setRoute(path);
  };

  public navigate(path: string): void {
    this.activeRoute = path;
  };
}