import { Inject, Injectable,EventEmitter } from '@angular/core';
import { SESSION_STORAGE, StorageService, WebStorageService } from 'angular-webstorage-service';

import { LocalStorage } from '@ngx-pwa/local-storage';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MasterstorageService {
  public autunticateTiket:any;
  servicedisconnected = new EventEmitter();
   _userActionOccured: Subject<void> = new Subject();
   get userActionOccured(): Observable<void> { return this._userActionOccured.asObservable() };
   constructor(private localstorage: LocalStorage,@Inject(SESSION_STORAGE) private storage: WebStorageService) { }
   public setAutonticateTiket(key: string) {
     this.localstorage.setItem('autunticateTiket', key).subscribe((values) => {
       console.log(values);
 
       this.autunticateTiket = key;
     });
     // this.autonticateTiket = key;
     // localStorage.set("autunticateTiket",key);
   }
   setAuthKey(key){
     this.storage.set('authkey',key);
   }
   getAuthKey(){
    return this.storage.get('authkey');
   }
   setUserDetails(details){
     this.storage.set('user',details);
   }
   getUserDetails(){
    return this.storage.get('user');
   }
 
 
   setSystemDate(details){
     this.storage.set('systemdate',details);
   }
   getSystemDate(){
    return this.storage.get('systemdate');
   }
 
   public getAutonticateTiket() {
     let autunticateTiket
     return this.localstorage.getItem('autunticateTiket')
     // let autunticateTiket = localStorage.getItem("autunticateTiket");
 
   }
   public setTokenExpiteTime(key: string){
     // this.localstorage.setItem('tokenExp', key).subscribe((values) => {
     //   console.log(values);
     // });
     this.storage.set('tokenExp',key);
   }
   public getTokenExpiteTime() {
     let autunticateTiket
     return this.storage.get('tokenExp')
     // let autunticateTiket = localStorage.getItem("autunticateTiket");
 
   }
   public validateAutonticateTiket(callback) {
     this.localstorage.getItem('autunticateTiket').subscribe((data) => {
       if (this.autunticateTiket) {
         callback(true);
       } else {
         callback(false);
       }
     });
   }
 
   public setContryData(contries) {
     this.localstorage.setItem('contries', contries).subscribe((values) => {
       console.log(values);
     });
   }
   public getContryData(callback) {
     this.localstorage.getItem('contries').subscribe((data) => {
       console.log(data); // null
       callback(data);
     });
     // let autunticateTiket = localStorage.getItem("autunticateTiket");
 
   }
 
   public setCityData(contries) {
     this.localstorage.setItem('cities', contries).subscribe((values) => {
       console.log(values);
     });
   }
   public getCityData(callback) {
     this.localstorage.getItem('cities').subscribe((data) => {
       console.log(data); // null
       callback(data);
     });
     // let autunticateTiket = localStorage.getItem("autunticateTiket");
 
   }
 
   public setVipStatus(vipStatues) {
     this.localstorage.setItem('vipStatues', vipStatues).subscribe((data) => {
       console.log(data);
     })
   }
   public getVipStatus(callback) {
     this.localstorage.getItem('vipStatues').subscribe((data) => {
       console.log(data); // null
       callback(data);
     });
     // let autunticateTiket = localStorage.getItem("autunticateTiket");
 
   }
 
 
   public setIdentityType(identityType) {
     this.localstorage.setItem('identityType', identityType).subscribe((data) => {
       console.log(data);
     })
   }
   public getIdentityType(callback) {
     this.localstorage.getItem('identityType').subscribe((data) => {
       console.log(data); // null
       callback(data);
     });
   }
   public setNationality(nationality) {
     this.localstorage.setItem('nationality', nationality).subscribe((data) => {
       console.log(data);
     })
   }
   public getNationality(callback) {
     this.localstorage.getItem('nationality').subscribe((data) => {
       console.log(data); // null
       callback(data);
     });
   }
 
   public setTitles(nationality) {
     this.localstorage.setItem('titles', nationality).subscribe((data) => {
       console.log(data);
     })
   }
   public getTitles(callback) {
     this.localstorage.getItem('titles').subscribe((data) => {
       console.log(data); // null
       callback(data);
     });
   }
 
 
   public setNMumberOfDatesRequest(numberofdates) {
     this.localstorage.setItem('numberofDates', numberofdates).subscribe((data) => {
       console.log(data);
     })
   }
   public getNMumberOfDatesRequest(callback) {
     this.localstorage.getItem('numberofDates').subscribe((data) => {
       console.log(data); // null
       callback(data);
     });
   }
   notifyUserAction() {
     this._userActionOccured.next();
   }
 
   loginUser() {
     console.log('user login');
   }
 
   logOutUser() {
     console.log('user logout');
     this.autunticateTiket = null;
     this.storage.remove('authkey');
     return this.localstorage.clear()
 
 
   }
   public serviceConnectionFailCheck(status){
     this.servicedisconnected.emit(status)
   }
 
 }
 