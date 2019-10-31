import {
  Component,
  OnInit,
} from '@angular/core';
import { PRODUCTS_LIST } from '../../../shared/mock-data';
import { SharedService } from '../../../services/SharedService';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productsList = PRODUCTS_LIST;
  bucket = {};
  count = 1;

  constructor(
    public sharedService: SharedService
  ) {}

  ngOnInit() {
    this.bucket = this.sharedService.shared !== undefined ? this.sharedService.shared : this.bucket;
  }
  productCount(event, id) {
    this.count = event.target.value * 1;
  }


  addToBucket = (event, id) => {
    event.preventDefault();
    if (this.bucket && this.bucket[id]) {
      this.bucket[id] += this.count;
    } else {
      this.bucket[id] = this.count;
    }
    localStorage.setItem('bucket', JSON.stringify(this.bucket));
    this.sharedService.shared = this.bucket;
    this.sharedService.emitChange(this.bucket);
  }

}
