import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Setting } from '../models';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss',
 
})
export class RangeComponent  {
  value: number = 0;
  @Input() field!: Setting;
  @Input() form!: FormGroup;
  @Input() formControl!: FormControl;

}
