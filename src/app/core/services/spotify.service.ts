// spotify.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}


  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`);
  }

  getNowPlaying(): Observable<any>{
    return this.http.get(`${this.apiUrl}/me/player/currently-playing`);
  }

  getUserPlaylists(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me/playlists`);
  }

  search(query: string, type: string = 'track,artist,album'): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, {
      params: {
        q: query,
        type: type,
      }
    });
  }

  getUserSavedTracks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me/tracks`);
  }

  getUserSavedAlbums(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me/albums`);
  }

  getUserFollowedArtists(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me/following`, {
      params: {
        type: 'artist'
      }
    });
  }

  getRecommendations( seedGenres: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/recommendations`, {
      params: {
        seed_genres: seedGenres
      }
    });
  }
}
