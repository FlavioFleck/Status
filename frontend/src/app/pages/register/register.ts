import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  
  name: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  register(){

    if(this.password !== this.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    const payload = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    }

    this.authService.register(payload).subscribe({
      next: (res: any) => {
        console.log('Usuário criado', res);
        localStorage.setItem('token', res.token);
        alert("Registrado com sucesso!");
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert(err.error.error || "Erro ao registrar-se");
      }
    });
  }
}
