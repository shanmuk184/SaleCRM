import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public commonDrawerObjects: object;
  public menuItems: object;
  constructor(private router: Router) {
    this.commonDrawerObjects = [
      {
        id: 'profile',
        name: 'My Profile',
        icon: 'person'
      },
      {
        id: 'userGuide',
        name: 'User Guide',
        icon: 'book'
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: 'settings'
      },
      {
        id: 'aboutUs',
        name: 'About Us',
        icon: 'information-circle-outline'
      },
      {
        id: 'logout',
        name: 'Logout',
        icon: 'power'
      }
    ];

    this.menuItems = [
      {
        id: 'attendance',
        name: 'Attendance',
        icon: 'contacts',
        onclick: () => this.menuClickNavigate(this),
        redirectUrl: ''
      },
      {
        id: 'saleEntry',
        name: 'Sale Entry',
        icon: 'cart',
        onclick: (item)=>this.menuClickNavigate(item),
        redirectUrl: '/sale'
      },
      {
        id: 'saleReports',
        name: 'Sale Reports',
        icon: 'paper',
        onclick: (item) => this.menuClickNavigate(item),
        redirectUrl: ''
      },
      {
        id: 'inventoryCheck',
        name: 'Inventory Check',
        icon: 'trending-up',
        onclick: (item) => this.menuClickNavigate(item),
        redirectUrl: ''
      },
      {
        id: 'calendar',
        name: 'My Calendar',
        icon: 'calendar',
        onclick: (item) => this.menuClickNavigate(item),
        redirectUrl: ''
      },
      {
        id: 'approvals',
        name: 'Approvals',
        icon: 'clipboard',
        onclick: (item) => this.menuClickNavigate(item),
        redirectUrl: ''
      }
    ];
  }

  ngOnInit() {}
  // private me: any = this;
  menuClickNavigate(item) {
    switch (item.id) {
      case 'saleEntry':
        this.router.navigateByUrl(item.redirectUrl);
    }
  }
}
