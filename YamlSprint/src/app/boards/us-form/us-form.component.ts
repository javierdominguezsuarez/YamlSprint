import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as jsyaml from 'js-yaml';
import { ReactiveFormsModule } from '@angular/forms';
import { UserStory } from './user-story';

@Component({
  selector: 'app-us-form',
  templateUrl: './us-form.component.html',
  styleUrls: ['./us-form.component.scss']
})

export class UsFormComponent {
  yamlForm: FormGroup

  yamlInput: FormControl = new FormControl('')

  tsObject: any = {}

  constructor(private fb: FormBuilder) {
    this.yamlForm = this.fb.group({
      yamlInput: this.yamlInput,
    })
  }

  convert() {
    try {
      this.tsObject = jsyaml.load(this.yamlInput.value);
    } catch (e) {
      console.error(e);
    }
  }
}
