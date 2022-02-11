import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arabic-font',
  templateUrl: './arabic-font.component.html',
  styleUrls: ['./arabic-font.component.css']
})
export class ArabicFontComponent implements OnInit {
  progSelect = 'arabic-font'
  constructor() { }

  ngOnInit(): void {
  }

}
