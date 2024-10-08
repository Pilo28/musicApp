import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';
import { PlaylistTrack } from '../../../core/interfaces/playlist-track.interface';
import { Playlist } from '../../../core/interfaces/playlist.interface';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  
  playlists: Playlist[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists() {
    this.spotifyService.getUserPlaylists().subscribe({
      next: (data) => {
        console.log('Playlists:', data); 
        this.playlists = data.items;
      },
      error: error => {
        console.error('Error fetching playlists', error);
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

  playFirstTrackInPlaylist(playlist: Playlist) {
    this.spotifyService.getPlaylistTracks(playlist.id).subscribe({
      next: (data) => {
        const tracks = data.items;
        if (tracks && tracks.length > 0) {
          const firstTrackUri = tracks[0].track.uri;
          this.playTrack(firstTrackUri);
        } else {
          console.error('No tracks found in playlist');
        }
      },
      error: error => {
        console.error('Error fetching playlist tracks', error);
      }
    });
  }
}
