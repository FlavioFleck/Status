import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})

export class ModalComponent {
  @Input() title = "";
  @Input() fields: any[] = [];
  @Input() values: any = {};
  @Input() onSubmit!: (data: any) => void;

  @Output() closeModal = new EventEmitter<void>();

  submit() {
    this.onSubmit(this.values);
  }

  close() {
    this.closeModal.emit();
  }
}