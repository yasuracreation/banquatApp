import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  Host ="http://localhost:3000/api/"

  Authorization = this.Host+"auth";
  user = this.Host+"user"
  constructor() { 
  }

  public resources = {
    login:{
      login:this.Authorization
    },
    user:{
      getAll:this.user+"/all",
      getOne:this.user+"/one",
      createuser:this.user+"/create",
      updateuser:this.user+"/update",
      deleteuser:this.user+"/delete"
    },


  }
}
