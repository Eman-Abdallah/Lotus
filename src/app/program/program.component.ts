import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
 programSelected = ""
progSelect = ""
  constructor() { }

  ngOnInit(): void {
  }
  onSelected(feature:string){
  this.programSelected= feature
  this.progSelect = ''
}

onNavi(feat:string){
this.progSelect= feat
this.programSelected = ''
}
}
