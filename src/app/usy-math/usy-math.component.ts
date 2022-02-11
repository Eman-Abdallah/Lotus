import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usy-math',
  templateUrl: './usy-math.component.html',
  styleUrls: ['./usy-math.component.css']
})
export class UsyMathComponent implements OnInit {
progSelect = 'usy'
  constructor() { }

  ngOnInit(): void {
  }

}
