import {Component, OnInit} from '@angular/core';
import { SharedService } from '../../../services/SharedService';
import { PRODUCTS_LIST } from '../../../shared/mock-data';

@Component({
  selector: 'app-bucket-page',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  productsList = PRODUCTS_LIST;
  bucket = {};
  bucketList = [];
  notEmpty = false;

  constructor(
    public sharedService: SharedService
  ) {}

  ngOnInit() {
    this.bucket = this.sharedService.shared;
    this.bucketConvert();
  }

  bucketConvert() {
    for (const item in this.bucket) {
      for (const product of this.productsList) {
        if ('' + item === product.id + '') {
          const listItem = {
            title: product.name,
            price: product.price,
            count: this.bucket[item],
            id: product.id
          };
          this.bucketList.push(listItem);
          this.notEmpty = true;
        }
      }
    }
  }

  changeCount(id, count) {
    if (count === 'null') {
      this.bucket[id] = undefined;
      this.bucket = JSON.parse(JSON.stringify(this.bucket));
      this.notEmpty = false;
    } else {
      this.bucket[id] = this.bucket[id] + count;
      this.sharedService.shared = this.bucket;
    }
    localStorage.setItem('bucket', JSON.stringify(this.bucket));
    this.bucketList = [];
    this.bucketConvert();
    this.sharedService.emitChange(this.bucket);
  }

}
