import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartData: any;
 

  constructor(private service: ProductService ) {}
 
 
  ngOnInit(): void {
    this.cartData = this.service.cart;
  }

    sortIncres() {
    this.cartData.sort((p1:any, p2:any) => {
        if (p1.name < p2.name) {
          return -1;
        }
        if (p1.name > p2.name) {
          return 1;
        }
        return 0;
    });
    }
    sortDesce() {
      this.cartData.sort((p1:any, p2:any) => {
        if (p1.name < p2.name) {
          return 1;
        }
        if (p1.name > p2.name) {
          return -1;
        }
        return 0;
    });
    }

    handleChange(value: string) {
      if(value == 'increase') {
        this.sortIncres();
      }else {
        this.sortDesce()
      }
    }




    handleChangeAmount(value: string) {
      console.log(value);
      let info:any = this.service.data.filter(function(obj:any){
        return obj.id < value
      });
      this.cartData = info;
      console.log(info);
    }

}
