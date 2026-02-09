import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { ButtonComponent } from "./shared/button-component/button-component";
import { TextComponent } from "./shared/text-component/text-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, ButtonComponent, TextComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Lab1');
}
