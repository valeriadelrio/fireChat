import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
        this.chats = af.list('/chats');
  }

  agregarMensaje(texto:string){
    let mensaje:Mensaje = {
      nombre: "Valeria",
      mensaje: texto
    }

    return this.chats.push(mensaje);

  }

}
