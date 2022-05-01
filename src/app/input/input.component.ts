import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  constructor(
    private router: Router,
  ) {}

  name=''

  json=[]
  valuechange(event:any){
    var obj=JSON.parse(event);
    if(typeof(obj)=='object'){
      this.json=obj
      console.log(typeof(obj))
    }
  }
  generate(){

    localStorage.setItem('json', JSON.stringify(this.json))
    
    this.router.navigate(['/material'])
  }
}
