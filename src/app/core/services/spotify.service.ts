import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces/user-profile.interface';
import { PlaylistTrack } from '../interfaces/playlist-track.interface';
import { SavedTracks } from '../interfaces/saved-tracks.interface';
import { SavedAlbums } from '../interfaces/saved-albums.interface';
import { FollowedArtists } from '../interfaces/followed-artists.interface';
import { PlaylistsResponse } from '../interfaces/playlists-response.interface';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/me`);
  }

  getNowPlaying(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me/player/currently-playing`);
  }

  getUserPlaylists(): Observable<PlaylistsResponse> {
    return this.http.get<PlaylistsResponse>(`${this.apiUrl}/me/playlists`);
  }

  getPlaylistTracks(playlistId: string): Observable<{ items: PlaylistTrack[] }> {
    return this.http.get<{ items: PlaylistTrack[] }>(`${this.apiUrl}/playlists/${playlistId}/tracks`);
  }

  search(query: string, type: string = 'track,artist,album'): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, {
      params: {
        q: query,
        type: type,
      }
    });
  }

  getUserSavedTracks(): Observable<SavedTracks> {
    return this.http.get<SavedTracks>(`${this.apiUrl}/me/tracks`);
  }

  getUserSavedAlbums(): Observable<SavedAlbums> {
    return this.http.get<SavedAlbums>(`${this.apiUrl}/me/albums`);
  }

  getUserFollowedArtists(): Observable<FollowedArtists> {
    return this.http.get<FollowedArtists>(`${this.apiUrl}/me/following`, {
      params: {
        type: 'artist'
      }
    });
  }

  getRecommendations(seedGenres: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/recommendations`, {
      params: {
        seed_genres: seedGenres
      }
    });
  }

  playTrack(trackUri: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/me/player/play`, {
      uris: [trackUri]
    });
  }
}
