import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './template-routing';

@NgModule({
  declarations: [
    NavbarComponent,
    JumbotronComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [ 
    NavbarComponent, 
    JumbotronComponent, 
    FooterComponent]
})
export class TemplatesModule { }
