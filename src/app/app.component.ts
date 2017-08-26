import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <p>Entered Value will be displayed simultaneously</p>
    <input #inputValue (keyup)="onKey(inputValue.value)">
    <p>{{values}}</p>
    
    <hr />
    <p>Press Enter to display the value</p>
    <input #inValue 
        (keyup.enter)="onEnter(inValue.value)"
        (blur)="onEnter(inValue.value)">
    <p>{{enterValue}}</p>
    
    <app-user></app-user>
  `,
})
export class AppComponent  { 
  name = 'Angular';
  values = '';
  enterValue: string;
  
  
  onKey(value: string){
    this.values = value;
  }

  onEnter(value: string){
    this.enterValue=value;
  }
}

