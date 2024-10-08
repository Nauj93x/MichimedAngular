import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  findMascotasDialog: boolean = false;

  cedula: string = '';

  showFindMascotasDialog(){
    this.findMascotasDialog = true;
  }

  ngAfterViewInit() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
    let currentSlide = 0;

    function showSlide(n: number) {
      currentSlide = (n + slides.length) % slides.length;
      if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 5000);

    // Recargar al darle click en el logo
    const logo = document.querySelector('.logo-landing') as HTMLElement;
    if (logo) {
      logo.addEventListener('click', () => {
        location.reload();
      });
    }
  }
}


