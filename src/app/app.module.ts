import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntranceComponent } from './entrance/entrance.component';
import { StudioComponent } from './studio/studio.component';
import { ComputerComponent } from './computer/computer.component';
import { AlbumComponent } from './album/album.component';
import { BoothComponent } from './booth/booth.component';

@NgModule({
  declarations: [
    AppComponent,
    EntranceComponent,
    StudioComponent,
    ComputerComponent,
    AlbumComponent,
    BoothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
