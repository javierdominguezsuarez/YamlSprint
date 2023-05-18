import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserStory } from '../us-form/user-story';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';



@Component({
  selector: 'app-us-view',
  templateUrl: './us-view.component.html',
  styleUrls: ['./us-view.component.scss']
})
export class UsViewComponent {
  @Input() us: UserStory | undefined;
  @ViewChild('usview') usviewElement!: ElementRef;

  constructor(public dialogRef: MatDialogRef<UsViewComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }

  generatePDF() {
    if (this.usviewElement) {
      const usviewContent = this.usviewElement.nativeElement;
  
      const options = {
        filename: 'usview.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
  
      html2pdf().from(usviewContent).set(options).save();
    }
  }
}
