import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // necessário p/ *ngFor, [ngClass], etc
import { WeekNavigatorComponent } from '../../components/week-navigator/week-navigator';
import { ProfessionalListComponent } from '../../components/professional-list/professional-list';
import { TimeSlotListComponent } from '../../components/time-slot-list/time-slot-list';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    WeekNavigatorComponent,
    ProfessionalListComponent,
    TimeSlotListComponent
  ],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent {

// substituir por uma chamada de API

  public weekDays: any[] = [
    { name: 'Seg', num: '03' },
    { name: 'Ter', num: '04' },
    { name: 'Qua', num: '05' },
    { name: 'Qui', num: '06' },
    { name: 'Sex', num: '07' },
    { name: 'Sáb', num: '08' },
    { name: 'Dom', num: '09' }
  ];
  
  public availableProfessionals: any[] = [
    { id: 1, name: 'Fulano' },
    { id: 2, name: 'Sicrano' },
    { id: 3, name: 'Beltrano' },
    { id: 4, name: 'Beltrano de tal' }
  ];

  public availableTimes: string[] = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

  public selectedDay: any = this.weekDays[1]; // terça-feira
  public selectedProfessionalId: number | null = 1; // "fulano"
  public selectedTime: string | null = this.availableTimes[0]; // "10:00"

  onDaySelected(day: any) {
    this.selectedDay = day;
    console.log('Dia selecionado:', day.name);
    // aqui você buscaria os profissionais para este dia
  }

  onProfessionalSelected(professional: any) {
    this.selectedProfessionalId = professional.id;
    console.log('Profissional selecionado:', professional.name);
    // aqui você buscaria os horários para este profissional
  }

  onTimeSelected(time: string) {
    this.selectedTime = time;
    console.log('Horário selecionado:', time);
  }

  confirmBooking() {
    console.log('Agendamento confirmado!');
    console.log('Dia:', this.selectedDay.name);
    console.log('Profissional ID:', this.selectedProfessionalId);
    console.log('Horário:', this.selectedTime);
    // envia os dados para o backend
  }
}