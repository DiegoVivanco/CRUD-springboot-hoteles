import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hotel } from 'src/app/hotel/models/hotelmodel';
import { environment } from 'src/environments/environment';

@Injectable()
export class HotelService {
  private urlEndPoint = environment.baseUrl;

  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get(`${this.urlEndPoint}/getAllHotels`).pipe(map(response => response as Hotel[]));
  }

  createHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${this.urlEndPoint}/saveHotel`, hotel, { headers: this.httpHeaders });
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.urlEndPoint}/getHotel/${id}`);
  }

  updateHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.urlEndPoint}/updateHotel/${hotel.id}`, hotel, { headers: this.httpHeaders });
  }

  deleteHotel(id: number): Observable<Hotel> {
    return this.http.delete<Hotel>(`${this.urlEndPoint}/deleteHotel/${id}`, { headers: this.httpHeaders });
  }
}
