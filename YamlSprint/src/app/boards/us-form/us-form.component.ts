import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as jsyaml from 'js-yaml';
import { ReactiveFormsModule } from '@angular/forms';
import { UserStory } from './user-story';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-us-form',
  templateUrl: './us-form.component.html',
  styleUrls: ['./us-form.component.scss']
})

export class UsFormComponent {

  @Output() addEvent = new EventEmitter<UserStory>()
  yamlForm: FormGroup
  yamlInput: FormControl = new FormControl('')

  tsObject: UserStory[] = []

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<UsFormComponent>) {
    this.yamlForm = this.fb.group({
      yamlInput: this.yamlInput,
    })
  }

  convert() {
    try {
      this.tsObject = jsyaml.load(this.yamlInput.value) as UserStory[]
      console.log(this.tsObject)
      this.addEvent.emit(this.tsObject[0])
      this.dialogRef.close()
    } catch (e) {
      console.error(e);
    }
  }
}
