import { Component, OnInit } from '@angular/core';
import { AlertdialogService } from '../alertdialog.service';

@Component({
  selector: 'app-status-type',
  templateUrl: './status-type.component.html',
  styleUrls: ['./status-type.component.css']
})
export class StatusTypeComponent implements OnInit {
  constructor(private _serviceAlert: AlertdialogService) {}

  btnClick() {
    this._serviceAlert.popMessage();
  }
  

  ngOnInit() {
  }

}