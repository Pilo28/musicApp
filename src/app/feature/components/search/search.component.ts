import { Component } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  query: string = '';
  results: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  search() {
    if (this.query) {
      this.spotifyService.search(this.query).subscribe({
        next: data => {
          console.log('Search Results:', data);
          this.results = data.tracks.items;
        },
        error: error => {
          console.error('Error fetching search results', error);
        }
      });
    }
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
