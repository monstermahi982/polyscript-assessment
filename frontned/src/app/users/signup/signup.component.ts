import { Component, OnInit } from '@angular/core';
import {PolyscriptService} from '../../polyscript.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private user:PolyscriptService) { }

  ngOnInit(): void {
  }
  hide = true;
  getReg(values: object){
    this.user.sendRegister(values).subscribe((data) => console.log(data))
    console.log(values);
    
  }
}
