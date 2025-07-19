import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtworkConfig, ArtworkData } from '../services/artworks.service';
import { ArtworksService } from '../services/artworks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artwork-list',
  imports: [CommonModule],
  templateUrl: './artwork-list.component.html',
  styleUrl: './artwork-list.component.scss'
})
export class ArtworkListComponent {
  config: ArtworkConfig | undefined;
  artworks: ArtworkData[] = [];
  
  constructor(private artworksService: ArtworksService) { 
    // Initialize the artworks array
    this.artworks = [];
  }

  artworkDetail(artwork: ArtworkData): string {
    return `/artworks/${artwork.id}`;
  }
  
  // List URL
  // https://api.artic.edu/api/v1/artworks/search?category_titles=Essentials&fields=id,title,artist_id,api_link,,description,date_display,artist_display,dimensions,medium_display,style_title,short_description,image_id,iiif_url&page=1&limit=100
  artworkUrl(artwork: ArtworkData) : string { 
      return this.config?.iiif_url + '/' + artwork?.image_id + '/full/843,/0/default.jpg';
  }

  ngOnInit() {
    this.artworksService.getArtworksByCategory('Essentials').subscribe({
      next: (result) => {
        console.log(result);
        this.config = result.config as ArtworkConfig;
        this.artworks = result.data as ArtworkData[];
      },
      error: (err) => {
        console.error('Failed to load artworks:', err);
      }
    });
  }
}
