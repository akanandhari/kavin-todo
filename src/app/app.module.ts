import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {NgbModule,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { AddTodoComponent } from './add-todo/add-todo.component';


@NgModule({
  imports:      [NgbModule,BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent,AddTodoComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents:[AddTodoComponent]
 
})
export class AppModule { }
