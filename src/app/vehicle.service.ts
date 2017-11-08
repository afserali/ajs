import { Injectable } from '@angular/core';

const vehicles = [
  {
      id: 1,
      name: 'Afb',
      type: 'Air',
      mass: 12
  },
  {
      id: 2,
      name: 'SB',
      type: 'Shipping',
      mass: 5
  },
  {
      id: 3,
      name: 'Anantya',
      type: 'IT',
      mass: 20
  },
];

@Injectable()
export class VehicleService {

  private vehicles;

  constructor() {
    this.vehicles = vehicles;
  }

  getVehicles() {
    return this.vehicles;
  }

}
