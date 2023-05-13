import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YamlSprint'
  url: string | undefined

  navExpanded = true
  constructor(private router: Router){}
  ngOnInit(){
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.url =this.router.url
        if (this.url !== '' && this.url !== '/') this.title = this.url.slice(1)
      })

  }

  actionNavHoz(event:any){
    if (event==="closed") {
      console.log("PARENT:CLOSED")
      this.navExpanded = false
    }else{
      this.navExpanded = true 
      console.log("PARENT:OPENED")
    }
  }

}
