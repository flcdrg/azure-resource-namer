import {bindable, bindingMode} from 'aurelia-framework';
export class region {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) name;
}
