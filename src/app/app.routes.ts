import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkDetailComponent } from './artworks/artwork-detail/artwork-detail.component';
import { ArtworkListComponent } from './artworks/artwork-list/artwork-list.component';

export const routes: Routes = [
    { path: 'artworks/:id', component: ArtworkDetailComponent },
    { path: 'artworks', component: ArtworkListComponent },
    { path: '', redirectTo: 'artworks', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }