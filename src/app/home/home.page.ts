import { Component } from '@angular/core';
import { DeezerMusicApiService } from '../services/deezer-music-api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private deezerMusicApiService:DeezerMusicApiService, private router:Router) {}

  musicas:any;
  isModalOpen = false;
  DetailsMusic:any;
  InfoArtist:any;

  public ngOnInit():void{
    this.getMusicForArtist("Shakira");
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  getMusicForArtist(Value:any){
    this.deezerMusicApiService.getMusicForAuthor(Value).subscribe({
      next: (s) =>{
        this.musicas = s;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  getDetailsOfMusic(idAlbum:string){
    this.deezerMusicApiService.getDetailsOfMusic(idAlbum).subscribe({
      next: (s) =>{
        this.DetailsMusic = s;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  getInfoArtist(idArtist:string){
    this.deezerMusicApiService.getInfoOfArtist(idArtist).subscribe({
      next: (s) =>{
        this.InfoArtist = s;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

}
