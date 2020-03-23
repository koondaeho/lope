import { Component, OnInit } from '@angular/core';
import { Dates } from '../Dates';
@Component({
  selector: 'app-picnic',
  templateUrl: './picnic.component.html',
  styleUrls: ['./picnic.component.scss']
})
export class PicnicComponent implements OnInit {
  view = true;
  timeText = '';
  dates: Dates[] = [
    {
      date: '2020-03-20',
      id: 0
    }, {
      date: '2020-03-21',
      id: 1
    }, {
      date: '2020-03-22',
      id: 2
    }, {
      date: '2020-03-23',
      id: 3
    }, {
      date: '2020-03-24',
      id: 4
    }, {
      date: '2020-03-25',
      id: 5
    }, {
      date: '2020-03-26',
      id: 6
    }, {
      date: '2020-03-27',
      id: 7
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
  addPicnic(col) {
    this.timeText = 'B set - 14:30 ~ 17:30 신청';
    this.view = true;
  }
}
