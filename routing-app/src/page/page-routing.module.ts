import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent  } from './page.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

// // Success Routes of not lazy load
// const pageRoutes: Routes = [
//   { path: 'page', component: PageComponent,
//     children: [
//       // { path: ''},
//       { path: 'content', component: ContentComponent},
//       { path: 'login', component: LoginComponent},
//     ]
//   },
// ];

// lazy load
const pageRoutes: Routes = [
  { path: '', component: PageComponent,
    children: [
      { path: 'content', component: ContentComponent},
      { path: 'login', component: LoginComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
