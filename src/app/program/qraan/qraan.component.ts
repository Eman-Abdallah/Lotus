import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-qraan',
  templateUrl: './qraan.component.html',
  styleUrls: ['./qraan.component.css']
})
export class QraanComponent implements OnInit {
  @Output()  progSelect = new EventEmitter<string>()
  programSelected  = 'qraan'
  constructor() { }

  ngOnInit(): void {
  }
  onClick(feature:string){
    this.progSelect.emit(feature)


    }
}
