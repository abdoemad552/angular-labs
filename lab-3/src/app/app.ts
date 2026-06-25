import { Component, inject, OnInit, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  isLoading = signal(false);

  private router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationStart) {
          this.isLoading.set(true);
        }

        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          setTimeout(() => {
            this.isLoading.set(false);
          }, 500);
        }
      },
    });
  }
}
