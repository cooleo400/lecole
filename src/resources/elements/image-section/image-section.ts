import { bindable } from 'aurelia-framework';

export class ImageSection {
  @bindable src
  @bindable title

  constructor(src, title){
    this.src = src;
    this.title = title;
  }
}
