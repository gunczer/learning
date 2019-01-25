import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdFormTest';
  firstName = '';

  onSubmit(form: NgForm) {
    console.log(form);
  }

  onSetFirstNameLongText() {
    this.firstName = 'appleapple';
  }

}