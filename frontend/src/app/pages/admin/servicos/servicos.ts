import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './servicos.html',
  styleUrls: ['./servicos.css']
})

export class ServicosComponent {
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
      { name: "descrição", label: "Descrição", type: "text", options: [] },
      { name: "preço", label: "Preço", type: "text", options: [] },
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