import { bindable, bindingMode } from 'aurelia-framework';

export class ResourcetypeList {

  @bindable({ defaultBindingMode: bindingMode.twoWay }) resource: string;

}
