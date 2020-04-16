import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { routing } from './contact.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ContactComponent]
})
export class ContactModule { }
