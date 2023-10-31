import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/user/peliculas.service';
import { Peliculas } from '../../../interfaces/peliculas';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})

/**listar en el home ----cambiar nombre */

export class ListarPeliculasComponent implements OnInit{

  constructor  (private peliculaService: PeliculasService){} 

  ngOnInit(): void {
    this.mostrarPeliculas();
  }

  listadoPeliculas: Peliculas[] | undefined= []; 

  async mostrarPeliculas()
  {
    this.listadoPeliculas= await this.peliculaService.getPeliculas(); 
  }

  buscarPelicula(titulo: string)
  {

  }

  obtenerMejoresPuntuados()
  {

  }

}
