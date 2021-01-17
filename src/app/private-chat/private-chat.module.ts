import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrivateChatPage } from './private-chat.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PrivateChatPageRoutingModule } from './private-chat-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PrivateChatPage }]),
    PrivateChatPageRoutingModule,
  ],
  declarations: [PrivateChatPage]
})
export class PrivateChatPageModule { }
