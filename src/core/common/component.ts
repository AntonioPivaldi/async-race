export class Component {
  onInit?(): void;
  onDestroy?(): void;

  public textBindings: Record<string, string[]> = {};
  public attrBindings: Record<string, string[]> = {};

  public init(): void {
    this.bindProperties();
    this.defineProperties();
    if (this.onInit) this.onInit();
  };

  public destroy(): void {
    if (this.onDestroy) this.onDestroy();
  };

  private bindProperties(): void {
    const binds = document.querySelectorAll('[data-bind]');
    Array.from(binds).forEach((el: Element) => {
      const id: string | null = el.getAttribute('data-id');
      const propName: string | null = el.getAttribute('data-value');
      if (propName && id) {
        // // @ts-ignore
        // const propValue = this[propName];
        // el.innerHTML = propValue;
        if (this.textBindings[propName]) {
          this.textBindings[propName].push(id);
        } else {
          this.textBindings[propName] = [id];
        }
      }
    })
  }

  private bindAttributes(): void {

  }

  private defineProperties(): void {
    Object.entries(this.textBindings).forEach(([key, ids]: [string, string[]]) => {
      // @ts-ignore
      const property = this[key];
      if (property) {
        // @ts-ignore
        this[`_${key}`] = property;
        Object.defineProperty(this, `${key}`, { set: (x) => {
          this.renderProperty(x.toString(), ids);
        } });
        this.renderProperty(property.toString(), ids);
        Object.defineProperty(this, `${key}`, { get: () => {
          // @ts-ignore
          this[`_${key}`];
        }})
      } else {
        this.renderProperty('undefined', ids);
      }
    })
  }

  private renderProperty(value: string, ids: string[]): void {
    ids.forEach((id: string) => {
      const el = document.querySelector(`[data-id="${id}"]`);
      if (el) {
        el.textContent = value;
      }
    })
  }
}