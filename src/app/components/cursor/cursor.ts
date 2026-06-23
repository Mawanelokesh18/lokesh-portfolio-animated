import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-dot" #dot></div>
    <div class="cursor-ring" #ring></div>
  `,
  styleUrls: ['./cursor.scss']
})
export class CursorComponent implements OnInit, OnDestroy {
  private mouseX = 0; private mouseY = 0;
  private ringX = 0; private ringY = 0;
  private rafId: number = 0;
  private listeners: (() => void)[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const dot = this.el.nativeElement.querySelector('.cursor-dot');
    const ring = this.el.nativeElement.querySelector('.cursor-ring');

    const move = (e: MouseEvent) => {
      this.mouseX = e.clientX; this.mouseY = e.clientY;
      this.renderer.setStyle(dot, 'left', `${e.clientX}px`);
      this.renderer.setStyle(dot, 'top', `${e.clientY}px`);
    };

    // Use event delegation so dynamically added elements are also covered
    const overLink = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [role="button"]')) {
        this.renderer.addClass(dot, 'hover');
        this.renderer.addClass(ring, 'hover');
      }
    };
    const outLink = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [role="button"]')) {
        this.renderer.removeClass(dot, 'hover');
        this.renderer.removeClass(ring, 'hover');
      }
    };

    const rm1 = this.renderer.listen('document', 'mousemove', move);
    const rm2 = this.renderer.listen('document', 'mouseover', overLink);
    const rm3 = this.renderer.listen('document', 'mouseout', outLink);
    this.listeners.push(rm1, rm2, rm3);

    const animate = () => {
      this.ringX += (this.mouseX - this.ringX) * 0.12;
      this.ringY += (this.mouseY - this.ringY) * 0.12;
      this.renderer.setStyle(ring, 'left', `${this.ringX}px`);
      this.renderer.setStyle(ring, 'top', `${this.ringY}px`);
      this.rafId = requestAnimationFrame(animate);
    };
    this.rafId = requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    this.listeners.forEach(fn => fn());
    cancelAnimationFrame(this.rafId);
  }
}
