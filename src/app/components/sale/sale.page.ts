import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
  private productsearchtext:string;
  private products:Array<any>;
  constructor() { 
    this.products = [
      {
        
    }];   
  }

  ngOnInit() {
  }
  onProductSearchChange(event){
    this.productsearchtext = event.detail.value;
    console.log(this.productsearchtext)
  }
}
