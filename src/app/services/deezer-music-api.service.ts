import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeezerMusicApiService {

  constructor(private httpClienteModule:HttpClient) { }

  url_api:string = 'https://api.deezer.com/';

  getMusicForAuthor(Autor:string){
    return this.httpClienteModule.get(this.url_api + "search?q=" + Autor);
  }

  getDetailsOfMusic(IdAlbum:string){
    return this.httpClienteModule.get(this.url_api + "album/" + IdAlbum);
  }
}
