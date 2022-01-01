import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit() {
  }
  add(){
    console.log(this.todoForm.value);
    this.activeModal.close(this.todoForm.value);
  }
  public categories:any[]=[
    'DV/PV',
    'EXPENSES',
    'CAPEX',
    'TRAINING',
    'SKILL DEVELOPMENT',
    'MEETING',
    'CUSTOMER/QC MEETING',
    'REPORT GENERATION'
  ];

public todoForm:FormGroup=new FormGroup
(
  {
    activity:new FormControl(),
    date:new FormControl(),
    category:new FormControl(),
    purpose:new FormControl(),
    isActive:new FormControl(true),
    state:new FormControl('pending')
  }
)
}