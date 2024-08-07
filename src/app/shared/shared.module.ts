import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, CardComponent, ButtonComponent]
})
export class SharedModule { }
