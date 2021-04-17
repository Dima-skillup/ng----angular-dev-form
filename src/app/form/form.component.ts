import {Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user.class';
import {emailValidator} from '../custom-validators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User(1, null, null, null, null, null, null, null);
  frameworks: string[] = ['angular', 'react', 'vue'];
  frameworkVersions: string[] = ['1.1.1', '1.2.1', '1.3.3', '2.1.2', '3.2.4', '4.3.1', '3.3.1', '5.2.1', '5.1.3'];

  formErrors = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    frameworks: '',
    frameworkVersions: ''
  };

  validationMessage = {
    firstName: {
      required: 'Имя обязательно',
      minlength: 'Имя должно содержать не менее 4 символов',
      maxlength: 'Имя должно содержать не более 15 символов'
    },
    lastName: {
      required: 'Фамилия обязательна',
      minlength: 'Фамилия должно содержать не менее 4 символов',
      maxlength: 'Фамилия должна содержать не более 25 символов'
    },
    email: {
      required: 'Email обязателен',
      emailValidator: 'Неправильный формат email адреса'
    },
    dateOfBirth: {
      required: 'Дата обязательна'
    },
    frameworks: '',

    frameworkVersions: '',

  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: [ this.user.lastName, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [ this.user.email, [Validators.required,  emailValidator]],
      dateOfBirth: [ this.user.dateOfBirth, Validators.required],
      frameworks: [ this.user.frameworks, Validators.required],
      frameworkVersions: [ this.user.frameworkVersions, Validators.required],
      hobby: [ this.user.hobby, Validators.required]
    });
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));

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
  get diagnostic(): string {
    return JSON.stringify(this.user);
  }
}
