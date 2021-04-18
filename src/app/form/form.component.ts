import {Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user.class';
import { observableMailValidator} from '../custom-validators';
import {FORM_ERRORS, FORM_PLACEHOLDER, FORM_SUCCESS, FRAMEWORKS, FRAMEWORKS_VERSION, VALIDATION_MESSAGES} from '../form-data';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User(1, null, null, null, null, null, null, null);

  frameworks = FRAMEWORKS;
  frameworkVersions = FRAMEWORKS_VERSION;
  placeholders = FORM_PLACEHOLDER;
  formErrors = FORM_ERRORS;
  formSuccess = FORM_SUCCESS;
  validationMessage = VALIDATION_MESSAGES;

  firstName: AbstractControl;
  lastName: AbstractControl;
  dateOfBirth: AbstractControl;
  email: AbstractControl;
  framework: AbstractControl;
  frameworkVersion: AbstractControl;
  hobby: AbstractControl;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: [ this.user.lastName, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [ this.user.email, [Validators.required], [observableMailValidator]],
      dateOfBirth: [ this.user.dateOfBirth, Validators.required],
      framework: [ this.user.framework, Validators.required],
      frameworkVersion: [ this.user.frameworkVersion, Validators.required],
      hobby: [ this.user.hobby, Validators.required]
    });
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.createControls();

  }

  createControls(): void {
    this.firstName = this.userForm.controls.firstName;
    this.lastName = this.userForm.controls.lastName;
    this.dateOfBirth = this.userForm.controls.dateOfBirth;
    this.email = this.userForm.controls.email;
    this.framework = this.userForm.controls.framework;
    this.frameworkVersion = this.userForm.controls.frameworkVersion;
    this.hobby = this.userForm.controls.hobby;
  }

  onSubmit(): void {
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
  }

  onValueChanged(data?: any): void {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && control.invalid) {
        const message = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

}
