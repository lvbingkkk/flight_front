import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  // flights!:Flight[];
  // backEndURL: string;

  baseurl='https://314843358h.imdo.co/flights';
  constructor(private http :HttpClient) {
    // this.backEndURL = this.getBackEndUrl();
  }

  // getFlights() {
  //   return this.flights;

  // }

  getFlights(origin:string,destination:string): Observable<any> {
    // return this.http.get('http://localhost:3000/flights/');
    return this.http.get(`${this.baseurl}/query/${origin}/${destination}`);

  }

  getAllFlights(): Observable<any> {
    // return this.http.get(`${this.backEndURL}/flights`);
    return this.http.get (`${this.baseurl}`);
  }

  getAllOrigins(): Observable<any> {
    // return this.http.get(`${this.backEndURL}/flights/cities/origins`);
    return this.http.get(`${this.baseurl}/cities/origins`)
  }

  getAllDestinations(): Observable<any> {
    // return this.http.get(`${this.backEndURL}/flights/cities/destinations`);
    return this.http.get(`${this.baseurl}/cities/destinations`);
  }

  postFlight(flight: Flight) {
    return this.http.post(this.baseurl,flight).subscribe(
      data =>{
      console.log (data,'date posted to server!');
      window.alert("添加新航班成功!")

      document.location.reload();

    }
    )
  }

  deleteFlight(id: number) {

  }

  // getBackEndUrl(): string {
  //   const segements = document.URL.split('/');
  //   const reggie = new RegExp(/localhost/);
  //   return reggie.test(segements[2]) ? 'http://localhost:3002' : 'https://nestjs-typeorm-postgres.herokuapp.com';
  // }
}
