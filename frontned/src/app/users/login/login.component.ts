import { Component, OnInit } from '@angular/core';
import {PolyscriptService} from '../../polyscript.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:PolyscriptService) { }

  ngOnInit(): void {
  }

  hide = true;
  getLogin(values: object){
    this.user.sendLogin(values).subscribe((data) => {
      console.log(data);
    })
    console.log(values);
    
  }

}
