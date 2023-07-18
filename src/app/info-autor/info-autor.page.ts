import { Component, OnInit } from '@angular/core';
import { DeezerMusicApiService } from '../services/deezer-music-api.service';


@Component({
  selector: 'app-info-autor',
  templateUrl: './info-autor.page.html',
  styleUrls: ['./info-autor.page.scss'],
})
export class InfoAutorPage implements OnInit {

  constructor(private deezerMusicApiService:DeezerMusicApiService) { }

  generos:any;


  ngOnInit() {
    this.getAllGenres();
  }

  getAllGenres(){
    this.deezerMusicApiService.getAllGenres().subscribe({
      next: (s) =>{
        this.generos = s;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

}
