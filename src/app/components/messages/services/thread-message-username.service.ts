import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadMessageUsernameService {
  private selectedUsername = new ReplaySubject<string>();

  constructor() { }

  loadUsername(sender: string) {
      this.selectedUsername.next(sender);
  }

  getUsername() {
      return this.selectedUsername.asObservable();
  }
}
