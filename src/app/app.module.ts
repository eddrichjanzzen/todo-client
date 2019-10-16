import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// We must add http client module for the http client to work
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { FormsModule } from '@angular/forms';

//add bootstrap into the module

//everything defined below will be applied to AppModule
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AboutPageComponent,
    HeaderComponent
  ],

  // add HttpClientModule to imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// represents the app module class
export class AppModule { }
