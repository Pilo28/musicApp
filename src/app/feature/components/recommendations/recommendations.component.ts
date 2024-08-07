import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';
import { Recommendations } from '../../../core/interfaces/recommendations.interface'; // Asegúrate de crear esta interfaz

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent implements OnInit {
  recommendations: Recommendations[] = [];
  seedGenres: string = '';

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  getRecommendations(): void {
    this.spotifyService.getRecommendations(this.seedGenres).subscribe({
      next: (data: { tracks: Recommendations[] }) => {
        console.log('Recommendations:', data);
        this.recommendations = data.tracks;
      },
      error: (error: any) => {
        console.error('Error fetching recommendations', error);
      }
    });
  }

  playTrack(trackUri: string): void {
    this.spotifyService.playTrack(trackUri).subscribe({
      next: () => {
        console.log(`Playing track: ${trackUri}`);
      },
      error: (error: any) => {
        console.error('Error playing track', error);
      }
    });
  }
}
