import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
 
export class AlertdialogService {

  constructor() { }

  popMessage() {
    alert("Thank you for subscribing my channel");
  }

}