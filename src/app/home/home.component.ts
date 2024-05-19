import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from '../location/location.component';
import { Ilocation } from '../ilocation';
import { HouseLocationService } from '../house-location.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    LocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  houses: Ilocation[] = [];
  service: HouseLocationService = inject(HouseLocationService);

  constructor(){
    this.houses = this.service.getAllLocations();
  }

  filterHouses(text: string){
    this.houses = this.service.getAllLocations().filter(
      h => h?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
