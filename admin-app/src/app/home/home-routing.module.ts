import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RoleAdminComponent } from './role/role-admin.component';
import { UserAdminComponent } from './user/user-admin.component';
import { UserInfoComponent } from './user/user-info.component';
import { RoleComponent } from './role/role.component';
import {} from '';

const HomeRoutes: Routes = [
  { path: '', component: HomeComponent,
    children: [
    { path: 'user_info', component: UserInfoComponent},
    { path: 'user_admin', component: UserAdminComponent},
    { path: 'misc', loadChildren: './misc/misc.module#MiscModule'},
    { path: 'role_admin', component: RoleAdminComponent},
    { path: 'roleAdmin', component: RoleComponent},

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule],

})
export class HomeRoutingModule {}
