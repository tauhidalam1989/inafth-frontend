import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { WhatsappMessagesComponent } from './components/whatsapp-messages/whatsapp-messages.component';
import { WhatsappTemplatesComponent } from './components/whatsapp-templates/whatsapp-templates.component';

const routes: Routes = [
  { path: '', component: WhatsappMessagesComponent },
  { path: 'whatsapp-messages', component: WhatsappMessagesComponent },
  { path: 'whatsapp-templates', component: WhatsappTemplatesComponent }
];

@NgModule({
  declarations: [
    WhatsappMessagesComponent,
    WhatsappTemplatesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WhatsappModule { }
