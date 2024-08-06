import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { SharedModule } from '../shared/shared.module';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SearchComponent } from './components/search/search.component';
import { LibraryComponent } from './components/library/library.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    CallbackComponent,
    NowPlayingComponent,
    PlaylistComponent,
    SearchComponent,
    LibraryComponent,
    RecommendationsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class FeatureModule { }
