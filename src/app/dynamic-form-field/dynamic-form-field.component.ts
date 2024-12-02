import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Setting } from '../models';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormFieldDirective } from '../dynamic-form-field.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form-field',
  standalone: true,
  imports: [DynamicFormFieldDirective, CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-field.component.html',
  styleUrl: './dynamic-form-field.component.scss'
})
export class DynamicFormFieldComponent {
  @Input() fields!: Setting[];
  @Input() form!: FormGroup;
  @Output() onChange = new EventEmitter<FormGroup>();

  ngOnInit() {
  }


}
