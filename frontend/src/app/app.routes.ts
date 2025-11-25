import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { BookingComponent } from './pages/booking/booking';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { AdminComponent } from './pages/admin/admin';
import { FuncionariosComponent } from './pages/admin/funcionarios/funcionarios';
import { AgendamentosComponent } from './pages/admin/agendamentos/agendamentos';
import { ProdutosComponent } from './pages/admin/produtos/produtos';
import { DashboardComponent } from './pages/admin/home/dashboard';
import { ServicosComponent } from './pages/admin/servicos/servicos';
import { UsuariosComponent } from './pages/admin/usuarios/usuarios';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'booking', component: BookingComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },
    {
        path: 'admin', 
        component: AdminComponent, 
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'funcionarios', component: FuncionariosComponent },
            { path: 'agendamentos', component: AgendamentosComponent},
            { path: 'produtos', component: ProdutosComponent},
            { path: 'servicos', component: ServicosComponent},
            { path: 'usuarios', component: UsuariosComponent}
        ]
    }
];