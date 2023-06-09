import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GuardDashbardGuard } from 'src/core/guard-dashbard.guard';

const routes: Routes = [
   {
    path:'',
   component:NavbarComponent,
   canActivateChild:[GuardDashbardGuard],
   children:[
  
    {path:'home',
 loadChildren: () =>import('../dashboard/home/home.module').then(m => m.HomeModule)},
 {path:'interests',
 loadChildren: () =>import('../dashboard/interests/interests.module').then(m => m.InterestsModule)},
   
 {path:'announcement',
 loadChildren: () =>import('../dashboard/announcement/announcement.module').then(m => m.AnnouncementModule)},
      
 {path:'all-users',
 loadChildren: () =>import('../dashboard/users/users.module').then(m => m.UsersModule)},
       
 {path:'detalis-users/:id',
 loadChildren: () =>import('../dashboard/showdetalisusers/showdetalisusers.module').then(m => m.ShowdetalisusersModule)},
 {path:'add-roles',
 loadChildren: () =>import('../dashboard/allroles/allroles.module').then(m => m.AllrolesModule)},
   

 
 {path:'profile',
 loadChildren: () =>import('../dashboard/profile/profile.module').then(m => m.ProfileModule)},
 {path:'terms-and-conditions',
 loadChildren: () =>import('../dashboard/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)},
 {path:'policy-and-privacy',
 loadChildren: () =>import('../dashboard/policy-and-privacyt/policy-and-privacyt.module').then(m => m.PolicyAndPrivacytModule)},
   




]

   
   }  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
