import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Like} from 'src/app/models/Like'

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getLikes(){
    return this.http.get(this.API_URI + '/instalaciones/likes/list')
  }


  deleteLike(id: string | number | undefined){
    return this.http.delete(this.API_URI + '/instalaciones/likes/'+ id);
  }

  saveLike(like: Like){
    return this.http.post(this.API_URI + '/instalaciones/likes', like);
  }


}


