import { Component } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent {
  playlists: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists() {
    this.spotifyService.getUserPlaylists().subscribe({
      next: data => {
        console.log('Playlists:', data); 
        this.playlists = data.items;
      },
      error: error => {
        console.error('Error fetching playlists', error);
      }
    });
  }
}
