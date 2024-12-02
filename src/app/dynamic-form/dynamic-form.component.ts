import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Setting } from '../models';
import { DynamicFormFieldComponent } from '../dynamic-form-field/dynamic-form-field.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormFieldComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: Setting[] = [];
  @Input() formValue: any;
  @Output() onChange = new EventEmitter<FormGroup>();
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    if (this.formValue) {
      this.form.patchValue(this.formValue);
    }
    console.log(this.form);
  }

  createForm() {
    this.form = this.fb.group({});
    this.fields.forEach(field => {
      this.form.addControl(field.id, new FormControl(field.default));
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
