import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  // Auth routes (no guard, no header/sidebar)
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'login',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    redirectTo: 'auth/register',
    pathMatch: 'full'
  },
  {
    path: 'forgot-password',
    redirectTo: 'auth/forgot-password',
    pathMatch: 'full'
  },

  // Protected routes (with guard, with header/sidebar)
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'locations',
        loadChildren: () => import('./features/locations/locations.module').then(m => m.LocationsModule)
      },
      {
        path: 'advertisements',
        loadChildren: () => import('./features/advertisements/advertisements.module').then(m => m.AdvertisementsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./features/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'whatsapp',
        loadChildren: () => import('./features/whatsapp/whatsapp.module').then(m => m.WhatsappModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'screens',
        loadChildren: () => import('./features/screens/screens.module').then(m => m.ScreensModule)
      },
      {
        path: 'system',
        loadChildren: () => import('./features/system/system.module').then(m => m.SystemModule)
      }
    ]
  },

  // Catch all route
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
