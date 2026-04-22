import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements AfterViewInit {
https: any;
  constructor(public svc: PortfolioService) {}
  ngAfterViewInit() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.contact-card, .fade-in-up').forEach(el => io.observe(el));
  }
}
