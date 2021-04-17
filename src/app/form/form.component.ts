import { Component, OnInit } from '@angular/core';
import {User} from '../user.class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  model: User = new User(0,'', '', '', '', '', '');
  frameworks: string[] = ['angular', 'react', 'vue'];
  frameworkVersion: string[] = ['1.1.1', '1.2.1', '1.3.3', '2.1.2', '3.2.4', '4.3.1', '3.3.1', '5.2.1', '5.1.3'];

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic(): string {
    return JSON.stringify(this.model);
  }
}
