import { Component } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  recommendations: any[] = [];
  seedGenres: string = '';

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  getRecommendations() {
    this.spotifyService.getRecommendations(this.seedGenres).subscribe({
      next: data => {
        console.log('Recommendations:', data);
        this.recommendations = data.tracks;
      },
      error: error => {
        console.error('Error fetching recommendations', error);
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
