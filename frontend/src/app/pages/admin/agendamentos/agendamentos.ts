import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal';

@Component({
  selector: 'app-agendamentos',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './agendamentos.html',
  styleUrls: ['./agendamentos.css']
})

export class AgendamentosComponent {
  showModal = false;
  modalTitle = '';
  modalFields: any = [];
  modalValues: any = {};
  saveUser: any

  openAdd() {
    this.showModal = true;

    this.modalTitle = "Adicionar Agendamento";
    const mymodal: { name:String, label:String, type: String, options: any}[] = []

    mymodal.push(
      { name: "nome", label: "Nome", type: "text", options: []},
      { name: "funcionário", label: "Email", type: "text", options: [] },
      { name: "serviço", label: "Serviços", type: "text", options: [] },
      { name: "data", label: "Data", type: "text", options: [] },
      { 
        name: "status", 
        label: "Status", 
        type:"select",
        options: [
          { label: "Aberto", value: "aberto"},
          { label: "Fechado", value: "fechado"},
        ]
      }
    )
    this.modalFields = mymodal;
    this.modalValues = {};

    this.saveUser = (data: any) => {
      console.log("Salvar usuário => ", data);
      this.showModal = false;
    };

    this.showModal = true;
  }
}