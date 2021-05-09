import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyAdat} from './adat.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  public array: MyAdat[] = [];
  constructor(private http: HttpClient) { }

  public fetch(): Observable<any> {
    return this.http.get('https://api.coingecko.com/api/v3/exchanges?per_page=100');
  }
}
