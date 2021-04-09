import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerComponent } from './computer/computer.component';
import { EntranceComponent } from './entrance/entrance.component'
import { StudioComponent } from './studio/studio.component';
import { AlbumComponent } from './album/album.component';
import { BoothComponent } from './booth/booth.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent
  },
  {
    path: 'door',
    component: EntranceComponent
  },
  {
    path: 'booth',
    component: BoothComponent
  },
  {
    path: 'studio',
    component: StudioComponent
  },
  {
    path: 'computer',
    component: ComputerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
