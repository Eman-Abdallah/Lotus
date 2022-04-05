import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  form= new FormGroup({
    email:new FormControl(''),
    subject:new FormControl(''),
    disc: new FormControl('')
  })
onsubmit(){
  const messages= this.form.getRawValue()
  this.http.post('https://lotus-acadmey-default-rtdb.firebaseio.com/messages.json',messages).subscribe()
  this.form.reset()

}
}
