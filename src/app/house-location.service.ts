import { Injectable } from '@angular/core';
import { Ilocation } from './ilocation';

@Injectable({
  providedIn: 'root'
})
export class HouseLocationService {
  houses: Ilocation[] = [
    {
    id: 10,
    city: "Moscow",
    street: "Tverskaya",
    unit: 28,
    elevator: true
    },
    {
      id: 20,
      city: "Tula",
      street: "Oboronnaya",
      unit: 45,
      elevator: false
    },
    {
      id: 30,
      city: "Orel",
      street: "Lenina",
      unit: 61,
      elevator: false
    },
    {
      id: 40,
      city: "Moscow",
      street: "Leningradskoe",
      unit: 149,
      elevator: true
    },
  ]

  constructor() { }


  getAllLocations() : Ilocation[]{
    return this.houses;
  }

  getLocationById(id: number): Ilocation | undefined {
    return this.houses.find(location => location.id === id);
  }
}
