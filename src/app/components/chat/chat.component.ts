import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  mensaje:string="";

  constructor( public _cs: ChatService) {
    this._cs.cargarMensajes().
      subscribe( () => {
        console.log("Mensajes cargados..");
      })
  }

  ngOnInit() {
  }

  enviar(){
    if( this.mensaje.length == 0){
      return;
    }
    this._cs.agregarMensaje(this.mensaje)
      .then( () => console.log("Hechoo"))
      .catch( (error) => console.error(error))


  }



}
