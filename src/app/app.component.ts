import { Component, OnInit } from '@angular/core';
import { Extension, LCDClient, MnemonicKey, Wallet } from '@terra-money/terra.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  wallet!: Wallet;
  requestInfo: any;

  async connect() {
    const extension = new Extension();
    extension.connect();
    extension.on("connect", (w: Wallet) => {
      w = this.wallet
      console.log('***' + w);
    });

    console.log(extension.isAvailable);
    extension.request('connect').then(data => {
      this.requestInfo = data.payload;
      console.log(data.payload);
    });

  }
}
