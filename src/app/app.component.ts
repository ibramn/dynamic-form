import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { SettingsSchema } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-form';
  settingsSchema: SettingsSchema = {
    "name": "t:settings_schema.logo.name",
    "settings": [
      {
        "type": "image_picker",
        "id": "logo",
        "label": "t:settings_schema.logo.settings.logo_image.label"
      },
      {
        "type": "range",
        "id": "logo_width",
        "min": 50,
        "max": 300,
        "step": 10,
        "default": 100,
        "unit": "px",
        "label": "t:settings_schema.logo.settings.logo_width.label"
      },
      {
        "type": "image_picker",
        "id": "favicon",
        "label": "t:settings_schema.logo.settings.favicon.label",
        "info": "t:settings_schema.logo.settings.favicon.info"
      }
    ]
  }

}
