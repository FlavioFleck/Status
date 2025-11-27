import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})

export class UsuariosComponent {
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
      { name: "sobrenome", label: "Sobrenome", type: "text", options: [] },
      { name: "email", label: "Email", type: "text", options: [] },
      { 
        name: "função", 
        label: "Função", 
        type:"select",
        options: [
          { label: "Administrador", value: "administrador"},
          { label: "Comum", value: "comum"},
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