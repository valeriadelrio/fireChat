import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor(private _cs: ChatService) { }


  ingresar(cuenta:string){
    this._cs.login(cuenta)

  }
}
