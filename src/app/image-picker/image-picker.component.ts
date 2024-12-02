import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Setting } from '../models';

@Component({
  selector: 'app-image-picker',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './image-picker.component.html',
  styleUrl: './image-picker.component.scss',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: ImagePickerComponent, multi: true }
  ]
})
export class ImagePickerComponent  {
  value: string = '';
  @Input() field!: Setting;
  @Input() form!: FormGroup;
  @Input() formControl!: FormControl;


}
