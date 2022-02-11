import { Component, OnInit,EventEmitter ,Output } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
@Output() featureCreat = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
onselect(feature:string){
  this.featureCreat.emit(feature)
}
}
