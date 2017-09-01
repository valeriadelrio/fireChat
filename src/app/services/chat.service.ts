import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from '../interfaces/mensaje.interface';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any[]>;
  usuario: any = null;

  constructor(private af: AngularFireDatabase,
                public afAuth: AngularFireAuth) {
        // this.chats = af.list('/chats');
        if (localStorage.getItem('usuario')){
          this.usuario = JSON.parse(localStorage.getItem('usuario'));
        }else{
          this.usuario = {};
        }
  }

  cargarMensajes(){
    this.chats = this.af.list('chats', {
      query:{
        limitToLast: 20,
        orderByKey:true
      }
    });
    return this.chats;
  }

  agregarMensaje(texto:string){
    let mensaje:Mensaje = {
      nombre: this.usuario.displayName,
      mensaje: texto,
      uid: this.usuario.uid
    }

    return this.chats.push(mensaje);

  }

  login(cuenta:string) {
    let proveedor: any;
    if(cuenta == "google"){
      proveedor = new firebase.auth.GoogleAuthProvider();

    }else{
      proveedor = new firebase.auth.TwitterAuthProvider();

    }
    this.afAuth.auth.signInWithPopup(proveedor)
      .then(resp => {
        this.usuario=resp.user;
        localStorage.setItem('usuario', JSON.stringify(this.usuario));

      })
  }

  logout() {

    localStorage.removeItem('usuario');
    this.usuario=null;
    this.afAuth.auth.signOut();
  }

}
