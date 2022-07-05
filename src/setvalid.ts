import {autoinject} from 'aurelia-framework';
  
@autoinject
export class SetValidCustomAttribute {
  value: boolean;
  
  constructor(private element: Element){
  }

  valueChanged(newValue: boolean, oldValue: boolean): void {
    const element = (<HTMLInputElement>this.element);

    if (newValue) {
      element.classList.remove('is-invalid');
      element.classList.add('is-valid'); //

    } else {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid'); //
    }

    element.reportValidity();
  }
}
