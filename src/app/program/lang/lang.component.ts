import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {

  @Output()  progSelect = new EventEmitter<string>()
programSelected = 'lang'
  constructor() { }

  ngOnInit(): void {
  }
  onClick(feature:string){
    this.progSelect.emit(feature)
    

    }
}
