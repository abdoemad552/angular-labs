import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsListComponent} from "./products/products-list/products-list.component";
import {TestPipe} from "./pipes/test-pipe";
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductsListComponent, TestPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  description = 'How are you?';

  fetchUserData = (): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
    });
  }
}
