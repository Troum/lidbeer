import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './lb-main/lb-main.module#LbMainModule'
  },
  {
    path: 'gala-concert',
    loadChildren: './lb-gala-concert/lb-gala-concert.module#LbGalaConcertModule'
  },
  {
    path: 'about',
    loadChildren: './lb-about/lb-about.module#LbAboutModule'
  },
  {
    path: 'contacts',
    loadChildren: './lb-contacts/lb-contacts.module#LbContactsModule'
  },
  {
    path: 'contacts/craft',
    loadChildren: './lb-contacts/lb-contacts-craft/lb-contacts-craft.module#LbContactsCraftModule'
  },
  {
    path: 'contacts/game',
    loadChildren: './lb-contacts/lb-contacts-game/lb-contacts-game.module#LbContactsGameModule'
  },
  {
    path: 'contacts/foodcort',
    loadChildren: './lb-contacts/lb-contacts-foodcort/lb-contacts-foodcort.module#LbContactsFoodcortModule'
  },
  {
    path: 'contacts/free-scene',
    loadChildren: './lb-contacts/lb-contacts-free-scene/lb-contacts-free-scene.module#LbContactsFreeSceneModule'
  },
  {
    path: 'contacts/message',
    loadChildren: './lb-contacts/lb-contacts-feedback/lb-contacts-feedback.module#LbContactsFeedbackModule'
  },
  {
    path: 'contacts/partner',
    loadChildren: './lb-contacts/lb-contacts-partner/lb-contacts-partner.module#LbContactsPartnerModule'
  },
  {
    path: 'admin/panel',
    loadChildren: './lb-admin/lb-admin.module#LbAdminModule'
  },
  {
    path: 'login',
    loadChildren: './lb-login/lb-login.module#LbLoginModule'
  },
  {
    path: 'logout',
    loadChildren: './lb-logout/lb-logout.module#LbLogoutModule'
  },
  {
    path: 'register',
    loadChildren: './lb-register/lb-register.module#LbRegisterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
