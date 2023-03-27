
import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private flightService: FlightsService) { }


  origin!: string;
  destination!: string;
  flightNumber!: number;
  depart!: Date;
  arrive!: Date;
  nonstop: boolean = false;
  flightList!: any[];


  ngOnInit(): void {
    this.refresh()
  }

  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }

  sendFlight(){
    const flight: Flight = {
      origin: this.origin,
      destination: this.destination,
      flightNumber: this.flightNumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    // const done = this.flightService.postFlight(flight);
    // console.log ('done:',done)

    this.flightService.postFlight(flight)

    //加到service里了
    // if(done){
      // window.alert("创建成功!")
      //直接写创建不成功!!
      // document.location.reload();
    // }

  }

  refresh(){
    this.flightService.getAllFlights().subscribe(data =>{
      this.flightList = data;
    })
  }

  update(flight:Flight){
    this.flightService.updateFlight(flight).subscribe(data =>{
      console.log('data is', data);
      if(data && data[`affected` as keyof typeof data]){
        console.log("refreshed!!",data[`affected` as keyof typeof data])
        this.refresh();
      }
    });
  }

  delete(flight:Flight){
    if (window.confirm('are you sure you want to delete this flight? ')){

      this.flightService.deleteFlight(flight.id!).subscribe(data =>{
        console.log(' delete data:', data);

        if(data && data[`affected` as keyof typeof data]){
          console.log('data deleted !!');

          this.refresh();
        }
      });
    }
  }
}
