import {bindable, bindingMode} from 'aurelia-framework';
export class Workload {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) message;
}
