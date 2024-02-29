import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountFormService {

  showCreateAccount = false;

  setShowCreateAccount(value: boolean) {
    this.showCreateAccount = value;
  }

  getShowCreateAccount() {
    return this.showCreateAccount;
  }
}
