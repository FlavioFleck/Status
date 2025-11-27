import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent implements OnInit {

  // data de referência (começa hoje)
  currentStartDate = new Date(); 
  weekDays: any[] = []; 
  
  // mock
  public availableProfessionals: any[] = [
    { id: 1, name: 'Fulano' },
    { id: 2, name: 'Sicrano' },
    { id: 3, name: 'Beltrano' },
    { id: 4, name: 'Beltrano de tal' }
  ];

  public availableTimes: string[] = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

  // seleções
  public selectedServiceName: string = '';
  public selectedDay: Date | null = null; 
  public selectedProfessionalId: number | null = 1; 
  public selectedTime: string | null = this.availableTimes[0]; 

  ngOnInit() {
    this.generateWeekDays();
    this.selectedDay = this.weekDays[0].fullDate;
  }

  // --- MÁGICA DO CALENDÁRIO ---

  generateWeekDays() {
    this.weekDays = [];
    const start = new Date(this.currentStartDate);

    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);

      this.weekDays.push({
        name: this.getWeekDayName(day), 
        num: day.getDate().toString().padStart(2, '0'),
        fullDate: day 
      });
    }
  }

  getWeekDayName(date: Date): string {
    const name = date.toLocaleDateString('pt-BR', { weekday: 'short' });
    return name.replace('.', '').charAt(0).toUpperCase() + name.slice(1, 3);
  }

  // --- NOVO: Função para pegar o nome do Mês ---
  get currentMonthLabel(): string {
    if (this.weekDays.length === 0) return '';
    
    const firstDay = this.weekDays[0].fullDate;
    const lastDay = this.weekDays[6].fullDate;
    
    const month1 = firstDay.toLocaleDateString('pt-BR', { month: 'long' });
    const year1 = firstDay.getFullYear();

    // Se a semana cruzar dois meses (Ex: final de Nov e começo de Dez)
    if (firstDay.getMonth() !== lastDay.getMonth()) {
      const month2 = lastDay.toLocaleDateString('pt-BR', { month: 'long' });
      // Retorna "Novembro / Dezembro 2025"
      return `${this.capitalize(month1)} / ${this.capitalize(month2)} ${year1}`;
    }
    
    // Retorna "Novembro 2025"
    return `${this.capitalize(month1)} ${year1}`;
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  nextWeek() {
    this.currentStartDate.setDate(this.currentStartDate.getDate() + 7);
    this.generateWeekDays();
  }

  prevWeek() {
    this.currentStartDate.setDate(this.currentStartDate.getDate() - 7);
    this.generateWeekDays();
  }

  isSameDate(date1: any, date2: any): boolean {
    if (!date1 || !date2) return false;
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  // --- Funções de Interação ---

  // Essa função captura a mudança no select de serviço
  onServiceSelected(event: any) {
    const selectElement = event.target as HTMLSelectElement;
    // Pega o TEXTO da opção selecionada (ex: "Corte de Cabelo")
    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    this.selectedServiceName = selectedText;
  }

  onDaySelected(dayObj: any) {
    this.selectedDay = dayObj.fullDate;
  }

  onProfessionalSelected(professional: any) {
    this.selectedProfessionalId = professional.id;
  }

  onTimeSelected(time: string) {
    this.selectedTime = time;
  }

  // --- Auxiliares ---

  getSelectedProfessionalName(): string {
    const pro = this.availableProfessionals.find(p => p.id === this.selectedProfessionalId);
    return pro ? pro.name : 'Selecione';
  }

  getFormattedDate(): string {
    if (!this.selectedDay) return 'Selecione';
    return this.selectedDay.toLocaleDateString('pt-BR', { 
      weekday: 'short', day: '2-digit', month: 'short' 
    });
  }

  confirmBooking() {
    const bookingData = {
      service: this.selectedServiceName,
      day: this.selectedDay,
      professional: this.getSelectedProfessionalName(),
      time: this.selectedTime
    };
    console.log('Confirmado:', bookingData);
    
    if (!this.selectedServiceName) {
      alert('Por favor, selecione um serviço!');
      return;
    }

    alert(`Agendamento confirmado!`);
  }

  // animação padrão
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