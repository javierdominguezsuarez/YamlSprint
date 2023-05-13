import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  styleUrls: ['./nav-horizontal.component.scss']
})
export class NavHorizontalComponent {
  @Input() refresh: boolean = true
  @Output() action = new EventEmitter<string>()
  expanded = true

  ngOnInit(){
    console.log(this.refresh)
    if (this.refresh != undefined)
    this.expanded = this.refresh
    console.log("ESTADO: "+ this.expanded)
  }
  close(){

      console.log("CERRANDO")
      this.expanded = false
      this.action.emit("closed")
    
  }
  open(){
    console.log("ABRIENDOO")
      this.expanded = true
      this.action.emit("opened")
    
  }
}
