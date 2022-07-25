import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
 
export class AlertdialogService {

  constructor() { }

  popMessage() {
    alert("Thank you for subscribing my channel");
  }

  popLikeMessage() {
    alert("Thank you for liking my channel");
  }

}