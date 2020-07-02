import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [
      {
        name: 'Asia',
        data: [502, 635, 898, 947, 1492, 3634, 5260 ]
      },
      {
        name: 'Africa',
        data: [106, 197, 11, 133, 221, 767, 1766]
      },
      {
        name: 'Europa',
        data: [163, 203, 276, 400, 547, 729, 628]
      },
      {
        name: 'America',
        data: [10, 31, 54, 156, 339, 818, 1201]
      },
      {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
      }
    ]
  }

  cards() {
    return [71, 78, 39, 80]
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
        name: 'Internet Explorer',
        y: 11.84
    }, {
        name: 'Firefox',
        y: 10.85
    }, {
        name: 'Edge',
        y: 4.67
    }, {
        name: 'Safari',
        y: 4.18
    }, {
        name: 'Sogou Explorer',
        y: 1.64
    }, {
        name: 'Opera',
        y: 1.6
    }, {
        name: 'QQ',
        y: 1.2
    }, {
        name: 'Other',
        y: 2.61
    }]
  }
}
