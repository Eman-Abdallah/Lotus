import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {

  @Output()  progSelect = new EventEmitter<string>()
programSelected= "kids"
  constructor() { }

  ngOnInit(): void {
  }
  onClick(feature:string){
    this.progSelect.emit(feature)


    }
}
