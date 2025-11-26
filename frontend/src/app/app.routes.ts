import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { BookingComponent } from './pages/booking/booking';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { ProductsComponent } from './pages/products/products';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'booking', component: BookingComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'products', component: ProductsComponent }
        ]
    }
];