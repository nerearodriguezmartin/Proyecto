import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
//declare var jQuery: any;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  jQuery: any;
  constructor() { }


  ngOnInit(): void {

  }




}
