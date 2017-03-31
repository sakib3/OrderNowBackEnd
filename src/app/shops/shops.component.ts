import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { WebService } from '../web.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})

export class ShopsComponent implements OnInit {
  private shop: any = null;

  constructor(
    public router: Router,
    public http: Http,
    private webService: WebService) { }

  ngOnInit() {
    this.webService.getShop()
      .subscribe(
      shop => { console.log(shop); this.shop = shop },
      err => console.error(err));

  }
  onSubmit() {
    console.log(this.shop);
  }
  do() {
    this.webService.getLocationName(this.shop.location.coordinates[0], this.shop.location.coordinates[1])
      .subscribe(
      data => console.log(data),
      err => console.error(err));
  }
  viewProduct(productId) {
    this.router.navigate(['products'], {queryParams: {shopId: this.shop.id, productId: productId}});
    //this.router.navigate()
    //  this.webService.getProduct("macGuid", productId)
    //   .subscribe(
    //   product => { console.log(product); this.product = product },
    //   err => console.error(err));
  }
}


