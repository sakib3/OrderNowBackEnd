import { OnDestroy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { WebService } from '../web.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  private routeParamsSubscription: Subscription;
  private product: any = null;
  constructor(
    public router: Router,
    public http: Http,
    private route: ActivatedRoute,
    private webService: WebService) { }

  ngOnInit() {
    this.routeParamsSubscription = this.route.queryParams.subscribe(params => {
      let shopId = params['shopId'];
      let productId = params['productId'];
      this.webService.getProduct(shopId, productId)
      .subscribe(
        product => { 
          console.log(product); 
          this.product = product; 
        },
        err => console.error(err));
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
  }

  goBack() {

  }
}
