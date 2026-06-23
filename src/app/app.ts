import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';
import { ParticleCanvasComponent } from './components/particle-canvas/particle-canvas';
import { CursorComponent } from './components/cursor/cursor';
import { ScrollRevealService } from './services/scroll-reveal';
import { PortfolioService } from './services/portfolio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent, NavbarComponent, HeroComponent,
    SkillsComponent, ExperienceComponent, ProjectsComponent,
    EducationComponent, ContactComponent, ParticleCanvasComponent, CursorComponent
  ],
  template: `
    <app-cursor></app-cursor>
    <app-loader (loaded)="onLoaded()"></app-loader>
    <div class="portfolio-wrapper" [class.visible]="loaded">
      <app-particle-canvas></app-particle-canvas>
      <app-navbar></app-navbar>
      <main>
        <app-hero id="home"></app-hero>
        <div class="marquee-section">
          <div class="marquee-track">
            <div class="marquee-inner">
              <span class="marquee-item" *ngFor="let t of marqueeItems">
                <span class="marquee-dot">◆</span> {{ t }}
              </span>
              <span class="marquee-item" *ngFor="let t of marqueeItems">
                <span class="marquee-dot">◆</span> {{ t }}
              </span>
            </div>
          </div>
        </div>
        <app-skills id="skills"></app-skills>
        <app-experience id="experience"></app-experience>
        <app-projects id="projects"></app-projects>
        <app-education id="education"></app-education>
        <app-contact id="contact"></app-contact>
      </main>
      <footer class="footer">
        <div class="footer-inner">
          <span class="footer-logo">&lt;LM/&gt;</span>
          <div class="footer-links">
            <a [href]="'mailto:' + svc.email">Email</a>
            <a [href]="svc.github" target="_blank">GitHub</a>
            <a [href]="svc.linkedin" target="_blank">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .portfolio-wrapper {
      opacity: 0;
      transition: opacity 0.8s ease;
      min-height: 100vh;
      position: relative;
    }
    .portfolio-wrapper.visible { opacity: 1; }

    .marquee-section {
      position: relative;
      z-index: 1;
      padding: 1.25rem 0;
      background: rgba(99,102,241,0.05);
      border-top: 1px solid rgba(99,102,241,0.1);
      border-bottom: 1px solid rgba(99,102,241,0.1);
      overflow: hidden;
    }
    .marquee-track { overflow: hidden; }
    .marquee-inner {
      display: flex;
      width: max-content;
      animation: marquee 28s linear infinite;
      gap: 0;
    }
    .marquee-item {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0 2rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-muted);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .marquee-dot {
      color: var(--indigo-light);
      font-size: 0.5rem;
    }

    .footer {
      position: relative;
      z-index: 1;
      border-top: 1px solid var(--border);
      padding: 2.5rem 2rem;
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .footer-logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.1rem;
      color: var(--pink);
    }
    .footer p {
      color: var(--text-muted);
      font-size: 0.88rem;
    }
    .accent { color: var(--indigo-light); }
    .footer-links {
      display: flex;
      gap: 1.5rem;
    }
    .footer-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.82rem;
      transition: color 0.2s;
      &:hover { color: var(--indigo-light); }
    }
    @media (max-width: 640px) {
      .footer-inner { flex-direction: column; text-align: center; }
      .footer-links { justify-content: center; }
    }
  `]
})
export class App implements AfterViewInit, OnDestroy {
  loaded = false;
  year = new Date().getFullYear();
  marqueeItems = [
    'Spring Boot', 'Angular', 'Keycloak', 'OAuth 2.0', 'JWT',
    'Microservices', 'MySQL', 'Docker', 'REST APIs', 'Java',
    'TypeScript', 'RBAC', 'SSO', 'Git', 'IntelliJ IDEA'
  ];

  constructor(private scrollReveal: ScrollRevealService, public svc: PortfolioService) {}

  onLoaded() {
    this.loaded = true;
    setTimeout(() => this.scrollReveal.init(), 200);
  }

  ngAfterViewInit() {}

  ngOnDestroy() { this.scrollReveal.destroy(); }
}
