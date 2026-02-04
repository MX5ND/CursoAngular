import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { ComponentText } from './shared/component-text/component-text';
import { ComponentButton } from './shared/component-button/component-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, ComponentButton, ComponentText],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Lab1');
}
