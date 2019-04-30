import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LbAdminComponent } from './lb-admin.component';

const menu: Routes = [
  {
    path: 'craft',
    loadChildren: './lb-admin-add-craft-participant/lb-admin-add-craft-participant.module#LbAdminAddCraftParticipantModule'
  },
  {
    path: 'foodcort',
    loadChildren: './lb-admin-add-foodcort-participant/lb-admin-add-foodcort-participant.module#LbAdminAddFoodcortParticipantModule'
  },
  {
    path: 'free-scene',
    loadChildren: './lb-admin-add-free-scene/lb-admin-add-free-scene.module#LbAdminAddFreeSceneModule'
  },
  {
    path: 'game',
    loadChildren: './lb-admin-add-game-participant/lb-admin-add-game-participant.module#LbAdminAddGameParticipantModule'
  },
  {
    path: 'headliner',
    loadChildren: './lb-admin-add-headliner/lb-admin-add-headliner.module#LbAdminAddHeadlinerModule'
  }
];

const routes: Routes = [
  {
    path: '',
    component: LbAdminComponent,
    children: menu
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LbAdminRoutingModule { }
