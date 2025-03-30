import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from '../../services/artworks.service';
import { ArtworksService } from '../../services/artworks.service';

@Component({
  selector: 'app-artwork-detail',
  imports: [],
  templateUrl: './artwork-detail.component.html',
  styleUrl: './artwork-detail.component.scss'
})
export class ArtworkDetailComponent {
  artworkId: string | undefined;
  artwork: Artwork | undefined;
  // loading = true;

  constructor(private route: ActivatedRoute, private artworksService: ArtworksService) { }

  // List URL
  // https://api.artic.edu/api/v1/artworks/search?category_titles=Essentials&fields=id,title,artist_id,api_link,,description,date_display,artist_display,dimensions,medium_display,style_title,short_description,image_id,iiif_url&page=1&limit=100
  artworkUrl() : string { 
    return this.artwork?.config?.iiif_url + '/' + this.artwork?.data?.image_id + '/full/843,/0/default.jpg';
  }

  artworkByArtistUrl() : string {
    return this.artworksService.getArtworksByArtist(this.artwork?.data?.artist_id?.toString() || '').toString();
  }

  artworkByCategoryUrl() : string {
    return this.artworkByDepartmentUrl();
  }

  artworkByDepartmentUrl() : string {
    return this.artworksService.getArtworksByDepartment(this.artwork?.data?.department_id?.toString() || '').toString();
  }

  artworkByStyleUrl() : string {
    return this.artworksService.getArtworksByStyle(this.artwork?.data?.style_id?.toString() || '').toString();
  }

  artworkDescription() : string {
    return this.artwork?.data?.description || '';
  }

  ngOnInit() {
    this.artworkId = this.route.snapshot.paramMap.get('id') || undefined;

    if (this.artworkId) {
      this.artworksService.getArtwork(this.artworkId).subscribe({
        next: (data) => {
          console.log(data);
          this.artwork = data;
          // this.loading = false;
        },
        error: (err) => {
          console.error('Failed to load artwork:', err);
          // this.loading = false;
        }
      });
    }
  }
}
