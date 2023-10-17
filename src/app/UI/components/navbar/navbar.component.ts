import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule]
})
export class NavbarComponent {

  menuItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Service', sectionId: 'service' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  pagesSubmenu = [
    { label: 'Small', sectionId: '#' },
    { label: 'Medium', sectionId: '#' },
    { label: 'Large', sectionId: '#' },
    { label: 'All', sectionId: '#' },
  ];

  private renderer = inject(Renderer2)

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbar = document.querySelector('.navbar');

    if (scrollPosition > 40) {
      this.renderer.addClass(navbar, 'sticky-top');
    } else {
      this.renderer.removeClass(navbar, 'sticky-rop')
    }
  }

}
