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
  yamlFormTrad: FormGroup
  yamlInput: FormControl = new FormControl('')
  form: boolean = false

  tsObject: UserStory[] = []

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<UsFormComponent>) {
    this.yamlForm = this.fb.group({
      yamlInput: this.yamlInput,
    })

    this.yamlFormTrad = this.fb.group({
      name: [''],
      id: [''],
      description: [''],
      subtasks: [''],
      acceptanceCriteria: [''],
      owner: [''],
      estimation: [''],
      additionalDetails: this.fb.group({})
    })
  }

  convert() {
    if (this.form === false){
      try {
        this.tsObject = jsyaml.load(this.yamlInput.value) as UserStory[]
        console.log(this.tsObject)
        this.addEvent.emit(this.tsObject[0])
        this.dialogRef.close()
      } catch (e) {
        console.error(e);
      }
    }else{
      if (this.yamlFormTrad !== null){
      const newStory: UserStory = {
        id: this.yamlFormTrad.get('id')?.value,
        name: this.yamlFormTrad.get('name')?.value,
        description: this.yamlFormTrad.get('description')?.value,
        subtasks: this.yamlFormTrad.get('subtasks')?.value.split('\n').map((subtask: string) => subtask.trim()),
        acceptanceCriteria: this.yamlFormTrad.get('acceptanceCriteria')?.value.split('\n').map((criterion: string) => criterion.trim()),
        owner: this.yamlFormTrad.get('owner')?.value,
        estimation: this.yamlFormTrad.get('estimation')?.value,
        
      }
      console.log(this.yamlFormTrad)
      this.addEvent.emit(newStory)
      this.dialogRef.close()
    }
      
    }
    
  }

  switch(){
    if (this.form === false ) {this.form = true
    }else{
      this.form = false 
    }
  }
}
