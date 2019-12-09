import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<any> , 
  @Inject(MAT_DIALOG_DATA) public data)
   {
    // console.log(data)
    }
   onNoClick():void{
     this.dialogRef.close();
   }

  ngOnInit() {
  }

}
