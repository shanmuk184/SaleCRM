import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { LoadingController, NavController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  createGroupUrl: string;
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
  ) {
    this.createGroupUrl = '/api/group';
  }
 
  createGroup(createGroupObj) {
    let stdHeaders;
    stdHeaders = this.authService._initializeReqOpts(stdHeaders);
    stdHeaders.headers = this.authService._addStandardHeaders(
      stdHeaders.headers
    );
    return this.httpClient
      .post(
        `${this.authService.AUTH_SERVER_ADDRESS}${this.createGroupUrl}`,
        createGroupObj,
        stdHeaders
      );
  }
}
