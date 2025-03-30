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
  style_id: string,
  style_title: string,
  department_id: string,
  department_title: string,
  image_id: string,
  iiif_url: string,
}

export interface Artwork {
  data: ArtworkData,
  config: ArtworkConfig,
}

@Injectable({
  providedIn: 'root'
})

export class ArtworksService {
  private apiArtworksUrl = 'https://api.artic.edu/api/v1/artworks';

  private apiFields = 'fields=id,api_link,title,date_display,artist_id,artist_display,dimensions,short_description,description,medium_display,style_id,style_title,department_id,department_title,image_id,iiif_url';

  private apiPagination = 'page=1&limit=100';

  constructor(private http: HttpClient) {  }

  getArtwork(id: string): Observable<Artwork> {
    return this.http.get<Artwork>(`${this.apiArtworksUrl}/${id}?${this.apiFields}`);
  }

  // getArtworksByArtist(id: string): Observable<any> {
  getArtworksByArtist(id: string): String {
    return `${this.apiArtworksUrl}/search?query[term][artist_id]=${id}&${this.apiFields}&${this.apiPagination}`;
  }

  // getArtworksByArtist(id: string): Observable<any> {
  getArtworksByDepartment(id: string): String {
    return `${this.apiArtworksUrl}/search?query[term][department_id]=${id}&${this.apiFields}&${this.apiPagination}`;
  }

  // getArtworksByArtist(id: string): Observable<any> {
  getArtworksByStyle(id: string): String {
    return `${this.apiArtworksUrl}/search?query[term][style_id]=${id}&${this.apiFields}&${this.apiPagination}`;
  }    
}
