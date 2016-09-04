import { inject, bindable, customElement, bindingMode } from 'aurelia-framework';

export class TextSection {
  @bindable main
  @bindable subhead

  constructor(main, subhead){
    this.main = main;
    this.subhead = subhead;
  }
}
