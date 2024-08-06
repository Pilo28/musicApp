import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { AuthService } from "../../../core/services/auth.service";
import { SpotifyService } from "../../../core/services/spotify.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: any;
  private unsubscribe$ = new Subject<void>();

  constructor(private authService: AuthService, 
              private spotifyService: SpotifyService,
              private router: Router) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  private loadUserProfile(): void {
    this.spotifyService.getUserProfile()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.user = data;
      });
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
