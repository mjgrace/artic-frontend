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
  // locding = true;

  constructor(private route: ActivatedRoute, private artworksService: ArtworksService) { }

  artworkUrl() : string { 
    return this.artwork?.config?.iiif_url + '/' + this.artwork?.data?.image_id + '/full/843,/0/default.jpg';
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
