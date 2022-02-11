import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lotus-acaddmy';

  loadedFeature = 'home'
  loadFeature = ''
  onNavigate(feature:string){
this.loadedFeature=feature
this.loadFeature = ''


  }
  onNav(feature:string){
this.loadFeature = feature
this.loadedFeature = ''
  }
}
