import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  constructor(public svc: PortfolioService) {}

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/lokesh_mawane_resume.pdf';
    link.download = 'Lokesh_Mawane_Resume.pdf';
    link.click();
  }
}
