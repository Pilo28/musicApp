// spotify.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}


  getUserProfile() {
    return this.http.get(`${this.apiUrl}/me`);
  }

}
