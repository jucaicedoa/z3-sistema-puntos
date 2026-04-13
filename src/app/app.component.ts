import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly currentYear = new Date().getFullYear();

  menuOpen = false;
  headerScrolled = false;

  constructor(private readonly router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.headerScrolled = window.scrollY > 24;
  }

  goToSection(sectionId: string, event?: Event): void {
    event?.preventDefault();
    this.menuOpen = false;
    const base = this.router.url.split('#')[0].split('?')[0];
    if (base === '/' || base === '') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    void this.router.navigate(['/'], { fragment: sectionId }).then(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
