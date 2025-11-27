import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    if (!this.email || !this.password) {
      alert("Preencha todos os campos.");
      return;
    }

    const payload = {
      email: this.email,
      password: this.password
    };

    this.authService.login(payload).subscribe({
      next: (res: any) => {
        console.log('Login realizado', res);

        this.authService.setSession(res.token, res.user);

        alert("Logado com sucesso!");

        if (res.user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        alert(err.error.error || "Credenciais inválidas.");
      }
    });
  }
}
