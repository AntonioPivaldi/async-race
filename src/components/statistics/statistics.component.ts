import { Component } from "../../core/common/component";
import { ComponentInstance } from "../../core/models/component-instance.model";
import html from './statistics.component.html';
import scss from './statistics.component.scss';

export class StatisticsComponent extends Component implements ComponentInstance {
  public template: string | undefined = html;
  public styles: string | undefined = scss;

  public testTemplate = '';
  

  onInit() {
    setTimeout(() => {
      this.testTemplate = 'Testing';
    }, 0); 
  }

  onDestroy() {

  }
}