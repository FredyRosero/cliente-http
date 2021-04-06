import { Injectable } from '@angular/core';
import { Libro } from './libro.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libro: Libro = { 
    ISBN: "", 
    Nombre: ""
  };

  private APIUrl = "https://bde812c2-d03e-4cee-b408-a438a9380ff4.mock.pstmn.io/libros/1"; // URL to web api

  constructor(private http: HttpClient) {}

  async fetchArtists() {
    try {
      //const data: any = await this.http.get(ArtistsService.ARTISTS_URL).toPromise();
      const data: any = await this.http.get<Libro>(this.APIUrl).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }
  
/*   public getLibro() {
    return this.http.get<Libro>(this.APIUrl);
  }   */
}
