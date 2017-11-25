import { NgModule } from '@angular/core';

import { AccordionModule, TabViewModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule, SharedModule,
  DialogModule, MultiSelectModule, DropdownModule } from 'primeng/primeng';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RoleAdminComponent } from './role/role-admin.component';
import { UserAdminComponent } from './user/user-admin.component';
import { UserInfoComponent } from './user/user-info.component';
import { RoleService } from './service/role.service';
import { TabService } from './service/tab.service';
import { RoleComponent } from './role/role.component';
import { } from '';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    RoleAdminComponent,
    UserAdminComponent,
    UserInfoComponent,
    RoleComponent,
  ],
  imports: [
    CommonModule, FormsModule,
    DataTableModule, SharedModule, DialogModule, MultiSelectModule, DropdownModule,
    TabViewModule,
    HomeRoutingModule,
  ],
  providers: [
    RoleService,
    TabService,
  ],
})
export class HomeModule { }
