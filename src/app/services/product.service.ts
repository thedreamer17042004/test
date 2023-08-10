import { Injectable } from '@angular/core';
import * as productData from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cart:any = [];
  countCart:any = 1;
  data: any = [
    {
      "id": 1,
      "name": "Ao dai",
      "price": "100",
      "amount": 1,
      "img": "https://demo037064.web30s.vn/datafiles/33095/upload/images/product/speakers/bose-sport-earbuds-3.jpg?t=1690517170",
      "categoryId": 1
  },
  {
      "id": 2,
      "name": "Vay ngan",
      "price": "200",
      "amount": 1,
      "img": "https://demo037064.web30s.vn/datafiles/33095/upload/images/product/speakers/beats-by-dre-beats-solo-3-wireless-club-red-1.jpg?t=1690517165",
      "categoryId": 2
  },
  {
      "id": 3,
      "name": "Bo vest anm",
      "price": "500",
      "amount": 1,
      "img": "https://demo037064.web30s.vn/datafiles/33095/upload/images/product/speakers/bose-frames-soprano-3.jpg?t=1690517170",
      "categoryId": 3
  },
  {
      "id": 4,
      "name": "Do vest dep",
      "price": "600",
      "amount": 1,
      "img": "https://demo037064.web30s.vn/datafiles/33095/upload/images/product/speakers/bose-quietcomfort-earbuds-black-3.jpg?t=1690517171",
      "categoryId": 3
  }
]
  constructor() {
   }

   getAllProduct(){
    return this.data;
  }
}
