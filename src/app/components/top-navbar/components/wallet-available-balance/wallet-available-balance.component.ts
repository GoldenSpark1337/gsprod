import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-wallet-available-balance',
  templateUrl: './wallet-available-balance.component.html',
  styleUrls: ['./wallet-available-balance.component.css']
})
export class WalletAvailableBalanceComponent implements OnInit {
  value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
