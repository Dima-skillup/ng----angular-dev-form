import {AbstractControl} from '@angular/forms';

export function emailValidator(control: AbstractControl): { [key: string]: any} {
  const emailRegex = /^[a-zA-z.-]+@[a-z]+(\.[a-z]{2,3})+$/;
  const value = control.value;
  const result = emailRegex.test(value);
  if (result) {
    return null;
  } else {
    return {emailValidator: {value}};
  }
}
