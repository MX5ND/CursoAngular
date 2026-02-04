import { Component } from '@angular/core';

@Component({
  selector: 'app-component-button',
  imports: [],
  templateUrl: './component-button.html',
  styleUrl: './component-button.scss',
})
export class ComponentButton {
  holaMundo() {
      console.log('hola, mundo');
    }
}
