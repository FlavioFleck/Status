import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal';
import { HairdresserService } from '../../../services/hairdresser.service';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './funcionarios.html',
  styleUrls: ['./funcionarios.css']
})

export class FuncionariosComponent {
  showModal = false;
  modalTitle = '';
  modalFields: any = [];
  modalValues: any = {};
  saveUser: any;

  hairdressers: any [] = [];

  constructor(private hairdresserService: HairdresserService) {}

  ngOnInit() {
    this.loadHairdressers();
  }

  loadHairdressers() {
    this.hairdresserService.getAll().subscribe((res:any) => {
      this.hairdressers = res.hairdressers;
      console.log("Funcionários carregados:", this.hairdressers);
    });
  }

  deleteHairdresser(id: number) {
    if (!confirm("Deseja realmente excluir este funcionário?")) return;

    this.hairdresserService.delete(id).subscribe({
      next: (res: any) => {
        console.log("Excluído:", res);
        this.loadHairdressers();
      },
      error: (err) =>{
        alert(err.error?.error || "Erro ao excluir funcionário");
      }
    });
  }

  openAdd() {
    this.showModal = true;

    this.modalTitle = "Adicionar Funcionário";
    const mymodal: { name:String, label:String, type: String, options: any}[] = []

    mymodal.push(
      { name: "name", label: "Nome", type: "text", options: []},
      { name: "email", label: "Email", type: "text", options: [] },
      { name: "cpf", label: "CPF", type: "text", options: [] },
      { 
        name: "availability", 
        label: "Disponibilidade", 
        type:"select",
        options: [
          { label: "Disponível", value: "disponivel", selected: true},
          { label: "Indisponível", value: "indisponivel", selected: false },
        ]
      }
    )
    this.modalFields = mymodal;
    this.modalValues = {};

    this.saveUser = (data: any) => {
      this.hairdresserService.create(data).subscribe((res:any) => {
        console.log(res)
        this.showModal = false;
        this.loadHairdressers();
      });
    };
    this.showModal = true;
  }
}