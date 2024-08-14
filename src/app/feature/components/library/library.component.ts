import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';
import { SavedTracks } from '../../../core/interfaces/saved-tracks.interface';
import { SavedAlbums } from '../../../core/interfaces/saved-albums.interface';
import { FollowedArtists } from '../../../core/interfaces/followed-artists.interface';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  tracks: SavedTracks['items'] = [];
  albums: SavedAlbums['items'] = [];
  artists: FollowedArtists['artists']['items'] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.loadLibrary();
  }

  loadLibrary() {
    this.spotifyService.getUserSavedTracks().subscribe({
      next: (data: SavedTracks) => {
        console.log('Saved Tracks:', data);
        this.tracks = data.items;
      },
      error: error => {
        console.error('Error fetching saved tracks', error);
      }
    });

    this.spotifyService.getUserSavedAlbums().subscribe({
      next: (data: SavedAlbums) => {
        console.log('Saved Albums:', data);
        this.albums = data.items;
      },
      error: error => {
        console.error('Error fetching saved albums', error);
      }
    });

    this.spotifyService.getUserFollowedArtists().subscribe({
      next: (data: FollowedArtists) => {
        console.log('Followed Artists:', data);
        this.artists = data.artists.items;
      },
      error: error => {
        console.error('Error fetching followed artists', error);
      }
    });
  }

  playTrack(trackUri: string) {
    this.spotifyService.playTrack(trackUri).subscribe({
      next: () => {
        console.log(`Playing track: ${trackUri}`);
      },
      error: error => {
        console.error('Error playing track', error);
      }
    });
  }
}
