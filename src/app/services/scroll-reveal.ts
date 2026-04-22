import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private observer: IntersectionObserver | null = null;

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe all fade-in-up elements
    const observe = () => {
      document.querySelectorAll('.fade-in-up, .exp-card').forEach(el => {
        this.observer?.observe(el);
      });
    };

    // Run after DOM is ready
    observe();
    // Re-run after short delay to catch dynamic content
    setTimeout(observe, 500);
  }

  destroy() {
    this.observer?.disconnect();
  }
}
