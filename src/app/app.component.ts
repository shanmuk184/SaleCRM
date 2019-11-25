import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  commonDrawerObjects:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthService,
    private router: Router
  ) {
    
    this.initializeApp();
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
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authenticationService.isloggedin.subscribe(state => {
        if (state) {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['/login']);
        }
      });
    });

  }
}
