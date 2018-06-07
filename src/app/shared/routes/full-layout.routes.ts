import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'Dashboard',
    loadChildren: './maxpower-dashboard/maxpower-dashboard.module#MaxpowerDashboardModule'
  },
  {
    path: 'Member',
    loadChildren: './maxpower-member/maxpower-member.module#MaxpowerMemberModule'
  },
  {
    path: 'Earnings',
    loadChildren: './maxpower-earnings/maxpower-earnings.module#MaxpowerEarningsModule'
  },
  {
    path: 'Contact',
    loadChildren: './maxpower-contact/maxpower-contact.module#MaxpowerContactModule'
  }
];
