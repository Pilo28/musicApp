import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit {
  tracks: any[] = [];
  albums: any[] = [];
  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.loadLibrary();
  }

  loadLibrary() {
    this.spotifyService.getUserSavedTracks().subscribe({
      next: data => {
        console.log('Saved Tracks:', data);
        this.tracks = data.items;
      },
      error: error => {
        console.error('Error fetching saved tracks', error);
      }
    });

    this.spotifyService.getUserSavedAlbums().subscribe({
      next: data => {
        console.log('Saved Albums:', data);
        this.albums = data.items;
      },
      error: error => {
        console.error('Error fetching saved albums', error);
      }
    });

    this.spotifyService.getUserFollowedArtists().subscribe({
      next: data => {
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

