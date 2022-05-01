import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit  {
  json;
  ngOnInit(){
    this.json=JSON.parse(localStorage.getItem("json"));
  }
}
