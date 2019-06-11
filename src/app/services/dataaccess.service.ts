import { Router } from '@angular/router';

import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { MasterstorageService } from './masterstorage.service';


@Injectable({
  providedIn: 'root'
})
export class DataaccessService {
  servicedisconnected = new EventEmitter();
  customersObservable;
  lastRequestTime;
  constructor(private httpClient: HttpClient,
    private masterstorage: MasterstorageService,
    private route: Router) {
    this.customersObservable = this.httpClient;
  }
  authenticate(resUrl, data) {
    // var username = data.credentials.username;
    // var password = data.credentials.password;
    this.masterstorage.getAutonticateTiket().subscribe((authonticateTiket: any) => {
      // var creds = "username=" + username + "&password=" + password;
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      headers = headers.set('authorization', "application/json");
      return this.httpClient
        .post(resUrl, data, {
          headers: headers
        })
    })

  }
  Auth(resUrl, params, acceptType, callback) {
    // var authorizationkey

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    headers = headers.set('Accept', "application/json");
    this.httpClient
      .post(resUrl, params, { headers })
      .subscribe(
      data => {
        callback(data);
        this.setLastRequestTime()
      },
      error => {
        callback(error);
        this.setLastRequestTime()
        
      }
      );
  }

  GET(resUrl, params, acceptType, callback) {
    var authorizationkey
    this.masterstorage.getAutonticateTiket().subscribe((authonticateTiket: any) => {
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      headers = headers.set('x-auth-token', authonticateTiket);
     
      
 
      this.customersObservable = this.httpClient.get(resUrl, { headers }).subscribe(
        data => {
          callback(data);
        this.setLastRequestTime()
          
        },
        error => {
          if (error.status == 401) {
            console.log(error);
            this.masterstorage.logOutUser().subscribe((response) => {
              console.log(response);
              this.route.navigateByUrl("login");
            })
          }else if(error.status == 0 || error.status == 4){
            this.servicedisconnected.emit(error);
          } else {
            callback(error);
          }
          
        }
      );

    })

  }

  POST(resUrl, params, acceptType, contentType, callback) {
    this.masterstorage.getAutonticateTiket().subscribe((authonticateTiket: any) => {
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      headers = headers.set('x-auth-token',authonticateTiket);
      this.httpClient
        .post(resUrl, params, { headers })
        .subscribe(
        data => {
          callback(data);
        this.setLastRequestTime()
          
        },
        error => {
          if (error.status == 401) {
            console.log(error);
            this.masterstorage.logOutUser().subscribe((response) => {
              console.log(response);
              this.route.navigateByUrl("login");
            })
          } else {
            callback(error);
          }
        }
        );
    })

  }

  PUT(resUrl, params, acceptType, contentType, callback) {
    this.masterstorage.getAutonticateTiket().subscribe((authonticateTiket: any) => {
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      headers = headers.set('x-auth-token', authonticateTiket);
      this.httpClient
        .put(resUrl, params, { headers })
        .subscribe(
        data => {
          callback(data);
        this.setLastRequestTime()
          
        },
        error => {
          if (error.status == 401) {
            console.log(error);
            this.masterstorage.logOutUser().subscribe((response) => {
              console.log(response);
              this.route.navigateByUrl("login");
            })
          } else {
            callback(error);
          }
        }
        );
    })

  }
  DELETE(resUrl, params, acceptType, contentType, callback) {
    this.masterstorage.getAutonticateTiket().subscribe((authonticateTiket: any) => {
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      headers = headers.set('x-auth-token', authonticateTiket);
      this.httpClient
        .delete(resUrl, {headers })
        .subscribe(
        data => {
          callback(data);
        this.setLastRequestTime()
          
        },
        error => {
          if (error.status == 401) {
            console.log(error);
            this.masterstorage.logOutUser().subscribe((response) => {
              console.log(response);
              this.route.navigateByUrl("login");
            })
          } else {
            callback(error);
          }
        }
        );
    })

  }
  DELETEMULTI(resUrl, params, acceptType, contentType, callback) {
    this.masterstorage.getAutonticateTiket().subscribe((authonticateTiket: any) => {
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      headers = headers.set('authorization', 'Bearer ' + authonticateTiket);
      this.httpClient
        .put(resUrl,params, { headers })
        .subscribe(
        data => {
          callback(data);
        this.setLastRequestTime()
          
        },
        error => {
          if (error.status == 401) {
            console.log(error);
            this.masterstorage.logOutUser().subscribe((response) => {
              console.log(response);
              this.route.navigateByUrl("login");
            })
          } else {
            callback(error);
          }
        }
        );
    })

  }
  UPLOADIMAGE(resUrl, params, acceptType, contentType, callback) {
    this.masterstorage.getAutonticateTiket().subscribe((authonticateTiket: any) => {
      let headers = new HttpHeaders();
      console.log(params);
      headers = headers.set('authorization', 'Bearer ' + authonticateTiket);
      this.httpClient
        .post(resUrl, params, { headers })
        .subscribe(
        data => {
          callback(data);
          this.setLastRequestTime()
          
        },
        error => {
          if (error.status == 401) {
            console.log(error);
            this.masterstorage.logOutUser().subscribe((response) => {
              console.log(response);
              this.route.navigateByUrl("login");
            })
          } else {
            callback(error);
          }
        }
        );
    })

  }
  setLastRequestTime(){
    let nowTime =  new Date();
    let requestExpireTime = this.masterstorage.getTokenExpiteTime();
    console.log(requestExpireTime);
    this.lastRequestTime = nowTime.getHours()+":"+nowTime.getMinutes()+":"+nowTime.getSeconds();

  }
}
