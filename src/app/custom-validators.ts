import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

export function  observableMailValidator(control: AbstractControl): Observable<ValidationErrors | boolean | null> {
  const emailRegex = /^[a-zA-z.-]+@[a-z]+(\.[a-z]{2,3})+$/;
  const value = control.value;
  const result = emailRegex.test(value);

  return new Observable<ValidationErrors | boolean | null>(observer => {
    if (!result) {
      observer.next({emailNotAllowed: {value}});
    } else {
      observer.next(null);
    }
    observer.complete();
  }).pipe(delay(2000));
}
