import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ArtworkConfig {
  iiif_url: string;
  website_url: string;
}

export interface ArtworkData {
  id: string,
  api_link: string,
  title: string,
  date_display: string,
  artist_id: number,
  artist_display: string,
  dimensions: string,
  short_description: string,
  description: string,
  medium_display: string,
  style_title: string,
  image_id: string,

}

export interface Artwork {
  data: ArtworkData,
  config: ArtworkConfig,
}

@Injectable({
  providedIn: 'root'
})

export class ArtworksService {
  private apiUrl = 'https://api.artic.edu/api/v1/artworks';

  constructor(private http: HttpClient) {  }

  getArtwork(id: string): Observable<Artwork> {
    return this.http.get<Artwork>(`${this.apiUrl}/${id}`);
  }
}
