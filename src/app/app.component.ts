import {Component, OnInit} from '@angular/core';
import { PRODUCTS_LIST } from '../shared/mock-data';
import { SharedService } from '../services/SharedService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public sharedService: SharedService
  ) {
    this.sharedService.changeEmitted$.subscribe(
      dataBucket => {
        this.bucket = dataBucket;
        if (this.bucket === {}) {
          this.sumOfBucket = 0;
          this.totalInBucket = 0;
          this.sharedService.shared = this.bucket;
          this.sharedService.sumOfBucket = this.sumOfBucket;
          return;
        } else { this.countingBucket(); }
      });
  }

  bucket = {};

  totalInBucket;
  sumOfBucket = 0;

  ngOnInit() {
    this.loadBucket();
  }

  sumValues = obj => Object.keys(this.bucket).length
    ? Object.values(obj).reduce((a: number, b: number) => a + b) : 0


  loadBucket() {
    const loadedBucket = localStorage.getItem('bucket');
    if (loadedBucket !== null) {
      this.bucket = JSON.parse(loadedBucket);
      this.countingBucket();
    }
  }

  countingBucket() {
    this.sumOfBucket = 0;
    this.totalInBucket = this.sumValues(this.bucket);
    for (const product in this.bucket) {
      for (const obj of PRODUCTS_LIST) {
        if ('' + product === obj.id + '') {
          this.sumOfBucket += obj.price * this.bucket[product];
        }
      }
    }
    this.sharedService.shared = this.bucket;
    this.sharedService.sumOfBucket = this.sumOfBucket;
  }

}
