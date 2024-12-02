import { Directive, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { Setting } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { RangeComponent } from './range/range.component';

@Directive({
  selector: '[appDynamicFormField]',
  standalone: true
})
export class DynamicFormFieldDirective {
  @Input() field!: Setting;
  @Input() form!: FormGroup;

  components: Record<string, any> = {
    image_picker: ImagePickerComponent,
    range: RangeComponent
  }
  constructor( private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    const component = this.components[this.field.type];
    if (!component) {
      return;
    }
    const componentRef:any = this.viewContainerRef.createComponent(component);
    if (componentRef.instance) {
      componentRef.instance.field = this.field;
      componentRef.instance.form = this.form;
      componentRef.instance.formControlName = this.field.id;
      componentRef.instance.formControl = this.form.get(this.field.id) as FormControl;
    }
  }


  


}
