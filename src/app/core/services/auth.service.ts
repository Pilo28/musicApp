// src/app/core/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { DecryptionService } from './decryption.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private clientId?: string;
  private redirectUri = environment.spotifyRedirectUri;
  private authEndpoint = environment.spotifyAuthEndpoint;
  private token?: string;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private decryptionService: DecryptionService
  ) {
    const encryptedClientId = environment.spotifyClientId; 
    const decryptionKey = environment.decryptionKey; 
    this.clientId = this.decryptionService.decrypt(encryptedClientId, decryptionKey); 
  }

  login() {
    const scopes = [
      'user-read-private',
      'user-read-email',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-library-read',
      'user-follow-read',
      'streaming'
    ].join(' ');
  
    const url = `${this.authEndpoint}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=token&scope=${encodeURIComponent(scopes)}`;
    window.location.href = url;
  }
  

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('spotifyToken', token);
  }

  getToken() {
    const token = this.token || localStorage.getItem('spotifyToken');
    console.log('Token retrieved:', token); // Imprimir el token cuando se obtenga
    return token;
  }

  
  logout() {
    this.token = '';
    localStorage.removeItem('spotifyToken');
    window.location.href = 'https://www.spotify.com/logout/';
  }
}
