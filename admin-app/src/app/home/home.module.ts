import { NgModule } from '@angular/core';

import { AccordionModule, TabViewModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

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
import {} from '';

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
    UserInfoComponent
  ],
  imports: [
    TabViewModule,
    HomeRoutingModule,
  ],
  providers: [],
})
export class HomeModule { }
