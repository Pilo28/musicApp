import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss'
})
export class NowPlayingComponent implements OnInit {
  nowPlaying: any;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.loadNowPlaying();
  }

  loadNowPlaying() {
    this.spotifyService.getNowPlaying().subscribe({
      next: data => {
        this.nowPlaying = data;
      },
      error: error => {
        console.error('Error fetching now playing', error);
      }
    });
  }
}
