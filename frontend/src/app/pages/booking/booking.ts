import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // necessário p/ *ngFor, [ngClass], etc
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent {

  // dados mockados, substitui por chamada de API
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

  // funções do clique
  onDaySelected(day: any) {
    this.selectedDay = day;
    console.log('Dia selecionado:', day.name); // profissionais para este dia
  }

  onProfessionalSelected(professional: any) {
    this.selectedProfessionalId = professional.id;
    console.log('Profissional selecionado:', professional.name); // horários para este profissional
  }

  onTimeSelected(time: string) {
    this.selectedTime = time;
    console.log('Horário selecionado:', time);
  }

  // funções auxiliares
  getSelectedProfessionalName(): string {
    const pro = this.availableProfessionals.find(p => p.id === this.selectedProfessionalId);
    return pro ? pro.name : 'Selecione';
  }

  confirmBooking() {
    const bookingData = {
      day: this.selectedDay,
      professionalId: this.selectedProfessionalId,
      professionalName: this.getSelectedProfessionalName(),
      time: this.selectedTime
    };

    console.log('Agendamento confirmado: ', bookingData);
    alert(`Agendamento confirmado com ${bookingData.professionalName} às ${bookingData.time}!`);
  }
}