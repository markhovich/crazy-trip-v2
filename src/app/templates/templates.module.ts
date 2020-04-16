import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './template-routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    JumbotronComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  exports: [ 
    NavbarComponent, 
    JumbotronComponent, 
    FooterComponent]
})
export class TemplatesModule { }
