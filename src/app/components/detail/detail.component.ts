import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  dataDetail:any;
  constructor(private serv: ProductService, private route: ActivatedRoute) {
  
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    let id =  params.get('id');
    this.dataDetail = this.getProductById(id);
    });
  }


  getProductById(id:any) {
    let info:any = this.serv.data.find((item: any) => {
      return item.id == id
    });

   return info;

  }


}
