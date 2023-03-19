import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransportationService {

   // new code
   subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
   honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
   bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};

   cars:Car[] = [this.subaru, this.honda, this.bmw];



  // constructor(private http: HttpClient) { }

  // new code
  getCars() {
    return this.cars;
   }
  // getCars(): Observable<{}>{
  //   return this.http.get('/cars/');
  // }

  addCar(car: Car){
    this.cars.push(car);
  }

}
