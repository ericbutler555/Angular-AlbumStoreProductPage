import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  _albumUrl: string = '../assets/album.json';

  getAlbum(id: number): Observable<any> {
    return this._http.get(this._albumUrl).map((response) => response.json());
  }

}
