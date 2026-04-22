import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="scrolled">
      <div class="nav-inner">
        <div class="nav-logo" (click)="scrollTo('home')">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">{{ svc.initials }}</span>
          <span class="logo-bracket">/&gt;</span>
        </div>
        <button class="nav-toggle" (click)="menuOpen = !menuOpen" [class.open]="menuOpen">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" [class.open]="menuOpen">
          <li *ngFor="let link of links">
            <a (click)="scrollTo(link.id); menuOpen=false" class="nav-link">{{ link.label }}</a>
          </li>
          <li>
            <a href="mailto:{{ svc.email }}" class="nav-cta">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  links = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  constructor(public svc: PortfolioService) {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 60;
      });
    }
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
