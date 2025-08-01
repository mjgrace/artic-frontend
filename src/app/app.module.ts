import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // <-- Import this
import { AppRoutingModule } from './app.routes'; // Import routing module
import { AppComponent } from './app.component';
import { ArtworkDetailComponent } from './artworks/artwork-detail/artwork-detail.component';
import { ArtworkListComponent } from './artworks/artwork-list/artwork-list.component';
import { ArtworksService } from './artworks/services/artworks.service';  // <-- your service

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    ArtworkDetailComponent, 
    ArtworkListComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArtworksService],
  bootstrap: [AppComponent]
})
export class AppModule { }