import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';
import { interval, Subscription } from 'rxjs';
import { NowPlaying } from '../../../core/interfaces/now-playing.interface'; // Asegúrate de crear esta interfaz

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss'
})
export class NowPlayingComponent implements OnInit, OnDestroy {
  nowPlaying: NowPlaying | null = null;
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

  loadNowPlaying(): void {
    this.spotifyService.getNowPlaying().subscribe({
      next: (data: NowPlaying) => {
        this.nowPlaying = data;
      },
      error: (error: any) => {
        console.error('Error fetching now playing', error);
      }
    });
  }

  startPolling(): void {
    const pollingInterval = 5000;   
    this.intervalSubscription = interval(pollingInterval).subscribe(() => {
      this.loadNowPlaying();
    });
  }
}
