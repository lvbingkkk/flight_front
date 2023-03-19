import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  selectedOrigin!: string;
  selectedDestination!: string;
  flights!: Flight[];
  filteredOriginList!: any[];
  filteredDestinationList!: any[];

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flightsService.getAllOrigins().subscribe(data =>{
      this.filteredOriginList = data;
    });

    this.flightsService.getAllDestinations().subscribe(data =>{
      this.filteredDestinationList = data;
    });
  }

  query():void{
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightsService.getFlights(origin,destination).subscribe(data =>{
      this.flights = data;
    });
  }

}
