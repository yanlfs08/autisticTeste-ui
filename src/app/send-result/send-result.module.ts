import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendResultPageRoutingModule } from './send-result-routing.module';

import { SendResultPage } from './send-result.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendResultPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SendResultPage]
})
export class SendResultPageModule {}
