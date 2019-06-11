import { Injectable } from '@angular/core';
import { DataaccessService } from './dataaccess.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionHandlerService {

  constructor(private dataAccess:DataaccessService,private resourceService:ResourcesService) { }
  
  //Authorization
  Login(request, callback){
    this.dataAccess.POST(this.resourceService.resources.user.createuser, request, "json", "json", (response) => {
      // console.log(response)
      callback(response);
    })
  }  
  
  //User 
    ReadAllUser(callback) {
      this.dataAccess.GET(this.resourceService.resources.user.getAll, null, "json", (response) => {
        callback(response);
      })
    }
   
    ReadUser(userid, callback) {
      this.dataAccess.GET(this.resourceService.resources.user.getOne + "/" + userid, null, "json", (response) => {
        callback(response);
      })
    }
  
    CreateUser(callback, userdto) {
      this.dataAccess.POST(this.resourceService.resources.user.createuser, userdto, "json", "json", (response) => {
        // console.log(response)
        callback(response);
      })
    }
    UpdateUser(callback, userdto, userid) {
      this.dataAccess.PUT(this.resourceService.resources.user.updateuser + "/" + userid, userdto, "json", "json", (response) => {
        // console.log(response)
        callback(response);
      })
    }
  
    DeleteUser(callback, userdto, userId) {
      this.dataAccess.DELETE(this.resourceService.resources.user.deleteuser + "/" + userId, userdto, "json", "json", (response) => {
        // console.log(response)
        callback(response);
      })
    }
}
