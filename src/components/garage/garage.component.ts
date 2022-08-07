import { Component } from "../../core/common/component";
import { ComponentInstance } from "../../core/models/component-instance.model";
import html from './garage.component.html';
import scss from './garage.component.scss';

export class GarageComponent extends Component implements ComponentInstance {
  public template: string | undefined = html;
  public styles: string | undefined = scss;

  onInit() {

  }

  onDestroy() {
    
  }
}