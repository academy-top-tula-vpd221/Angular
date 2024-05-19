import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Ilocation } from '../ilocation';
import { HouseLocationService } from '../house-location.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  service: HouseLocationService = inject(HouseLocationService);
  locationId!: number;
  house: Ilocation | undefined;
  elevator!: string;

  constructor(){
    this.locationId = Number(this.route.snapshot.params['id']);

    this.house = this.service.getLocationById(this.locationId);
    this.elevator = (this.house?.elevator) ? "checked" : "";
  }
}
