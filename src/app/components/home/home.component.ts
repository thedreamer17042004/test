import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  value:any = '';
  constructor(private dataservice: ProductService) {
    this.search();
  }
  
  ngOnInit(): void {
   this.data = this.dataservice.getAllProduct();
  
  }


  handleClick(id:any) {
    let info:any = this.dataservice.data.filter(function(obj:any){
      return id == obj.categoryId
    });
    this.data = info;
  }

  handleAddtocart(id:any) {
      let info:any = this.dataservice.data.find((item: any) => {
        return item.id == id
      });
      if(this.dataservice.cart.includes(info)) {
        ++info.amount 
      }else {
        this.dataservice.cart.push(info);
      }
  }


  search() {
   let infox:any = this.dataservice.data.filter((obj:any) => {
    // return obj.name.toLowerCase().includes(name.toLowerCase());
    // console.log(name)
   });
   console.log(this.value);

  //  console.log(infox);

  }
  
  
}
