import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss'
})
export class NowPlayingComponent implements OnInit {
  nowPlaying: any;
  private intervalSubscription: Subscription | undefined;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.loadNowPlaying();
    this.startPolling();
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
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

  startPolling() {
    const pollingInterval = 5000;   
    this.intervalSubscription = interval(pollingInterval).subscribe(() => {
      this.loadNowPlaying();
    });
  }
}
