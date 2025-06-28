import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'mfe1',
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'mfe1',
                exposedModule: './Component'
            }).then(m => m.AppComponent),
    }, {
        path: 'mfe2',
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'mfe2',
                exposedModule: './Component'
            }).then(m => m.AppComponent),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'advanced',
        loadComponent: () => import('./dashboard/advanced-dashboard.component').then(m => m.AdvancedDashboardComponent)
    },
    {
        path: '',
        redirectTo: '/advanced',
        pathMatch: 'full'
    }
];
