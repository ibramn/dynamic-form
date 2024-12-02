export interface SettingsSchema {
    name: string;
    settings: Setting[];
}

export interface Setting {
    type: "image_picker" | "range" | "color" | "color_background" | "checkbox" | "select";
    id: string;
    label: string;
    default?: string | number | boolean;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    info?: string;
    options?: SelectOption[];
}

export interface SelectOption {
    value: string;
    label: string;
}