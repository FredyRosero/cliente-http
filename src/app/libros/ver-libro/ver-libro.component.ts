import { Component, OnInit } from '@angular/core';
import { LibrosService } from './../libros.service';
import { Libro } from './../libro.model';

@Component({
  selector: 'app-ver-libro',
  templateUrl: './ver-libro.component.html',
  styleUrls: ['./ver-libro.component.scss']
})
export class VerLibroComponent implements OnInit {

  libro!: Libro;

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.librosService.fetchArtists().then(data => {
      this.libro = data;
    });    
    //this.libro = this.librosService.getLibro();
  }

}
