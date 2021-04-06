import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosService } from './libros.service';
import { VerLibroComponent } from './ver-libro/ver-libro.component';

@NgModule({
  declarations: [
    VerLibroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ VerLibroComponent ],
  providers: [ LibrosService ]
})
export class LibrosModule { }