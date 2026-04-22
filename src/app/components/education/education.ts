import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent implements AfterViewInit {
  constructor(public svc: PortfolioService) {}
  ngAfterViewInit() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.edu-card, .fade-in-up').forEach(el => io.observe(el));
  }
}
