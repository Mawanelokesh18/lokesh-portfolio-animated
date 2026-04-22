import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;

  animatedLevels: number[] = [];
  private barsAnimated = false;

  constructor(public svc: PortfolioService) {}

  ngOnInit() {
    this.animatedLevels = this.svc.skillBars.map(() => 0);
  }

  ngAfterViewInit() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe reveal elements
    this.revealEls?.forEach(el => io.observe(el.nativeElement));

    // Observe skill bars section for animation trigger
    const barsIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.barsAnimated) {
          this.barsAnimated = true;
          this.svc.skillBars.forEach((skill, i) => {
            setTimeout(() => {
              this.animatedLevels[i] = skill.level;
            }, i * 140);
          });
        }
      });
    }, { threshold: 0.2 });

    const barsSection = document.querySelector('.skill-bars-section');
    if (barsSection) barsIo.observe(barsSection);
  }
}
