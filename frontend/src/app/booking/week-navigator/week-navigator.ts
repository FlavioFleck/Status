import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-navigator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './week-navigator.html',
  styleUrls: ['./week-navigator.css']
})
export class WeekNavigatorComponent {
  @Input() days: any[] = []; 
  @Input() selectedDay: any = null; 
  @Output() daySelected = new EventEmitter<any>();

  selectDay(day: any) {
    this.daySelected.emit(day);
  }

  previousWeek() {
    console.log("Clicou em < Semana Anterior");
  }

  nextWeek() {
    console.log("Clicou em Semana Seguinte >");
  }
}