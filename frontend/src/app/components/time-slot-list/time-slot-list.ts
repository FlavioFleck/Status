import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-time-slot-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-slot-list.html',
  styleUrls: ['./time-slot-list.css']
})
export class TimeSlotListComponent {
  @Input() times: string[] = []; 
  @Input() selectedTime: string | null = null; 
  @Output() timeSelected = new EventEmitter<string>();
  selectTime(time: string) {
    this.timeSelected.emit(time);
  }
  
}