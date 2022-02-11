import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  @Output()  progSelect = new EventEmitter<string>()
  programSelected = 'computer'
  constructor() { }

  ngOnInit(): void {
  }
  onClick(feature:string){
    this.progSelect.emit(feature)


    }
}
