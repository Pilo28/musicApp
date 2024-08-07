import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ButtonComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [HeaderComponent, CardComponent, ButtonComponent, SearchInputComponent]
})
export class SharedModule { }
