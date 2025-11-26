import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional-list.html',
  styleUrls: ['./professional-list.css']
})
export class ProfessionalListComponent {
  @Input() professionals: any[] = [];
  @Input() selectedProfessionalId: number | null = null;
  @Output() professionalSelected = new EventEmitter<any>();
  selectProfessional(professional: any) {
    this.professionalSelected.emit(professional); 
  }

}