import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dummyList } from '../api/storage';
import { AddTodoComponent } from './add-todo/add-todo.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todoList:any[]=[];
  public datePick:any;
 constructor(public oModal:NgbModal)
 {
this.todoList=new dummyList().getData(10);
 } 

 addnew()
 {
    this.oModal.open(AddTodoComponent, { centered: true, ariaLabelledBy: 'static', backdrop: 'static', size:'sm' }).result.then((res) => {  
      if(res)
      {
        this.todoList.push(res);
      }    
    });
 }
}
