import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.2 }); 

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

}
