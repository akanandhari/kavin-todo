import { Component } from '@angular/core';
import { dummyList } from '../api/storage';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todoList:any[]=[];
  public datePick:any;
 constructor()
 {
this.todoList=new dummyList().getData(10);
 } 
}
