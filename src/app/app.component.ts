import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {inputdata} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  age:any=0;
  num: number= 0;
  makemestyle :string=' makemebold mysize ';
  makemetrue:boolean=false;
  inputform="form-control";
  selectedValue: string= 'One';
   name: string;
   val: number;
    myperson: [{name: 'Vidyuta', val: 1}, {name: 'Aakash', val: 2},{name: 'nothing', val: 4}];
  mybackgroundcolor:boolean=true;
 myfontsize:Number=25;
myfontstyle:boolean=true;

title1='Dynamic Html Form Generate';
 data=inputdata;
   addstyle(){
   let style={

 'font-style':this.myfontstyle?'italic':'normal'
   }
return style;
}
 
}

