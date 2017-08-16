/*  First time in WH*/ 
import { Component, OnInit } from '@angular/core';
/* ngOInit es creado */
/* code must be cleaner */ 
import { Input, Output } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  inputs: [ ]
})
export class TestComponent implements OnInit {
  @Input('') public  value: number;
  constructor() { }
  ngOnInit() {

    }
}