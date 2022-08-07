export interface ComponentInstance {
  template?: string;
  styles?: string;
  init(): void;
  destroy(): void;
  onDestroy?(): void;
  onInit?(): void;
}