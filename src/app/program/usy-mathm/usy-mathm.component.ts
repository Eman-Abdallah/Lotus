import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usy-mathm',
  templateUrl: './usy-mathm.component.html',
  styleUrls: ['./usy-mathm.component.css']
})
export class UsyMathmComponent implements OnInit {
@Output()  progSelect = new EventEmitter<string>()
programSelected ='usy-math'
  constructor() { }

  ngOnInit(): void {
  }
onClick(feature:string){
this.progSelect.emit(feature)

}
}
