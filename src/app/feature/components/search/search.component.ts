import { Component } from '@angular/core';
import { SpotifyService } from '../../../core/services/spotify.service';
import { SearchResult, Track } from '../../../core/interfaces/search-result.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  query: string = '';
  results: Track[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  search(): void {
    if (this.query) {
      this.spotifyService.search(this.query).subscribe({
        next: (data: SearchResult) => {
          console.log('Search Results:', data);
          this.results = data.tracks.items;
        },
        error: (error: any) => {
          console.error('Error fetching search results', error);
        }
      });
    }
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
