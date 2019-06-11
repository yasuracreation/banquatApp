import { Component, OnInit } from '@angular/core';
import { TransactionHandlerService } from '../services/transaction-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userDto:any
  constructor(private transactionHandler:TransactionHandlerService) {

   }

  ngOnInit() {
  }
  login(){
    const user = {
      "userName":"yasuracreation3",
      "password":"1234",
      "propertyId":12
    }
    this.transactionHandler.Login(user,()=>{}))

  }
}
