import { AbstractControl, Validators } from "@angular/forms";

export class RequiredValidator extends Validators {
  public static required() {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value ? null : { required: 'This field is required' };
  }

  public static requiredString() {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value ? null : { requiredString: 'This field must be a string' };
  }
}
