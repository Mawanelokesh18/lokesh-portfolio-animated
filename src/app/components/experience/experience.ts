import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements AfterViewInit {
  constructor(public svc: PortfolioService) {}
  ngAfterViewInit() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    document.querySelectorAll('.exp-card, .fade-in-up').forEach(el => io.observe(el));
  }
}
