import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-overlay" [class.fade-out]="fadeOut">
      <div class="loader-content">
        <div class="loader-initials">{{ svc.initials }}</div>
        <div class="loader-name">{{ svc.name }}</div>
        <div class="loader-bar-wrap">
          <div class="loader-bar" [style.width.%]="progress"></div>
        </div>
        <div class="loader-percent">{{ progress }}%</div>
      </div>
    </div>
  `,
  styleUrls: ['./loader.scss']
})
export class LoaderComponent implements OnInit {
  @Output() loaded = new EventEmitter<void>();
  progress = 0;
  fadeOut = false;

  constructor(public svc: PortfolioService) {}

  ngOnInit() {
    const interval = setInterval(() => {
      this.progress += Math.floor(Math.random() * 15) + 5;
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          this.fadeOut = true;
          setTimeout(() => this.loaded.emit(), 600);
        }, 400);
      }
    }, 80);
  }
}
