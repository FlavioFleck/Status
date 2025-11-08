import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { BookingComponent } from './pages/booking/booking';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'booking', component: BookingComponent }
        ]
    }
];