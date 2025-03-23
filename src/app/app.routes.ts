import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkDetailComponent } from './artworks/artwork-detail/artwork-detail.component';

export const routes: Routes = [
    { path: 'artworks/:id', component: ArtworkDetailComponent },
    { path: '', redirectTo: 'artworks/27992', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }