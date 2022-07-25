import { Component } from '@angular/core';
import { AlertdialogService } from '../alertdialog.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'colorfull1',
  templateUrl: './colorfull1.component.html',
  styleUrls: ['./colorfull1.component.css'],
})
export class Colorfull1Component implements OnInit {
  // SubscribeStatus = '';
  // ShowStatusSubscribe() {
  //   this.SubscribeStatus = 'Thank you for Subscribing';
    
  // }
  ngOnInit(){
  }
  
  constructor(private serviceAlert: AlertdialogService){}
  
  btnClick() {
    this.serviceAlert.popMessage();
  }

  likeBtnClick() {
    this.serviceAlert.popLikeMessage();
  }

  public headers = ['Name', 'Hobby', 'Age', 'Country'];
  public rows = [
    {
      Name: 'Rani',
      Hobby: 'Dance',
      Age: '21',
      Country: 'India',
    },
    {
      Name: 'Seema',
      Hobby: 'Singing',
      Age: '20',
      Country: 'India',
    },
    {
      Name: 'Prem',
      Hobby: 'Memecry',
      Age: '19',
      Country: 'India',
    },
    {
      Name: 'Sam',
      Hobby: 'Dance',
      Age: '21',
      Country: 'Australia',
    },
    {
      Name: 'Rani',
      Hobby: 'Dance',
      Age: '21',
      Country: 'India',
    },
    {
      Name: 'Rani',
      Hobby: 'Dance',
      Age: '21',
      Country: 'India',
    },
  ];
}
